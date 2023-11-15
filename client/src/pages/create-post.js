import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {useState} from "react";
import {Navigate} from "react-router-dom";

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(event) {
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);
    event.preventDefault();

    const response = await fetch('http://localhost:4000/post', {
      method: 'POST',
      body: data, 
      credentials: 'include',
    });
    if (response.ok) {
      setRedirect(true);
    } else {

    }
  }

  if (redirect) {
    return <Navigate to={'/'}></Navigate>
  }

  return (
    <form onSubmit={createNewPost}>
      <input type="title" placeholder={'Title'} value={title} onChange={event => setTitle(event.target.value)} />
      <input type="summary" placeholder={'Summary'} value={summary} onChange={event => setSummary(event.target.value)} />
      <input type="file" onChange={event => setFiles(event.target.files)}/>
      <ReactQuill value={content} onChange={newValue => setContent(newValue)}></ReactQuill>
      <button style={{marginTop:'5px'}}>Create Post</button>
    </form>
  );
}




