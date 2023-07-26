import { ContainerTrack } from "./style";

export default function Track({ body }) {
  function secondsToMinutes(duration) {
    const minutes = Math.floor(duration / 60);
    const remainingSecondes = (duration % 60).toString().padStart(2, "0");
    return minutes + ":" + remainingSecondes;
  }

  return (
    <ContainerTrack>
      <div>
        <h4>{body.number}</h4>
        <h4>{body.title}</h4>
      </div>
      <h5>{secondsToMinutes(body.duration)}</h5>
    </ContainerTrack>
  );
}
