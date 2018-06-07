function showPokemon(query) {
    var result = "";
    
    if(query == null){
      console.log("Voy a mostrar todos");
      for(var i=0; i<pokemones.length; i++){
        result += "<div class='amigoItem'>";
        result += "<img src=" + pokemones[i].ThumbnailImage +">";
        result += "<h1>" + pokemones[i].name + "</h1>";
        result += "<p>" + pokemones[i].id + "</p>";
        result += "<img src=img/types/" + pokemones[i].type + '.png' +">";
        result += "</div>";
      }
      document.getElementById("result").innerHTML = result;
    } else {
      console.log(query);
      for(var i=0; i<pokemones.length; i++){
        if(pokemones[i].name.toLowerCase().search(query) >= 0){
            result += "<div class='amigoItem'>";
            result += "<img src=" + pokemones[i].ThumbnailImage +">";
            result += "<h1>" + pokemones[i].name + "</h1>";
            result += "<p>" + pokemones[i].id + "</p>";
            result += "<img src=img/types/" + pokemones[i].type + '.png' +">";
            result += "</div>";
        }
      }
      document.getElementById("result").innerHTML = result;
    }
  }
  
  function searchPokemon() {
    var query = document.getElementById("query").value;
    
    showPokemon(query);
  }