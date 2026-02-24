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
  }