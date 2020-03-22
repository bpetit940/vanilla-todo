// import store from "./store.js";
// High level: read from store, generate elements, place in DOM
// for each item:
//    - make new element
//    - drop into DOM
//

class Model {
  constructor() {
    this.state = [
      { id: 1, name: "Get groceries", checked: true },
      { id: 2, name: "Survive pandemic", checked: false }
    ];
  }

  addTodo = name => {
    const newTodo = {
      id: this.state.length > 0 ? this.state.length + 1 : 1,
      name: name,
      checked: false
    };
    this.state.push(newTodo);
  };

  updateTodo = (id, newName) => {
    this.state = this.state.map(todo =>
      todo.id === id
        ? { id: todo.id, name: newName, checked: todo.check }
        : todo
    );
  };

  deleteTodo = id => {
    this.state = this.state.filter(todo => todo.id !== id);
    this.onTodoListChanged(this.state);
  };

  toggleChecked = id => {
    this.state = this.state.map(todo => {
      todo.id === id
        ? { id: todo.id, name: todo.name, checked: !todo.checked }
        : todo;
    });
  };

  bindTodoListChanged = fn => {
    this.onTodoListChanged = fn;
  };
}

class View {
  constructor() {
    this.input = document.getElementById("Todoinput").value;
  }

  makeNewTodo = item => {
    let newHtml = `
          <form>
            <label for="itemUpdater"></label>
            <input
              type="text"
              name="itemUpdater"
              class='itemUdapter'
              value='${item.name}'
              id='${item.id}'
            ></input>
          </form>
          <button id='done'>done</button>
          <button id='delete'>delete</button>`;
    let container = document.createElement("section");
    container.className = "item";
    container.innerHTML = newHtml;
    return container;
  };
  initialLoad = store => {
    for (const item of store) {
      let newTodoElement = this.makeNewTodo(item);
      document.getElementById("dome").appendChild(newTodoElement);
    }
  };

  bindAddTodo = handler => {
    let input = document.getElementById("Todoinput").value;
    document
      .getElementById("todoBtn")
      .addEventListener("click", () => handler(input));
  };

  bindDeleteTodo = handler => {
    document
      .getElementById("delete")
      .addEventListener("click", event =>
        handler(event.target.parentElement.id)
      );
  };

  bindCheckedTodo = handler => {
    document
      .getElementById("done")
      .addEventListener("click", event =>
        handler(event.target.parentElement.id)
      );
  };
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.onTodoListChanged(this.model.state);
    this.view.bindAddTodo(this.handleAddTodo);
    this.view.bindDeleteTodo(this.handleDeleteTodo);
    this.view.bindCheckedTodo(this.handleCheckedTodo);
    this.model.bindTodoListChanged(this.onTodoListChanged);
  }

  onTodoListChanged = todos => {
    this.view.initialLoad(todos);
  };

  handleAddTodo = newTodoName => {
    this.model.addTodo(newTodoName);
  };

  handleDeleteTodo = id => {
    this.model.deleteTodo(id);
  };

  handleCheckedTodo = id => {
    this.model.toggleChecked(id);
  };
}

const app = new Controller(new Model(), new View());
//

// let initial = document.createElement("section");
// let initialItems = store.map(item => makeNewTodo(item));
// initial.id = "dome";
// let newInitialItems = initialItems.join("");
// initial.innerHTML = newInitialItems;
// document.getElementById("dome").appendChild(initial);

// let counter = 0;

// function addItem() {
//   let newItem = { name: input, checked: false };
//   console.log(newItem);
//   store.push(newItem);
//   let addedTodo = makeNewTodo(newItem);
//   document.getElementById("dome").appendChild(addedTodo);
// }

// export { initialLoad, addItem };
