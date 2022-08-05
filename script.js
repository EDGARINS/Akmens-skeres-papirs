let akmens = document.getElementById("akmens");
let skeres = document.getElementById("skeres");
let papirs = document.getElementById("papirs");
let dakmens = document.getElementById("Dakmens");
let dpapirs = document.getElementById("Dpapirs");
let dskeres = document.getElementById("Dskeres");
let uzvarasteksts = document.getElementById("uzvarasteksts");

function getRandomInt(min, max) {
  min = Math.ceil(0);
  max = Math.floor(3);
  return Math.floor(Math.random() * (max - min) + min);
}
// 0 -akmens 1 - skeres 2 -papirs

let x = getRandomInt();
// let x = 0;

document.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    turpinat();
  }
});

function aakmens() {
  akmens.style.height = "300px";
  akmens.style.width = "auto";
  akmens.style.margintop = "100px";
  akmens.style.transition = "1s";
  skeres.style.display = "none";
  papirs.style.display = "none";
}

function ppapirs() {
  papirs.style.height = "300px";
  papirs.style.width = "auto";
  papirs.style.margintop = "100px";
  papirs.style.transition = "1s";
  papirs.style.position = "absolute";
  skeres.style.display = "none";
  akmens.style.display = "none";
}

function sskeres() {
  skeres.style.height = "300px";
  skeres.style.width = "auto";
  skeres.style.margintop = "100px";
  skeres.style.transition = "1s";
  akmens.style.display = "none";
  papirs.style.display = "none";
}
function akmensa() {
  dakmens.style.height = "300px";
  dakmens.style.width = "auto";
  dakmens.style.margintop = "100px";
  dakmens.style.transition = "1s";
  dskeres.style.display = "none";
  dpapirs.style.display = "none";
}

function papirsp() {
  dpapirs.style.height = "300px";
  dpapirs.style.width = "auto";
  dpapirs.style.margintop = "100px";
  dpapirs.style.transition = "1s";
  dpapirs.style.position = "absolute";
  dskeres.style.display = "none";
  dakmens.style.display = "none";
}

function skeress() {
  dskeres.style.height = "300px";
  dskeres.style.width = "auto";
  dskeres.style.margintop = "100px";
  dskeres.style.transition = "1s";
  dakmens.style.display = "none";
  dpapirs.style.display = "none";
}

let d = 0;
let c = 0;

document.getElementById("rcilveks").innerHTML = c;
document.getElementById("rdators").innerHTML = d;

function redzrez() {
  document.getElementById("rcilveks").innerHTML = c;
  document.getElementById("rdators").innerHTML = d;
}

button();

function cakmens() {
  if (x == 0) {
    aakmens();
    akmensa();
    document.getElementById("uzvarasteksts").innerHTML = "Neizšķirts";
    button();
  } else if (x == 1) {
    aakmens();
    skeress();
    document.getElementById("uzvarasteksts").innerHTML = "Tu uzvarēji";
    button();
    c++;
    redzrez();
  } else {
    aakmens();
    papirsp();
    document.getElementById("uzvarasteksts").innerHTML = "Tu zaudēji";
    d += 1;
    redzrez();
    button();
  }
}

function cpapirs() {
  if (x == 0) {
    ppapirs();
    akmensa();
    document.getElementById("uzvarasteksts").innerHTML = "Tu uzvarēji";
    c++;
    redzrez();
    button();
  } else if (x == 1) {
    ppapirs();
    skeress();
    document.getElementById("uzvarasteksts").innerHTML = "Tu zaudēji";
    d++;
    redzrez();
    button();
  } else {
    ppapirs();
    papirsp();
    document.getElementById("uzvarasteksts").innerHTML = "Neizšķirts";
    button();
  }
}

function cskeres() {
  if (x == 0) {
    sskeres();
    akmensa();
    document.getElementById("uzvarasteksts").innerHTML = "Tu zaudēji";
    d++;
    redzrez();
    button();
  } else if (x == 1) {
    sskeres();
    skeress();
    document.getElementById("uzvarasteksts").innerHTML = "Neizšķirts";
    button();
  } else {
    sskeres();
    papirsp();
    document.getElementById("uzvarasteksts").innerHTML = "Tu uzvarēji";
    c++;
    redzrez();
    button();
  }
}

function button() {
  if (c == 3 || d == 3) {
    document.getElementById("button").innerHTML = "Sākt no jauna (space)";
  } else {
    document.getElementById("button").innerHTML = "Turpināt (space)";
  }
}

function turpinat() {
  if (c == 3 || d == 3) {
    saktnojauna();
    x = getRandomInt();
    button();
  } else {
    saliktpavietam();
    x = getRandomInt();
    button();
  }
}

function saktnojauna() {
  c = 0;
  d = 0;
  saliktpavietam();
  redzrez();
}

function saliktpavietam() {
  document.getElementById("uzvarasteksts").innerHTML = " ";
  akmens.style.height = "150px";
  akmens.style.width = "auto";
  akmens.style.margintop = "0px";
  akmens.style.transition = "1s";
  akmens.style.display = "inline";
  papirs.style.display = "inline";
  papirs.style.height = "150px";
  papirs.style.width = "auto";
  papirs.style.margintop = "0px";
  papirs.style.transition = "1s";
  papirs.style.position = "inline";
  skeres.style.display = "inline";
  skeres.style.height = "150px";
  skeres.style.width = "auto";
  skeres.style.margintop = "0px";
  skeres.style.transition = "1s";
  dakmens.style.height = "150px";
  dakmens.style.width = "auto";
  dakmens.style.margintop = "0px";
  dakmens.style.transition = "1s";
  dakmens.style.display = "inline";
  dpapirs.style.display = "inline";
  dpapirs.style.height = "150px";
  dpapirs.style.width = "auto";
  dpapirs.style.position = "static";
  dpapirs.style.margintop = "0px";
  dpapirs.style.transition = "1s";
  dskeres.style.display = "inline";
  dskeres.style.height = "150px";
  dskeres.style.width = "auto";
  dskeres.style.margintop = "0px";
  dskeres.style.transition = "1s";
}
// akmens.style.opacity = "0";
// dakmens.style.height = "300px";
// dakmens.style.width = "auto";
// dakmens.style.position = "absolute";
// dakmens.style.marginTop = "100px";
