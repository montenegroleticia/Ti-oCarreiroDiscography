import Track from "../Track";
import { ContainerAlbum } from "./style";

export default function Albums({ body }) {
  return (
    <>
      {body.length !== 0 ? (
        <ContainerAlbum>
          <h3>
            Álbum: {body.name}, {body.year}
          </h3>
          <section>
            <div>
              <h4>N°</h4>
              <h4>Faixa</h4>
            </div>
            <h4>Duração</h4>
          </section>
          {body.tracks &&
            body.tracks.map((track, index) => (
              <Track key={index} body={track} />
            ))}
        </ContainerAlbum>
      ) : (
        ""
      )}
    </>
  );
}
