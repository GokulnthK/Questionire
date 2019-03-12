var varskip = "no", varsnack = "no", varask = "no";
var name, age, M_s, homeTown, tof, height, weight, M_c, cereals, pulses, milk, meat, nut, sugar, fat;
var data = [];
var count = 0;
var a,b,c,d,e;

function  move() {
  name = document.getElementById("name").value;
  if (name.includes(0) || name.includes(1) || name.includes(2) || name.includes(3) || name.includes(4) || name.includes(5) || name.includes(6) || name.includes(7) || name.includes(8) || name.includes(9)) {
    if(name == null){
      a=1;
    }
  }
  else{
   count+=1;
  }
  age = document.getElementById("age").value;
  if(age > 100 || age <= 0) {
    b=1;
  }
  else {
    count+=1;
  }
  homeTown = document.getElementById("homeTown").value;
  if(homeTown == null || homeTown.includes(0) || homeTown.includes(1) || homeTown.includes(2) || homeTown.includes(3) || homeTown.includes(4) || homeTown.includes(5) || homeTown.includes(6) || homeTown.includes(7) || homeTown.includes(8) || homeTown.includes(9)){
    c=1;
  }
  else{
    count+=1;
  }
  height = document.getElementById("height").value;
  if(height <= 0 || height >200){
    d=1;
    document.getElementById("height").value = 0;
    height = 0;
  }
  else {
    count+=1;
  }
  weight = document.getElementById("weight").value;
  if(weight <= 0 || weight >200){
    e=1;
    document.getElementById("weight").value = 0;
    weight = 0;
  }
  else{
    count+=1;
  }
  if(count >= 18) {
    document.getElementById("modal").style.display = "block";
    agreePage();
  }
  else{
    if(a==1){alert("Enter valid name")}else if(b==1){alert("Enter correct age");}
    else if(c==1){alert("Enter correct hometown")}else if(d==1){alert("Enter valid height")}
    else if(e==1){alert("Enter valid weight")}else {
      alert("Don't rush up..")
    }
  }
}
function agreePage() {
  var e = document.querySelector('input[name="doyouagree"]:checked');
  if(e != null){
    if(e.value == "on"){
      document.getElementById("image").style.display = "block";
    }
  }
}
function next1() {
  var e = document.querySelector('input[name="doyouagree"]:checked');
  var radios = document.getElementsByName('doyouagree');
    if (radios[0].type === 'radio' && radios[0].checked) {
      next();
    }
}
function next() {
  data[0] = " Name :"+name;
  data[1] = " Age: "+age;
  data[2] = " Hometown: "+homeTown;
  data[3] = " Height: "+height;
  data[4] = " Weight: "+weight;
  data[5] = " Advice in: "+varask;
  data[6] = " May skip : "+varskip;
  data[7] = " Which snack: "+varsnack;
  data[8] = " Marital Status: "+M_s;
  data[9] = " Type of Family: "+tof;
  data[10] = " MealCount: "+M_c;
  data[11] = cereals;
  data[12] = pulses;
  data[13] = milk;
  data[14] = meat;
  data[15] = nut;
  data[16] = sugar;
  data[17] = fat;
  window.localStorage.setItem("first", data);
  window.location = "SecondPage.html";
}
function askSelect() {
  var element = document.querySelector('input[name="ask"]:checked').value;
  if(element === "yes"){
    document.getElementById("ifyes").style.display = "block";
    var select = document.querySelector('input[name="advice"]:checked').value;
    varask = select;
  }
  else if(element === "no"){
    document.getElementById("ifyes").style.display = "none";
    varask = "no";
  }
  count+=1;
}
function askSelectSkip() {
  var element = document.querySelector('input[name="askskip"]:checked').value;
  if(element === "yes"){
    document.getElementById("ifskipyes").style.display = "block";
    var select = document.querySelector('input[name="meal"]:checked').value;
    varskip = select;
  }
  else if(element === "no"){
    document.getElementById("ifskipyes").style.display = "none";
    varskip = "no";
  }
  count+=1;
}
function askSnack() {
  var element = document.querySelector('input[name="Snack"]:checked').value;
  if (element === "yes"){
    document.getElementById("ifsnackyes").style.display = "block";
    var select = document.querySelector('input[name="fav_snack"]:checked').value;
    varsnack = select;
  }
  else if(element === "no"){
    document.getElementById("ifsnackyes").style.display = "none";
    varsnack = "no";
  }
  count+=1;
}
function MsSelect() {
  M_s = document.querySelector('input[name="M_S"]:checked').value;
  count+=1;
}
function tofSelect() {
  tof = document.querySelector('input[name="ToF"]:checked').value;
  count+=1;
}
function mealCount() {
  M_c = document.querySelector('input[name="meals"]:checked').value;
  count+=1;
}
function cereal() {
  cereals = document.querySelector('input[name="cereals"]:checked').value;
  count+=1;
}
function pulse() {
  pulses = document.querySelector('input[name="pulses"]:checked').value;
  count+=1;
}
function milks() {
  milk = document.querySelector('input[name="milk"]:checked').value;
  count+=1;
}
function meats() {
  meat = document.querySelector('input[name="meat"]:checked').value;
  count+=1;
}
function nuts() {
  nut = document.querySelector('input[name="nuts"]:checked').value;
  count+=1;
}
function sugars() {
  sugar = document.querySelector('input[name="sugar"]:checked').value;
  count+=1;
}
function fats() {
  fat = document.querySelector('input[name="fat"]:checked').value;
  count+=1;
}
function hide() {
  document.getElementById("modal").style.display = "none";
}
