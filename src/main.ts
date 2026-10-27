const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;
document.querySelectorAll("#portrait svg circle").length;

// The prototype grew inline. Keep it this way until the refactoring checkpoint.
const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
face.setAttribute("viewBox", "0 0 200 200");
face.setAttribute("role", "img");
face.setAttribute("aria-label", "A neutral face");

for (let i = 0; i < 75; i++) {
  const angle = (i / 75) * Math.PI * 2;
  const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  dot.setAttribute("cx", String(100 + 86 * Math.cos(angle)));
  dot.setAttribute("cy", String(100 + 86 * Math.sin(angle)));
  dot.setAttribute("r", "3");
  dot.setAttribute("fill", "#c1a00c");
  face.append(dot);
}

for (let i = 0; i < 8; i++) {
  const freckle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle",
  );
  const floorDiv = Math.floor(i / 2);
  freckle.setAttribute("cx", String(40 + 10 * floorDiv));
  freckle.setAttribute("cy", String(110 + 10 * (i % 2)));
  freckle.setAttribute("r", "3");
  freckle.setAttribute("fill", "#c10c48");
  face.append(freckle);
}
for (let i = 0; i < 8; i++) {
  const freckle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle",
  );
  const floorDiv = Math.floor(i / 2);
  freckle.setAttribute("cx", String(130 + 10 * floorDiv));
  freckle.setAttribute("cy", String(110 + 10 * (i % 2)));
  freckle.setAttribute("r", "3");
  freckle.setAttribute("fill", "#c10c48");
  face.append(freckle);
}

for (let i = 0; i < 2; i++) {
  const eye = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle",
  );
  const eyePosition = 60 + 75 * i;
  eye.setAttribute("cx", String(eyePosition));
  eye.setAttribute("cy", "75");
  eye.setAttribute("r", "10");
  eye.setAttribute("fill", "#000000");
  face.append(eye);
}

for (let i = 0; i < 13; i++) {
  const mouth = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle",
  );
  mouth.setAttribute("cx", String(70 + 5 * i));
  mouth.setAttribute("cy", "150");
  mouth.setAttribute("r", "2");
  mouth.setAttribute("fill", "#000000");
  face.append(mouth);
}

portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
