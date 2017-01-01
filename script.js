document.getElementById("homebutton").addEventListener("click", setHome);
document.getElementById("aboutbutton").addEventListener("click", setAbout);
document.getElementById("gallerybutton").addEventListener("click", setGallery);
document.getElementById("contactbutton").addEventListener("click", setContact);

setHome()

function setHome(){
  displayNone()
  document.getElementById("homeinfo").style.display = "block"
}
function setAbout(){
  displayNone()
  document.getElementById("aboutinfo").style.display = "block"
}
function setGallery(){
  displayNone()
  document.getElementById("galleryinfo").style.display = "block"
}
function setContact(){
  displayNone()
  document.getElementById("contactinfo").style.display = "block"
}
function displayNone(){
  document.getElementById("homeinfo").style.display = "none"
  document.getElementById("aboutinfo").style.display = "none"
  document.getElementById("galleryinfo").style.display = "none"
  document.getElementById("contactinfo").style.display = "none"
}