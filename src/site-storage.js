const projects = [];

export function getProjects() {
  return projects;
}

export function addProject(project) {
  projects.push(project);
}

export function getAllTasks() {
  const allTasks = [];

  for (let i = 0; i < projects.length; i += 1) {
    for (let j = 0; j < projects[i].tasks.length; j += 1) {
      const individualTask = projects[i].tasks[j];
      allTasks.push(individualTask);
    }
  }

  return allTasks;
}
