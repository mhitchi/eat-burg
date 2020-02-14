//ajax call

//post request for new burger

//put request for eaten burger

console.log("getting jquery");

//get elements from DOM
const $devourBtn = $(".devour");


$devourBtn.on('click', function() {
  console.log("clicking devour");
  // TRIED const id = $(this).data("id");
  const id = this.id
  console.log(id);
});