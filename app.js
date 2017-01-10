(function () {

'use strict';
angular.module('Assignment1',[])
.controller('controller1',controller1);


function controller1($scope) {
$scope.lunch="";
$scope.Calculate_lunch_menu=function(){
 var count=split_array($scope.lunch);
 $scope.message=message_output(count);
 $scope.color=color_output(count);
}
}

function split_array(str){
  var lunch_menu_array=str.split(',');
  var count=0;
  for (var i = 0; i < lunch_menu_array.length; i++) {
    //item1,item2,, is counted as 2 items only
  if(lunch_menu_array[i]=="")
  continue;
  else
  count++;
  }
return (count);
}

function message_output(count) {
  if(count==0)
   return "Please enter data first";
else if(count>3)
  return "Too much!";
else if(count<=3) {
  return "Enjoy!";
}
}

function color_output(count){
  if(count==0)
   return "red";
  else {
    return "green";
  }
}



})();
