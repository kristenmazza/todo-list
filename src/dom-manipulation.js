import './style.css';
import InboxIcon from './images/inbox-solid.svg';
import CalendarDayIcon from './images/calendar-day-solid.svg';
import CalendarWeekIcon from './images/calendar-week-solid.svg';
import FolderIcon from './images/folder-solid.svg';
import EditIcon from './images/pen-to-square-solid.svg';
import TrashIcon from './images/trash-solid.svg';
import PlusIcon from './images/plus-solid.svg';

function componentContainer() {
  const container = document.createElement('div');
  container.classList.add('container');
  return container;
}

function componentHeader() {
  const header = document.createElement('header');
  header.classList.add('header');
  return header;
}

function componentTitle() {
  const title = document.createElement('h1');
  title.textContent = 'todo list';
  return title;
}

function componentContent() {
  const content = document.createElement('div');
  content.classList.add('content');
  return content;
}

function componentSidebar() {
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');
  return sidebar;
}

function componentFilters() {
  const filters = document.createElement('div');
  filters.classList.add('filters');
  return filters;
}

function componentFilter() {
  const filter = document.createElement('div');
  filter.classList.add('filter');
  return filter;
}

function componentInboxIcon() {
  const inboxIcon = new Image();
  inboxIcon.src = InboxIcon;
  inboxIcon.classList.add('icons');
  return inboxIcon;
}

function componentTodayIcon() {
  const todayIcon = new Image();
  todayIcon.src = CalendarDayIcon;
  todayIcon.classList.add('icons');
  return todayIcon;
}

function componentWeekIcon() {
  const weekIcon = new Image();
  weekIcon.src = CalendarWeekIcon;
  weekIcon.classList.add('icons');
  return weekIcon;
}

function componentFilterName(name) {
  const filterName = document.createElement('p');
  filterName.textContent = name;
  return filterName;
}

function componentSectionHeader(heading) {
  const sectionHeader = document.createElement('h2');
  sectionHeader.textContent = heading;
  sectionHeader.classList.add('section-header');
  return sectionHeader;
}

function componentProjectsHeading() {
  const projectsHeading = document.createElement('h2');
  projectsHeading.classList.add('projects-heading-title');
  projectsHeading.textContent = 'Projects';
  return projectsHeading;
}

function componentProjects() {
  const projects = document.createElement('div');
  projects.classList.add('projects');
  return projects;
}

function componentProject() {
  const project = document.createElement('div');
  project.classList.add('project');
  return project;
}

function componentProjectIcon() {
  const projectIcon = new Image();
  projectIcon.src = FolderIcon;
  projectIcon.classList.add('icons');
  return projectIcon;
}

function componentProjectsHeader() {
  const projectsHeader = document.createElement('span');
  projectsHeader.classList.add('projects-header');
  return projectsHeader;
}

function componentProjectTitle(title) {
  const projectTitle = document.createElement('p');
  projectTitle.textContent = title;
  return projectTitle;
}

function componentAddProjectIcon() {
  const addProjectIcon = new Image();
  addProjectIcon.src = PlusIcon;
  addProjectIcon.classList.add('icons', 'plus-icon');
  return addProjectIcon;
}

function componentTasksCard() {
  const tasksCard = document.createElement('div');
  tasksCard.classList.add('tasks-card');
  return tasksCard;
}

function componentTasks() {
  const tasks = document.createElement('div');
  tasks.classList.add('tasks');
  return tasks;
}

function componentTask() {
  const task = document.createElement('div');
  task.classList.add('task');
  return task;
}

function componentCheckbox() {
  const checkbox = document.createElement('div');
  checkbox.classList.add('checkbox');
  return checkbox;
}

function componentCheckboxField() {
  const checkboxField = document.createElement('input');
  checkboxField.setAttribute('type', 'checkbox');
  checkboxField.classList.add('checkbox-field');
  return checkboxField;
}

function componentCheckboxLabel(projectTitle) {
  const checkboxLabel = document.createElement('label');
  checkboxLabel.setAttribute('for', 'checkbox');
  checkboxLabel.classList.add('checkbox-label');
  checkboxLabel.textContent = projectTitle;
  return checkboxLabel;
}

function componentTaskInfo() {
  const taskInfo = document.createElement('div');
  taskInfo.classList.add('task-info');
  return taskInfo;
}

function componentEditTools() {
  const editTools = document.createElement('div');
  editTools.classList.add('edit-tools');
  return editTools;
}

function componentEditIcon() {
  const editIcon = new Image();
  editIcon.src = EditIcon;
  editIcon.classList.add('icons');
  return editIcon;
}

function componentTrashIcon() {
  const trashIcon = new Image();
  trashIcon.src = TrashIcon;
  trashIcon.classList.add('icons');
  return trashIcon;
}

function componentAddTaskButton() {
  const addTaskButton = document.createElement('button');
  addTaskButton.classList.add('add-task-button');
  addTaskButton.textContent = 'Add Task';
  return addTaskButton;
}

export default function init() {
  const container = componentContainer();
  const header = componentHeader();
  const content = componentContent();
  const sidebar = componentSidebar();
  const filters = componentFilters();
  const filterAll = componentFilter();
  const filterToday = componentFilter();
  const filterWeek = componentFilter();
  const projectsHeader = componentProjectsHeader();
  const projects = componentProjects();
  const project = componentProject();
  const tasksCard = componentTasksCard();
  const tasks = componentTasks();
  const task = componentTask();
  const taskInfo = componentTaskInfo();
  const editTools = componentEditTools();
  const checkbox = componentCheckbox();

  document.body.appendChild(container);
  container.appendChild(header);
  header.appendChild(componentTitle());
  container.appendChild(content);
  content.appendChild(sidebar);
  sidebar.appendChild(filters);
  filters.appendChild(componentSectionHeader('Filters'));
  filters.appendChild(filterAll);
  filterAll.appendChild(componentInboxIcon());
  filterAll.appendChild(componentFilterName('All'));
  filters.appendChild(filterToday);
  filterToday.appendChild(componentTodayIcon());
  filterToday.appendChild(componentFilterName('Today'));
  filters.appendChild(filterWeek);
  filterWeek.appendChild(componentWeekIcon());
  filterWeek.appendChild(componentFilterName('Week'));
  sidebar.appendChild(projects);
  projects.appendChild(projectsHeader);
  projectsHeader.appendChild(componentProjectsHeading());
  projectsHeader.appendChild(componentAddProjectIcon());
  projects.appendChild(project);
  project.appendChild(componentProjectIcon());
  project.appendChild(componentProjectTitle('Primary'));
  content.appendChild(tasksCard);
  tasksCard.appendChild(tasks);
  tasks.appendChild(componentSectionHeader('Tasks'));
  tasks.appendChild(task);
  task.appendChild(taskInfo);
  taskInfo.appendChild(checkbox);
  checkbox.appendChild(componentCheckboxField());
  checkbox.appendChild(componentCheckboxLabel('Finish project'));
  task.appendChild(editTools);
  editTools.appendChild(componentEditIcon());
  editTools.appendChild(componentTrashIcon());
  tasksCard.appendChild(componentAddTaskButton());
}
