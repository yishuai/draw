function changeInstruction() {

  let label = document.getElementById('label').innerText;
  let inhale = "吸气";
  if (label.valueOf() == inhale.valueOf()) {
    document.getElementById('label').innerText = "呼气";
  } else {
    document.getElementById('label').innerHTML = "吸气";
  }

  var t = setTimeout(changeInstruction, 4000);
}

changeInstruction();
