import {  getAirlineById, getAirportByCode } from "../data"
import React from "react"
import { useSelector } from "react-redux"

const Table = ({ columns, avalibleRoutes}) => {
  const perPage = useSelector((state) => state.page.increment)
  const rows = useSelector((state) => state.page.rangeStart)

  if (!avalibleRoutes.length) {
    return (
      <p>No Matching Routes</p>
    )
  }
  
  return(
    <table className="routes-table">
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
          {avalibleRoutes.slice(rows - 1, rows + perPage - 1).map((r, i) => {
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