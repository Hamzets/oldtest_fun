function getValue(element) {
  console.log(element.value);
}
let fsubmit = document.getElementById("formsubmit");
fsubmit.onclick = function (event) {
  getValue(document.getElementById("name"));
  getValue(document.getElementById("sname"));
  getValue(document.getElementById("email"));
};
