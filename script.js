function myFunction(){
  var x = document.getElementById("About me");
  var i = x.selectedIndex;
  var b = x.value;
  document.getElementById("Hector").innerHTML = x.options[i].text;
  document.getElementById("Hector's").innerHTML = "Hector's"
  document.getElementById("postcard").style.backgroundImage = "url('img/"+ b +"@2x.jpg"
}