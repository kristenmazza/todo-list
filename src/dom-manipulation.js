import './style.css';
import format from 'date-fns/format';
import InboxIcon from './images/inbox-solid.svg';
import CalendarDayIcon from './images/calendar-day-solid.svg';
import CalendarWeekIcon from './images/calendar-week-solid.svg';
import FolderIcon from './images/folder-solid.svg';
import EditIcon from './images/pen-to-square-solid.svg';
import TrashIcon from './images/trash-solid.svg';
import PlusIcon from './images/plus-solid.svg';
import LeftSolid from './images/chevron-left-solid.svg';
import Task from './task';

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

// Sidebar
function componentSidebar() {
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');
  sidebar.setAttribute('id', 'sidebar');
  return sidebar;
}

// Sidebar filters section
function componentFilters() {
  const filters = document.createElement('div');
  filters.classList.add('filters');
  return filters;
}

function componentFilter() {
  const filter = document.createElement('div');
  filter.classList.add('filter');
  filter.classList.add('sidebar-links');
  return filter;
}

function componentInboxIcon() {
  const inboxIcon = new Image();
  inboxIcon.src = InboxIcon;
  inboxIcon.classList.add('icons');
  inboxIcon.classList.add('filter-elements');
  return inboxIcon;
}

function componentTodayIcon() {
  const todayIcon = new Image();
  todayIcon.src = CalendarDayIcon;
  todayIcon.classList.add('icons');
  todayIcon.classList.add('filter-elements');
  return todayIcon;
}

function componentWeekIcon() {
  const weekIcon = new Image();
  weekIcon.src = CalendarWeekIcon;
  weekIcon.classList.add('icons');
  weekIcon.classList.add('filter-elements');
  return weekIcon;
}

function componentFilterName(name) {
  const filterName = document.createElement('p');
  filterName.textContent = name;
  filterName.classList.add('filter-elements');
  return filterName;
}

function componentSectionHeader(heading) {
  const sectionHeader = document.createElement('h2');
  sectionHeader.textContent = heading;
  sectionHeader.classList.add('section-header');
  return sectionHeader;
}

// Sidebar projects section
function componentProjectsHeading() {
  const projectsHeading = document.createElement('h2');
  projectsHeading.classList.add('section-header');
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
  project.classList.add('sidebar-links');
  return project;
}

function componentProjectIcon() {
  const projectIcon = new Image();
  projectIcon.src = FolderIcon;
  projectIcon.classList.add('icons');
  projectIcon.classList.add('project-elements');
  return projectIcon;
}

function componentProjectsHeader() {
  const projectsHeader = document.createElement('span');
  projectsHeader.classList.add('projects-header');
  return projectsHeader;
}

// Sidebar project creation form
function componentProjectInputForm() {
  const projectForm = document.createElement('form');
  const projectInputField = document.createElement('input');
  const projectSubmit = document.createElement('input');
  projectForm.classList.add('project-form');
  projectForm.setAttribute('id', 'project-form');
  projectForm.appendChild(projectInputField);
  projectInputField.setAttribute('name', 'project-name');
  projectInputField.setAttribute('id', 'project-name');
  projectInputField.setAttribute('type', 'text');
  projectInputField.classList.add('project-form-field');
  projectInputField.setAttribute('autofocus', 'autofocus');
  projectForm.appendChild(projectSubmit);
  projectSubmit.setAttribute('type', 'submit');
  projectSubmit.setAttribute('id', 'project-submit');
  return projectForm;
}

// Sidebar project title
function componentProjectTitle(title) {
  const projectTitle = document.createElement('p');
  projectTitle.textContent = title;
  projectTitle.classList.add('project-elements');
  return projectTitle;
}

// Sidebar add project icon
function componentAddProjectIcon() {
  const addProjectIcon = new Image();
  addProjectIcon.src = PlusIcon;
  addProjectIcon.classList.add('icons', 'plus-icon');
  return addProjectIcon;
}

// Tasks section
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

function componentPermanentTaskDisplay() {
  const permanentTaskDisplay = document.createElement('div');
  permanentTaskDisplay.classList.add('permanent-task-display');
  return permanentTaskDisplay;
}

function componentOptionalTaskDisplay() {
  const optionalTaskDisplay = document.createElement('div');
  optionalTaskDisplay.classList.add('optional-task-display');
  return optionalTaskDisplay;
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
  trashIcon.classList.add('trash-icon');
  return trashIcon;
}

function componentExpandedTaskInfoColumn() {
  const expandedTaskInfoColumn = document.createElement('div');
  expandedTaskInfoColumn.classList.add('task-info-column');
  return expandedTaskInfoColumn;
}

function componentExpandedTaskInfoCell() {
  const expandedTaskInfoCell = document.createElement('div');
  expandedTaskInfoCell.classList.add('expanded-task-info-cell');
  return expandedTaskInfoCell;
}

function componentExpandedTaskSpanBold(title) {
  const expandedTaskSpanBold = document.createElement('span');
  expandedTaskSpanBold.classList.add('expanded-task-span-bold');
  expandedTaskSpanBold.textContent = title;
  return expandedTaskSpanBold;
}

function componentExpandedTaskSpan(text) {
  const expandedTaskSpan = document.createElement('span');
  expandedTaskSpan.classList.add('expanded-task-span');
  expandedTaskSpan.textContent = text;
  return expandedTaskSpan;
}

// Add Task form
function componentTaskFormGroup() {
  const formGroup = document.createElement('div');
  formGroup.classList.add('task-form-group');
  return formGroup;
}

// Add Task form component for each input item (task, description, date, priority)
function componentTaskItemGroup() {
  const itemGroup = document.createElement('div');
  itemGroup.classList.add('task-item-group');
  return itemGroup;
}

// Add Task form component for multiple input items row (date, priority)
function componentInputGroup() {
  const inputGroup = document.createElement('div');
  inputGroup.classList.add('input-group');
  return inputGroup;
}

// Add Task form component for navigation (back & submit buttons)
function componentNavigationGroup() {
  const navGroup = document.createElement('div');
  navGroup.classList.add('nav-group');
  return navGroup;
}

// Add Task form priority selection
function componentTaskPriority() {
  const priority = document.createElement('select');
  priority.setAttribute('id', 'priority');
  priority.setAttribute('name', 'priority');
  const OptionOne = document.createElement('option');
  const OptionTwo = document.createElement('option');
  OptionOne.value = 'low';
  OptionOne.textContent = 'Low';
  OptionTwo.value = 'high';
  OptionTwo.textContent = 'High';
  priority.appendChild(OptionOne);
  priority.appendChild(OptionTwo);
  return priority;
}

// Add Task form priority label
function componentTaskPriorityLabel() {
  const priorityLabel = document.createElement('label');
  priorityLabel.setAttribute('for', 'priority');
  priorityLabel.textContent = 'Priority';
  priorityLabel.classList.add('form-label');
  return priorityLabel;
}

// Add Task form task name header and input
function componentFormTaskName() {
  const taskNameGroup = componentTaskItemGroup();
  const taskNameField = document.createElement('input');
  taskNameGroup.appendChild(componentSectionHeader('Add Task'));
  taskNameGroup.appendChild(taskNameField);
  taskNameField.setAttribute('name', 'task-name');
  taskNameField.setAttribute('id', 'task-name');
  taskNameField.setAttribute('type', 'text');
  taskNameField.classList.add('task-name-field');
  return taskNameGroup;
}

// Add Task form description input field
function componentFormTaskDescription() {
  const taskDescriptionField = document.createElement('textarea');
  taskDescriptionField.setAttribute('name', 'task-description');
  taskDescriptionField.setAttribute('id', 'task-description');
  taskDescriptionField.classList.add('task-description-field');
  return taskDescriptionField;
}

// Add Task form description label
function componentFormTaskDescriptionLabel() {
  const taskDescriptionLabel = document.createElement('label');
  taskDescriptionLabel.classList.add('form-label');
  taskDescriptionLabel.setAttribute('for', 'task-description');
  taskDescriptionLabel.textContent = 'Description';
  return taskDescriptionLabel;
}

// Add Task form due date input
function componentFormTaskDueDate() {
  const taskDueDateField = document.createElement('input');
  taskDueDateField.setAttribute('name', 'due-date');
  taskDueDateField.setAttribute('id', 'due-date');
  taskDueDateField.setAttribute('type', 'date');
  taskDueDateField.classList.add('due-date-field');
  return taskDueDateField;
}

// Add Task form due date label
function componentFormTaskDueDateLabel() {
  const taskDueDateLabel = document.createElement('label');
  taskDueDateLabel.classList.add('form-label');
  taskDueDateLabel.setAttribute('for', 'due-date');
  taskDueDateLabel.textContent = 'Due Date';
  return taskDueDateLabel;
}

// Add Task form submit button
function componentFormTaskSubmit() {
  const taskSubmit = document.createElement('button');
  taskSubmit.setAttribute('type', 'submit');
  taskSubmit.setAttribute('id', 'task-submit');
  taskSubmit.textContent = 'ADD';
  return taskSubmit;
}

// Add Task form back button
function componentFormTaskBackButton(onCancel) {
  const backIcon = new Image();
  backIcon.src = LeftSolid;
  backIcon.classList.add('icons', 'back-icon');
  backIcon.onclick = onCancel;
  return backIcon;
}

// Get task information from Add Task form
export function getTaskInformation() {
  const taskTitle = document.getElementById('task-name').value;
  const taskDescription = document.getElementById('task-description').value;
  const taskDate = document.getElementById('due-date').value;
  const taskPriority = document.getElementById('priority').value;

  const task = new Task(taskTitle, taskDescription, taskDate, taskPriority);

  return task;
}

// Full Add Task input form
export function componentTaskInputForm(onsubmit, onCancel) {
  const taskForm = document.createElement('form');
  const taskFormGroup = componentTaskFormGroup();
  const taskNameGroup = componentTaskItemGroup();
  const descriptionGroup = componentTaskItemGroup();
  const inputGroup = componentInputGroup();
  const taskDueDateGroup = componentTaskItemGroup();
  const taskPriorityGroup = componentTaskItemGroup();
  const navigationGroup = componentNavigationGroup();

  taskForm.classList.add('task-form');
  taskForm.setAttribute('id', 'task-form');
  taskForm.appendChild(taskFormGroup);

  taskForm.onsubmit = onsubmit;

  // Append task name input and header
  taskFormGroup.appendChild(taskNameGroup);
  taskNameGroup.appendChild(componentFormTaskName());

  // Append task description input and label
  taskFormGroup.appendChild(descriptionGroup);
  descriptionGroup.appendChild(componentFormTaskDescriptionLabel());
  descriptionGroup.appendChild(componentFormTaskDescription());

  // Add task due date input and label
  taskFormGroup.appendChild(inputGroup);
  inputGroup.appendChild(taskDueDateGroup);
  taskDueDateGroup.appendChild(componentFormTaskDueDateLabel());
  taskDueDateGroup.appendChild(componentFormTaskDueDate());

  // Add task priority selection and label
  inputGroup.appendChild(taskPriorityGroup);
  taskPriorityGroup.appendChild(componentTaskPriorityLabel());
  taskPriorityGroup.appendChild(componentTaskPriority());

  // Add navigation (back button and submit form button)
  taskForm.appendChild(navigationGroup);
  navigationGroup.appendChild(componentFormTaskBackButton(onCancel));
  navigationGroup.appendChild(componentFormTaskSubmit());

  return taskForm;
}

// Individual task displayed in task list
function displayTask(
  taskName,
  taskDescription,
  taskDueDate,
  taskPriority,
  taskId
) {
  const task = componentTask();
  const taskInfo = componentTaskInfo();
  const permanentTaskDisplay = componentPermanentTaskDisplay();
  const optionalTaskDisplay = componentOptionalTaskDisplay();
  const checkbox = componentCheckbox();
  const editTools = componentEditTools();
  const expandedTaskInfoColumn = componentExpandedTaskInfoColumn();
  const expandedTaskInfoColumn2 = componentExpandedTaskInfoColumn();
  const expandedTaskInfoCellTitle = componentExpandedTaskInfoCell();
  const expandedTaskInfoCellDescription = componentExpandedTaskInfoCell();
  const expandedTaskInfoCellDueDate = componentExpandedTaskInfoCell();
  const expandedTaskInfoCellPriority = componentExpandedTaskInfoCell();
  const checkboxLabel = componentCheckboxLabel(taskName);
  const editIcon = componentEditIcon();
  const trashIcon = componentTrashIcon();

  task.appendChild(permanentTaskDisplay);
  permanentTaskDisplay.appendChild(taskInfo);
  taskInfo.appendChild(checkbox);
  checkbox.appendChild(componentCheckboxField());
  checkbox.appendChild(checkboxLabel);
  permanentTaskDisplay.appendChild(editTools);
  editTools.appendChild(editIcon);
  editTools.appendChild(trashIcon);
  task.appendChild(optionalTaskDisplay);

  checkboxLabel.setAttribute('data-id', taskId);
  editIcon.setAttribute('edit-id', taskId);
  trashIcon.setAttribute('del-id', taskId);

  // Optional task display (expandable)
  optionalTaskDisplay.appendChild(expandedTaskInfoColumn);
  expandedTaskInfoColumn.appendChild(expandedTaskInfoCellTitle);

  expandedTaskInfoCellTitle.appendChild(
    componentExpandedTaskSpanBold('Title: ')
  );
  expandedTaskInfoCellTitle.appendChild(componentExpandedTaskSpan(taskName));

  expandedTaskInfoColumn.appendChild(expandedTaskInfoCellDueDate);
  expandedTaskInfoCellDueDate.appendChild(
    componentExpandedTaskSpanBold('Due Date: ')
  );

  expandedTaskInfoCellDueDate.appendChild(
    componentExpandedTaskSpan(
      format(new Date(taskDueDate), 'eeee, MMMM dd, yyyy')
    )
  );

  optionalTaskDisplay.appendChild(expandedTaskInfoColumn2);
  expandedTaskInfoColumn2.appendChild(expandedTaskInfoCellDescription);
  expandedTaskInfoCellDescription.appendChild(
    componentExpandedTaskSpanBold('Description: ')
  );
  expandedTaskInfoCellDescription.appendChild(
    componentExpandedTaskSpan(taskDescription)
  );

  expandedTaskInfoColumn2.appendChild(expandedTaskInfoCellPriority);
  expandedTaskInfoCellPriority.appendChild(
    componentExpandedTaskSpanBold('Priority: ')
  );
  expandedTaskInfoCellPriority.appendChild(
    componentExpandedTaskSpan(taskPriority)
  );

  return task;
}

// Show the Add Task form
export function showAddTaskForm(onsubmit, onCancel) {
  const tasksContainer = document.querySelector('.tasks-card');
  tasksContainer.replaceChildren(componentTaskInputForm(onsubmit, onCancel));
}

function componentAddTaskButton(onClickOfAddTaskButton) {
  const addTaskButton = document.createElement('button');
  addTaskButton.classList.add('add-task-button');
  addTaskButton.textContent = 'Add Task';
  addTaskButton.onclick = onClickOfAddTaskButton;
  return addTaskButton;
}

// Add 'tasks' class section
export function showTasksSection(onClickOfAddTaskButton) {
  const tasksCard = document.querySelector('.tasks-card');
  const tasks = componentTasks();
  tasksCard.appendChild(tasks);
  tasksCard.appendChild(componentAddTaskButton(onClickOfAddTaskButton));
  tasks.appendChild(componentSectionHeader('Tasks'));
  return tasksCard;
}

// Initialize page
export function init(onClickOfAddTaskButton) {
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
  const tasksCard = componentTasksCard();

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
  projects.appendChild(componentProjectInputForm());
  document.getElementById('project-submit').hidden = true;
  document.getElementById('project-form').hidden = true;
  content.appendChild(tasksCard);
  showTasksSection(onClickOfAddTaskButton);
}

// Add task to page
export function addTaskToDom(task) {
  const tasks = document.querySelector('.tasks');
  tasks.appendChild(
    displayTask(
      task.title,
      task.description,
      task.dueDate,
      task.priority,
      task.id
    )
  );
}

// Get project form
export function getProjectForm() {
  return document.querySelector('.project-form');
}

// Add project to page
export function addProjectToDOM(newProject) {
  const { id, title } = newProject;
  const projects = document.querySelector('.projects');
  const project = componentProject();
  const projectTitle = componentProjectTitle(title);
  project.setAttribute('data-id', id);
  projects.insertBefore(project, projects.children[2]);
  project.appendChild(componentProjectIcon());
  project.appendChild(projectTitle);
  getProjectForm().reset();
  return projects;
}

// If project form is hidden is true, then that means project form
// is collapsed. This function would then return false,
// because it is false that the project form is expanded.
export function projectFormExpanded() {
  return !getProjectForm().hidden;
}

// Expand or collapse the project form based on passed in true/false value
export function expandCreateProjectForm(expand) {
  getProjectForm().hidden = !expand;
}

// Rotate add project icon when called
export function rotateAddProjectIcon() {
  const addProjectIcon = document.querySelector('.plus-icon');
  if (!addProjectIcon.classList.contains('rotate')) {
    addProjectIcon.classList.add('rotate');
  } else if (addProjectIcon.classList.contains('rotate')) {
    addProjectIcon.classList.remove('rotate');
  }
}

// Remove active class from any previously active element in sidebar
export function removeActiveClass() {
  const sidebarLinks = document.querySelectorAll('.sidebar-links');
  sidebarLinks.forEach((sidebarLink) => {
    sidebarLink.classList.remove('active');
  });
}

// Highlight currently selected sidebar option and remove any inactive highlighted options
export function toggleSidebarHighlight(element) {
  if (element.classList.contains('sidebar-links')) {
    removeActiveClass();
    element.classList.toggle('active');
  } else if (
    element.classList.contains('filter-elements') ||
    element.classList.contains('project-elements')
  ) {
    removeActiveClass();
    element.parentNode.classList.toggle('active');
  }
}

// Show default project when page is loaded
export function showDefaultProject(selectedProject) {
  selectedProject.tasks.forEach((task) => {
    addTaskToDom(task);
  });

  document.querySelector('[data-id="1"]').classList.add('active');
}

// Clear tasks from the DOM
export function clearTasks() {
  const tasks = document.querySelector('.tasks');
  while (tasks.children.length > 1) {
    tasks.removeChild(tasks.lastChild);
  }
}

// Remove Add Task form
export function closeAddTaskForm() {
  const tasksCard = document.querySelector('.tasks-card');
  while (tasksCard.children.length > 0) {
    tasksCard.removeChild(tasksCard.lastChild);
  }
}

// Show all tasks in a selected project
export function showTasksInProject(selection) {
  selection.tasks.forEach((task) => {
    addTaskToDom(task);
  });
}

// Toggle optional task information display when clicking the checkbox label
export function toggleOptionalTaskDisplay(e) {
  const optionalDisplay = e.target.closest('.task').children[1];

  if (optionalDisplay.style.display === 'flex') {
    optionalDisplay.style.display = 'none';
  } else {
    optionalDisplay.style.display = 'flex';
  }
}

export function deleteTask(e, selectedProject) {
  e.target.parentElement.parentElement.parentElement.remove();

  const taskToDelete = selectedProject.tasks.findIndex(
    (task) => task.id.toString() === e.target.getAttribute('del-id')
  );
  selectedProject.tasks.splice(taskToDelete, 1);
}
