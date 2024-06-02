class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}

const arr = ["apple", "banana", "mango"];

const storage = new Storage(arr);

storage.addItem("orange");
console.log(storage.getItems());

storage.removeItem("banana");
console.log(storage.getItems());

const storageOutput = document.getElementById("storage-output");
storageOutput.innerHTML = `
    <p>Current Items: ${storage.getItems().join(", ")}</p>
`;
