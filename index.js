/* ===================== DOM ELEMENTS ===================== */
const input = document.getElementById("todo-input");
const btn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const clearCompleted = document.getElementById("Clear-Completed");

/* ===================== STATE ===================== */
let currentFilter = "all";

// Auto colors (rotating)
const todoColors = [
  "bg-green-500",
  "bg-blue-500",
  "bg-red-500",
  "bg-purple-500",
  "bg-orange-500"
];
let colorIndex = 0;

/* ===================== ADD TODO ===================== */
btn.addEventListener("click", addTodo);

input.addEventListener("keydown", e => {
  if (e.key === "Enter") addTodo();
});

function addTodo() {
  const text = input.value.trim();
  if (!text) return;

  // ✅ auto assign color
  const todoColor = todoColors[colorIndex];
  colorIndex = (colorIndex + 1) % todoColors.length;

  const li = document.createElement("li");
  li.className =
    "flex relative justify-between items-center w-[500px] border-b group";

  /* ---------- label ---------- */
  const label = document.createElement("label");
  label.className =
    "flex items-center gap-4 px-4 py-3 cursor-pointer w-full";

  /* ---------- checkbox ---------- */
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "hidden peer";

  /* ---------- custom checkbox ---------- */
  const customBox = document.createElement("span");
  customBox.className =
    "w-6 h-6 flex items-center justify-center rounded-md border border-gray-300";

  const checkIcon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  checkIcon.setAttribute("viewBox", "0 0 24 24");
  checkIcon.setAttribute("fill", "none");
  checkIcon.setAttribute("stroke-width", "3");
  checkIcon.setAttribute("stroke-linecap", "round");
  checkIcon.setAttribute("stroke-linejoin", "round");
  checkIcon.classList.add("w-4", "h-4", "hidden");

  const path = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  path.setAttribute("d", "M5 13l4 4L19 7");
  path.setAttribute("stroke", "white");

  checkIcon.appendChild(path);
  customBox.appendChild(checkIcon);

  /* ---------- text ---------- */
  const span = document.createElement("span");
  span.textContent = text;
  span.className = "text-gray-900 transition-all";

  /* ---------- color dot ---------- */
  const colorDot = document.createElement("span");
  colorDot.className =
    `absolute right-10 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full ${todoColor}`;

  /* ---------- checkbox logic ---------- */
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      customBox.classList.add("bg-teal-500", "border-teal-500");
      checkIcon.classList.remove("hidden");
      span.classList.add("line-through", "text-yellow-700");
    } else {
      customBox.classList.remove("bg-teal-500", "border-teal-500");
      checkIcon.classList.add("hidden");
      span.classList.remove("line-through", "text-yellow-700");
    }
    updateItemsLeft();
    applyStatusFilter();
  });

  /* ---------- delete ---------- */
  const deleteBtn = document.createElement("button");
  deleteBtn.className =
    "absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity p-2";

  deleteBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg"
      class="w-5 h-5 text-red-400 hover:text-red-500"
      viewBox="0 0 20 20" fill="currentColor">
      <path d="M6 2a1 1 0 00-1 1v1H3v2h14V4h-2V3a1 1 0 00-1-1H6zM5 6v11a2 2 0 002 2h6a2 2 0 002-2V6H5z"/>
    </svg>
  `;

  deleteBtn.onclick = () => {
    li.remove();
    updateItemsLeft();
  };

  /* ---------- append ---------- */
  label.appendChild(checkbox);
  label.appendChild(customBox);
  label.appendChild(span);

  li.appendChild(label);
  li.appendChild(colorDot);
  li.appendChild(deleteBtn);

  todoList.appendChild(li);

  input.value = "";
  updateItemsLeft();
  applyStatusFilter();
}

/* ===================== CLEAR COMPLETED ===================== */
clearCompleted.addEventListener("click", () => {
  document.querySelectorAll("#todo-list li").forEach(todo => {
    const checkbox = todo.querySelector("input[type='checkbox']");
    if (checkbox && checkbox.checked) todo.remove();
  });
  updateItemsLeft();
});

/* ===================== ITEMS LEFT ===================== */
function updateItemsLeft() {
  const itemsLeftEl = document.getElementById("items-left");
  if (!itemsLeftEl) return;

  let remaining = 0;
  document.querySelectorAll("#todo-list li").forEach(todo => {
    const checkbox = todo.querySelector("input[type='checkbox']");
    if (checkbox && !checkbox.checked) remaining++;
  });

  itemsLeftEl.innerHTML = `
    <span class="text-teal-500 font-bold">${remaining}</span>
    <span class="text-[#a8a29e] ml-1">
      item${remaining !== 1 ? "s" : ""} left
    </span>
  `;
}

/* ===================== FILTERS ===================== */
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.filter;

    document.querySelectorAll(".filter-btn").forEach(b => {
      b.classList.remove("bg-teal-500", "text-white", "font-medium");
      b.classList.add("text-[#a8a29e]");
    });

    btn.classList.add("bg-teal-500", "text-white", "font-medium");
    btn.classList.remove("text-[#a8a29e]");

    applyStatusFilter();
  });
});

function applyStatusFilter() {
  document.querySelectorAll("#todo-list li").forEach(todo => {
    const checkbox = todo.querySelector("input[type='checkbox']");
    const completed = checkbox?.checked;

    if (currentFilter === "all") {
      todo.style.display = "block";
    } else if (currentFilter === "active") {
      todo.style.display = completed ? "none" : "block";
    } else {
      todo.style.display = completed ? "block" : "none";
    }
  });
}
