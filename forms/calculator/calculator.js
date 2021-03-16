  function addTwo(n1,n2) {
  return Number(n1) + Number(n2)
  }
function multiplyTwo(n1,n2) {
  return n1 * n2
  }
var answer = 0


btnAdd.onclick=function(){
  lblAnswer.value = addTwo(inptNum1.value, inptNum2.value)
}

btnMultiply.onclick=function(){
  lblAnswer.value = multiplyTwo(inptNum1.value, inptNum2.value)
}

btnClear.onclick=function(){
  lblAnswer.value = ""
}