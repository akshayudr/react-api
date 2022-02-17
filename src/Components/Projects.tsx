import React, { useState } from "react";
import store from "../Store/Store";
import FloatingActionButtons from "./AddButton";
import Form from "./Form";

const Projects = () => {
  const { selectProjects } = store;

  const handleGet = () => {
    selectProjects();
  };

  return (
    <div>
      <div style={{ paddingTop: "20px" }}>
        <button className="button button2" onClick={handleGet}>
          Get all projects
        </button>
      </div>
      <br />
      <Form />

      <br />
    </div>
  );
};

export default Projects;
