import { ContainerTrack } from "./style";

export default function Track({ body }) {
  return (
    <ContainerTrack>
      <div>
        <h4>{body.number}</h4>
        <h4>{body.title}</h4>
      </div>
      <h5>{body.duration}</h5>
    </ContainerTrack>
  );
}
