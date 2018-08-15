// loader from 0 to 100%
var obj = { load: '0%' };

var JSobject = anime({
  targets: obj,
  load: '100%',
  round: 1,
  easing: 'linear',
  update: function() {
    var el = document.querySelector('#JSobject pre');
    el.innerHTML = JSON.stringify(obj);
  }
});

//snippet of code to appear after the loader
var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
