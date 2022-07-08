import { ITarefa } from "../../../types/ITarefa";
import style from "./Item.module.scss";

interface Props extends ITarefa {
  selecionaTarefa: (selecionaTarefa: ITarefa) => void;
}

export default function Item({
  tarefa,
  tempo,
  completado,
  selecionado,
  id,
  selecionaTarefa,
}: Props) {
  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ""} ${
        completado ? style.itemCompletado : ""
      }`}
      onClick={() => {
        !completado &&
          !selecionado &&
          selecionaTarefa({ tarefa, tempo, completado, selecionado, id });
      }}
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completado && (
        <span className={style.concluido} aria-label="Tarefa Completada"></span>
      )}
    </li>
  );
}
