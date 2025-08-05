import React from "react";
import styles from "./app.module.css";

const perguntas = [
  {
    pergunta: "Quem é o irmão mais velho de Will Byers?",
    options: ["Jonathan", "Steve", "Mike"],
    resposta: "Jonathan",
    id: "p1",
  },
  {
    pergunta: "Qual o nome do monstro da primeira temporada?",
    options: ["Mind Flayer", "Demogorgon", "Vecna"],
    resposta: "Demogorgon",
    id: "p2",
  },
  {
    pergunta:
      "Qual música salva Max de ser possuída por Vecna na 4ª temporada?",
    options: ["Running Up That Hill", "Every Breath You Take", "Sweet Dreams"],
    resposta: "Running Up That Hill",
    id: "p3",
  },
  {
    pergunta:
      "Qual o nome verdadeiro do Dr. Brenner, que cuida da Eleven no laboratório?",
    options: ["Martin", "Samuel", "Victor"],
    resposta: "Martin",
    id: "p4",
  },
  {
    pergunta: "Qual é o nome completo do Eddie, líder do Hellfire Club?",
    options: ["Eddie Munson", "Eddie Thompson", "Eddie Wheeler"],
    resposta: "Eddie Munson",
    id: "p5",
  },
];

const App = () => {
  const [contador, setContador] = React.useState(0);
  const [acertos, setAcertos] = React.useState(0);
  const [resposta, setResposta] = React.useState("");

  const pergunta = perguntas[contador];

  function handleChange({ target }) {
    setResposta(target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (resposta === pergunta.resposta) {
      setAcertos((prev) => prev + 1);
    }
    setContador((prev) => prev + 1);
  }

  return (
    <>
      <img src="/Stranger_Things_logo.png" alt="" />
      {contador < perguntas.length ? (
        <form onSubmit={handleSubmit}>
          <p>{pergunta.pergunta}</p>
          {pergunta.options.map((alternativa) => {
            return (
              <label key={alternativa}>
                <input
                  name="pergunta"
                  type="radio"
                  onChange={handleChange}
                  checked={resposta === alternativa}
                  value={alternativa}
                  required
                />
                {alternativa}
              </label>
            );
          })}
          <button type="submit">Próxima</button>
        </form>
      ) : (
        <p>
          Você acertou {acertos} de {perguntas.length}
        </p>
      )}
    </>
  );
};

export default App;
