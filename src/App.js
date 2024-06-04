import { useState } from "react";
import Header from "./Components/Header";
import Nav from "./Components/Nav";

function App() {
  const [search, setSearch]= useState('')
  return (
    <div className="App">

      <Header title="Social Media App"/>
      <Nav 
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
}

export default App;
