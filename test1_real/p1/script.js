// remove the parent of the given element from the DOM tree
function delete_parent(element) {
  const parent = element.parentNode;
  const grandParent = parent.parentNode;
  grandParent.removeChild(parent);
}

// add a new list item at the end
document.querySelector("#add-task").addEventListener("click", () => {
  const taskName = document.querySelector("#new-task").value;
  const listItem = document.createElement("li");
  listItem.innerHTML = `${taskName} <button onclick="delete_parent(this);">Delete</button>`;
  const list = document.querySelector("#todo-list");
  list.appendChild(listItem);
});
