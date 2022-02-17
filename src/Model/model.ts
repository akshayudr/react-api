export interface ProjectDetails {
  title: string;
  account: string;
  _id: string;
}

export interface PropType {
  projects: ProjectDetails[];
}
