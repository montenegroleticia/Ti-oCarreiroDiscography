import { useState } from "react";
import Header from "../../Components/Header";
import { ContainerAdd } from "./style";
import { useParams } from "react-router-dom";
import TrackApi from "../../Services/TrackApi";
import { useNavigate } from "react-router-dom";

export default function AddTrack() {
  const [form, setForm] = useState({ number: "", title: "", duration: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  function handleForm(e) {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { number, title, duration } = form;

    const body = {
      album_id: id,
      number,
      title,
      duration,
    };

    TrackApi.postTrack(body)
      .then((res) => {
        alert("Faixa adicionada com sucesso!");
        navigate(`/`);
      })
      .catch((err) => alert(JSON.stringify(err.response)));
  }

  return (
    <>
      <Header />
      <ContainerAdd>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Qual o número da faixa?"
            type="number"
            min="0"
            name="number"
            value={form.number}
            onChange={handleForm}
            required
          />
          <input
            placeholder="Qual o nome da faixa?"
            type="text"
            name="title"
            value={form.title}
            onChange={handleForm}
            required
          />
          <input
            placeholder="Qual a duração da faixa em segundos?"
            type="number"
            min="0"
            name="duration"
            value={form.duration}
            onChange={handleForm}
            required
          />
          <button type="submit">Adicionar</button>
        </form>
      </ContainerAdd>
    </>
  );
}
