export default class Project {
  constructor(title, tasks = []) {
    this.title = title;
    this.tasks = tasks;
  }

  addTask(task) {
    this.tasks.push(task);
  }
}

window.onload = () => {
  const projectForm = document.querySelector('.project-form');
  projectForm.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      document.querySelector('.project-form').hidden = true;
    }
  });

  const addProject = document.querySelector('.plus-icon');
  addProject.addEventListener('click', () => {
    if (projectForm.hidden === true) {
      projectForm.hidden = false;
      console.log('true');
    } else {
      projectForm.hidden = true;
    }
  });
};
