const btn = document.querySelector(".add-button");
const inp = document.querySelector("input");
const cancel1 = document.querySelector(".cancel1");
const cancel2 = document.querySelector(".cancel2");
const ul = document.querySelector(".classOl");
const sortBtn = document.querySelector(".sort");
const taskList = document.querySelector(".task-list");
const tasks = [];

btn.addEventListener("click", () => {
  const inputValue = inp.value.trim();
  if (inputValue === "") {
    alert("Write something");
  } 
  else {
    const li = document.createElement("li");
    li.innerText = inp.value;
    const imgElement = document.createElement("img");
    imgElement.src ="svg/Group56.svg";
    imgElement.classList.add("imgelement");
    imgElement.addEventListener("mouseover", (event) => {
      event.target.src ="svg/Group70.svg";
    });
    imgElement.addEventListener("mouseleave", (event) => {
      event.target.src ="svg/Group56.svg";
    });
    imgElement.addEventListener("click", (event) => {
      const taskIndex = tasks.indexOf(li.innerText);
      if (taskIndex !== -1) {
        tasks.splice(taskIndex,1);
      }
      li.remove();
      if (tasks.length === 0) {
        taskList.classList.remove("dis-none");
      }
      orderList();
    });
    li.append(imgElement);
    ul.append(li);
    tasks.push(inputValue);

    inp.value = "";
  }
});
document.querySelector(".list img").addEventListener("mouseover", event => {
  event.target.src = "svg/Group70.svg"
})

document.querySelector(".list img").addEventListener("mouseleave", event => {
  event.target.src = "svg/Group56.svg"
})
function orderList() {
  ul.innerHTML = "";

  tasks.forEach((taskText) => {
    const li = document.createElement("li");
    li.innerText = taskText;
    const imgElement = document.createElement("img");
    imgElement.src = "svg/Group56.svg";
    imgElement.classList.add("imgelement");

    imgElement.addEventListener("mouseover", (event) => {
      event.target.src = "svg/Group70.svg";
    });

    imgElement.addEventListener("mouseleave", (event) => {
      event.target.src = "svg/Group56.svg";
    });
    imgElement.addEventListener("click", (event) => {
      const taskIndex = tasks.indexOf(li.innerText);
      if (taskIndex !== -1) {
        tasks.splice(taskIndex,1);
      }
      li.remove();
      if (tasks.length === 0) {
        taskList.classList.remove("dis-none");
      }
      orderList();
    });
    li.append(imgElement);
    ul.append(li);
  });
}
document.querySelector(".sort img").addEventListener("mouseleave", event => {
  if (event.target.classList.contains("reverse")) {
    event.target.src = "svg/Group90.svg";
  }
  else {
    event.target.src = "./svg/Group74.svg";
  }
})

document.querySelector(".sort img").addEventListener("mouseover", event => {
  if (event.target.classList.contains("reverse")) {
    event.target.src = "svg/Group91.svg";
  }
  else {
    event.target.src = "svg/Group73.svg";
  }
})
sortBtn.addEventListener("click", () => {
  if (sortBtn.classList.contains("reverse")) {
    tasks.reverse();
    sortBtn.src = "svg/Group73.svg";
  } else {
    tasks.sort();
    sortBtn.src = "svg/Group74.svg";
  }
  sortBtn.classList.toggle("reverse");
  orderList();
});
cancel1.addEventListener("click", () => {
  inp.value = "";
});

cancel2.addEventListener("click", () => {
  inp.value = "";
});