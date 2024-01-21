import "./App.css";
import React from "react";
import axios from "axios";
import Form from "./components/form";
import List from "./components/list";

function App() {
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    const res = await axios.get("http://localhost:8080/getAll");
    setList(res.data);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline",
      }}
    >
      <List list={list} fetchList={fetchList} setList={setList} />
      <Form setList={setList} fetchList={fetchList} />
    </div>
  );
}

export default App;
