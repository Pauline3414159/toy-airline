import React, { Component } from 'react';
import './App.css';
import { routes, getAirlineById, getAirportByCode } from './data.js'

const App = () => (
  <div className="app">
  <header className="header">
    <h1 className="title">Airline Routes</h1>
  </header>
  <section>
    <p>
      Welcome to the app!
    </p>
    <table>
      <thead>
        <tr>
          <td>Airline</td>
          <td>Source</td>
          <td>Destination</td>
        </tr>
      </thead>
      <tbody>
        { routes.map((r,i) => {
          return (
            <tr key={i}>
              <td>{getAirlineById(r.airline)}</td>
              <td>{getAirportByCode(r.src)}</td>
              <td>{getAirportByCode(r.dest)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </section>
</div>
)

export default App;