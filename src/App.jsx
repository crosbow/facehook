import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import {
  CreatePost,
  EditPost,
  HomePage,
  LoginPage,
  ProfilePage,
  RegisterPage,
} from "./pages";
import PrivetRoute from "./routes/PrivetRoute";

function App() {
  return (
    <Routes>
      <Route element={<PrivetRoute />}>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/edit-post" element={<EditPost />} />
        </Route>
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
