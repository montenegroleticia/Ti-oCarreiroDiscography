import Track from "../Track";
import { ContainerAlbum } from "./style";

export default function Album() {
  return (
    <ContainerAlbum>
      <h3>Álbum: </h3>
      <section>
        <div>
          <h4>N°</h4>
          <h4>Faixa</h4>
        </div>
        <h4>Duração</h4>
      </section>
      <Track />
    </ContainerAlbum>
  );
}
