
 $(document).ready(function(){
   
   function mostrarPeople(url,pos){
       

         
           $.ajax({
              url: url,
              dataType: "json",
              success: function(data){
                $('#ppl'+pos).append(
                       '<li> ' +
                           data.name+
                       '</li>');
              }
           });
        }
       




   $.ajax({
     url: "http://swapi.co/api/films", 
     dataType: "json", 
     success: function(data){
       for(var i=0;i<data.results.length;i++){
         $('.films').append('<div class="col-md-4 col-xs-12 text center" style="height: 650px;"><a href="#" class="thumbnail"><img style="width: 350px;" src="images/' + data.results[i].title.replace(/\s/g,"") +'.jpg"><h3>'+data.results[i].title+'</h3><ul><li>Episodio: '+data.results[i].episode_id+'</li><li>Fecha de estreno: '+data.results[i].release_date+'</li><li>Director: '+data.results[i].director+'</li><li>Productor: '+data.results[i].producer+'</li></ul>'+'<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal'+i+'">Sinopsis</button>'+
           '<div id="myModal'+i+'" class="modal fade" role="dialog">'+
           '  <div class="modal-dialog">'+
           '    <div class="modal-content">'+
           '      <div class="modal-header">'+
           '        <button type="button" class="close" data-dismiss="modal">&times;</button>'+
           '        <h4 class="modal-title">'+data.results[i].title+'</h4>'+
           '      </div>'+
           '      <div class="modal-body">'+
           '        <p>Sinopsis: '+data.results[i].opening_crawl+'</p>'+
           '      </div>'+
           '      <div class="modal-footer">'+
           '        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
           '      </div>'+
           '    </div>'+
           '  </div>'+
           '</div>'+'<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myPeople'+i+'">Personajes</button>'+
           '<div id="myPeople'+i+'" class="modal fade" role="dialog">'+
           '  <div class="modal-dialog">'+
           '    <div class="modal-content">'+
           '      <div class="modal-header">'+
           '        <button type="button" class="close" data-dismiss="modal">&times;</button>'+
           '        <h4 class="modal-title">'+data.results[i].title+'</h4>'+
           '      </div>'+
           '      <div class="modal-body" id="ppl'+i+'">'+
           '        <ul>Personajes :</ul>'+
           '      </div>'+
           '      <div class="modal-footer">'+
           '        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
           '      </div>'+
           '    </div>'+
           '  </div>'+
'</div></div>');

         for (var j = 0; j < data.results[i].characters.length; j++){
                      
                        mostrarPeople(data.results[i].characters[j],i)
                     }

       }
     }
   })
  })

 
function mostrarHomeWorld(url, pos){
           $.ajax({
              url: url,
              dataType: "json",
              success: function(data){
                 $("p.homeworld"+pos).text('Homeworld: ' + data.name)
              }
           });
        }


        function mostrarLanguage(url, pos){
           $.ajax({
              url: url,
              dataType: "json",
              success: function(data){
                 $("p.lenguaje"+pos).text('Lenguaje: ' + data.language)
              }
           });

        }

        function mostrarSpecies(url, pos){
           $.ajax({
              url: url,
              dataType: "json",
              success: function(data){
                 $("p.species"+pos).text('Species Name: ' + data.name)
              }
           });

        }

        function mostrarClasificacion(url, pos){
           $.ajax({
              url: url,
              dataType: "json",
              success: function(data){
                 $("p.clasificacion"+pos).text('Species Classification: ' + data.classification)
              }
           });

        }

        function mostrarFilms(url,pos){
       

         
           $.ajax({
              url: url,
              dataType: "json",
              success: function(data){
                $('.films'+pos).append(
                       '<li> ' +
                           data.title+
                       '</li>');
              }
           });
        }
       
      

        function cargarPeople(_url){

        $.ajax({
           type: "GET",
           url: _url,
           dataType: "json",
           success: function(data){
              if(data.previous!=null){
                 $('.previous').attr('value',data.previous);
                 $('.previous').removeClass('disabled');
              }else{
                 $('.previous').addClass('disabled');
              }
              if(data.next!=null){
                 $('.next').attr('value',data.next);
                 $('.next').removeClass('disabled');
              }else{
                 $('.next').addClass('disabled');
              }
              $(".people").html("");
               for (var i = 0; i < data.results.length; i++){
                   $('.people').append('<div class="col-md-6" style="background:rgba(185, 204, 220,0.5); height: 350px;">' +
                       '<div class="info"><a href="#"class="thumbnail" style="height:100%"> ' +
                       '<h3>' + data.results[i].name +'</h3>' +
                       '<p class="homeworld'+i+'"></p>' +
                       '<p class="species'+i+'"></p>' + 
                       '<p class="clasificacion'+i+'"></p>' + 
                       '<p class="lenguaje'+i+'"></p>' + 
                       '<ul class="films'+i+'"></ul></div></div>');
                     for (var j = 0; j < data.results[i].films.length; j++){
                      
                        mostrarFilms(data.results[i].films[j],i)
                     }
                    mostrarHomeWorld(data.results[i].homeworld, i);
                    mostrarSpecies(data.results[i].species, i);
                    mostrarLanguage(data.results[i].species, i);
                    mostrarClasificacion(data.results[i].species, i);
                    
               }
           }
       });
        }
     
       
             cargarPeople("http://swapi.co/api/people/");

              $('.next').on("click", function(){
                 var url = this.value;
                 cargarPeople(url);
              });

              $('.previous').on("click", function(){
                 var url = this.value;
                 cargarPeople(url);
              });
      
         





              

 




   

     



