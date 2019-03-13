var data = [];
var data1 = [];
var value;
  function select1() {
  value = 0;
  var radios = document.getElementsByName('askin');
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
  radios = document.getElementsByName('q3');
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
  var a ,b;
  radios = document.getElementsByName('q6');
  var r  = document.getElementsByName('issue');
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].checked) {
      a=1;
    }
  }
  for (var i = 0; i < r.length; i++) {
    if (r[i].type === 'radio' && r[i].checked) {
      b=1;
    }
  }
  if(a==1 || b==1){
    value = value +1;
  }
  radios = document.getElementsByName('q7');
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].checked) {
      value = value + 1;
    }
  }
  radios = document.getElementsByName('use');
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].checked) {
      value = value + 1;
    }
  }
  radios = document.getElementsByName('time');
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].checked) {
      value = value + 1;
    }
  }
  radios = document.getElementsByName('interest');
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].checked) {
      value = value + 1;
    }
  }
  radios = document.getElementsByName('update');
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].checked) {
      value = value + 1;
    }
  }
  radios = document.getElementsByName('Question');
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].checked) {
      value = value + 1;
    }
  }
  if(value == 12){
    // window.localStorage.setItem("third", data);
    // window.location = "endPage.html"
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
var q1 = 0, q2 = 0, q3 = 0, q4 = 0, q5 = 0, q6 = 0, q7 = 0, q8 = 0,q9 = 0,q10 = 0,q11 = 0,q12 = 0;
function clik1() {
  element = document.querySelector('input[name="askin"]:checked');
  if (element != null) {
    if(element.value == "nointake"){
      document.getElementById("askintake").style.paddingBottom = "2px";
      document.getElementById("ifnointake").style.display = "block";
    }
    else{
      document.getElementById("ifnointake").style.display = "none";
      data[0] = element.value;
      if(q1==0){
        q1+=1;
        increment();
      }
    }
  }
}
function click11() {
  var ele = document.querySelector('input[name="q1"]:checked');
  if(ele != null ){
    data[0] = ele.value;
    if(q1==0){
      q1+=1;
      increment();
    }
  }
}
function clik2() {
  element = document.querySelector('input[name="q2"]:checked');
  if (element != null) {
    if(element.value.includes("no")){
      document.getElementById("None").checked = true;
      clik5();
      document.getElementById("Diet").disabled = true;
      document.getElementById("Exercise").disabled = true;
      document.getElementById("Both").disabled = true;
      document.getElementById("Others").disabled = true;
      document.getElementById("None").disabled = true;
    }
    if(element.value.includes("yes")){
      document.getElementById("None").checked = false;
      document.getElementById("Diet").disabled = false;
      document.getElementById("Exercise").disabled = false;
      document.getElementById("Both").disabled = false;
      document.getElementById("Others").disabled = false;
      document.getElementById("None").disabled = false;
    }
    data[1] = element.value;
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
  element = document.querySelector('input[name="q3"]:checked');
  if (element != null) {
    data[2] = element.value;
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
    data[3] = element.value;
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
    data[4] = element.value;
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
  element = document.querySelector('input[name="issue"]:checked');
  if (element != null) {
    if (element.value == "yes2issue") {
      document.getElementById("askissue").style.marginBottom = "0";
      document.getElementById("ifyesissue").style.display = "block";
      document.getElementById("noproblem").checked = false;
      document.getElementById("noproblem").disabled = false;
      document.getElementById("yesproblem").disabled = false;
    } else if (element.value == "no2issue") {
      document.getElementById("askissue").style.marginBottom = "20px";
      document.getElementById("ifyesissue").style.display = "none";
      document.getElementById("noproblem").checked = true;
      clik7();
      document.getElementById("noproblem").disabled = true;
      document.getElementById("yesproblem").disabled = true;
      data[5] = "no2issue";
      if (q6 == 0) {
        q6 += 1;
        increment();
      }
    } else {
      data[5] = null;
    }
  }
}
function clik61() {
  element = document.querySelector('input[name="q6"]:checked');
  if(element != null){
    data[5] = element.value;
    if(q6==0){
      q6+=1;
      increment();
    }
  }
}
function clik7() {
  element = document.querySelector('input[name="q7"]:checked');
  if (element != null) {
    data[6] = element.value;
    if(q7==0){
      q7+=1;
      increment();
    }
  }
  else {
    data[6] = null;
  }
}
function inc() {
  if(q8+q9+q10+q11+q12 === 5){
    increment();
  }
}
function clik80() {
  element = document.querySelector('input[name="use"]:checked');
  if (element != null) {
    data1[0] = element.value;
    if(q8==0){
      q8+=1;
    }
  }
  else {
    data1[0] = null;
  }
  inc();
}
function clik81() {
  element = document.querySelector('input[name="time"]:checked');
  if (element != null) {
    data1[1] = element.value;
    if(q9==0){
      q9+=1;
    }
  }
  else {
    data1[1] = null;
  }
  inc();
}
function clik82() {
  element = document.querySelector('input[name="interest"]:checked');
  if (element != null) {
    data1[2] = element.value;
    if(q10==0){
      q10+=1;
    }
  }
  else {
    data1[2] = null;
  }
  inc();
}
function clik83() {
  element = document.querySelector('input[name="update"]:checked');
  if (element != null) {
    data1[3] = element.value;
    if(q11==0){
      q11+=1;
    }
  }
  else {
    data1[3] = null;
  }
  inc();
}
function clik84() {
  element = document.querySelector('input[name="Question"]:checked');
  if (element != null) {
    data1[4] = element.value;
    if(q12==0){
      q12+=1;
    }
  }
  else {
    data1[4] = null;
  }
  inc();
}
