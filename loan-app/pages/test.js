import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("users.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
        console.log(data);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      {data && data.length > 0 && data.map((item) => <p>{item}</p>)}
    </div>
  );
}

export default App;
