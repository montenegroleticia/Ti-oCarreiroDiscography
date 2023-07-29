import AlbumApi from "../../Services/AlbumApi";
import Track from "../Track";
import { AddFileIcon, ContainerAlbum, DeleteIcon } from "./style";
import { useNavigate } from "react-router-dom";

export default function Albums({ body }) {
  const navigate = useNavigate();

  function deleteAlbum(id) {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja deletar esse álbum?"
    );

    if (confirmDelete) {
      AlbumApi.deleteAlbum(id)
        .then((res) => {
          alert("Álbum deletado");
          window.location.reload();
        })
        .catch(() =>
          alert("Não foi possível deletar o álbum. Por favor, tente novamente!")
        );
    }
  }

  return (
    <>
      {body.length !== 0 ? (
        <ContainerAlbum>
          <section>
            <h1>
              <a
                href="https://g.co/kgs/AHnmeZ"
                target="_blank"
                rel="noreferrer noopener"
              >
                Álbum: {body.name}, {body.year}
              </a>
            </h1>
            <div>
              <AddFileIcon
                onClick={() => navigate(`/addTrack/${body.id}`)}
                title="Adicionar Faixa"
              />
              <DeleteIcon
                onClick={() => deleteAlbum(body.id)}
                title="Deletar Álbum"
              />
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
