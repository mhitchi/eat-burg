//ajax call

//post request for new burger

//put request for eaten burger

console.log("getting jquery");

//get elements from DOM
const $devourBtn = $(".devour");
const $input = $("#burg-input");
const $addBtn = $("#add");


$devourBtn.on('click', function() {
  const id = this.id
  console.log(id);
  // put request
  $.ajax({
    // TRIED url: 'http://localhost:8080/api/burgers',
    // TRIED url: 'http://localhost:8080/api/burgers/:burg?',
    // TRIED url: `http://localhost:8080/api/burgers/${id}`,
    url: 'http://localhost:8080/api/burgers/devour',
    method: 'POST',
    data: { devoured: true }
  }).then(function(response) {
    console.log(response)
   
  });
});

$addBtn.on('click', function() {
  const newBurg = $input.val();
  console.log(newBurg);
  //TODO NOT WORKING
  $.ajax({
    url: 'http://localhost:8080/api/burgers',
    method: 'POST',
    data: { burger_name: newBurg }
  }).then(function(response) {
    console.log(response)
  });
});