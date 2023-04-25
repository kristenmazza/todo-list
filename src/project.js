import { addProjectToDOM } from './dom-manipulation';

export default class Project {
  constructor(title, tasks = []) {
    this.title = title;
    this.tasks = tasks;
  }

  addTask(task) {
    this.tasks.push(task);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // When enter key is pressed, hide the project input form, add the project name to the sidebar,
  // and reset the form.
  const projectForm = document.querySelector('.project-form');
  projectForm.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      document.querySelector('.project-form').hidden = true;

      const projectName = document.getElementById('project-name').value;
      addProjectToDOM(projectName);

      projectForm.reset();
    }
  });

  // When 'add project' image is pressed, hide/unhide the project input form
  const addProject = document.querySelector('.plus-icon');
  addProject.addEventListener('click', () => {
    if (projectForm.hidden === true) {
      projectForm.hidden = false;
    } else {
      projectForm.hidden = true;
    }
  });
});
