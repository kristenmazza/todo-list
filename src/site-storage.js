// create list of projects
// methods to add projects and get projects

const projects = [];

export function getProjects() {
  return projects;
}

export function addProject(project) {
  projects.push(project);
}
