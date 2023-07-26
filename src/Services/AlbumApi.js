import axios from "axios";
import createConfig from "../helpers";

function getAlbum(searchValue) {
  const promise = axios.get(
    `${process.env.REACT_APP_BASE_URL}/album?keyword=${searchValue}&limit=10&page=1`,
    createConfig()
  );
  return promise;
}

function postAlbum(body) {
  const promise = axios.post(
    `${process.env.REACT_APP_BASE_URL}/album`,
    body,
    createConfig()
  );
  return promise;
}

function deleteAlbum(id) {
  const promise = axios.delete(
    `${process.env.REACT_APP_BASE_URL}/album/${id}`,
    {},
    createConfig()
  );
  return promise;
}

const AlbumApi = { getAlbum, postAlbum, deleteAlbum };

export default AlbumApi;
