function myBtn(button) {
  let blocks = document.querySelectorAll(".block");
  blocks.forEach((block) => {
    block.className = "block " + button;
  });
}
