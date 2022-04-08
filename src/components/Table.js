import { routes, getAirlineById, getAirportByCode } from "../data"
import React from "react"

const Table = ({format, columns, rows ,perPage}) => {
  return(
    <table>
      <thead>
        <tr>
          {columns.map((c) => {
            return(
            <td key={c.property}>{c.name}</td>
            )
          })}
        </tr>
      </thead>
      <tbody>
          {routes.slice(rows - 1, rows + perPage - 1).map((r, i) => {
            return (
            <tr key={i}>
            <td>{getAirlineById(r.airline)}</td>
            <td>{getAirportByCode(r.src)}</td>
            <td>{getAirportByCode(r.dest)}</td>
          </tr>)
          })}
      </tbody>
    </table>
  )
}

export default Table