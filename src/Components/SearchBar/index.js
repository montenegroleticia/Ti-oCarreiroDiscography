import { ContainerSearchBar } from "./style";

export default function SearchBar() {
  return (
    <ContainerSearchBar>
      <h4>Digite uma palavra chave</h4>
      <form>
        <div>
          <input placeholder="O que você quer achar?" />
        </div>
        <button type="submit">Procurar</button>
      </form>
    </ContainerSearchBar>
  );
}
