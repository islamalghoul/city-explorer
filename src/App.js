import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import Weather from './Weather'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Weather/>
        <Footer/>
      </div>
    )
  }
}

export default App