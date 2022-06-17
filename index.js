import rive from "@rive-app/canvas";

new rive.Rive({
  // Hosted .riv asset, or a local static asset
  src: "./resources/riv/down_arrow.riv",
  canvas: document.getElementById("down-arrow"),
  autoplay: true,
});

console.log("hi");