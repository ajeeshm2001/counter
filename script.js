function action(operator) {
  if (operator == "+") {
    let digit = document.getElementById("digit").innerHTML;
    digit++;
    console.log(digit);
    document.getElementById("digit").innerHTML = digit;
  } else {
    let digit = document.getElementById("digit").innerHTML;
    if (digit == 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You Cannot Enter Below 0",
      });
    } else {
      digit--;
      console.log(digit);
      document.getElementById("digit").innerHTML = digit;
    }
  }
}

function reset() {
  document.getElementById("digit").innerHTML = parseInt(0);
}
