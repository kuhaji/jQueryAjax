"use strict";

const apiURL = 'https://api.tvmaze.com/search/shows?';

const hae = function(event){
    event.preventDefault();
    $("#tulos").empty();

    //console.log($(this).serialize());
//$(document).ready(function(){
   // $("#hakunappi").click(function(){
        //const hakuarvo = $("#hakuteksti").val(); //syötetyn teksti arvo

        $.getJSON(apiURL + $(this).serialize(), function(response){
            //console.log(response);
            $.each(response, function(indeksi, sarja){
                console.log(indeksi, sarja);
                $("#tulos").append(
                `<article>
                <h2>${sarja.show.name}</h2>
                <p>${sarja.show.genres}</p>
                <a href="${sarja.show.officialSite ? sarja.show.officialSite : sarja.show.url}">Linkki kotisivulle</a>
                <figure>
                    <img src="${sarja.show.image ? sarja.show.image.medium : 'icon.png'}" alt="${sarja.show.name}">
                    <figcaption>${sarja.show.name}</figcaption>
                </figure>
                <p>${sarja.show.summary}</p>
                </article>`
                );
            });
        });
    }; 
    //});
//});

$("form").submit(hae);