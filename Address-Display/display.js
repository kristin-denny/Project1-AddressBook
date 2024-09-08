const mainPiece = document.querySelector("#addressTable tbody");

function printAddress(infoToAppend, indexOfItem) {
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

document.getElementById("Edit").addEventListener("click", function (event) {
  event.preventDefault();
  let keyId = document.getElementById("phone");
  let key = keyId.value;
  const indexOfEdit = localStorage.getItem(key);
  editEntry(indexOfEdit);
  window.location.assign("./Edit/edit.html");
});

document.getElementById("Delete").addEventListener("click", function (event) {
  event.preventDefault();
  let keyId = document.getElementById("phone");
  let key = keyId.value;
  const indexOfDelete = localStorage.getItem(key);
  const addressBook = JSON.parse(localStorage.getItem("addressBook"));
  addressBook.splice(indexOfDelete, 1);
  localStorage.setItem("addressBook", JSON.stringify(addressBook));
  window.location.assign("./index.html");
});
