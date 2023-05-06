let projectId = 1;

export default class Project {
  constructor(title, tasks = []) {
    this.title = title;
    this.tasks = tasks;
    this.id = projectId;
    projectId += 1;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  getTitle() {
    return this.title;
  }
}
