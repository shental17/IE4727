// document.addEventListener("DOMContentLoaded", function () {
//   const jjQty = document.getElementsByName("justJavaQty")[0];
//   const lsQty = document.getElementsByName("laitSingleQty")[0];
//   const ldQty = document.getElementsByName("laitDoubleQty")[0];
//   const csQty = document.getElementsByName("cappucinoSingleQty")[0];
//   const cdQty = document.getElementsByName("cappucinoDoubleQty")[0];
//   const totalPriceText = document.getElementById("totalPrice");
//   const jjPriceText = document.getElementById("totalJustJavaPrice");
//   const lsPriceText = document.getElementById("totalLaitPrice");
//   const csPriceText = document.getElementById("totalCappucinoPrice");

//   function calculateJustJavaPrice(jjQtyValue) {
//     const jjPrice = 2;
//     return jjQtyValue * jjPrice;
//   }

//   function calculateLaitPrice(lsQtyValue, ldQtyValue) {
//     const lsPrice = 2;
//     const ldPrice = 3;
//     return lsQtyValue * lsPrice + ldQtyValue * ldPrice;
//   }

//   function calculateCappucinoPrice(csQtyValue, cdQtyValue) {
//     const csPrice = 4.75;
//     const cdPrice = 5.75;
//     return csQtyValue * csPrice + cdQtyValue * cdPrice;
//   }

//   function calculateTotalPrice() {
//     const jjQtyValue = parseFloat(jjQty.value) || 0;
//     const lsQtyValue = parseFloat(lsQty.value) || 0;
//     const ldQtyValue = parseFloat(ldQty.value) || 0;
//     const csQtyValue = parseFloat(csQty.value) || 0;
//     const cdQtyValue = parseFloat(cdQty.value) || 0;

//     const jjPrice = calculateJustJavaPrice(jjQtyValue);
//     const lsPrice = calculateLaitPrice(lsQtyValue, ldQtyValue);
//     const csPrice = calculateCappucinoPrice(csQtyValue, cdQtyValue);
//     const totalPrice = jjPrice + lsPrice + csPrice;

//     updateTextFields(jjPrice, lsPrice, csPrice, totalPrice);
//   }

//   function updateTextFields(jjPrice, lsPrice, csPrice, totalPrice) {
//     jjPriceText.value = `$${jjPrice.toFixed(2)}`;
//     lsPriceText.value = `$${lsPrice.toFixed(2)}`;
//     csPriceText.value = `$${csPrice.toFixed(2)}`;
//     totalPriceText.value = `$${totalPrice.toFixed(2)}`;
//   }

//   // Add event listeners to all input fields
//   jjQty.addEventListener("input", calculateTotalPrice);
//   lsQty.addEventListener("input", calculateTotalPrice);
//   ldQty.addEventListener("input", calculateTotalPrice);
//   csQty.addEventListener("input", calculateTotalPrice);
//   cdQty.addEventListener("input", calculateTotalPrice);

//   // Initial calculation
//   calculateTotalPrice();
// });

// Updated JavaScript
document.addEventListener("DOMContentLoaded", function () {
  const jjQty = document.getElementsByName("justJavaQty")[0];
  const lsShot = document.getElementsByName("laitShot");
  const lsQty = document.getElementsByName("laitQty")[0];
  const csShot = document.getElementsByName("cappucinoShot");
  const csQty = document.getElementsByName("cappucinoQty")[0];
  const totalPriceText = document.getElementById("totalPrice");
  const jjPriceText = document.getElementById("totalJustJavaPrice");
  const lsPriceText = document.getElementById("totalLaitPrice");
  const csPriceText = document.getElementById("totalCappucinoPrice");

  function calculateJustJavaPrice(jjQtyValue) {
    const jjPrice = 2;
    return jjQtyValue * jjPrice;
  }

  function calculateLaitPrice(lsShotValue, lsQtyValue) {
    const lsPrice = lsShotValue === "single" ? 2 : 3;
    return lsQtyValue * lsPrice;
  }

  function calculateCappucinoPrice(csShotValue, csQtyValue) {
    const csPrice = csShotValue === "single" ? 4.75 : 5.75;
    return csQtyValue * csPrice;
  }

  function calculateTotalPrice() {
    const jjQtyValue = parseFloat(jjQty.value) || 0;
    const lsShotValue = lsShot[0].checked ? "single" : "double";
    const lsQtyValue = parseFloat(lsQty.value) || 0;
    const csShotValue = csShot[0].checked ? "single" : "double";
    const csQtyValue = parseFloat(csQty.value) || 0;

    const jjPrice = calculateJustJavaPrice(jjQtyValue);
    const lsPrice = calculateLaitPrice(lsShotValue, lsQtyValue);
    const csPrice = calculateCappucinoPrice(csShotValue, csQtyValue);
    const totalPrice = jjPrice + lsPrice + csPrice;

    updateTextFields(jjPrice, lsPrice, csPrice, totalPrice);
  }

  function updateTextFields(jjPrice, lsPrice, csPrice, totalPrice) {
    jjPriceText.value = `$${jjPrice.toFixed(2)}`;
    lsPriceText.value = `$${lsPrice.toFixed(2)}`;
    csPriceText.value = `$${csPrice.toFixed(2)}`;
    totalPriceText.value = `$${totalPrice.toFixed(2)}`;
  }

  // Add event listeners to all input fields
  jjQty.addEventListener("input", calculateTotalPrice);
  lsShot[0].addEventListener("change", calculateTotalPrice);
  lsShot[1].addEventListener("change", calculateTotalPrice);
  lsQty.addEventListener("input", calculateTotalPrice);
  csShot[0].addEventListener("change", calculateTotalPrice);
  csShot[1].addEventListener("change", calculateTotalPrice);
  csQty.addEventListener("input", calculateTotalPrice);

  // Initial calculation
  calculateTotalPrice();
});
