import "./App.css";
import { useFetch } from "./useFetch";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState(null);
  const { data } = useFetch({
    url,
  });

  console.log("APP renderin fubar..");
  return (
    <div className="App">
      <div>THERE YOU ARE!</div>
      <div>{JSON.stringify(data)}</div>
      <div>
        <input
          type="button"
          value="malekith"
          onClick={() => setUrl("/malekith.json")}
        />
        <input
          type="button"
          value="erfan"
          onClick={() => setUrl("/erfan.json")}
        />
      </div>
    </div>
  );
}

export default App;
