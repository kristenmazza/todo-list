import { init } from './dom-manipulation';
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
