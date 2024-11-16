function dibujaBoton(txt, x, y, w, h) {
  push();
  rectMode(CENTER);
  if (botonSobreMouse(x, y, w, h)) {
    fill(20, 200, 0);
  } else {
    fill(100);
  }
  rect(x, y, w, h); //dibuja el botón
  textAlign(CENTER, CENTER);
  fill(255);
  text(txt, x, y); // Mostrar el texto en el botón
  pop();
}
function botonSobreMouse(x, y, w, h) {
  return (mouseX > x - w / 2 && mouseX < x + w / 2 && mouseY > y - h / 2 && mouseY < y + h / 2);
}
