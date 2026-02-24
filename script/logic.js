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
