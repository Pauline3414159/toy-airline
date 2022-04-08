import React, { Component } from 'react';
import { useState } from 'react';
import './App.css';
import { routes, getAirlineById, getAirportByCode } from './data.js'
import Table from './components/Table';
import Pagination from './components/PaginationNav';

const App = () => {
  const columns = [
    {name: 'Airline', property: 'airline'},
    {name: 'Source Airport', property: 'src'},
    {name: 'Destination Airport', property: 'dest'},
  ];

  const [rangeStart, setRangeStart] = useState(1)
  const [increment, setIncrement] = useState(25)

  const nextPage = () => {
    setRangeStart(rangeStart + increment)
  }

  const prevPage = () => {
    setRangeStart(rangeStart - increment)
  }

  const disablePrev = () => {
    return rangeStart - increment < 1
  }

  const disableNext = () => {
    return rangeStart + increment > routes.length
  }

  return(
  <div className="app">
  <header className="header">
    <h1 className="title">Airline Routes</h1>
  </header>
  <section>
    <p>
      Welcome to the app!
    </p>
    <Table className="routes-table" columns={columns} rows={rangeStart} format="" perPage={increment}/>
    <Pagination 
      total={routes.length} 
      range={rangeStart} 
      next={nextPage} 
      prev={prevPage} 
      disableNext={disableNext}
      disablePrev={disablePrev}
    />
  </section>
</div>
)}

export default App;