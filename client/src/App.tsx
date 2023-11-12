import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("/api/data");
    const result = await response.json();
    setData(result.message);
  };

  return (
    <div>
      <h1>React Frontend</h1>
      <p>Data from Server: {data}</p>
    </div>
  );
}

export default App;
