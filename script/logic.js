let interviewList = [];
let rejectedList = [];
let currentStatus = "all";

let total = document.getElementById("all");
let totals = document.querySelector(".totals");

let interviewCount = document.getElementById("int_count");
let rejectedCount = document.getElementById("rej_count");

let allcards = document.getElementById("allcard");

const generate = document.getElementById("generate");
const rejDiv = document.getElementById("rejecdiv");
const mainContainer = document.querySelector("main");

const allButton = document.getElementById("all_btn");
const interButton = document.getElementById("int_btn");
const rejectButton = document.getElementById("rej_btn");

function calculateCount() {
  total.innerText = allcards.children.length;
  totals.innerText = allcards.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}

function toggle(id) {
  allButton.classList.add("btn-soft");
  interButton.classList.add("btn-soft");
  rejectButton.classList.add("btn-soft");

  allButton.classList.remove("btn-info");
  interButton.classList.add("btn-info");
  rejectButton.classList.add("btn-info");

  const selected = document.getElementById(id);
  currentStatus = id;
  selected.classList.remove("btn-soft");
  selected.classList.add("btn-info");

  if (id == "int_btn") {
    allcards.classList.add("hidden");
    generate.classList.remove("hidden");
    addDiv();
  } else if (id == "all_btn") {
    allcards.classList.remove("hidden");
    generate.classList.add("hidden");
    document.getElementById("empthy").style.display = "none";
  } else if (id == "rej_btn") {
    allcards.classList.add("hidden");
    generate.classList.remove("hidden");
    rejaddDiv();
  }
}

mainContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("int_btn")) {
    const parentNode = e.target.parentNode.parentNode.parentNode;
    const jobName = parentNode.querySelector(".card-title").innerText;
    const status = parentNode.querySelector(".notApplied");
    const positions = parentNode.querySelector(".position").innerText;
    const salery = parentNode.querySelector(".salery").innerText;
    const describe = parentNode.querySelector(".describe").innerText;

    status.innerText = "Interviwed";
    status.classList.add("btn-success");

    const cardInfo = {
      jobName: jobName.trim(),
      positions,
      salery,
      status,
      describe,
    };

    const jobExist = interviewList.find(
      (item) => item.jobName == cardInfo.jobName,
    );
    if (!jobExist) {
      interviewList.push(cardInfo);
    }

    rejectedList = rejectedList.filter(
      (item) => item.jobName != cardInfo.jobName,
    );

    calculateCount();

    if (currentStatus == "rej_btn") {
      rejaddDiv();
    }
  } else if (e.target.classList.contains("rejs_btn")) {
    const parentNode = e.target.parentNode.parentNode.parentNode;
    const jobName = parentNode.querySelector(".card-title").innerText;
    const status = parentNode.querySelector(".notApplied");
    const positions = parentNode.querySelector(".position").innerText;
    const salery = parentNode.querySelector(".salery").innerText;
    const describe = parentNode.querySelector(".describe").innerText;

    status.innerText = "Rejected";
    status.classList.add("btn-error");

    const cardInfo = {
      jobName: jobName.trim(),
      positions,
      salery,
      status,
      describe,
    };

    const jobExist = rejectedList.find(
      (item) => item.jobName == cardInfo.jobName,
    );
    if (!jobExist) {
      rejectedList.push(cardInfo);
    }

    interviewList = interviewList.filter(
      (item) => item.jobName != cardInfo.jobName,
    );

    if (currentStatus == "int_btn") {
      addDiv();
    }
    calculateCount();
  } else if (e.target.classList.contains("apps_btn")) {
    const parentNode = e.target.parentNode.parentNode.parentNode;
    const status = parentNode.querySelector(".notApplied");
    status.innerText = "Applied";
    status.classList.add("btn-primary");
  } else if (e.target.classList.contains("fa-regular")) {
    const parentNode = e.target.parentNode.parentNode.parentNode;
    const jobName = parentNode.querySelector(".card-title").innerText;
    interviewList = interviewList.filter((item) => item.jobName !== jobName);
    rejectedList = rejectedList.filter((item) => item.jobName !== jobName);
    parentNode.remove();
    calculateCount();
    if (currentStatus == "int_btn") {
      addDiv();
    }
    if (currentStatus == "rej_btn") {
      rejaddDiv();
    }
  }
});

function addDiv() {
  generate.innerHTML = "";
  if (interviewList.length === 0) {
    document.getElementById("empthy").style.display = "block";
  } else {
    document.getElementById("empthy").style.display = "none";
    for (let part of interviewList) {
      let div = document.createElement("div");
      div.className = "card bg-base-100 card-xs shadow-sm mt-4";
      div.innerHTML = `
    <div class="p-4 space-y-2">
          <div class="flex justify-between">
            <h2 class="card-title">${part.jobName}</h2>
            <i class="fa-regular fa-trash-can"></i>
          </div>
          <p class="position text-neutral/50">${part.positions}</p>
          <p class="salery text-neutral/50">${part.salery}</p>
          <button class="notApplied btn btn-success">Interviwed</button>
          <p class="describe text-neutral">${part.describe}</p>
          <div class="">
            <button id="card1" onclick="getApplied('card1')" class=" btn btn-outline btn-primary">Applied</button>
            <button id="interview1" onclick="getInterview('interview1')"
              class="btn btn-outline btn-success">Interview</button>
            <button class="btn btn-outline btn-error rejs_btn">Rejected</button>
          </div>
        </div>
   `;
      generate.appendChild(div);
    }
  }
}


function rejaddDiv() {
  generate.innerHTML = "";
  if (rejectedList.length === 0) {
    document.getElementById("empthy").style.display = "block";
  } else {
    document.getElementById("empthy").style.display = "none";
    for (let cancel of rejectedList) {
      let div = document.createElement("div");
      div.className = "card bg-base-100 card-xs shadow-sm mt-4";
      div.innerHTML = `
    <div class="p-4 space-y-2">
          <div class="flex justify-between">
            <h2 class="card-title">${cancel.jobName}</h2>
            <i class="fa-regular fa-trash-can"></i>
          </div>
          <p class="position text-neutral/50">${cancel.positions}</p>
          <p class="salery text-neutral/50">${cancel.salery}</p>
          <button class="notApplied btn btn-error">Rejected</button>
          <p class="describe text-neutral">${cancel.describe}</p>
          <div class="">
            <button id="card1" onclick="getApplied('card1')" class=" btn btn-outline btn-primary">Applied</button>
            <button id="interview1" onclick="getInterview('interview1')"
              class="btn btn-outline btn-success">Interview</button>
            <button class="btn btn-outline btn-error rejs_btn">Rejected</button>
          </div>
        </div>
   `;
      generate.appendChild(div);
    }
  }
}