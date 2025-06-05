function addTodo() {
  const input = document.getElementById("todo-input");
  const task = input.value.trim();
  if (!task) return;

  const li = document.createElement("li");
  li.textContent = task;
  li.onclick = () => li.classList.toggle("completed");

  document.getElementById("todo-list").appendChild(li);
  input.value = "";
}
