const input=document.getElementById('todo-input')
console.log('cyghj',input)

const btn=document.getElementById('add-btn')
console.log("dujk",btn)

const todoList=document.getElementById('todo-list')
console.log("yucgh",todoList)


let currentFilter="all"
btn.addEventListener('click',()=>{
    const item=input.value;
    addTodo(item);
    input.value="";
    updateItemsLeft()

})


input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTodo();
    updateItemsLeft();
   
  }
});


function addTodo() {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.className =
    "flex relative justify-between items-center w-[500px] border-b group";

  // label
  const label = document.createElement("label");
  label.className = "flex items-center gap-4 px-4 py-3 cursor-pointer w-full";

  // checkbox (hidden)
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "hidden checkbox peer";

  const customBox = document.createElement("span");
customBox.className =
  "w-6 h-6 flex items-center justify-center rounded-md border border-gray-300";

// White tick
const checkIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
checkIcon.setAttribute("viewBox", "0 0 24 24");
checkIcon.setAttribute("fill", "none");
checkIcon.setAttribute("stroke-width", "3");
checkIcon.setAttribute("stroke-linecap", "round");
checkIcon.setAttribute("stroke-linejoin", "round");
checkIcon.classList.add("w-4", "h-4", "hidden"); // keep hidden initially

// Create path
const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute("d", "M5 13l4 4L19 7");
path.setAttribute("stroke", "white"); // ✅ force white color

checkIcon.appendChild(path);
customBox.appendChild(checkIcon);

  // todo text
  const span = document.createElement("span");
  span.textContent = text;
  span.className = "text-gray-900 transition-all";

  // ✅ HANDLE CHECK LOGIC WITH JS (IMPORTANT)
 checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    customBox.classList.add("bg-teal-500", "border-teal-500");
    checkIcon.classList.remove("hidden"); // show tick
    span.classList.add("line-through", "text-yellow-700");
  } else {
    customBox.classList.remove("bg-teal-500", "border-teal-500");
    checkIcon.classList.add("hidden"); // hide tick
    span.classList.remove("line-through", "text-yellow-700");
  }
  updateItemsLeft()
});
applyStatusFilter()


  // delete button
  const deleteBtn = document.createElement("button");
 deleteBtn.className =
  "absolute right-2 top-1/2 -translate-y-1/2 " +
  "opacity-0 group-hover:opacity-100 transition-opacity p-2";

  deleteBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg"
      class="w-5 h-5 text-red-400 hover:text-red-500"
      viewBox="0 0 20 20" fill="currentColor">
      <path d="M6 2a1 1 0 00-1 1v1H3v2h14V4h-2V3a1 1 0 00-1-1H6zM5 6v11a2 2 0 002 2h6a2 2 0 002-2V6H5z"/>
    </svg>
  `;
  deleteBtn.onclick = () => {
    li.remove();
  updateItemsLeft()
  }
  applyStatusFilter()

  // append
  label.appendChild(checkbox);
  label.appendChild(customBox);
  label.appendChild(span);

  li.appendChild(label);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  input.value = "";
 applyStatusFilter()
}


const clearCompleted = document.getElementById("Clear-Completed");

clearCompleted.addEventListener("click", () => {

  const allTodos = document.querySelectorAll("#todo-list li");

  allTodos.forEach(todoItem => {
    
    const checkbox = todoItem.querySelector("input[type='checkbox']");

    if (checkbox.checked) {
    
      todoItem.remove();
    }
  });
  updateItemsLeft()

});

  updateItemsLeft();
function updateItemsLeft() {
  const itemsLeftEl = document.getElementById('items-left');
  if (!itemsLeftEl) return;

  // Select all todo items (li)
  const allTodos = document.querySelectorAll('#todo-list li');
  let remaining = 0;

  allTodos.forEach(todoItem => {
    const checkbox = todoItem.querySelector("input[type='checkbox']");
    if (checkbox && !checkbox.checked) {
      remaining++;
    }
  });

  itemsLeftEl.innerHTML = `
    <span class="text-teal-500 font-bold">${remaining}</span>
    <span class="text-[#a8a29e] ml-1">item${remaining !== 1 ? 's' : ''}  </span> <span class="text-[#a8a29e] ml-1">left</span>
  `;
}

const filterstatus = document.querySelectorAll(".filter-btn");

filterstatus.forEach(btn => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.filter;

    // reset styles
    filterstatus.forEach(b => {
      b.classList.remove("bg-teal-500", "text-white", "font-medium");
      b.classList.add("text-[#a8a29e]");
    });

    // active style
    btn.classList.add("bg-teal-500", "text-white", "font-medium");
    btn.classList.remove("text-[#a8a29e]");

    applyStatusFilter();
  });
});



function applyStatusFilter() {
  const allTodos = document.querySelectorAll('#todo-list li');

  allTodos.forEach(todoLi => {
    const checkbox = todoLi.querySelector('input[type="checkbox"]');
    const isCompleted = checkbox ? checkbox.checked : false;

    if (currentFilter === "all") {
      todoLi.style.display = "block";
    } else if (currentFilter === "active") {
      todoLi.style.display = isCompleted ? "none" : "block";
    } else if (currentFilter === "completed") {
      todoLi.style.display = isCompleted ? "block" : "none";
    }
  });
}
