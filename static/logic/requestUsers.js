'use strict'

function request_users_dto(response){
  for( let id in response){
    console.log(response[id])
  }
}

//Create ajax JQuery request without token
function request_users_dao(_method, _url) {
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

let url_request_users =  "https://jsonplaceholder.typicode.com/users"
request_users_dao("GET", url_request_users)
