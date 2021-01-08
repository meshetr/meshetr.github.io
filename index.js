(async function(){
    const response = await fetch("http://34.120.16.63/catalogue/api/v1/ads");
    const data = await response.json();
    data.forEach(ad => $("#seznam-oglasov").append(
`   <div class="row">
        <div class="card w-100 m-3">
            <div class="card-header">
                <h5 class="card-title">`+ad.title+`</h5>
            </div>
            <div class="card-body">
                <p class="card-text">`+ad.description+`</p>
                <a href="ad.html?`+ad.idAd+`" class="btn btn-primary">Več...</a>  <h4 class="float-right">`+ad.price.toFixed(2)+`€</h4>
            </div>
        </div>
    </div>
`    ));
})()