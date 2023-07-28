import { useState } from "react";
import { ContainerSearchBar } from "./style";

export default function SearchBar({ getAlbum }) {
  const [searchValue, setSearchValue] = useState("");

  function handleInputChange(event) {
    setSearchValue(event.target.value);
  }

  function handleSerach(event) {
    event.preventDefault();
    getAlbum(searchValue);
  }

  return (
    <ContainerSearchBar>
      <h4>Digite uma palavra chave</h4>
      <form onSubmit={handleSerach}>
        <div>
          <input
            placeholder="Digite um álbum"
            value={searchValue}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Procurar</button>
      </form>
    </ContainerSearchBar>
  );
}
