import React, { useState } from "react";
import { ITarefa } from "../../types/ITarefa";
import Button from "../Button";
import style from "./Form.module.scss";
import { v4 as uuidv4 } from "uuid";

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

function Form({ setTarefas }: Props) {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00:00");
  function adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const novaTarefa = {
      tarefa,
      tempo,
      selecionado: false,
      completado: false,
      id: uuidv4(),
    };

    setTarefas((stateAntigo) => [...stateAntigo, novaTarefa]);
    setTarefa("");
    setTempo("00:00:00");
  }

  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={tarefa}
          onChange={(event) => {
            setTarefa(event.target.value);
          }}
          placeholder="O que você quer estudar?"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          value={tempo}
          onChange={(event) => {
            setTempo(event.target.value);
          }}
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>

      <Button type="submit">Adicionar</Button>
    </form>
  );
}
// class Form extends React.Component<{
//   setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
// }> {
//   state = {
//     tarefa: "",
//     tempo: "00:00:00",
//   };
//   render(): React.ReactNode {
//     return (
//       <form
//         className={style.novaTarefa}
//         onSubmit={this.adicionarTarefa.bind(this)}
//       >
//         <div className={style.inputContainer}>
//           <label htmlFor="tarefa">Adicione um novo estudo</label>
//           <input
//             type="text"
//             name="tarefa"
//             id="tarefa"
//             value={this.state.tarefa}
//             onChange={(event) => {
//               this.setState({ ...this.state, tarefa: event.target.value });
//             }}
//             placeholder="O que você quer estudar?"
//             required
//           />
//         </div>
//         <div className={style.inputContainer}>
//           <label htmlFor="tempo">Tempo</label>
//           <input
//             type="time"
//             step="1"
//             name="tempo"
//             id="tempo"
//             value={this.state.tempo}
//             onChange={(event) => {
//               this.setState({ ...this.state, tempo: event.target.value });
//             }}
//             min="00:00:00"
//             max="01:30:00"
//             required
//           />
//         </div>

//         <Button type="submit">Adicionar</Button>
//       </form>
//     );
//   }

//   adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     const setTarefas = this.props.setTarefas;
//     const novaTarefa = {
//       ...this.state,
//       selecionado: false,
//       completado: false,
//       id: uuidv4(),
//     };

//     setTarefas((stateAntigo) => [...stateAntigo, novaTarefa]);
//     this.setState({ tarefa: "", tempo: "00:00:00" });
//   }
// }

export default Form;
