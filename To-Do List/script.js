document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskList = document.getElementById('taskList');

    // Create new task item
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="task-text">${taskText}</span>
      <div class="task-actions">
        <button class="complete-btn">Complete</button>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;

    // Add task to the list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = '';

    // Add event listeners for complete, edit, and delete buttons
    li.querySelector('.complete-btn').addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    li.querySelector('.delete-btn').addEventListener('click', () => {
      taskList.removeChild(li);
    });

    li.querySelector('.edit-btn').addEventListener('click', () => {
      editTask(li);
    });
  }
}

function editTask(li) {
  const taskTextSpan = li.querySelector('.task-text');
  const currentText = taskTextSpan.textContent;

  // Replace task text with an input field for editing
  const input = document.createElement('input');
  input.type = 'text';
  input.value = currentText;
  input.classList.add('edit-input');

  taskTextSpan.replaceWith(input);

  // Create a Save button
  const saveBtn = document.createElement('button');
  saveBtn.textContent = 'Save';
  saveBtn.classList.add('save-btn');

  // Replace the Edit button with the Save button
  const editBtn = li.querySelector('.edit-btn');
  editBtn.replaceWith(saveBtn);

  // Add functionality to the Save button
  saveBtn.addEventListener('click', () => {
    const newText = input.value.trim();

    if (newText !== '') {
      // Replace input field with updated task text
      const updatedSpan = document.createElement('span');
      updatedSpan.textContent = newText;
      updatedSpan.classList.add('task-text');

      input.replaceWith(updatedSpan);
      saveBtn.replaceWith(editBtn); // Switch back to Edit button
    }
  });
}
