$(function(){
    var urlApiBase = "http://localhost:3000"
    var moviesResource = "/News"
    var urlApi = urlApiBase + moviesResource
 console.log(urlApi);

    loadData(urlApi);
})

function renderData(data){
    var repertuarList = $('.list');
    data.map(function(elem){
        var a = $('<a>');
        var background = elem.img;
        var link = elem.link;
        var newsTitle = $("<p>").text(elem.title);

        $(a).css('background-image','url(' + background + ')');
        $(a).attr("href", link);

        a.append(newsTitle)
        repertuarList.append(a)
    })
}

function loadData(givenUrl){
    $.ajax({
        url: givenUrl
    }).done(function(resp){
        renderData(resp)
    }).fail(function(err){
        console.log(err);
    })
}