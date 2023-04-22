const boxes = document.querySelectorAll(".box");
const image = document.querySelector(".image");

//loop through each box
boxes.forEach((box) => {
  // when image dragged over a box
  box.addEventListener("dragover", (e) => {
    e.preventDefault();//prevent default behaviour
    // add hover class to the box
    box.classList.add("hover")
  });

  // when image leaves box
  box.addEventListener("dragleave", () => {
    // remove hover class from the box
    box.classList.remove("hover");
  });

  //when image is dropped on a box
  box.addEventListener("drop", () => {
    box.appendChild(image);
    box.classList.remove("hover");
  });
});