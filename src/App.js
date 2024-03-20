import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import AllPage from "./Components/allpage";

function App() {
  return (
    <div className="App">
        <Router path="/">
          <AllPage/>
        </Router>
    </div>
  );
}

export default App;
