// Todo 데이터를 저장할 배열
let todos = [
  { id: 1, content: "할일이나 하자1", done: false, date: "2025-3-20" },
  { id: 2, content: "할일이나 하자2", done: false, date: "2025-3-20" },
  { id: 3, content: "할일이나 하자3", done: false, date: "2025-3-20" },
];

// 현재 날짜 표시
function displayCurrentDate() {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${
    currentDate.getMonth() + 1
  }-${currentDate.getDate()}`;
  document.getElementById("currentDate").innerText = formattedDate;
}

// Todo 목록 전체 출력
function renderTodos(todosToRender = todos) {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = ""; // 기존 내용 초기화

  todosToRender.forEach((todo) => {
    const todoItem = document.createElement("div");
    todoItem.className = "TodoItem";
    todoItem.innerHTML = `
        <input type="checkbox" ${todo.done ? "checked" : ""} data-id="${
      todo.id
    }" onchange="toggleTodo(${todo.id})"/>
        <div class="content" style="${
          todo.done ? "text-decoration: line-through" : ""
        }">${todo.content}</div>
        <div class="date">${todo.date}</div>
        <button onclick="deleteTodo(${todo.id})">삭제</button>
      `;
    todoList.appendChild(todoItem);
  });
}

// Todo 추가 기능
function addTodo(content) {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${
    currentDate.getMonth() + 1
  }-${currentDate.getDate()}`;

  const newTodo = {
    id: todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1,
    content: content,
    done: false,
    date: formattedDate,
  };

  todos.push(newTodo);
  renderTodos();
}

// Todo 완료 상태 변경
function toggleTodo(id) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, done: !todo.done };
    }
    return todo;
  });
  renderTodos();
}

// Todo 삭제
function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  renderTodos();
}

// Todo 검색
function searchTodos(keyword) {
  if (!keyword.trim()) {
    renderTodos(); // 검색어가 없으면 전체 목록 표시
    return;
  }

  const filtered = todos.filter((todo) =>
    todo.content.toLowerCase().includes(keyword.toLowerCase())
  );
  renderTodos(filtered);
}

// 이벤트 리스너 등록
document.addEventListener("DOMContentLoaded", () => {
  displayCurrentDate();
  renderTodos();

  // Todo 추가 폼 이벤트 리스너
  const todoForm = document.getElementById("todoForm");
  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const todoInput = document.getElementById("todoInput");
    const content = todoInput.value.trim();

    if (content) {
      addTodo(content);
      todoInput.value = "";
    }
  });

  // 검색 기능 이벤트 리스너
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", (e) => {
    searchTodos(e.target.value);
  });
});
