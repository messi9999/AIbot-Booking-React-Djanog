import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ScheduleScreen from "./screens/ScheduleScreen";
import ChatScreen from "./screens/ChatScreen";
import NewsScreen from "./screens/NewsScreen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/schedule" element={<ScheduleScreen />} />
        <Route path="/chat" element={<ChatScreen />} />
        <Route path="/news" element={<NewsScreen />} />
      </Routes>
    </>
  );
}

export default App;
