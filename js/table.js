// delete column
const tbody = document.querySelector(".tbody");
const deleteOption = document.getElementsByTagName("tr");
const deleteaTag = document.getElementsByTagName("a");
console.log(deleteOption);
console.log(deleteaTag);

// for (let i = 0; i < deleteOption.length; i++) {
//   deleteOption[i].lastElementChild.addEventListener("click", deleteElement);
// }

document.addEventListener("click", deleteElement);

// 这种方式是检查点击的元素的父节点的父节点是否为tr元素
function deleteElement(e) {
  let tr = e.target.parentNode.parentNode;
  if ([...deleteOption].includes(tr)) {
    console.log("true");
    if (window.confirm("Do you really want to delete?")) tr.remove();
  } 
}

// append column
const appendOption = document.getElementById("appendButton");
console.log(appendOption);

const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userSalary = document.getElementById("salary");

appendOption.addEventListener("click", appendUser);

function appendUser() {
  const tr = document.createElement("tr");
  const thName = document.createElement("th");
  const tdEmail = document.createElement("td");
  const tdSalary = document.createElement("td");
  const tdOption = document.createElement("td");

  tr.appendChild(thName);
  tr.appendChild(tdEmail);
  tr.appendChild(tdSalary);
  tr.appendChild(tdOption);

  thName.innerText = userName.value;
  tdEmail.innerText = userEmail.value;
  tdSalary.innerText = userSalary.value;
  tdOption.insertAdjacentHTML("beforeend",`<td><a href="#">delete</a></td>`) 

  tbody.appendChild(tr);

  tdOption.addEventListener("click",deleteElement);

  //clear the input content
  userName.value = "";
  userEmail.value = "";
  userSalary.value = "";
}