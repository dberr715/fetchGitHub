"use strict";
//the API fetch function
async function getWithAwait(url) {
  console.log(url);
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    makeUserInfoList(data.name);
    makeUserInfoList(data.location);
    makeUserInfoList(data.public_repos);
    return data;
  } catch (error) {
    console.error("Error right here!", error);
  }
}

const paraFilled = document.querySelector("#listSpot");
const resetIt = document.getElementById("userInfoList").reset();

function makeUserInfoList(value) {
  const para1 = document.createElement("p");
  para1.innerHTML = value;

  paraFilled.appendChild(para1);
}

//this one is not working yet
function UserProfilePic(value) {
  const img = document.createElement("img");
  img.src = data.avatar_url;
  document.body.appendChild(img);
}

document.addEventListener("DOMContentLoaded", async function () {
  console.log("iT bE loAdEd");

  
});

document.addEventListener("submit", async function (e) {
  e.preventDefault();

  const userName = document.querySelector("#userName").value;
  const apiUrl = `https://api.github.com/users/${userName}`;

  await getWithAwait(apiUrl);
  const resetIt = document.getElementById("userInfoList");
  resetIt.reset();

  // makeAListElement.append(listElement);
});

//   console.log(getWithAwait(`https://api.github.com/users/${userName1}`))
// const listSpot = document.querySelector("#listSpot");
//defining API url template
// const apiUrl =`https://api.github.com/users/${userName}`;

// makeAListElement.addEventListener('submit', function (e){
//     e.preventDefault();

//     const apiUrl =`https://api.github.com/users/${userName}`;
//     makeUserInfoList(apiUrl)

// });

// async function makeMeAList(apiUrl) {
//   // get(apiUrl).then(function (response) {
//   //     console.log("RESPONSE", response);

//   //   });
//   const response = await getWithAwait(apiUrl);
//   theList(response.value, chuckQuote);
// }
// function theList(item, element) {
//   element.innerText = item;
// }

// //actually fetching the data from API
//     // async function makeAList(apiUrl){
//         //   const whatWeGetBack = await getWithAwait(apiUrl);
//         //       makeAList(whatWeGetBack.name);

// function supplyUserInfo(userName) {
//   console.log(userName);

//   const infoList = document.createElement("ul");
//   userName.map(function () {});
// }
