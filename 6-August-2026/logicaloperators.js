let hasSolvedChallenge = false;
let hasHintsLeft = false;
let hasCompletedCourse = true;
let givesCertificate = true;
function showSolution() {
  console.log("showing solution");
}
// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function
if (hasSolvedChallenge === false && hasHintsLeft === false) {
  showSolution();
}
//if course completed generate certificate
if (hasCompletedCourse === true || givesCertificate === true) {
  generateCertificate();
}

function generateCertificate() {
  console.log("Generating certificate....");
}
