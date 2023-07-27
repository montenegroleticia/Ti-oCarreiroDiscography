import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AddAlbum from "./Pages/AddAlbum";
import AddTrack from "./Pages/AddTrack";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/addAlbum" element={<AddAlbum />}></Route>
      <Route path="/addTrack/:id" element={<AddTrack />}></Route>
    </Routes>
  );
}

export default App;
