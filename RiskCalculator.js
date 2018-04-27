var likelihoodAverage = 0;
var impactAverage = 0;
var riskAverage = 0;

<!-- Calculate Likelihood -->
var likelihoodVar = setInterval(likelihood, 50);
function likelihood() {
  var skill = parseInt(document.getElementById("L1").value, 10);
  var motive = parseInt(document.getElementById("L2").value, 10);
  var opportunity = parseInt(document.getElementById("L3").value, 10);
  var size = parseInt(document.getElementById("L4").value, 10);
  var discovery = parseInt(document.getElementById("L5").value, 10);
  var exploit = parseInt(document.getElementById("L6").value, 10);
  var awareness = parseInt(document.getElementById("L7").value, 10);
  var detection = parseInt(document.getElementById("L8").value, 10);

  likelihoodAverage = (skill + motive + opportunity + size + discovery + exploit + awareness + detection) / 8.0;
  document.getElementById("L_score").innerHTML = likelihoodAverage;

  if (likelihoodAverage >= 6 && likelihoodAverage < 9) {
    document.getElementById("L_rating").innerHTML = "High";
    document.getElementById("L_rating").style.backgroundColor = "red";
    document.getElementById("L_rating").style.color = "white";
  } else if (likelihoodAverage >= 3 && likelihoodAverage < 6) {
    document.getElementById("L_rating").innerHTML = "Medium";
    document.getElementById("L_rating").style.backgroundColor = "yellow";
    document.getElementById("L_rating").style.color = "black";
  } else if (likelihoodAverage >= 0 && likelihoodAverage < 3) {
    document.getElementById("L_rating").innerHTML = "Low";
    document.getElementById("L_rating").style.backgroundColor = "green";
    document.getElementById("L_rating").style.color = "white";
  }
}

<!-- Calculate impact -->
var impactVar = setInterval(impact, 50);
function impact() {
  var confidentiality = parseInt(document.getElementById("I1").value, 10);
  var integrity = parseInt(document.getElementById("I2").value, 10);
  var availability = parseInt(document.getElementById("I3").value, 10);
  var accountability = parseInt(document.getElementById("I4").value, 10);
  var financial = parseInt(document.getElementById("I5").value, 10);
  var reputation = parseInt(document.getElementById("I6").value, 10);
  var compliance = parseInt(document.getElementById("I7").value, 10);
  var privacy = parseInt(document.getElementById("I8").value, 10);

  impactAverage = (confidentiality + integrity + availability + accountability + financial + reputation + compliance + privacy) / 8.0;
  document.getElementById("I_score").innerHTML = impactAverage;

  if (impactAverage >= 6 && impactAverage < 9) {
    document.getElementById("I_rating").innerHTML = "High";
    document.getElementById("I_rating").style.backgroundColor = "red";
    document.getElementById("I_rating").style.color = "white";
  } else if (impactAverage >= 3 && impactAverage < 6) {
    document.getElementById("I_rating").innerHTML = "Medium";
    document.getElementById("I_rating").style.backgroundColor = "yellow";
    document.getElementById("I_rating").style.color = "black";
  } else if (impactAverage >= 0 && impactAverage < 3) {
    document.getElementById("I_rating").innerHTML = "Low";
    document.getElementById("I_rating").style.backgroundColor = "green";
    document.getElementById("I_rating").style.color = "white";
  }
}

<!-- Calculate risk -->
var riskVar = setInterval(risk, 50);
function risk() {
  riskAverage = (likelihoodAverage + impactAverage) / 2.0;
  document.getElementById("R_score").innerHTML = riskAverage;

  if (riskAverage >= 6 && riskAverage < 9) {
    document.getElementById("R_rating").innerHTML = "High";
    document.getElementById("R_rating").style.backgroundColor = "red";
    document.getElementById("R_rating").style.color = "white";
  } else if (riskAverage >= 3 && riskAverage < 6) {
    document.getElementById("R_rating").innerHTML = "Medium";
    document.getElementById("R_rating").style.backgroundColor = "yellow";
    document.getElementById("R_rating").style.color = "black";
  } else if (riskAverage >= 0 && riskAverage < 3) {
    document.getElementById("R_rating").innerHTML = "Low";
    document.getElementById("R_rating").style.backgroundColor = "green";
    document.getElementById("R_rating").style.color = "white";
  }
}
