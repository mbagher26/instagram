import './App.css';
import Sidbar from './components/sidebar/Sidebar';
import React from "react";
import { useRoutes } from 'react-router-dom';
import routes from './routes';

function App() {

  let Router = useRoutes(routes);

  return (
    <div className="App">
      <Sidbar />
      {Router}
    </div>
  );

}

export default App;
