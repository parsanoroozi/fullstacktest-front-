import React from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";

const Form = (props) => {
  const [key, setKey] = React.useState("");
  const [value, setValue] = React.useState("");

  const addItem = async () => {
    if (key !== "" && value !== "") {
      await axios.post("http://localhost:8080/addItem", {
        key: key,
        value: value,
      });
      setKey("");
      setValue("");
    }
    props.fetchList();
  };

  return (
    <div
      style={{
        width: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Add/Update Item:</h1>
      <div
        style={{
          alignSelf: "center",
          width: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Key"
          variant="outlined"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Value"
          variant="outlined"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button variant="contained" onClick={addItem}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Form;
