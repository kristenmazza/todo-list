export default class Project {
  constructor(title, tasks = []) {
    this.title = title;
    this.tasks = tasks;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  getTitle() {
    return this.title;
  }
}
