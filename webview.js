"use strict";

module.exports = Franz => {
  // Load galileo
  let galieloApp = document.createElement('script');
  galieloApp.src = 'https://assets.fitbit.com/production/app.lab.galileo.base.6.js.e3aec34a47a604a3bc03b95f9fafa38b.js';
  document.head.appendChild(galieloApp);

  document.querySelector(".store").remove();
  document.querySelector("footer").remove();
  document.getElementById("container").style.minHeight = "calc(100vh - 80px)";
};
