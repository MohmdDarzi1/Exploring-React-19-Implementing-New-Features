import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import MessageCard from "./Components/Message/MessageCard";
import AddProduct from "./Components/product/AddProduct";
import Theme from "./Components/Theme/Theme";
import PostList from "./Components/Post/PostList";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Layout />
        <Routes>
          <Route path="/message" element={<MessageCard />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/theme" element={<Theme />} />
          <Route path="/posts" element={<PostList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
