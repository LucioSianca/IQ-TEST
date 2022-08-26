function verificarRespuestas(e) {
  e.preventDefault()
  var total = 7;
  var puntos = 0;

  var myForm = document.forms["survey-form"].elements;
  var respuestas = ["reconfortantes", "diecinueve", "arquitecto_aburrido", "cientodieciocho", "debil", "electricidad", "queja"];

  // console.log(myForm);
  for (var i = 0; i <= total; i++) {
    if (myForm["user-recommend" + i]) {
      let respondio = "";

      myForm["user-recommend" + i].forEach((input) => {
        if (input.checked) {
          respondio = input.value;
        }
      })

      if (!respondio) {
        alert("Por favor responde la pregunta " + i);
        return false;
      } else {
        console.log(respondio);
        if (respuestas.includes(respondio.toLowerCase())) {
          puntos++;
        }
      }
    }

  }

  var resultado = document.getElementById("resultado");
  resultado.innerHTML = "<h3> Obtuviste <span>" + puntos + "</span> de <span>" + total + "</span> acertadas.<br><br> 0-2 Tu IQ esta por debajo del resto. </br> 3-5 Tu IQ es el normal.<br> 6-7 Tu IQ es superior al resto.</h3> "
}