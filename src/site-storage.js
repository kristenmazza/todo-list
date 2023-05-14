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
  if (storageAvailable('localStorage')) {
    return JSON.parse(localStorage.getItem('projects'));
  }
  return [];
}

const projects = getAllProjectsFromLocalStorage() || [];

export function addAllProjectsToLocalStorage() {
  if (storageAvailable('localStorage')) {
    localStorage.setItem('projects', JSON.stringify(projects));
  }
}

if (projects.length === 0) {
  const primaryTasks = [
    new Task(
      'Set personal goals',
      'Determine SMART goals with objectives',
      '2023-12-31',
      'low',
      'Home'
    ),
    new Task(
      'Meal planning',
      'Plan meals for next week',
      '2023-05-25',
      'high',
      'Home'
    ),
  ];

  const secondaryTasks = [
    new Task(
      'Prepare for meeting',
      'Review & print documents for distribution',
      new Date().toISOString().slice(0, 10),
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
