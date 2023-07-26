import axios from "axios";
import createConfig from "../helpers";

function postTrack(body) {
  const promise = axios.post(
    `${process.env.REACT_APP_BASE_URL}/track`,
    body,
    createConfig()
  );
  return promise;
}

function deleteTrack(id) {
  const promise = axios.delete(
    `${process.env.REACT_APP_BASE_URL}/track/${id}`,
    {},
    createConfig()
  );
  return promise;
}

const TrackApi = { postTrack, deleteTrack };

export default TrackApi;
