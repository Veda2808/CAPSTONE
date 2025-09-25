let data = {};

fetch("data.json")
  .then(response => response.json())
  .then(json => {
    data = json;
    populateSelect();
  });

function populateSelect() {
  const select = document.getElementById("itemSelect");
  Object.keys(data).forEach(key => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = data[key].name;
    select.appendChild(option);
  });
}

function showFootprint() {
  const select = document.getElementById("itemSelect");
  const key = select.value;
  const result = document.getElementById("result");
  result.innerHTML = "";

  if (!key) {
    result.innerHTML = "<p>Please select an item first.</p>";
    return;
  }

  const item = data[key];
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h2>${item.name}</h2>
    <p><b>Total Water Footprint:</b> ${item.total} L</p>
    <p><b>Breakdown:</b> Blue: ${item.blue} L, Green: ${item.green} L, Grey: ${item.grey} L</p>
    <p><b>Tip:</b> ${item.tip}</p>
  `;

  if (item.equivalents && item.equivalents.length > 0) {
    const eqList = document.createElement("ul");
    eqList.innerHTML = "<b>Equivalents:</b>";
    item.equivalents.forEach(eq => {
      const li = document.createElement("li");
      li.textContent = eq;
      eqList.appendChild(li);
    });
    card.appendChild(eqList);
  }

  if (item.reason) {
    const reasonP = document.createElement("p");
    reasonP.innerHTML = `<b>Why so high?</b> ${item.reason}`;
    card.appendChild(reasonP);
  }

  result.appendChild(card);
}

// Dark Mode Toggle
document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Animated Counter
let count = 0;
function animateCounter() {
  const counter = document.getElementById("litersSaved");
  if (count < 1200) { // Example value
    count += 10;
    counter.textContent = count;
    setTimeout(animateCounter, 30);
  }
}
animateCounter();
