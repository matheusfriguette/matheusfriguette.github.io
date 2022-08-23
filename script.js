const getPages = (pageNumber) => {
  const pages = Array.from({ length: pageNumber }, (_, i) => i + 1);
  let firstPrint = [];
  let secondPrint = [];
  let currentToAdd = "firstPrint";
  let count = 0;

  pages.forEach((i) => {
    count++;

    if (currentToAdd === "firstPrint") {
      firstPrint.push(i);
    } else {
      secondPrint.push(i);
    }

    if (count === 4) {
      currentToAdd === "firstPrint"
        ? (currentToAdd = "secondPrint")
        : (currentToAdd = "firstPrint");
      count = 0;
    }
  });

  return [firstPrint, secondPrint];
};

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const pageNumber = document.querySelector("input").value;
  const [firstPrint, secondPrint] = getPages(pageNumber);

  const firstPrintElement = document.querySelector("#firstPrint");
  const secondPrintElement = document.querySelector("#secondPrint");

  firstPrintElement.innerText = firstPrint;
  secondPrintElement.innerText = secondPrint;
});
