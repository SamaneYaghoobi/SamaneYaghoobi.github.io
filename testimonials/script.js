function resizeGridItem(item) {
  let grid = document.getElementsByClassName("grid")[0];
  let rowHeight = parseInt(
    window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
  );
  let rowGap = parseInt(
    window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
  );
  console.log(item.querySelector(".content").getBoundingClientRect().height);
  let rowSpan = Math.ceil(
    item.querySelector(".content").getBoundingClientRect().height / 20
  );
  console.log(rowSpan);

  item.style.gridRowEnd = "span " + rowSpan;
}

function resizeAllGridItems() {
  let allItems = document.getElementsByClassName("container");
  for (x = 0; x < allItems.length; x++) {
    resizeGridItem(allItems[x]);
  }
}

function resizeInstance(instance) {
  let item = instance.elements[0];
  resizeGridItem(item);
}

window.onload = resizeAllGridItems();
window.addEventListener("resize", resizeAllGridItems);

// allItems = document.getElementsByClassName("container");
// for (x = 0; x < allItems.length; x++) {
//   imagesLoaded(allItems[x], resizeInstance);
// }
