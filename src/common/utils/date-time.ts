export function horarioEmSegundos(tempo: string) {
  const [horas = "0", minutos = "0", segundos = "0"] = tempo.split(":");

  const horasEmSegundos = parseInt(horas) * 3600 || 0;
  const minutosEmSegundos = parseInt(minutos) * 60 || 0;
  const segundosEmSegundos = parseInt(segundos) || 0;

  const tempoEmSegundos =
    horasEmSegundos + minutosEmSegundos + segundosEmSegundos;
  return tempoEmSegundos;
}
