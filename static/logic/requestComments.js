'use strict'


function request_comment_dto(response){
  let payload = ""
  for( let id in response){
    console.log(response[id])
    let comment =  response[id]
    let content =   "<li class='collection-item avatar'>"+
                    "<i class='material-icons circle blue'>comment</i>"+
                    "<span class='title'> <b>"+comment["email"]+" </b> <br> </span>"+
                    comment["body"]+
                    "</p>"+
                    "<a href='#!' class='secondary-content'><i class='material-icons'>visibility</i></a>"+
                    "</li>"
    payload += content
  }
  document.getElementById("infocomments").innerHTML = payload
}

//Create ajax JQuery request without token
function request_comment_dao( id ) {
  let _method = "GET"
  let _url  =  "https://jsonplaceholder.typicode.com/posts/"+id+"/comments"
  $.ajax({
    method: _method,
    url: _url
  })
  .done((res) => {
    console.log("The request for :"+_url+ " has finished");
    request_comment_dto(res)

  })
  .fail((_, status, error) => {
    console.log(status)
    console.log(error)
  });
}
