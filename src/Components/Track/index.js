import { AddIcon, ContainerTrack, DeleteIcon } from "./style";

export default function Track({ body }) {
  function secondsToMinutes(duration) {
    const minutes = Math.floor(duration / 60);
    const remainingSecondes = (duration % 60).toString().padStart(2, "0");
    return minutes + ":" + remainingSecondes;
  }

  return (
    <ContainerTrack>
      <div>
        <h2>{body.number}</h2>
        <h2>{body.title}</h2>
      </div>
      <div>
        <h5>{secondsToMinutes(body.duration)}</h5>
        <AddIcon />
        <DeleteIcon />
      </div>
    </ContainerTrack>
  );
}
