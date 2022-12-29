import { useContext } from "react"
import {formatDistanceToNow} from 'date-fns'
import { CyclesContext } from "../../contexts/CyclesContext"
import { HistoryContainer, HistoryList, Status } from "./styles"
import ptBR from 'date-fns/locale/pt-BR'

export function History() {

  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>

      <h1>Meu Histórico </h1>
      <HistoryList>

        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map(cycles => {
              return (
                <tr key={cycles.id} >
                  <td>{cycles.task}</td>
                  <td>{cycles.minutesAmount} Minutos </td>
                  <td>{formatDistanceToNow(new Date (cycles.startDate),{
                    addSuffix: true,
                    locale: ptBR,
                  } )} </td>
                  <td>
                    {cycles.finishedDate && (
                      <Status statusColor="green"> Concluido</Status>)}

                    {cycles.interruptedDate && (
                      <Status statusColor="red"> Interrompido</Status>)}

                    {!cycles.finishedDate && !cycles.interruptedDate && (
                      <Status statusColor="yellow"> Em Andamento</Status>)}
                  </td>
                </tr>
              )
            })}
          </tbody>

        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
