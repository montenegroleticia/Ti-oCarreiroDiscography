import { ContainerHeader } from "./style";
import Logo from "../../Assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <ContainerHeader>
      <img src={Logo} alt="Logo" onClick={() => navigate(`/`)} />
      <h1 onClick={() => navigate(`/`)}>Discografia</h1>
    </ContainerHeader>
  );
}
