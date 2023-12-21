const summaryEles = document.querySelectorAll(".summary");
const summaryElesArray = Array.from(summaryEles);

const toggleAccordion = (ele) => {
  summaryElesArray
    .filter((summaryElement) => summaryElement !== ele)
    .map((summaryElement) => {
      const detailsEle = summaryElement.parentElement;
      detailsEle.classList.remove("details_active");
      detailsEle.removeAttribute("open");
    });

  const detailsEle = ele.parentElement;
  detailsEle.classList.toggle("details_active");
};

summaryElesArray.forEach((ele) =>
  ele.addEventListener("click", () => {
    toggleAccordion(ele);
  })
);
