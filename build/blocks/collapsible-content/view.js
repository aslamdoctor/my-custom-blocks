/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************************!*\
  !*** ./src/blocks/collapsible-content/view.js ***!
  \************************************************/
const collapsibleBlocks = Array.from(document.getElementsByClassName("wp-block-my-blocks-collapsible"));
collapsibleBlocks.forEach(collapsibleBlock => {
  const collapsibleTitle = collapsibleBlock.querySelector(".collapsible-title");
  collapsibleTitle.addEventListener("click", () => {
    collapsibleBlock.classList.toggle("open");
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map