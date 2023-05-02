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
} from './dom-manipulation';
import Task from './task';
import Project from './project';
import { getProjects, addProject } from './site-storage';

init();

const primaryTasks = [
  new Task(
    'Respond to emails',
    'Catch up on personal and work emails',
    '3/4/2023',
    'low'
  ),
];

const primaryProject = new Project('Primary Project', primaryTasks);
const secondaryProject = new Project('Secondary Project');

addProject(primaryProject);
addProject(secondaryProject);

const taskTwo = new Task(
  'Meal planning',
  'Plan meals for next week',
  '3/4/2023',
  3
);

primaryProject.addTask(taskTwo);
console.log(getProjects());

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
    addProjectToDOM(newProject.getTitle());

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
  // Highlight currently selected sidebar option and remove any inactive highlighted options
  toggleSidebarHighlight(e.target);
});

// Show task input form when 'Add Task' button is clicked
const addTaskButton = document.querySelector('.add-task-button');
const tasksContainer = document.querySelector('.tasks-card');
addTaskButton.addEventListener('click', () => {
  tasksContainer.replaceChildren(componentTaskInputForm());
});
