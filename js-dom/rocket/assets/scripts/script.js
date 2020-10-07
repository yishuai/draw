


function unhide(partID) {
  document.getElementById(partID).classList.toggle('hidden');
}

function unhideFramework(){
  unhide("nose");
  unhide("fin");
  unhide("body");
}

document.getElementById("base").onclick = unhideFramework;

function unhidePayload(){
  unhide("pay");
}

document.getElementById("payload").onclick = unhidePayload;

function unhideElex() {
  unhide("elec");
}

document.getElementById("elex").onclick = unhideElex;

function unhideEngine() {
  unhide("eng");
}

document.getElementById("engine").onclick = unhideEngine;
