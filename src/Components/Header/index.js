import { ContainerHeader } from "./style";
import Logo from "../../Assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <ContainerHeader>
      <img
        src={Logo}
        alt="Logo"
        onClick={() => navigate(`/`)}
        title="Ir para a página inicial?"
      />
      <h1 onClick={() => navigate(`/`)} title="Ir para a página inicial?">
        Discografia
      </h1>
    </ContainerHeader>
  );
}
