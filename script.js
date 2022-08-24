const getPages = (pageNumber, startPage) => {
  let firstPrint = [];
  let secondPrint = [];
  let currentToAdd = "firstPrint";
  let count = 0;

  for (let i = startPage; i <= pageNumber; i++) {
    count++;

    if (currentToAdd === "firstPrint") {
      firstPrint.push(i);
    } else {
      secondPrint.push(i);
    }

    if (count === 6) {
      currentToAdd === "firstPrint"
        ? (currentToAdd = "secondPrint")
        : (currentToAdd = "firstPrint");
      count = 0;
    }
  }

  return [firstPrint, secondPrint];
};

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const pageNumber = document.querySelector("#pageNumber").value;
  const startPage = document.querySelector("#startPage").value;
  const [firstPrint, secondPrint] = getPages(pageNumber, startPage);

  const firstPrintElement = document.querySelector("#firstPrint");
  const secondPrintElement = document.querySelector("#secondPrint");

  firstPrintElement.innerText = firstPrint;
  secondPrintElement.innerText = secondPrint;
});
