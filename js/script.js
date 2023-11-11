function validateForm(){
    let fname = document.forms["orderForm"]["firstName"].value;
    let lname = document.forms["orderForm"]["lastName"].value;
    let email = document.forms["orderForm"]["email"].value;
    let order = document.forms["orderForm"]["order"].value;
    if (fname == "" || lname == "" || email == ""|| order == "") {
      alert("All fields must be filled out!");
      return false;
    } 
    return true;
  } 