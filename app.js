(function(){

'use strict';

angular.module('ShoppingListApp',[])
.controller('ShoppingListBuyController',ShoppingListBuyController)
.controller('ShoppingListBoughtController',ShoppingListBoughtController)
.service('ShoppingListService', ShoppingListService);

ShoppingListBuyController.$inject=['ShoppingListService'];
function ShoppingListBuyController(ShoppingListService){

var ShoppingList=this;

   ShoppingList.items=ShoppingListService.getItems();

ShoppingList.removeItem=function(itemIndex){
    try{ ShoppingListService.removeItem(itemIndex);
    } catch(error){
      ShoppingList.message=error.message;
    }
};

}


ShoppingListBoughtController.$inject=['ShoppingListService'];
function ShoppingListBoughtController(ShoppingListService){

  var bought=this;
  bought.items= ShoppingListService.getboughtItems();


}

function ShoppingListService(){
  var service=this;
  var bought_items=[];
  var items = [
      {
        name: "Milk",
        quantity: "2"
      },
      {
        name: "Donuts",
        quantity: "200"
      },
      {
        name: "Cookies",
        quantity: "300"
      },
      {
        name:"Biscuits",
        quantity: "6"
     },
      {
        name: "Chocolate",
        quantity: "5"
      }
    
    ];

  service.getItems=function(){
    return items;
  };

service.removeItem=function (itemIndex) {


  bought_items.push(items[itemIndex]);
  items.splice(itemIndex, 1);
  if(items.length===0)
  throw new Error("Everything is bought");
};

  service.getboughtItems = function () {
    
  return bought_items;
};
}




})();
