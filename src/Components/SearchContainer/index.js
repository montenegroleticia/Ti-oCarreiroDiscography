import SearchBar from "../SearchBar";
import Album from "../Album";
import { ContainerSearch } from "./style";

export default function SearchContainer() {
  return (
    <ContainerSearch>
      <SearchBar />
      <Album />
    </ContainerSearch>
  );
}
