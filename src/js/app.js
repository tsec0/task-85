import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  // fetch(url).then(response => {
  //   if(response.status !== 200){
  //     console.log(`${response.status}`);
  //     return;
  //   }
  //   response.json().then((data) => {
  //     console.log(data)
  //   });
  // });

  // function checkStatus(response){
  //   if(response.status >= 200 && response.status < 300){
  //     return Promise.resolve(response);
  //   }else{
  //     return Promise.reject(new Error(response.status));
  //   }
  // }

  // function toJSON(response){
  //   return response.json();
  // }

  // fetch(url).then(checkStatus).then(toJSON).then((data) => {
  //   console.log(data);
  // });

  // ### post method #####
  // fetch(url, {
  //   method:"post",
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   body:JSON.stringify({
  //     title:"New Post",
  //     text: "Just some text!",
  //   })
  // }).then(toJSON).then(res=>console.group(res));

  // #### response #####
  // fetch(url)
  //   .then(response => {
  //     console.log(response.type);
  //     console.log(response.status);
  //     // console.log(response.headers.get('Date'))
  //     console.log(response.headers.get('Content-Type'))
  //   });

  let url = "https://pokeapi.co/api/v2/pokemon";

  function toJSON(response){
    return response.json();
  }

  fetch(url).then(toJSON).then((data) => {
    data.results.forEach(element => {
      let item_number = Number(element.url.split('/')[6]);
      if(item_number <= 10){
        let li = document.createElement("li");
        li.innerText = element.name;
        ul.appendChild(li);
        console.log(element.url);
      }
    });
  });

  const ul = document.querySelector("ul");
});
