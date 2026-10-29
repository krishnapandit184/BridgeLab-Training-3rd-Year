// Q7. Track mouse coordinates and place red dots on double-click
const trackingBox = document.querySelector("#trackingBox");
const coordinates = document.querySelector("#coordinates");

trackingBox.addEventListener("mousemove", event => {
  coordinates.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});

trackingBox.addEventListener("dblclick", event => {
  const boxRect = trackingBox.getBoundingClientRect();
  const dot = document.createElement("span");
  dot.className = "dot";

  // Convert viewport coordinates to coordinates within the box.
  dot.style.left = `${event.clientX - boxRect.left}px`;
  dot.style.top = `${event.clientY - boxRect.top}px`;

  trackingBox.append(dot);
});
