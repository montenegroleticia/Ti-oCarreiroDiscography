import { useState } from "react";
import Header from "../../Components/Header";
import AlbumApi from "../../Services/AlbumApi";
import { ContainerAdd } from "./style";
import { useNavigate } from "react-router-dom";

export default function AddAlbum() {
  const [form, setForm] = useState({ name: "", year: "" });
  const navigate = useNavigate();

  function handleForm(e) {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    AlbumApi.postAlbum(form)
      .then((res) => {
        alert("Álbum adicionado com sucesso!");
        navigate(`/`);
      })
      .catch((err) => alert(JSON.stringify(err.response.data)));
  }

  return (
    <>
      <Header />
      <ContainerAdd>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Qual o nome do álbum?"
            type="text"
            name="name"
            value={form.name}
            onChange={handleForm}
            required
          />
          <input
            placeholder="Qual o ano do álbum?"
            type="number"
            min="0"
            name="year"
            value={form.year}
            onChange={handleForm}
            required
          />
          <button type="submit">Adicionar</button>
        </form>
      </ContainerAdd>
    </>
  );
}
