import { useEffect, useState } from "react";
import Header from "../../Components/Header";
import AlbumApi from "../../Services/AlbumApi";
import Albums from "../../Components/Albums";
import SearchBar from "../../Components/SearchBar";
import { ContainerSearch } from "./style";

export default function HomePage() {
  const [album, setAlbum] = useState([]);

  function getAlbum(searchValue) {
    AlbumApi.getAlbum(searchValue)
      .then((res) => setAlbum(res.data))
      .catch((err) => alert(JSON.stringify(err.response.data)));
  }

  useEffect(() => getAlbum(""), []);

  return (
    <>
      <Header />
      <ContainerSearch>
        <SearchBar getAlbum={getAlbum} />
        {album.length !== 0
          ? album.data.map((album, index) => (
              <Albums key={index} body={album} />
            ))
          : ""}
      </ContainerSearch>
    </>
  );
}
