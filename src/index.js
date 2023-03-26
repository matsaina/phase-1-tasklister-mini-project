document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    buildData(e.target.new_task.value);
  });
  form.reset();
});

function buildData(form) {
  event.preventDefault();

  let btn = document.createElement("button");

  btn.addEventListener("click", (e) => {
    e.target.parentNode.remove();
  });

  let tasks = document.getElementById("tasks");
  let li = document.createElement("li");

  li.textContent = form;
  btn.textContent = "X";

  li.appendChild(btn);
  console.log(li);
  tasks.appendChild(li);
}
