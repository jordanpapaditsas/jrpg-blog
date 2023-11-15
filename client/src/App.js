import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import IndexPage from "./pages/index-page";
import LoginPage from "./pages/login-page";
import RegisterPage from "./pages/register-page";
import {UserContextProvider} from "./components/user-context";
import CreatePost from "./pages/create-post";
import PostPage from "./pages/post-page";
import EditPost from "./pages/edit-post";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element= {<Layout></Layout>}>
          <Route index element= {<IndexPage></IndexPage>} />
          <Route path='/login' element= {<LoginPage></LoginPage>} />
          <Route path='/register' element= {<RegisterPage></RegisterPage>} />
          <Route path='/create' element= {<CreatePost></CreatePost>} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
