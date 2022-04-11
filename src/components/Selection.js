import React from "react";
import { airlines, airports, airportsByAirline, airlinesByAirport} from "../data";
import {  useDispatch , useSelector} from "react-redux";
import { clearFilters, setAirline, setAirport } from "../features/filterBySlice";

const OptionLine = ({value, name, isDisabled}) => {
  return (
    <option value={value} disabled={isDisabled}>{name}</option>
  )
}

const Select = () => {
  const dispatch = useDispatch()
  const airlineFilter = useSelector((state) => state.filter.airline)
  const airportFilter = useSelector((state) => state.filter.airport)
  const isDisabledAirport = (airportCode) => {
    if (!airlineFilter) return false;
    const avalible = airportsByAirline[airlineFilter];
    return !avalible.includes(airportCode)
  }
  const isDisabledAirline = (airlineID) => {
    if (!airportFilter) return false;
    const avalible = airlinesByAirport[airportFilter];
    return !avalible.includes(airlineID)
  }

  return (
    <form>
      <p>
      Show routes on 
        <select id="select-airline" onChange={(e) => {dispatch(setAirline(e.target.value))} }>
          <option value="">All Airlines</option>
          {airlines.map((airline) => <OptionLine key={airline.id} value={airline.id} name={airline.name} isDisabled={isDisabledAirline(airline.id)}/>)}
        </select>
      flying in or out of <br/>
        <select id="select-airport"  onChange={(e) => dispatch(setAirport(e.target.value))}>
          <option value="" >All Airports</option>
          {airports.map((airport) => 
            <OptionLine key={airport.code} value={airport.code} name={airport.name} isDisabled={isDisabledAirport(airport.code)}/>
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