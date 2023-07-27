import Track from "../Track";
import { AddFileIcon, AddIcon, ContainerAlbum, DeleteIcon } from "./style";
import { useNavigate } from "react-router-dom";

export default function Albums({ body }) {
  const navigate = useNavigate();

  return (
    <>
      {body.length !== 0 ? (
        <ContainerAlbum>
          <section>
            <h1>
              Álbum: {body.name}, {body.year}
            </h1>
            <div>
              <AddIcon
                onClick={() => navigate(`/addAlbum`)}
                title="Adicionar Álbum"
              />
              <AddFileIcon
                onClick={() => navigate(`/addTrack/${body.id}`)}
                title="Adicionar Faixa"
              />
              <DeleteIcon title="Deletar Álbum" />
            </div>
          </section>
          {body.tracks && body.tracks.length > 0 ? (
            <section>
              <div>
                <h2>N°</h2>
                <h2>Faixa</h2>
              </div>
              <h3>Duração</h3>
            </section>
          ) : (
            <h2>Nenhuma faixa encontrada</h2>
          )}
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
