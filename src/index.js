document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
    e.preventDefault()
    taskLister(e.target.new-task-description.value)
  })
});

function taskLister(task) {
  let li = document.createElement("li");
  let btn = document.createElement("button");
  li.textContent=`${task}`;
  btn.textContent = ("x");
  btn.addEventListener('click', handleDelete);
  li.appendChild(btn);
  console.log('li')
  document.querySelector("#tasks").appendChild(li)

}

function handleDelete(e){
  e.target.parentNode.remove()
}