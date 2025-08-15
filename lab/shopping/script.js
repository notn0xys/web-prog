function handleAdd() {
    const nameElement = document.getElementById("name");
    const amountElement = document.getElementById("amount");
    const priceElement = document.getElementById("price");
    const name = nameElement.value;
    const amount = amountElement.value;
    const price = priceElement.value;
    const rowContain = document.createElement('div')
    rowContain.className = "table-element";
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');

    p1.textContent = name;
    p2.textContent = amount;
    p3.textContent = price;
    rowContain.append(p1,p2,p3);
    const container = document.getElementById("table-con");
    container.appendChild(rowContain);
}

function clearinput() {
    const name = document.getElementById("name");
    const amount = document.getElementById("amount");
    const price = document.getElementById("price");
    name.value = "";
    amount.value = "";
    price.value = "";
}
function clearDocuments() {
    const container = document.getElementById("table-con");
    const children = Array.from(container.children);
    for (let i = 0; i < children.length; i++) {
        if (children[i].id !== "Head" ) {
            container.removeChild(children[i]);
            console.log("Removed")
        }
    }
}