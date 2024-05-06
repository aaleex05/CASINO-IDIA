let chamber = 10;
document.onclick = function(){
  if ((chamber === 0) || (Math.random()*100<(100/chamber))) {
    chamber = 10;
    document.head.style.display='block';
    document.documentElement.style.background='darkred';
  } else {
    document.head.style.display='none';
    document.documentElement.style.background='darkgreen';
  }
  document.body.style.cssText='-webkit-transform:rotate('+chamber*60+'deg);-moz-transform:rotate('+chamber*60+'deg);transform:rotate('+chamber*60+'deg)';
  chamber--;
}
document.onkeydown = function(e) {
  e = e || window.event;
  const charCode = (typeof e.which == "number") ? e.which : e.keyCode;
  if (charCode === 32) {
    document.dispatchEvent(new MouseEvent('click'))
  }
}