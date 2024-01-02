const collapsibleBlocks = Array.from(
	document.getElementsByClassName("wp-block-my-blocks-collapsible"),
);

collapsibleBlocks.forEach((collapsibleBlock) => {
	const collapsibleTitle = collapsibleBlock.querySelector(".collapsible-title");

	collapsibleTitle.addEventListener("click", () => {
		collapsibleBlock.classList.toggle("open");
	});
});
