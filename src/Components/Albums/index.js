import Track from "../Track";
import { AddIcon, ContainerAlbum, DeleteIcon } from "./style";

export default function Albums({ body }) {
  return (
    <>
      {body.length !== 0 ? (
        <ContainerAlbum>
          <section>
            <h1>
              Álbum: {body.name}, {body.year}
            </h1>
            <div>
              <AddIcon />
              <DeleteIcon />
            </div>
          </section>
          <section>
            <div>
              <h2>N°</h2>
              <h2>Faixa</h2>
            </div>
            <h3>Duração</h3>
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
