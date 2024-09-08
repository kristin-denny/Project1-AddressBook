const mainPiece = document.querySelector("main");

const rows = document.querySelectorAll("table tbody tr");

rows.forEach((row) => {
  row.addEventListener("click", function () {
    this.classList.toggle("is-selected");
  });
});

function printAddress(infoToAppend) {
  const tbleRow = document.createElement("tr");

  const tblName = document.createElement("td");

  tblName.textContent = infoToAppend.name;

  const phone = document.createElement("td");
  const tblPhone = infoToAppend.phoneNumber;

  phone.textContent = tblPhone;
  phone.setAttribute("id", `${indexOfItem}`);

  const street = document.createElement("td");
  street.textContent = infoToAppend.streetAddress;

  const city = document.createElement("td");
  city.textContent = infoToAppend.city;

  const state = document.createElement("td");
  state.textContent = infoToAppend.state;

  tbleRow.appendChild(tblName);
  tbleRow.appendChild(tblPhone);
  tbleRow.appendChild(street);
  tbleRow.appendChild(city);
  tbleRow.appendChild(state);

  mainPiece.appendChild(tbleRow);

  localStorage.setItem(phoneText, indexOfItem);
}

function printTable() {
  if (localStorage.length == 0) {
    console.log("emptyempty");
  } else {
    for (var x = 1; x < localStorage.length; x++) {
      infoToPass = JSON.parse(localStorage.getItem(localStorage.key(x)));
      printAddress(infoToPass);
    }
  }
}

printTable();
