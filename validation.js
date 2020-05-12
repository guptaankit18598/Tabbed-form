function validateform() {
  for(var i=0;i<myform.elements.length;i++) {
  if(myform.elements[i].className == "req" && myform.elements[i].value.length == 0) {
  
    alert('Please fill all the required fields');
    return false;


}
}
  var Email = document.getElementsById('Email').value;
  var atpos = Email.indexOf('@');
  var dotpos = Email.indexOf('.');
  if(atpos<1 || dotpos<atpos+2 || dotpos+2 >= x.length) {
  alert('Please fill the correct emailId');
  return false; 
}
}