// ---------- STORAGE KEY ----------
const STORAGE_KEY = "shopping_list_items";

// ---------- ELEMENTS ----------
const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const listEl = document.getElementById("list");
const resetBtn = document.getElementById("resetBtn");

// ---------- STATE ----------
let items = []; // array of objects: { text: "milk", bought: false }

// ---------- FUNCTIONS ----------
function saveToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function loadFromStorage() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    items = JSON.parse(data);
  } else {
    items = [];
  }
}

function renderList() {
  listEl.innerHTML = "";

  for (let i = 0; i < items.length; i++) {
    const li = document.createElement("li");
    if (items[i].bought) li.classList.add("bought");

    const textSpan = document.createElement("span");
    textSpan.textContent = items[i].text;

    const actions = document.createElement("div");
    actions.className = "actions";

    // toggle bought button
    const toggleBtn = document.createElement("button");
    toggleBtn.className = "small";
    toggleBtn.textContent = items[i].bought ? "Unbuy" : "Bought";
    toggleBtn.addEventListener("click", () => {
      items[i].bought = !items[i].bought;
      saveToStorage();
      renderList();
    });

    // delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "small";
    deleteBtn.style.background = "#ef4444";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      items.splice(i, 1);
      saveToStorage();
      renderList();
    });

    actions.appendChild(toggleBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(textSpan);
    li.appendChild(actions);

    listEl.appendChild(li);
  }
}

// ---------- EVENTS ----------
addBtn.addEventListener("click", () => {
  const text = itemInput.value.trim();
  if (text === "") return;

  items.push({ text: text, bought: false });
  itemInput.value = "";

  saveToStorage();
  renderList();
});

// allow Enter key to add
itemInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

resetBtn.addEventListener("click", () => {
  items = [];
  saveToStorage();
  renderList();
});

// ---------- INITIAL ----------
loadFromStorage();
renderList();
