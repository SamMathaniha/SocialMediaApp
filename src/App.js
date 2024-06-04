import { useState } from "react";
import Header from "./Header";
import Nav from "./Nav";

function App() {
  const [posts, setPost] = useState([

    {
      id:1,
      title:"My first post",
      datatime: "Feb 20, 2024 12:01:01 AM",
      body:"Happy birthday Sam"
    },
    {
      id:2,
      title:"My 2nd post",
      datatime: "Feb 21, 2024 01:02:05 AM",
      body:"I'm Coding"
    },
    {
      id:3,
      title:"My 3nd post",
      datatime: "Mar 25, 2024 06:02:05 PM",
      body:"I'm Eating"
    }
  ])

  const [search, setSearch]= useState('')
  const [searchResults, setSearchResults] = useState([])

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
