function clicou(){
    alert("Opa chamou a função");
  }




function verificaMaior() {
   var num1 = document.getElementById('num1').value;
   var num2 = document.getElementById('num2').value;
   var num3 = document.getElementById('num3').value;
    var maior = Math.max(num1, num2, num3);
    alert('O número maior é: ' + maior);
}

function verificaIdade() {
    var idade = document.getElementById('idade').value;
    if (idade >= 18) {
        alert("Você é maior de Idade :)")
    }
    else {
        alert("Você é menor de idade :(");
    }
}