import React from "react";
import { airlines, airports} from "../data";
import {  useDispatch } from "react-redux";
import { clearFilters, setAirline, setAirport } from "../features/filterBySlice";

const OptionLine = ({value, name}) => {
  return (
    <option value={value}>{name}</option>
  )
}

const Select = () => {
  const dispatch = useDispatch()
  return (
    <form>
      <p>
      Show routes on 
        <select id="select-airline" onChange={(e) => {dispatch(setAirline(e.target.value))} }>
          <option value="">All Airlines</option>
          {airlines.map((airline) => <OptionLine key={airline.id} value={airline.id} name={airline.name} />)}
        </select>
      flying in or out of <br/>
        <select id="select-airport"  onChange={(e) => dispatch(setAirport(e.target.value))}>
          <option value="" >All Airports</option>
          {airports.map((airport) => 
            <OptionLine key={airport.code} value={airport.code} name={airport.name} />
          )}
        </select>
      <button onClick={(e) => { 
        e.preventDefault()
        const form = e.target.parentElement.parentElement;
        dispatch(clearFilters())
        form.reset()     
        }}>Show All Routes</button>
      </p>
    </form>
    
    
  )
}

export default Select