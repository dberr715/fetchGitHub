"use strict";
async function getWithAwait(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error right here!", error);
    }
  };
  document.addEventListener("DOMContentLoaded", async function () {
    console.log("iT bE loAdEd");
  })
