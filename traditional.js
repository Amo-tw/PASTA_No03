document.write('<script src="menu.js"></script>');

function renew() {
  //alert(dishes[2].name);
  //changeDish();
  num_of_dish();
}

function getRandom(x) {
  return Math.floor(Math.random() * x) + 1;
}
function changeDish(amount_dish) {
  //document.getElementById("order_no").innerHTML = amount_dish;

  //document.getElementById("order_no").innerHTML = dishes[getRandom(35)].name;

  for (var i = 0; i < amount_dish; i++) {
    var this_dish = getRandom(35 - 1);

    document.getElementsByClassName("name_of_dish")[i].innerHTML =
      dishes[this_dish].name;

    document.getElementsByClassName("price_of_dish")[i].innerHTML =
      dishes[this_dish].price + " TWD";

    document.getElementsByClassName("extra")[i].innerHTML = "333";
    document.getElementsByClassName("customize")[i].innerHTML = "** 不要胡椒";
        
  }
}

function num_of_dish() {
  var amount_dish = getRandom(4);

  var one_dish =
    '<div class="order_line"><div class="name_of_dish">預設</div><div class="price_of_dish"></div><div class="extra"></div><div class="customize"></div></div>';

  document.getElementById("order_block").innerHTML = "";

  for (var i = 0; i < amount_dish; i++) {
    document.getElementById("order_block").innerHTML += one_dish;
    if(i<amount_dish-1)
        document.getElementById("order_block").innerHTML += "<hr>";
  }

  changeDish(amount_dish);
}