import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import store from "../Store/Store";
import ActionButtons from "./AddButton";

const Form = () => {
  const { createProject } = store;
  const [project, setProject] = useState({ title: "", account: "" });

  const handleTitle = (e: any) => {
    setProject({ ...project, title: e.target.value });
  };

  const handleAccount = (e: any) => {
    setProject({ ...project, account: e.target.value });
  };

  const handleCreate = () => {
    createProject(project);
  };

  return (
    <div className="padding">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          onChange={handleTitle}
        />

        <TextField
          id="outlined-basic"
          label="Account"
          variant="outlined"
          onChange={handleAccount}
        />
        <div className="add-btn">
          <button className="btn" onClick={handleCreate}>
            <ActionButtons />
          </button>
        </div>
      </Box>
    </div>
  );
};

export default Form;
