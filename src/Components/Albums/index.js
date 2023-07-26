import Track from "../Track";
import { ContainerAlbum } from "./style";

export default function Albums({ album }) {
  return (
    <>
      {album !== "" ? (
        <ContainerAlbum>
          <h3>
            Álbum: {album.data[0].name}, {album.data[0].year}
          </h3>
          <section>
            <div>
              <h4>N°</h4>
              <h4>Faixa</h4>
            </div>
            <h4>Duração</h4>
          </section>
          {album.data[0].tracks &&
            album.data[0].tracks.map((track, index) => (
              <Track key={index} body={track} />
            ))}
        </ContainerAlbum>
      ) : (
        ""
      )}
    </>
  );
}
