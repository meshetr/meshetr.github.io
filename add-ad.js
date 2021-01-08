$("#form-dodaj-oglas").submit(async function (event) {
  event.preventDefault();
  const response = await fetch("http://34.120.16.63/manager/api/v1/ad", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id_user: "external-id-6894689",
      title: $("#naslov").val(),
      description: $("#opis").val(),
      price: parseFloat($("#cena").val())
    })
  });
  const resp = await response.json();
  const ad_id = resp.id;

  if (document.getElementById("slike").files.length > 0) {
    Array.from(document.getElementById("slike").files).forEach(file => {
      var formData = new FormData();
      var request = new XMLHttpRequest();
      formData.append("photo", file);
      request.open("POST", "http://34.120.16.63/manager/api/v1/ad/" + ad_id + "/photo");
      request.send(formData);
    })
  }

  alert("Oglas dodan")
  document.getElementById("form-dodaj-oglas").reset();
});