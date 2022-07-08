import Button from "../Button";
import Watch from "./Watch";
import style from "./Stopwatch.module.scss";
import { horarioEmSegundos } from "../../common/utils/date-time";
import { ITarefa } from "../../types/ITarefa";
import { useEffect, useState } from "react";

interface Props {
  selecionado: ITarefa | undefined;
}

export default function Stopwatch({ selecionado }: Props) {
  const [tempo, setTempo] = useState<number>();
  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(horarioEmSegundos(selecionado.tempo));
    }
  }, [selecionado]);
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Watch tempo={tempo} />
      </div>
      <Button>Começar</Button>
    </div>
  );
}
