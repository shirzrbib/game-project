window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;

    if (!task) {
      alert("please fill out the task");
      return;
    }
    const task_el = document.createElement("div");
    task_el.classList.add("task");

    const task_content_ell = document.createElement("div");
    task_content_ell.classList.add("content");
    task_content_ell.innerText = task;

    task_el.appendChild(task_content_ell);

    const task_input_ell = document.createElement("input");
    task_input_ell.classList.add("text");
    task_input_ell.type = "text";
    task_input_ell.value = task;
    task_input_ell.setAttribute("readonly", "readonly");

    task_content_ell.appendChild(task_input_ell);

    const task_actions_ell = document.createElement("div");
    task_actions_ell.classList.add("actions");
    const task_edit_ell = document.createElement("button");
    task_edit_ell.classList.add("edit");
    task_edit_ell.innerHTML = "Edit";
    const task_delete_ell = document.createElement("button");
    task_delete_ell.classList.add("delete");
    task_delete_ell.innerHTML = "Delete";

    task_actions_ell.appendChild(task_edit_ell);
    task_actions_ell.appendChild(task_delete_ell);

    task_el.appendChild(task_actions_ell);

    list_el.appendChild("task_el");

    input.value = "";

    task_edit_ell.addEventListener("click", () => {
      if (task_edit_ell.innerText.toLocaleLowerCase == "edit") {
        task_input_ell.removeAttribute("readonly");
        task_input_ell.focus();
        task_edit_ell.innerText = "save";
      } else {
        task_input_ell.setAttribute("readonly", "readonly");
        task_edit_ell.innerText = "Edit";
      }
    });
    task_delete_ell.addEventListener("click", () => {
      list_el.removeChild(task_el);
    });
  });
});
