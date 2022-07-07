import { ITarefa } from "../../types/ITarefa";
import Item from "./Item";
import style from "./List.module.scss";

interface Props {
  tarefas: Array<ITarefa>;
  selecionaTarefa: (selecionaTarefa: ITarefa) => void;
}

export default function List({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do Dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item selecionaTarefa={selecionaTarefa} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}
