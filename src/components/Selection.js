import React from "react";
import { airlines, airports} from "../data";

const OptionLine = ({value, name}) => {
  return (
    <option value={value}>{name}</option>
  )
}

const Select = () => {
  return (
    <p>
      Show routes on 
        <select>
        <option value="">All Airlines</option>
        {airlines.map((airline) => <OptionLine key={airline.id} value={airline.id} name={airline.name} />)}
      </select>
    flying in or out of <br/>
        <select>
          <option value="">All Airports</option>
          {airports.map((airport) => 
            <OptionLine key={airport.code} value={airport.code} name={airport.name} />
          )}
        </select>
      <button>Show All Routes</button>
    </p>
    
  )
}

export default Select