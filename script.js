var p = 1,
  q = 1;
var table = document.getElementById("table");
var rows = table.getElementsByTagName("tr");

var hi = "#26e708";
var no = "rgb(255, 255, 209)";
var no_l = "rgb(238, 229, 161)";
var LABValues_m = [];
var LABValues_e = [];

var THValues = [];
var LABcellIDs_m = [];
var LABcellIDs_e = [];

var THcellIDs = [];
var temp1 = 1;
var temp2 = 31;
for (var i = 5; i < rows.length; i += 2) {
  var cells = rows[i].getElementsByTagName("td");

  for (var j = 1; j < cells.length; j++) {
    cells[j].classList.add("t");
    cells[j].id = "t" + p++;
    THcellIDs.push(document.getElementById(cells[j].id));
    THValues.push(cells[j].innerHTML);
  }
}
for (var i = 6; i < rows.length; i += 2) {
  var cells = rows[i].getElementsByTagName("td");

  for (var j = 1; j < cells.length; j++) {
    cells[j].classList.add("l");

    if (j < 7) {
      cells[j].id = "l" + temp1;
      cells[j].innerHTML = "L" + temp1;
      LABcellIDs_m.push(document.getElementById(cells[j].id));
      LABValues_m.push(cells[j].innerHTML);
      temp1++;
    } else {
      cells[j].id = "l" + temp2;
      cells[j].innerHTML = "L" + temp2;
      LABcellIDs_e.push(document.getElementById(cells[j].id));
      LABValues_e.push(cells[j].innerHTML);
      temp2++;
    }
  }
}
var LABcellIDs = [...LABcellIDs_m, ...LABcellIDs_e];
console.log(LABcellIDs);
function del(x1, x2, tx, txx, y1, y2, ty, tyy) {
  x1.innerHTML = y1;
  x1.style.backgroundColor = no;
  x2.innerHTML = y2;
  x2.style.backgroundColor = no;
  tx.innerHTML = ty;
  tx.style.backgroundColor = no;
  txx.innerHTML = tyy;
  txx.style.backgroundColor = no;
}

function add(x1, x2, tx, txx, selector, fac, sub, room) {
  var value = selector[selector.selectedIndex].value;
  if (
    THcellIDs[x1].innerHTML != THValues[x1] ||
    THcellIDs[x2].innerHTML != THValues[x2] ||
    THcellIDs[tx].innerHTML != THValues[tx] ||
    THcellIDs[txx].innerHTML != THValues[txx]
  ) {
    alert("CLASH! FILL IN OTHER SLOT OR DELETE THE SLOT FIRST");
  } else {
    if (value === "x") {
      THcellIDs[x1].innerHTML =
        "FAC = " +
        fac.value +
        "<br />" +
        "SUB = " +
        sub.value +
        "<br />" +
        "ROOM = " +
        room.value;
      THcellIDs[x1].style.backgroundColor = hi;
      THcellIDs[x2].innerHTML =
        "FAC = " +
        fac.value +
        "<br />" +
        "SUB = " +
        sub.value +
        "<br />" +
        "ROOM = " +
        room.value;
      THcellIDs[x2].style.backgroundColor = hi;
    } else if (value === "tx") {
      THcellIDs[tx].innerHTML =
        "FAC = " +
        fac.value +
        "<br />" +
        "SUB = " +
        sub.value +
        "<br />" +
        "ROOM = " +
        room.value;
      THcellIDs[tx].style.backgroundColor = hi;
    } else if (value === "txx") {
      THcellIDs[txx].innerHTML =
        "FAC = " +
        fac.value +
        "<br />" +
        "SUB = " +
        sub.value +
        "<br />" +
        "ROOM = " +
        room.value;
      THcellIDs[txx].style.backgroundColor = hi;
    } else if (value === "x/tx") {
      THcellIDs[x1].innerHTML =
        "FAC = " +
        fac.value +
        "<br />" +
        "SUB = " +
        sub.value +
        "<br />" +
        "ROOM = " +
        room.value;
      THcellIDs[x1].style.backgroundColor = hi;
      THcellIDs[x2].innerHTML =
        "FAC = " +
        fac.value +
        "<br />" +
        "SUB = " +
        sub.value +
        "<br />" +
        "ROOM = " +
        room.value;
      THcellIDs[x2].style.backgroundColor = hi;
      THcellIDs[tx].innerHTML =
        "FAC = " +
        fac.value +
        "<br />" +
        "SUB = " +
        sub.value +
        "<br />" +
        "ROOM = " +
        room.value;
      THcellIDs[tx].style.backgroundColor = hi;
    } else if (value === "x/tx/txx") {
      THcellIDs[x1].innerHTML =
        "FAC = " +
        fac.value +
        "<br />" +
        "SUB = " +
        sub.value +
        "<br />" +
        "ROOM = " +
        room.value;
      THcellIDs[x1].style.backgroundColor = hi;
      THcellIDs[x2].innerHTML =
        "FAC = " +
        fac.value +
        "<br />" +
        "SUB = " +
        sub.value +
        "<br />" +
        "ROOM = " +
        room.value;
      THcellIDs[x2].style.backgroundColor = hi;
      THcellIDs[tx].innerHTML =
        "FAC = " +
        fac.value +
        "<br />" +
        "SUB = " +
        sub.value +
        "<br />" +
        "ROOM = " +
        room.value;
      THcellIDs[tx].style.backgroundColor = hi;
      THcellIDs[txx].innerHTML =
        "FAC = " +
        fac.value +
        "<br />" +
        "SUB = " +
        sub.value +
        "<br />" +
        "ROOM = " +
        room.value;
      THcellIDs[txx].style.backgroundColor = hi;
    }
  }
  sub.value = "";
  fac.value = "";
  room.value = "";
  sub.placeholder = "Subject";
  fac.placeholder = "Faculty";
  room.placeholder = "Room no.";
  selector.selectedIndex = 0; //make the selector to default
}

function add_labslots() {
  var cloneCounter = 1;
  var numInputs = document.getElementById("LABSLOT").value;
  let container = document.getElementById("grid_container2");
  let temp_div = document.getElementById("template-div");
  for (let i = 0; i < numInputs; i++) {
    var clone = temp_div.cloneNode(true);
    clone.style.display = "block";
    // clone.style.transform = "scale(1.1)";
    container.appendChild(clone);
    var cloneId = "LAB_in_" + cloneCounter;
    clone.setAttribute("id", cloneId);
    document.getElementById(cloneId).style.padding="5px 5px 5px 5px";
    var slot = clone.querySelector("#slots");
    var slotID = "slot" + cloneCounter;
    slot.setAttribute("id", slotID);

    var sub = clone.querySelector("#Subject");
    var subID = "SUB_" + cloneCounter;
    sub.setAttribute("id", subID);

    var FAC = clone.querySelector("#Faculty");
    var facID = "FAC_" + cloneCounter;
    FAC.setAttribute("id", facID);

    var room = clone.querySelector("#Room");
    var roomID = "ROOM_" + cloneCounter;
    room.setAttribute("id", roomID);

    var add = clone.querySelector("#add_slot");
    var addID = "add_" + cloneCounter;
    add.setAttribute("id", addID);

    var del = clone.querySelector("#del_slot");
    var delID = "del_" + cloneCounter;
    del.setAttribute("id", delID);
    cloneCounter++;
  }
  
  toggleDiv();
  container.scrollIntoView();
}
function add_slot(event) {
  var div = event.target;
  var str = div.id;
  var number = parseInt(str.match(/\d+/)[0]);

  var slotid = "slot" + number;
  var slot = document.getElementById(slotid);
  var det = slot.value;
  var numbers = det.split(/\D+/).filter(Boolean).map(Number);

  var facid = "FAC_" + number;
  var fac = document.getElementById(facid);

  var subid = "SUB_" + number;
  var sub = document.getElementById(subid);

  var roomid = "ROOM_" + number;
  var room = document.getElementById(roomid);

  console.log(numbers);
  for (var i = 0; i < numbers.length; i++) {
    var index = numbers[i] - 1;
    var check="L"+numbers[i];
    if(LABcellIDs[index].innerHTML==check){
      LABcellIDs[index].innerHTML =
      "FAC = " +
      fac.value +
      "<br />" +
      "SUB = " +
      sub.value +
      "<br />" +
      "ROOM = " +
      room.value;
      LABcellIDs[index].style.backgroundColor = hi;
    }
    else{
      alert("CLASH! FILL IN OTHER SLOT OR DELETE THE SLOT FIRST");
    }
    
  }
  
}
function del_slot(event) {
  var div = event.target;
  var str = div.id;
  var number = parseInt(str.match(/\d+/)[0]);

  var slotid = "slot" + number;
  var slot = document.getElementById(slotid);
  var det = slot.value;
  var numbers = det.split(/\D+/).filter(Boolean).map(Number);

  for (var i = 0; i < numbers.length; i++) {
    if (numbers < 31) {
      LABcellIDs_m[numbers[i] - 1].innerHTML = "L" +numbers[i];
      LABcellIDs_m[numbers[i] - 1].style.backgroundColor = no_l;
    } else {
      LABcellIDs_e[numbers[i] - 1 - 30].innerHTML = "L" + numbers[i];
      LABcellIDs_e[numbers[i] - 1 - 30].style.backgroundColor = no_l;
    }
  }
}
function toggleDiv() {
  var div = document.getElementById("grid_container2");
  var n=document.getElementById("note");
  div.style.display = "grid"; // Show the div
  n.style.display = "block";
}
var temp = document.getElementById("template-div");
function a1_add_data() {
  add(
    0,
    25,
    50,
    16,
    document.getElementById("a1"),
    document.getElementById("A1_Fac"),
    document.getElementById("A1_Sub"),
    document.getElementById("A1_Room")
  );
}
function a1_del() {
  del(
    THcellIDs[0],
    THcellIDs[25],
    THcellIDs[50],
    THcellIDs[16],
    THValues[0],
    THValues[25],
    THValues[50],
    THValues[16]
  );
}

function a2_add_data() {
  add(
    6,
    31,
    56,
    22,
    document.getElementById("a2"),
    document.getElementById("A2_Fac"),
    document.getElementById("A2_Sub"),
    document.getElementById("A2_Room")
  );
}
function a2_del() {
  del(
    THcellIDs[6],
    THcellIDs[31],
    THcellIDs[56],
    THcellIDs[22],
    THValues[6],
    THValues[31],
    THValues[56],
    THValues[22]
  );
}

function b1_add_data() {
  add(
    12,
    37,
    3,
    28,
    document.getElementById("b1"),
    document.getElementById("B1_Fac"),
    document.getElementById("B1_Sub"),
    document.getElementById("B1_Room")
  );
}
function b1_del() {
  del(
    THcellIDs[12],
    THcellIDs[37],
    THcellIDs[3],
    THcellIDs[28],
    THValues[12],
    THValues[37],
    THValues[3],
    THValues[28]
  );
}

function b2_add_data() {
  add(
    18,
    43,
    9,
    34,
    document.getElementById("b2"),
    document.getElementById("B2_Fac"),
    document.getElementById("B2_Sub"),
    document.getElementById("B2_Room")
  );
}
function b2_del() {
  del(
    THcellIDs[18],
    THcellIDs[43],
    THcellIDs[9],
    THcellIDs[34],
    THValues[18],
    THValues[43],
    THValues[9],
    THValues[34]
  );
}

function c1_add_data() {
  add(
    24,
    49,
    15,
    40,
    document.getElementById("c1"),
    document.getElementById("C1_Fac"),
    document.getElementById("C1_Sub"),
    document.getElementById("C1_Room")
  );
}
function c1_del() {
  del(
    THcellIDs[24],
    THcellIDs[49],
    THcellIDs[15],
    THcellIDs[40],
    THValues[24],
    THValues[49],
    THValues[15],
    THValues[40]
  );
}

function c2_add_data() {
  add(
    30,
    55,
    21,
    46,
    document.getElementById("c2"),
    document.getElementById("C2_Fac"),
    document.getElementById("C2_Sub"),
    document.getElementById("C2_Room")
  );
}
function c2_del() {
  del(
    THcellIDs[30],
    THcellIDs[55],
    THcellIDs[21],
    THcellIDs[46],
    THValues[30],
    THValues[55],
    THValues[21],
    THValues[46]
  );
}

function d1_add_data() {
  add(
    2,
    36,
    27,
    52,
    document.getElementById("d1"),
    document.getElementById("D1_Fac"),
    document.getElementById("D1_Sub"),
    document.getElementById("D1_Room")
  );
}
function d1_del() {
  del(
    THcellIDs[2],
    THcellIDs[36],
    THcellIDs[27],
    THcellIDs[52],
    THValues[2],
    THValues[36],
    THValues[27],
    THValues[52]
  );
}

function d2_add_data() {
  add(
    8,
    42,
    33,
    58,
    document.getElementById("d2"),
    document.getElementById("D2_Fac"),
    document.getElementById("D2_Sub"),
    document.getElementById("D2_Room")
  );
}
function d2_del() {
  del(
    THcellIDs[8],
    THcellIDs[42],
    THcellIDs[33],
    THcellIDs[58],
    THValues[8],
    THValues[42],
    THValues[3],
    THValues[58]
  );
}

function e1_add_data() {
  add(
    14,
    48,
    39,
    17,
    document.getElementById("e1"),
    document.getElementById("E1_Fac"),
    document.getElementById("E1_Sub"),
    document.getElementById("E1_Room")
  );
}
function e1_del() {
  del(
    THcellIDs[14],
    THcellIDs[48],
    THcellIDs[39],
    THcellIDs[17],
    THValues[14],
    THValues[48],
    THValues[39],
    THValues[17]
  );
}

function e2_add_data() {
  add(
    54,
    20,
    45,
    17,
    document.getElementById("e2"),
    document.getElementById("E2_Fac"),
    document.getElementById("E2_Sub"),
    document.getElementById("E2_Room")
  );
}
function e2_del() {
  del(
    THcellIDs[54],
    THcellIDs[20],
    THcellIDs[45],
    THcellIDs[17],
    THValues[54],
    THValues[20],
    THValues[45],
    THValues[17]
  );
}

function f1_add_data() {
  add(
    1,
    26,
    51,
    17,
    document.getElementById("f1"),
    document.getElementById("F1_Fac"),
    document.getElementById("F1_Sub"),
    document.getElementById("F1_Room")
  );
}
function f1_del() {
  del(
    THcellIDs[1],
    THcellIDs[26],
    THcellIDs[51],
    THcellIDs[17],
    THValues[1],
    THValues[26],
    THValues[51],
    THValues[17]
  );
}

function f2_add_data() {
  add(
    7,
    25,
    57,
    17,
    document.getElementById("f2"),
    document.getElementById("F2_Fac"),
    document.getElementById("F2_Sub"),
    document.getElementById("F2_Room")
  );
}
function f2_del() {
  del(
    THcellIDs[7],
    THcellIDs[25],
    THcellIDs[57],
    THcellIDs[17],
    THValues[7],
    THValues[25],
    THValues[57],
    THValues[17]
  );
}

function g1_add_data() {
  add(
    38,
    13,
    4,
    17,
    document.getElementById("g1"),
    document.getElementById("G1_Fac"),
    document.getElementById("G1_Sub"),
    document.getElementById("G1_Room")
  );
}
function g1_del() {
  del(
    THcellIDs[38],
    THcellIDs[13],
    THcellIDs[4],
    THcellIDs[17],
    THValues[38],
    THValues[13],
    THValues[4],
    THValues[17]
  );
}

function g2_add_data() {
  add(
    19,
    44,
    11,
    17,
    document.getElementById("g2"),
    document.getElementById("G2_Fac"),
    document.getElementById("G2_Sub"),
    document.getElementById("G2_Room")
  );
}
function g2_del() {
  del(
    THcellIDs[19],
    THcellIDs[44],
    THcellIDs[11],
    THcellIDs[17],
    THValues[19],
    THValues[44],
    THValues[11],
    THValues[17]
  );
}

window.addEventListener('beforeunload', function(event) {
  // Cancel the event
  event.preventDefault();
  // Chrome requires returnValue to be set
  event.returnValue = '';

  // Display a warning message
  var message = 'Are you sure you want to leave this site?';
  return message;
});