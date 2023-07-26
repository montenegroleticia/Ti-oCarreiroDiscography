import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AddAlbum from "./Pages/AddAlbum";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/addAlbum" element={<AddAlbum/>}></Route>
    </Routes>
  );
}

export default App;
