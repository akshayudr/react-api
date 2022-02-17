import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import store from "../Store/Store";

const UpdateProject = (props: any) => {
  const [data, setData] = React.useState({ title: "", account: "" });
  const { updateProject } = store;

  const handleTitle = (e: any) => {
    setData({ ...data, title: e.target.value });
  };

  const handleAccount = (e: any) => {
    setData({ ...data, account: e.target.value });
  };

  const handleUpdate = () => {
    updateProject(data, props.id);
  };
  return (
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
      <button className="button button2" onClick={handleUpdate}>
        update
      </button>
    </Box>
  );
};

export default UpdateProject;
