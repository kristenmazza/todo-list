import isWithinInterval from 'date-fns/isWithinInterval';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import startOfDay from 'date-fns/startOfDay';
import endOfDay from 'date-fns/endOfDay';
import parseISO from 'date-fns/parseISO';
import {
  init,
  addProjectToDOM,
  getProjectForm,
  projectFormExpanded,
  expandCreateProjectForm,
  rotateAddProjectIcon,
  removeActiveClass,
  toggleSidebarHighlight,
  showDefaultProject,
  showTasksInProject,
  getTaskInformation,
  showTasksSection,
  showAddTaskForm,
  toggleOptionalTaskDisplay,
  deleteTask,
  hideAddTaskButton,
  showAddTaskButton,
  addTaskToFilter,
  showEditTaskForm,
  updateTaskInformation,
  clearAllTaskContent,
} from './dom-manipulation';
import Project from './project';
import {
  getProjects,
  addProject,
  getAllTasks,
  setCompletion,
  addTask,
  addAllProjectsToLocalStorage,
} from './site-storage';

let selectedProject = getProjects()[0];
let taskToEdit = '';
let taskId = '';

function createTask() {
  const task = getTaskInformation(selectedProject);

  // Add task to the selected project's array of tasks
  addTask(selectedProject, task);
}

// This is a conditional that determines if you're looking at the task list or the task form.
// If you're in the task list on click, then show the task form.
// If you're in the task form on submit, then show the task list.
function controlDisplay(comingFrom) {
  if (comingFrom === 'task list') {
    showAddTaskForm(
      (e) => {
        e.preventDefault();
        createTask();
        controlDisplay('task form');
      },
      (e) => {
        e.preventDefault();
        controlDisplay('task form');
      }
    );
  } else if (comingFrom === 'task form') {
    clearAllTaskContent();
    showTasksSection((e) => {
      e.preventDefault();
      controlDisplay('task list');
    });
    showTasksInProject(selectedProject);
  }
}

function onClickOfAddTaskButton(e) {
  e.preventDefault();
  controlDisplay('task list');
}

init(onClickOfAddTaskButton);

getProjects().forEach((project) => {
  addProjectToDOM(project);
});

showDefaultProject(selectedProject);

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

    selectedProject = newProject;

    // Control display as if coming from task form (wipes current display and opens new project task listing)
    controlDisplay('task form');
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
  const projectButton = e.target.closest('[data-id]');
  const filterButton = e.target.closest('.filter');
  const allTasks = getAllTasks();
  const current = new Date();

  // If not clicking a project or filter button, return to prevent errors
  if (!projectButton && !filterButton) {
    return;
  }

  // Highlight currently selected sidebar option and remove any inactive highlighted options
  toggleSidebarHighlight(e.target);

  if (projectButton) {
    // Assign the data-id of the project button to projectId
    const projectId = projectButton.getAttribute('data-id');

    // Save the getProjects() array into projects
    const projects = getProjects();

    // Find the project with id that matches the selected project id
    const project = projects.find((proj) => proj.id === projectId);

    // If the project is already the selected project, return early to prevent adding the tasks
    // multiple times
    if (project === selectedProject) {
      return;
    }

    selectedProject = project;

    // Clear task content from the DOM
    clearAllTaskContent();

    // Show the tasks section of the selected project
    showTasksSection(onClickOfAddTaskButton);

    // Show the add task button
    showAddTaskButton();

    // // Add each task from the selected project to the DOM
    showTasksInProject(selectedProject);
  } else if (filterButton.classList.contains('filter-all')) {
    // Add tasks to filter 'all'
    clearAllTaskContent();
    showTasksSection(onClickOfAddTaskButton);
    hideAddTaskButton();
    selectedProject = '';

    for (let i = 0; i < allTasks.length; i += 1) {
      addTaskToFilter(allTasks[i]);
    }
  } else if (filterButton.classList.contains('filter-week')) {
    // Add tasks to filter 'week'
    clearAllTaskContent();
    showTasksSection(onClickOfAddTaskButton);
    hideAddTaskButton();
    selectedProject = '';

    for (let i = 0; i < allTasks.length; i += 1) {
      if (
        isWithinInterval(parseISO(allTasks[i].dueDate), {
          start: startOfWeek(current),
          end: endOfWeek(current),
        })
      ) {
        addTaskToFilter(allTasks[i]);
      }
    }
  } else if (filterButton.classList.contains('filter-today')) {
    // Add tasks to filter 'today'
    clearAllTaskContent();
    showTasksSection(onClickOfAddTaskButton);
    hideAddTaskButton();
    selectedProject = '';

    for (let i = 0; i < allTasks.length; i += 1) {
      if (
        isWithinInterval(parseISO(allTasks[i].dueDate), {
          start: startOfDay(current),
          end: endOfDay(current),
        })
      ) {
        addTaskToFilter(allTasks[i]);
      }
    }
  }
});

// Click handler to show/hide optional task display, delete, and edit tasks
const taskList = document.querySelector('.tasks-card');
taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('checkbox-label')) {
    toggleOptionalTaskDisplay(e);
  } else if (e.target.classList.contains('trash-icon')) {
    deleteTask(e, selectedProject);
    // Update projects/tasks in local storage
    addAllProjectsToLocalStorage();
  } else if (e.target.classList.contains('edit-icon')) {
    taskId = e.target.getAttribute('edit-id');
    const tasksInProject = selectedProject.tasks;

    taskToEdit = tasksInProject.find((t) => t.id.toString() === taskId);

    showEditTaskForm(taskToEdit);
  } else if (e.target.classList.contains('cancel-edit')) {
    // Clear task content from the DOM
    // Show the tasks section and tasks of the selected project
    clearAllTaskContent();
    showTasksSection(onClickOfAddTaskButton);
    showTasksInProject(selectedProject);
  }
});

// Event listener for submission of 'edit task' form
taskList.addEventListener('submit', (e) => {
  if (e.target.classList.contains('edit-task-form')) {
    e.preventDefault();

    // Update task information in the DOM
    const updatedTask = updateTaskInformation(taskToEdit);

    // Find the index of the edited task in the tasks array
    const index = selectedProject.tasks.findIndex(
      (item) => item.id.toString() === taskId
    );

    // Replace old task information with new task information in the tasks array
    selectedProject.tasks.splice(index, 1, updatedTask);
    controlDisplay('task form');

    // Update projects/tasks in local storage
    addAllProjectsToLocalStorage();
  }
});

// Change task completion status on checkbox change
taskList.addEventListener('change', (e) => {
  if (!e.target.classList.contains('checkbox-field')) {
    return;
  }
  taskId = e.target.nextElementSibling.getAttribute('data-id');
  const allTasks = getAllTasks();
  const taskChanged = allTasks.find((task) => task.id === taskId);

  if (e.target.checked) {
    setCompletion(taskChanged, true);
  } else {
    setCompletion(taskChanged, false);
  }

  // Update projects/tasks in local storage
  addAllProjectsToLocalStorage();
});
