let taskId = 0;

export default class Task {
  constructor(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.id = taskId;
    taskId += 1;
  }
}
