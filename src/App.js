import React, { Component } from 'react';
import './App.css';
import { routes } from './data.js'
import { useSelector, useDispatch } from 'react-redux';
import Table from './components/Table';
import Pagination from './components/PaginationNav';
import Select from './components/Selection';

const App = () => {
  const columns = [
    {name: 'Airline', property: 'airline'},
    {name: 'Source Airport', property: 'src'},
    {name: 'Destination Airport', property: 'dest'},
  ];

  const airlineFilter = useSelector((state) => state.filter.airline)

  const routesByAirline = () => {
    if (!airlineFilter) {
      return routes
    }
    return routes.filter((r) => r.airline === Number(airlineFilter))
  }

  return(
  <div className="app">
  <header className="header">
    <h1 className="title">Airline Routes</h1>
  </header>
  <section>
    <Select/>
    <Table className="routes-table" columns={columns} avalibleRoutes={routesByAirline()}/>
    <Pagination 
      total={routesByAirline().length} 
    />
  </section>
</div>
)}

export default App;