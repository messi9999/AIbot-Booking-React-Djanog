import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ScheduleScreen from "./screens/ScheduleScreen";
import ChatScreen from "./screens/ChatScreen";
import NewsScreen from "./screens/NewsScreen";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/schedule" element={<ScheduleScreen />} />
        <Route path="/chat" element={<ChatScreen />} />
        <Route path="/news" element={<NewsScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
