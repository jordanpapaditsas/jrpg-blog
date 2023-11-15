const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require("mongoose");
const User = require('./models/User');
const Post = require('./models/Post');
const bcrypt = require('bcryptjs');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' });
const fs = require('fs');

const salt = bcrypt.genSaltSync(10);
const secret = 'someRandomString';

mongoose.connect(process.env.REACT_APP_MONGODB_URI)   

app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));

app.post('/register', async (req, res) => {
  const {username, password} = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }

  try {
    const userDoc = await User.create({username, password:bcrypt.hashSync(password, salt)});
    res.json(userDoc);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const userDoc = await User.findOne({ username });

    if (userDoc) {
      const passOk = bcrypt.compareSync(password, userDoc.password);

      if (passOk) {
        // logged in
        jwt.sign({ username, id: userDoc._id }, secret, {}, (error, token) => {
          if (error) throw error;
          res.cookie('token', token).json({
            id: userDoc._id,
            username,
          });
        });
      } else {
        res.status(400).json('Wrong credentials!');
      }
    } else {
      res.status(400).json('User not found!');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json('Internal Server Error');
  }
});

app.get('/profile', (req, res) => {
  const {token} = req.cookies;
  jwt.verify(token, secret, {}, (error, info) => {
    if (error) throw error;
    res.json(info);
  });
});

app.post('/logout', (req, res) => {
  res.cookie('token', '').json('ok');
});

app.post('/post', uploadMiddleware.single('file'), async (req, res) => {
  const {originalname, path} = req.file;
  const parts = originalname.split('.');
  const ext = parts[parts.length - 1];
  const newPath = path + '.' + ext;
  fs.renameSync(path, newPath);

  const {token} = req.cookies;
  jwt.verify(token, secret, {}, async (error, info) => {
    if (error) throw error;
    const {title, summary, content} = req.body;
    const postDoc = await Post.create({
      title,
      summary,
      content,
      cover:newPath,
      author: info.id
    });
    res.json(postDoc);
  });
});

app.get('/post', async (req, res) => {
  res.json(await Post.find().populate('author', ['username']).sort({createdAt: -1}).limit(20));
});

app.get('/post/:id', async (req, res) => {
  const {id} = req.params;
  const postDoc = await Post.findById(id).populate('author', ['username']);
  res.json(postDoc);
});

app.delete('/post/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Validating user that its the author with json token so it can get deleted
    const { token } = req.cookies;
    const decodedToken = jwt.verify(token, secret);

    // Check if the user is the author of the post
    const postDoc = await Post.findById(id);
    if (!postDoc) {
      return res.status(404).json({ error: 'Post not found.' });
    }

    if (postDoc.author.toString() !== decodedToken.id) {
      return res.status(403).json({ error: 'You do not have permission to delete this post.' });
    }

    // Delete the post
    await Post.findByIdAndDelete(id);

    res.json({ message: 'Post deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(4000);



