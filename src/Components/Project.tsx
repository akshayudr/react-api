import React from "react";
import store from "../Store/Store";
import { observer } from "mobx-react-lite";

import { ProjectDetails } from "../Model/model";
import SimplePaper from "./Paper";
import UpdateProject from "./UpdateProjecct";

const Project = () => {
  const { projects } = store;
  return (
    <div>
      {/* <h2>Project List</h2> */}
      {projects.map((x: ProjectDetails, index) => (
        <>
          {/* <UpdateProject /> */}
          <SimplePaper
            title={x.title}
            account={x.account}
            key={index}
            id={index}
          />
        </>
      ))}
    </div>
  );
};

export default observer(Project);
