import store from "./store";

function initialLoad() {
  let initial = document.createElement("section");
  let initialItems = store.map(
    item => ` <section class="item">
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
  initial.setAttribute = ("id", "initial-items");
  initial.innerHTML = initialItems;
  document.body.appendChild(initial);
}

function addItem() {
  let newHtmlEl = document.createElement("section");
  let input = document.getElementById("Todoinput").value;
  newHtmlEl.setAttribute = ("id", "dome");
  newHtmlEl.innerHTML = ` <section class="item">
          <form>
            <label for="itemUpdater"></label>
            <input
              type="text"
              name="itemUpdater"
              class='itemUdapter'
              value=${input}
            ></input>
          </form>
          <button>done</button>
          <button>delete</button>
        </section>`;
  document.body.appendChild(newHtmlEl);
  //   let input = document.getElementById("Todoinput").value;
  //   console.log(`${input}`);
  //   let newHtml = `
  //     <section class="item">
  //         Hello
  //     </section>`;
  //   document.getElementById("dome").innerHtml = "hi";
}

initialLoad();
document.getElementById("todoBtn").addEventListener("click", () => addItem());
