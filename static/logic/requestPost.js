'use strict'

let url_request_post =  "https://jsonplaceholder.typicode.com/posts?userId="
function request_users_dto(response){
  let payload = ""
  for( let id in response){
    console.log(response[id])
    let comment =  response[id]
    let content =   "<li class='collection-item avatar'>"+
                    "<i class='material-icons circle blue'>comment</i>"+
                    "<span class='title'> <b>"+comment["title"]+" </b> <br> </span>"+
                    comment["body"]+
                    "<br>"+
                    "<button data-target='modal2' onclick='request_comment_dao("+comment["id"]+")' class='btn blue modal-trigger'>Comments</button>"+
                    "</li>"
    payload += content
  }
  document.getElementById("comments").innerHTML = payload

}

//Create ajax JQuery request without token
function request_post_dao( id ) {
  let _method = "GET"
  let _url = url_request_post + "" +id
  $.ajax({
    method: _method,
    url: _url
  })
  .done((res) => {
    console.log("The request for :"+_url+ " has finished");
    request_users_dto(res)

  })
  .fail((_, status, error) => {
    console.log(status)
    console.log(error)
  });
}
