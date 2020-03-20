import store from "./store.js";

function initialLoad() {
  let initial = document.createElement("section");
  let initialItems = store.map(
    item => `<section class="item">
          <form>
            <label for="itemUpdater"></label>
            <input
              type="text"
              name="itemUpdater"
              class='itemUdapter'
              value=${item.name}
            ></input>
          </form>
          <button>done</button>
          <button>delete</button>
        </section>`
  );
  //   let container = `<section id="dome">${initialItms}</section>`
  initial.id = "dome";
  initialItems.join("&#44");
  initial.innerHTML = initialItems;
  document.getElementById("dome").replaceWith(initial);
}

function addItem() {
  let input = document.getElementById("Todoinput").value;
  let newItem = { name: input, checked: false };
  console.log(newItem);
  store.push(newItem);
  initialLoad();
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
