const button = document.querySelector('.btn');
// event mousemove, mouseover, mouseenter, mouseleave

// mousemove
button.addEventListener('mousemove', function () {
  console.log("mousemove")
})



// // mouseover
// button.addEventListener('mouseover', function () {
//   console.log("mouseover")
// })

// // mouseenter
// button.addEventListener('mouseenter', function () {
//   console.log("mouseenter")
// })

// // mouseleave
// button.addEventListener('mouseleave', function () {
//   console.log("mouseleave")
// })


// -------------------- Hover vao Button ------------------------------------------------------
window.addEventListener('load', function () {
  const text = document.querySelector('.text');

  text.addEventListener('mouseenter', function (e) {
    const title = e.target.dataset.tooltip;
    console.log(title);

    const tooltipDiv = document.createElement('div');
    tooltipDiv.className = 'tooltip-text';
    tooltipDiv.textContent = title;
    document.body.appendChild(tooltipDiv);

    const cords = e.target.getBoundingClientRect();
    // console.log(cords);
    const { top, left, width, height } = cords;
    const tooltipHeight = tooltipDiv.offsetHeight;
    const triangleHeight = 20;
    tooltipDiv.style.left = `${ left - width / 2 }px`;
    tooltipDiv.style.top = `${ top - tooltipHeight - triangleHeight }px`;
  });

  text.addEventListener('mouseleave', function (e) {
    const tooltip = document.querySelector('.tooltip-text');
    if (!tooltip) return;
    tooltip.parentNode.removeChild(tooltip);
  });
});
