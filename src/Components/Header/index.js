import { ContainerHeader } from "./style";
import Logo from "../../Assets/logo.png";

export default function Header() {
  return (
    <ContainerHeader>
      <img src={Logo} alt="Logo" />
      <h1>Discografia</h1>
    </ContainerHeader>
  );
}
