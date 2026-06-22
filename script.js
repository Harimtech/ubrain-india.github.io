function checkAccess() {
  const email = prompt("Enter your institutional email:");
  const result = document.getElementById("access-result");

  if (!email) {
    result.innerHTML = "No email entered.";
    result.style.color = "#9a5b00";
    return;
  }

  const allowed =
    email.toLowerCase().endsWith("@iitbhu.ac.in") ||
    email.toLowerCase().endsWith("@itbhu.ac.in");

  if (allowed) {
    result.innerHTML = "Access eligible for IIT(BHU) restricted phase.";
    result.style.color = "green";
  } else {
    result.innerHTML = "Access restricted. Please use an IIT(BHU) institutional email.";
    result.style.color = "red";
  }
}
