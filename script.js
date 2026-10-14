const form = document.getElementById("bookingForm");
const date = document.getElementById("date");
const today = new Date();
date.min = today.toISOString().split("T")[0];

form.addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const service = document.getElementById("service").value;
  const selectedDate = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const phone = document.getElementById("phone").value.trim();

  const formattedDate = selectedDate.split("-").reverse().join("/");
  const message =
`Olá, Clínica Revê! Gostaria de solicitar um agendamento.

Nome: ${name}
Atendimento: ${service}
Data: ${formattedDate}
Horário: ${time}
Telefone: ${phone || "Não informado"}

Aguardo a confirmação do horário.`;

  window.open("https://wa.me/5531986675756?text=" + encodeURIComponent(message), "_blank");
});