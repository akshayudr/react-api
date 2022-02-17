import { ProjectDetails } from "../Model/model";
import { makeAutoObservable } from "mobx";
import axios from "axios";

class Store {
  projects: ProjectDetails[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  selectProjects = () => {
    axios({
      method: "get",
      url: "http://localhost:5000/project",
    })
      .then((res) => {
        const project = res.data;
        this.projects = project.projects;
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  createProject = (value: any) => {
    axios
      .post("http://localhost:5000/project", {
        title: value.title,
        account: value.account,
      })
      .then((res) => console.log(res));
    if (value.title && value.account) {
      alert("successfully created.");
    }
  };

  // selectUpdateId = (value: any) => {
  //   this.updateId = [value, ...this.updateId];
  //   console.log(this.updateId.pop());
  // };

  updateProject = (value: any, id: any) => {
    // const project = [this.projects.find(id)];
    // const Id =project.map((p) => {
    //   return p._id;
    // });
    axios.patch(`http://localhost:5000/project/61e552cae2bde4854186538e`, {
      title: value.title,
      account: value.account,
    });
    alert("successfully updated.");
    console.log(id);
    console.log(value.title);
    console.log(value.account);
  };
}

const store = new Store();
export default store;
