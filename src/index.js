import {
  init,
  addProjectToDOM,
  getProjectForm,
  projectFormExpanded,
  expandCreateProjectForm,
  rotateAddProjectIcon,
  removeActiveClass,
  componentTaskInputForm,
  toggleSidebarHighlight,
  addTaskToDom,
  getTaskInformation,
  clearTasks,
} from './dom-manipulation';
import Task from './task';
import Project from './project';
import { getProjects, addProject } from './site-storage';

init();

const primaryTasks = [
  new Task('Respond to emails', 'Catch up on personal emails', '3/4/2023', 1),
];

const primaryProject = new Project('Home', primaryTasks);
const secondaryProject = new Project('Work');

addProject(primaryProject);
addProject(secondaryProject);

getProjects().forEach((project) => {
  addProjectToDOM(project);
});

const taskTwo = new Task(
  'Meal planning',
  'Plan meals for next week',
  '3/4/2023',
  2
);

primaryProject.addTask(taskTwo);
console.log(getProjects());

let selectedProject = getProjects()[0];

// Show default project when page is loaded
function showDefaultProject() {
  selectedProject.tasks.forEach((task) => {
    addTaskToDom(task);
  });

  document.querySelector('[data-id="1"]').classList.add('active');
}

showDefaultProject();

// Listen to keypress on the project form
const projectForm = getProjectForm();
projectForm.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();

    // Collapse project input form
    expandCreateProjectForm(false);

    // Get project name from form value
    const projectName = document.getElementById('project-name').value;

    // Create new project with project name
    const newProject = new Project(projectName);

    // Add project to site storage
    addProject(newProject);

    // Add project name to sidebar
    addProjectToDOM(newProject);

    // Remove active class (background color) from any active element
    removeActiveClass();

    // Make current project active
    document.querySelector('.project').classList.add('active');

    // Change x to + for add-project icon
    rotateAddProjectIcon();
  }
});

const showProjectForm = document.querySelector('.plus-icon');
showProjectForm.addEventListener('click', () => {
  // Expand or collapse project form based on current state when pressing the plus icon image
  expandCreateProjectForm(!projectFormExpanded());

  // Rotate between + and x for add-project icon when clicked
  rotateAddProjectIcon();
});

const sidebar = document.querySelector('#sidebar');
sidebar.addEventListener('click', (e) => {
  // Assign the element with the closest attribute of 'data-id' as the project button
  const projectButton = e.target.closest('[data-id]');

  // If the project button does not have a data-id, return to prevent errors
  if (!projectButton) {
    return;
  }

  // Highlight currently selected sidebar option and remove any inactive highlighted options
  toggleSidebarHighlight(e.target);

  // Save the data-id of the project button as the project id
  const projectId = parseInt(projectButton.getAttribute('data-id'), 10);

  // Save the getProjects() array into projects
  const projects = getProjects();

  // Find the project with id that matches the selected project id
  const project = projects.find((proj) => proj.id === projectId);

  // If the project is already the selected project, return early to prevent adding the tasks
  // multiple times
  if (project === selectedProject) {
    return;
  }

  // Make the found project the selected project
  selectedProject = project;

  // Clear tasks from the DOM
  clearTasks();

  // Add each task from the selected project to the DOM
  selectedProject.tasks.forEach((task) => {
    addTaskToDom(task);
  });
});

// Show task input form when 'Add Task' button is clicked
const addTaskButton = document.querySelector('.add-task-button');
const tasksContainer = document.querySelector('.tasks-card');
addTaskButton.addEventListener('click', () => {
  const taskForm = componentTaskInputForm();
  tasksContainer.replaceChildren(taskForm);

  // Event listener for task form
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = getTaskInformation();

    // Add task to the selected project's array of tasks
    selectedProject.addTask(task);
  });
});
