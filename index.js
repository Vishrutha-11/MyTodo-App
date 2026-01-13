const input=document.getElementById('todo-input')
console.log('cyghj',input)

const btn=document.getElementById('add-btn')
console.log("dujk",btn)

const todoList=document.getElementById('todo-list')
console.log("yucgh",todoList)

btn.addEventListener('click',()=>{
    const item=input.value;
    addTodo(item);
    input.value="";
})


input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});


function addTodo(){
      const text = input.value.trim();
  if (!text) return;

    const li=document.createElement('li')
   li.className = "flex justify-between items-center w-[500px] border-b group";

    const label=document.createElement('label')
   label.className = "flex items-center gap-4 px-4 py-3 cursor-pointer ";

    const checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.className = "w-5 h-5 accent-teal-500 cursor-pointer ";

    const span=document.createElement('span')
    span.className="text-black"
    span.textContent=text;


const deleteBtn = document.createElement("button");
deleteBtn.className =
  "opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2";




label.appendChild(checkbox)
label.appendChild(span)

li.appendChild(label)
li.appendChild(deleteBtn)

todoList.appendChild(li);

input.value="";
}