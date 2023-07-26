import { useState } from "react";
import Header from "../../Components/Header";
import AlbumApi from "../../Services/AlbumApi";
import Albums from "../../Components/Albums";
import SearchBar from "../../Components/SearchBar";
import { ContainerSearch } from "./style";

export default function HomePage() {
  const [album, setAlbum] = useState([]);

  function getAlbum(searchValue) {
    AlbumApi.getAlbum(searchValue)
      .then((res) => {
        setAlbum(res.data);
        console.log(res.data);
      })
      .catch((err) => alert(JSON.stringify(err.response.data)));
  }

  return (
    <>
      <Header />
      <ContainerSearch>
        <SearchBar getAlbum={getAlbum} />
        <Albums album={album} />
      </ContainerSearch>
    </>
  );
}
