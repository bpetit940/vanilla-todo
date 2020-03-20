import store from "./store.js";
// High level: read from store, generate elements, place in DOM
// for each item:
//    - make new element
//    - drop into DOM
//

function initialLoad() {
  for (const item of store) {
    let newTodoElement = makeNewTodo(item);
    document.getElementById("dome").appendChild(newTodoElement);
  }
  //

  // let initial = document.createElement("section");
  // let initialItems = store.map(item => makeNewTodo(item));
  // initial.id = "dome";
  // let newInitialItems = initialItems.join("");
  // initial.innerHTML = newInitialItems;
  // document.getElementById("dome").appendChild(initial);
}

const makeNewTodo = item => {
  let newHtml = `
          <form>
            <label for="itemUpdater"></label>
            <input
              type="text"
              name="itemUpdater"
              class='itemUdapter'
              value='${item.name}'
            ></input>
          </form>
          <button>done</button>
          <button>delete</button>`;
  let container = document.createElement("section");
  container.className = "item";
  container.innerHTML = newHtml;
  return container;
};

function addItem() {
  let input = document.getElementById("Todoinput").value;
  let newItem = { name: input, checked: false };
  console.log(newItem);
  store.push(newItem);
  let addedTodo = makeNewTodo(newItem);
  document.getElementById("dome").appendChild(addedTodo);
  //   let newHtmlEl = document.createElement("section");
  //   let input = document.getElementById("Todoinput").value;
  //   newHtmlEl.setAttribute = ("id", "dome");
  //   newHtmlEl.innerHTML = ` <section class="item">
  //           <form>
  //             <label for="itemUpdater"></label>
  //             <input
  //               type="text"
  //               name="itemUpdater"
  //               class='itemUdapter'
  //               value=${input}
  //             ></input>
  //           </form>
  //           <button>done</button>
  //           <button>delete</button>
  //         </section>`;
  //   document.body.appendChild(newHtmlEl);
}

export { initialLoad, addItem };
