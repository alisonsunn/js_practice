// Select all
const selectAll = document.querySelector(".selectAll");
const options = document.getElementsByName("hobby");

selectAll.addEventListener("click", selectTotal);

function selectTotal() {
  for (let i = 0; i < options.length; i++) {
    options[i].checked = true;
  }

  update();
}

// Cancel all
const cancelAll = document.querySelector(".cancel");
cancelAll.addEventListener("click", cancelTotal);

function cancelTotal() {
  for (let i = 0; i < options.length; i++) {
    options[i].checked = false;
  };

  update();
}

// Reverse option
const reverseOption = document.querySelector(".inverse");
reverseOption.addEventListener("click", reverse);

function reverse() {
  for (let i = 0; i < options.length; i++) {
    options[i].checked = !options[i].checked;
  }

  update();
}

// Sumbit function
const sumbitOption = document.querySelector(".sumbit");
sumbitOption.addEventListener("click", sumbit);

function sumbit() {
  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      alert(options[i].value);
    }
  }
}

// Synchronize all
const allOption = document.getElementById("all");
allOption.addEventListener("click", all);

function all() {
  for (let i = 0; i < options.length; i++) {
    options[i].checked = allOption.checked;
  }
}

// If one of the options doesn't be chosen, allOption should not be chosen as well.
for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("change", update);
}

function update() {
  let number = 0;
  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      number += 1;
    }
  }

  if (number === options.length) {
    allOption.checked = true;
  } else {
    allOption.checked = false;
  }
}


