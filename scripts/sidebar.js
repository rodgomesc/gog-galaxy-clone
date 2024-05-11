const toggleExpandable = (expandableButton) => {
  const adjacentElement = expandableButton.nextElementSibling;
  const icon = expandableButton.lastElementChild;

  if (adjacentElement.style.height === "0px" || !adjacentElement.style.height) {
    adjacentElement.style.height = "168px";
    icon.classList.value = "fa fa-chevron-up";
  } else {
    adjacentElement.style.height = "0px";
    icon.classList.value = "fa fa-chevron-down";
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
