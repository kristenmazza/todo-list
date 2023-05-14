import endOfWeek from 'date-fns/endOfWeek';
import endOfYear from 'date-fns/endOfYear';
import endOfDay from 'date-fns/endOfDay';
import Project from './project';
import Task from './task';

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

export function getAllProjectsFromLocalStorage() {
  let projects = [];
  if (storageAvailable('localStorage')) {
    projects = JSON.parse(localStorage.getItem('projects')) || [];
  }

  projects.forEach((project) => {
    project.tasks.forEach((task) => {
      task.dueDate = new Date(task.dueDate);
    });
  });
  return projects;
}

const projects = getAllProjectsFromLocalStorage() || [];

export function addAllProjectsToLocalStorage() {
  if (storageAvailable('localStorage')) {
    localStorage.setItem('projects', JSON.stringify(projects));
  }
}

const current = new Date();

if (projects.length === 0) {
  const primaryTasks = [
    new Task(
      'Set personal goals',
      'Develop SMART goals with objectives',
      endOfYear(current),
      'low',
      'Home'
    ),
    new Task(
      'Meal planning',
      'Plan meals for next week',
      endOfWeek(current),
      'high',
      'Home'
    ),
  ];

  const secondaryTasks = [
    new Task(
      'Prepare for meeting',
      'Review & print documents for distribution',
      endOfDay(current),
      'high',
      'Work'
    ),
  ];

  const primaryProject = new Project('Home', primaryTasks);
  const secondaryProject = new Project('Work', secondaryTasks);

  projects.push(primaryProject);
  projects.push(secondaryProject);
  addAllProjectsToLocalStorage();
}

export function getProjects() {
  return projects;
}

export function addProject(project) {
  projects.push(project);
  addAllProjectsToLocalStorage();
}

export function getAllTasks() {
  const allTasks = [];

  for (let i = 0; i < projects.length; i += 1) {
    for (let j = 0; j < projects[i].tasks.length; j += 1) {
      const individualTask = projects[i].tasks[j];
      allTasks.push(individualTask);
    }
  }

  return allTasks;
}

export function setCompletion(task, completed) {
  task.completion = completed;
  addAllProjectsToLocalStorage();
}

export function addTask(project, task) {
  if (!project.tasks) {
    project.tasks = [];
  }

  project.tasks.push(task);
  addAllProjectsToLocalStorage();
}
