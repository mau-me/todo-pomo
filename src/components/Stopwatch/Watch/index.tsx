import style from "./Watch.module.scss";

interface Props {
  tempo: number | undefined;
}

export default function Watch({ tempo = 0 }: Props) {
  const minutos = Math.floor(tempo / 60)
    .toString()
    .padStart(2, "0");
  const segundos = (tempo % 60).toString().padStart(2, "0");

  return (
    <>
      <span className={style.relogioNumero}>{minutos[0]}</span>
      <span className={style.relogioNumero}>{minutos[1]}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{segundos[0]}</span>
      <span className={style.relogioNumero}>{segundos[0]}</span>
    </>
  );
}
