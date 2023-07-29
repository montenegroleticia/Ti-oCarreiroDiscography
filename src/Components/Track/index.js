import TrackApi from "../../Services/TrackApi";
import { ContainerTrack, DeleteIcon } from "./style";

export default function Track({ body }) {
  function secondsToMinutes(duration) {
    const minutes = Math.floor(duration / 60);
    const remainingSecondes = (duration % 60).toString().padStart(2, "0");
    return minutes + ":" + remainingSecondes;
  }

  function deleteTrack(id) {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja deletar essa faixa?"
    );

    if (confirmDelete) {
      TrackApi.deleteTrack(id)
        .then((res) => {
          alert("Faixa deletada!");
          window.location.reload();
        })
        .catch(() =>
          alert("Não foi possível deletar a faixa. Por favor, tente novamente!")
        );
    }
  }

  return (
    <ContainerTrack>
      <div>
        <h2>{body.number}</h2>
        <a
          href="https://g.co/kgs/AHnmeZ"
          target="_blank"
          rel="noreferrer noopener"
        >
          <h2>{body.title}</h2>
        </a>
      </div>
      <div>
        <h5>{secondsToMinutes(body.duration)}</h5>
        <DeleteIcon
          onClick={() => deleteTrack(body.id)}
          title="Deletar Faixa"
        />
      </div>
    </ContainerTrack>
  );
}
