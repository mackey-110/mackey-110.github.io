// todo 데이터를 저장할 배열

let todos = [
    { id : 1, content: "할일 1", done : false, date: "2025-3-20"},
    { id : 2, content: "할일 2", done : false, date: "2025-3-20"}.
    { id : 3, content: "할일 3", done : false, date: "2025-3-20"}
];

//현재 날짜 표시
function displayCurrentDate() {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1} - ${currentDate.geetDate()}`;
    document.getElementById(`currentDate`).innerText = formattedDate;
}

// todo 목록 전체 출력
function renderTodos(todosToRender = todos) {
    const
}