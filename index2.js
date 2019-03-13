var data = [];
var value = 0;
function select() {
  var radios = document.getElementsByName('q1');
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].checked) {
      value = value + 1;
    }
  }
  radios = document.getElementsByName('q2');
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].checked) {
      value = value + 1;
    }
  }
  radios = document.getElementsByName('askfeeling');
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].checked) {
      value = value + 1;
    }
  }
  radios = document.getElementsByName('q4');
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].checked) {
      value = value + 1;
    }
  }
  radios = document.getElementsByName('q5');
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].checked) {
      value = value + 1;
    }
  }
  radios = document.getElementsByName('q6');
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].checked) {
      value = value + 1;
    }
  }
  radios = document.getElementsByName('q7');
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].checked) {
      value = value + 1;
    }
  }
  radios = document.getElementsByName('q8');
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].checked) {
      value = value + 1;
    }
  }
  if(value == 8){
    window.localStorage.setItem("second", data);
    window.location = "thirdPage.html"
  }
  else{
    alert("Don't rush to submit....")
  }
}
var incre = 0, valincre = 0;
function increment() {
  incre = incre + 12.5;
  valincre = valincre + 1;
  document.getElementById("progress").style.width = incre+"%";
  if(incre  <= 30){
    document.getElementById("progress").style.backgroundColor = "#dd8d35";
  }
  else if(incre>30 && incre <= 60){
    document.getElementById("progress").style.backgroundColor = "#ffcd53";
    document.getElementById("progress").style.color = "black";
  }
  else if(incre>60 && incre <= 90){
    document.getElementById("progress").style.backgroundColor = "#6ad521";
  }
  else {
    document.getElementById("progress").style.backgroundColor = "#00a600";
    document.getElementById("progress").style.color = "white";
  }
  if(valincre <= 2)
    document.getElementById("progress").innerText = valincre;
  else
    document.getElementById("progress").innerText = valincre+" Question";
}
var q1 = 0, q2 = 0, q3 = 0, q4 = 0, q5 = 0, q6 = 0, q7 = 0, q8 = 0;
  function clik1() {
  element = document.querySelector('input[name="q1"]:checked');
  if (element != null) {
    data[0] = "character"+element.value;
    if(q1==0){
      q1+=1;
      increment();
    }
  }
  else {
    data[0] = null;
  }
}
function clik2() {
  element = document.querySelector('input[name="q2"]:checked');
  if (element != null) {
    data[1] = "express in "+element.value;
    document.getElementById("mood").innerText = data[1];
    document.getElementById("mood1").innerText = data[1];
    document.getElementById("mood2").innerText = data[1];
    if(q2==0){
      q2+=1;
      increment();
    }
  }
  else {
    data[1] = null;
  }
}
function clik3() {
    var ele = document.querySelector('input[name = "askfeeling"]:checked').value;
    if(ele == "yes"){
      document.getElementById("ifyesfeel").style.display = "block";
    }
    else if(ele == "no"){
      document.getElementById("ifyesfeel").style.display = "none";
      data[2] = "not feel different";
      if(q3==0){
        q3+=1;
        increment();
      }
    }
}
function input(){
  element = document.getElementById("textarea");
  if (element != null) {
    data[2] = "feel like"+element.value;
    if(q3==0){
      q3+=1;
      increment();
    }
  }
  else {
    data[2] = null;
  }
}
function clik4() {
  element = document.querySelector('input[name="q4"]:checked');
  if (element != null) {
    data[3] = " relieve "+element.value;
    if(q4==0){
      q4+=1;
      increment();
    }
  }
  else {
    data[3] = null;
  }
}
function clik5() {
  element = document.querySelector('input[name="q5"]:checked');
  if (element != null) {
    data[4] = "food as medium"+element.value;
    if(q5==0){
      q5+=1;
      increment();
    }
  }
  else {
    data[4] = null;
  }
}
function clik6() {
  element = document.querySelector('input[name="q6"]:checked');
  if (element != null) {
    data[5] = "which food as medium :"+element.value;
    document.getElementById("food").innerText = element.value;
    document.getElementById("food1").innerText = element.value;
    if(q6==0){
      q6+=1;
      increment();
    }
  }
  else {
    data[5] = null;
  }
}
function clik7() {
  element = document.querySelector('input[name="q7"]:checked');
  if (element != null) {
    data[6] = "In which mood : "+element.value;
    if(q7==0){
      q7+=1;
      increment();
    }
  }
  else {
    data[6] = null;
  }
}
function clik8() {
  element = document.querySelector('input[name="q8"]:checked');
  if (element != null) {
    data[7] = "food "+element.value;
    if(element.value === "otherss"){
      document.getElementById("textarea1").style.display = "block";
    }
    else{
      document.getElementById("textarea1").style.display = "none";
    }
    if(q8==0){
      q8+=1;
      increment();
    }
  }
  else {
    data[7] = null;
  }
}
function text() {
  element = document.getElementById("textarea1");
  if (element != null) {
    data[7] = "food "+element.value;
    if(q8==0){
      q8+=1;
      increment();
    }
  }
}
