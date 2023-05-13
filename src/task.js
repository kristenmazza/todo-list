let taskId = 0;

export default class Task {
  constructor(title, description, dueDate, priority, project, completion) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.completion = completion;
    this.id = taskId;
    taskId += 1;
  }
}
