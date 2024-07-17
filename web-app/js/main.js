import Todolist from "./todolist.js";
import todoitem from "./todoitem.js";

const todolist = new Todolist();

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initapp();
  }
});

const initapp = () => {
  const itementryform = document.getElementById("itementryform");
  itementryform.addEventListener("submit", (event) => {
    event.preventDefault();
    processsummisson();
  });

  const clearitems = documnet.getElementById("clearitems");
  clearitems.addEventListener("click", (event) => {
    const list = todolist.getlist();
    if (list.length) {
      const confirmed = confirm("Are you sure to clean the full list ?");
      if (confirmed) {
        todolist.clearlist();
        updatepersistentdata(todolist.getlist());
        refreshpage();
      }
    }
  });

  loadlistobject();
  refreshpage();
};

const loadlistobject = () => {
  const storedlist = localStorage.getItem("mytodolist");
  if (typeof storedlist != "string") return;
  const parsedlist = JSON.parse(storedlist);
  parsedlist.forEach((itemobj) => {
    const newdoitem = creatnewitem(itemobj._id, itemobj._item);
    todolist.additemtolist(newdoitem);
  });
};

const refreshpage = () => {
  clearlistdisplay();
  renderlist();
  clearitementryfield();
  setfocusonitementry();
};

const clearlistdisplay = () => {
  const parentelement = document.getElementById("listitems");
  deletecontents(parentelement);
};

const deletecontents = (parentelement) => {
  let child = parentelement.lastElementChild;
  while (child) {
    parentelement.removeChild(child);
    child = parentelement.lastElementChild;
  }
};

const renderlist = () => {
  const list = todolist.getlist();
  list.forEach((item) => {
    buildlistitem(item);
  });
};

const buildlistitem = (item) => {
  const div = document.createElement("div");
  div.className = "item";
  const check = document.createElement("input");
  check.type = "checkbox";
  check.id = item.getid();
  check.tabIndex = 0;
  addclicklistenertocheckbox(check);
  const label = document.createElement("label");
  label.htmlFor = item.getid();
  label.textContent = item.getitem();
  div.appendChild(check);
  div.appendChild(label);
  const container = document.getElementById("listitems");
  container.appendChild(div);
};

const addclicklistenertocheckbox = (checkbox) => {
  checkbox.addEventListener("click", (event) => {
    todolist.removeitemfromlist(checkbox.id);
    updatepersistentdata(todolist.getlist());
    setTimeout(() => {
      refreshpage();
    }, 1000);
  });
};

const updatepersistentdata = (listarr) => {
  localStorage.setItem("mytodolist", JSON.stringify(listarr));
};

const clearitementryfield = () => {
  document.getElementById("newitem").value = "";
};

const setfocusonitementry = () => {
  document.getElementById("newitem").focus();
};

const processsummisson = () => {
  const newentrytext = getNewEntry();
  if (!newentrytext.length) return;
  const nextitemid = calcnextitemid();
  const todoitem = creatnewitem(nextitemid, newentrytext);
  todolist.additemtolist(todoitem);
  updatepersistentdata(todolist.getlist());
  refreshpage();
};

const getNewEntry = () => {
  return document.getElementById("newitem").value.trim();
};

const calcnextitemid = () => {
  let nextitemid = 1;
  const list = todolist.getlist();
  if (list.length > 0) {
    nextitemid = list[list.length - 1].getid() + 1;
  }
  return nextitemid;
};

const creatnewitem = (itemid, itemtext) => {
  const todo = new todoitem();
  todo.setid(itemid);
  todo.setitem(itemtext);
  return todo;
};
