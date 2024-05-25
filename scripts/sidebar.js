const toggleExpandable = (expandableButton) => {
  const adjacentElement = expandableButton.nextElementSibling;
  const icon = expandableButton.lastElementChild;

  if (adjacentElement.style.height === "0px" || !adjacentElement.style.height) {
    adjacentElement.style.height = "auto";
    adjacentElement.style.paddingBottom = "22px";
    icon.classList.value = "fa fa-chevron-up";
  } else {
    adjacentElement.style.height = "0px";
    icon.classList.value = "fa fa-chevron-down";
    adjacentElement.style.paddingBottom = "0px"; 
  }
};

const createSideBarExpandableTriggers = () => {
  const expandableButtons = document.getElementsByClassName(
    "expandable-header-button"
  );
  Array.from(expandableButtons).forEach((button) => {
    console.log(button.lastElementChild.classList.value);
    button.addEventListener("click", () => toggleExpandable(button));
  });
};

createSideBarExpandableTriggers();
