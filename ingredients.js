const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let x = 0;
while (x < ingredients.length) {
  console.log(packingList[x]);
  x++;
};
// Write a for loop that prints out the contents of ingredients:
for (var i = 0; i <ingredients.length; i++){
  console.log(ingredients[i]);
};

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for(var b = ingredients.length - 1; b >= 0; b--){
  console.log(ingredients[b])
};