// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Julianne Leblanc-Peltier
// Created on: June 2024
// This file contains the JS functions for index.html
"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICD2O-Unit-6-02-Julianne-Leblanc-Peltier/sw.js", {
    scope: "/ICD2O-Unit-6-02-Julianne-Leblanc-Peltier/",
  })
}

let cookieCount = 0

function updateCookieCount() {
  // save to local storage
  console.log(localStorage.cookieCount)
  if (localStorage.cookieCount) {
    cookieCount = Number(localStorage.cookieCount)
  } else {
    localStorage.cookieCount = cookieCount
  }
  document.getElementById("amount-of-cookies").innerHTML = "You have: " + cookieCount + " cookies"
}

function cookieClicked() {
  cookieCount ++
  localStorage.cookieCount = cookieCount
  document.getElementById("amount-of-cookies").innerHTML = "You have: " + cookieCount + " cookies"
  console.log(localStorage.cookieCount)
}
