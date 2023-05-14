export default class Project {
  constructor(title, tasks = []) {
    this.title = title;
    this.tasks = tasks;
    this.id = crypto.randomUUID();
  }
}
