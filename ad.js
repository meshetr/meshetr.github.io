$( document ).ready((async function(){
    const id = window.location.search.substring(1);
    const response = await fetch("http://34.120.16.63/catalogue/api/v1/ad/"+id);
    const data = await response.json();
    $("#naslov").text(data.adModel.title);
    $("#opis").text(data.adModel.description);
    $("#cena").text(data.adModel.price.toFixed(2)+"€");
    for (let index = 0; index < data.photos.length; index++) {
        const element = data.photos[index];
        $("#img-"+index).attr("src", element.urlOriginal);
    }
})());
