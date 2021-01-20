document.write('<script src="menu.js"></script>');

function renew() {
  num_of_dish();
}

function getRandom(x) {
  return Math.floor(Math.random() * x) + 1;
}
function changeDish(amount_dish, isSP) {
  for (var i = 0; i < amount_dish; i++) {
    var this_dish = getRandom(35 - 1);

    document.getElementsByClassName("name_of_dish")[i].innerHTML =
      dishes[this_dish].name;

    document.getElementsByClassName("price_of_dish")[i].innerHTML =
      dishes[this_dish].price + " TWD";

    document.getElementsByClassName("abbr_name")[i].innerHTML =
      dishes[this_dish].abbr;

    if (isSP === "sp") {
        var add_item = add_meal();
      document.getElementsByClassName("extra")[i].innerHTML = add_item.item;
      document.getElementsByClassName("customize")[i].innerHTML = "** "+add_sp();

      document.getElementsByClassName("price_of_dish")[i].innerHTML =
      dishes[this_dish].price + add_item.price + " TWD";
    }
  }
}

function num_of_dish(isSP) {
  var amount_dish = getRandom(4);

  var one_dish =
    '<div class="order_line"><div class="name_of_dish">預設</div><div class="price_of_dish"></div><div class="abbr_name"></div><div class="extra"></div><div class="customize"></div></div>';

  document.getElementById("order_block").innerHTML = "";

  for (var i = 0; i < amount_dish; i++) {
    document.getElementById("order_block").innerHTML += one_dish;
    if (i < amount_dish - 1)
      document.getElementById("order_block").innerHTML += "<hr>";
  }

  changeDish(amount_dish, isSP);
}

function add_meal() {
  var add = getRandom(extra_meal.length);

  return extra_meal[add - 1];
}
function add_sp() {
  var add = getRandom(order_make.length);

  return order_make[add - 1];
}

function answer() {
  var abb = document.getElementsByClassName("abbr_name");

  for (var i = 0; i < abb.length; i++) {
    abb[i].style.color = "red";
  }
}
function sp_order() {
  num_of_dish("sp");
}
