import React from 'react';
import './App.css';
import { routes } from './data.js'
import { useSelector} from 'react-redux';
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
  const airportFilter = useSelector((state) => state.filter.airport)

  const filteredRoutes = () => {
    switch (true) {
      case (!airlineFilter && !airportFilter):
        return routes
      case (airlineFilter && !airportFilter):
        return routes.filter((r) => r.airline === Number(airlineFilter));
      case (airportFilter && !airlineFilter):
        return routes.filter((r) => {
          return r.src === airportFilter || r.dest === airportFilter;
        })
      default:
          return routes.filter((r) => r.airline === Number(airlineFilter) && (r.src === airportFilter || r.dest === airportFilter));
    }
  }

  return(
  <div className="app">
  <header className="header">
    <h1 className="title">Airline Routes</h1>
  </header>
  <section>
    <Select/>
    <Table className="routes-table" columns={columns} avalibleRoutes={filteredRoutes()}/>
    <Pagination 
      total={filteredRoutes().length} 
    />
  </section>
</div>
)}

export default App;