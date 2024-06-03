// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Julianne Leblanc-Peltier
// Created on: June 2024
// This file contains the JS functions for index.html

let cookiesClicked = 0

function bigCookie() {
  if (localStorage.cookiesClicked) {
    localStorage.cookiesClicked = Number(localStorage.cookiesClicked) +1
  } else {
    localStorage.cookiesClicked = 1
  }
  document.getElementById("amount-of-cookies").innerHTML = "Cookies clicked: " + cookiesClicked
}

