import React from 'react';
import Utama2 from './List/Daftar'
import {Link} from 'react-router-dom';


class App extends React.Component {
  render() {
    return(
      <div> <hr />
      <Link to="/list" className="nav-link">List</Link> 
      <a className="nav-link" href="List">List<span className="sr-only"></span></a>
      <p><Utama2 /></p>
      </div>
    )
  }
}

export default App;