import React from 'react';
import {Header} from "./components/Header/Header";
import {AuctionsContainer} from "./containers/AuctionsContainer";

function App() {
  return (
    <div className="App">
      <Header/>
      <AuctionsContainer/>
    </div>
  );
}

export default App;
