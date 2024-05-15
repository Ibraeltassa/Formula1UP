let myInterval1;
let myInterval2;
let myInterval3;
let myInterval4;
let myInterval5;
let posX1 = 0;
let posX2 = 0;
let posX3 = 0;
let posX4 = 0;
let posX5 = 0;
let b = true;
let chosenCar = 0;
let betValue = 0;
let wallet = 100;

function timer1(){
    posX1 += Math.ceil(Math.random() * 20);
    const car1 = document.getElementById("car1");
    if(posX1 > 1780){
      posX1 = 1780;
      car1.style.transform = "translateX(" + posX2 + "px )";
      winner();
    }
    car1.style.transform = "translateX(" + posX1 + "px)";
  }

  function timer2(){
    posX2 += Math.ceil(Math.random() * 20);
    const car2 = document.getElementById("car2");
    if(posX2 > 1780){
      posX2 = 1780;
      car2.style.transform = "translateX(" + posX2 + "px )";
      winner();
    }
    car2.style.transform = "translateX(" + posX2 + "px)";
  }

  function timer3(){
    posX3 += Math.ceil(Math.random() * 20);
    const car3 = document.getElementById("car3");
    if(posX3 > 1780){
      posX3 = 1780;
      car3.style.transform = "translateX(" + posX3 + "px )";
      winner();
    }
    car3.style.transform = "translateX(" + posX3 + "px)";
  }

  function timer4(){
    posX4 += Math.ceil(Math.random() * 20);
    const car4 = document.getElementById("car4");
    if(posX4 > 1780){
      posX4 = 1780;
      car4.style.transform = "translateX(" + posX4 + "px )";
      winner();
    }
    car4.style.transform = "translateX(" + posX4 + "px)";
  }

  function timer5(){
    posX5 += Math.ceil(Math.random() * 20);
    const car5 = document.getElementById("car5");
    if(posX5 > 1780){
      posX5 = 1780;
      car5.style.transform = "translateX(" + posX5 + "px )";
      winner();
    }
    car5.style.transform = "translateX(" + posX5 + "px)";
  }

  function myStop() {
    clearInterval(myInterval1);
    clearInterval(myInterval2);
    clearInterval(myInterval3);
    clearInterval(myInterval4);
    clearInterval(myInterval5);
  }

  function init(){
    if(b === true){
      myInterval1 = setInterval(timer1, 50);
      myInterval2 = setInterval(timer2, 50);
      myInterval3 = setInterval(timer3, 50);
      myInterval4 = setInterval(timer4, 50);
      myInterval5 = setInterval(timer5, 50);
    }
  }

  function winner(){
    b = false;
    myStop();
    if(posX1 >= 1780) {
      alert("The winner car is 1");
    }
    if(posX2 >= 1780) {
      alert("The winner car is 2");
    }
    if(posX3 >= 1780) {
      alert("The winner car is 3");
    }
    if(posX4 >= 1780) {
      alert("The winner car is 4");
    }
    if(posX5 >= 1780) {
      alert("The winner car is 5");
    }
  }

  function chooseCar(carNumber){
    chosenCar = carNumber;
    document.getElementById("Result").innerText = `Bet car ${carNumber} selected.`;
  }

  function toBet(){
    betValue = parseInt(document.getElementById("betValue").value);
    
    if(isNaN(betValue) || betValue <= 4) {
      alert("The minimum value is 5 dollars.");
      return;
    }

    if(chosenCar === 0) {
      alert("Choose a car to bet.");
      return;
    }

    if(betValue > wallet){
      alert("Insufficient balance to bet");
      return;
    }

    init();
    wallet -= betValue;
    document.getElementById("wallet").innerText = wallet;

  }

  function addValue() {
    // Obter o valor adicionado
    var valueToAdd = parseInt(document.getElementById("addValueInput").value);
    
    // Verificar se o valor adicionado é válido
    if (isNaN(valueToAdd) || valueToAdd <= 0) {
      alert("Please enter a valid positive number.");
      return;
  }
    
    // Adicionar o valor à carteira
    wallet += valueToAdd;
    
    // Atualizar o saldo exibido na carteira
    document.getElementById("wallet").innerText = wallet;
    
    // Limpar o campo de entrada
    document.getElementById("addValueButton").value = "";
}
