import "./App.css";
import Header from "./Header";
import Post from "./Post";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./pages/CreatePost";
import UserPost from "./pages/UserPost";
import Edit from "./pages/Edit";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<UserPost />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
