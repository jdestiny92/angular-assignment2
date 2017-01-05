(function(){

'use strict';	

angular.module('boughtChecker', [])
.controller('buyController', buyController)
.controller('boughtController', boughtController)
.service('checkService', checkService);


//Service Logic
function checkService(){
	var check = this;

	check.buyCondition = [false];

	check.boughtCondition = [false];


	check.buyList = [
		{name: 'cookies', quantity: 10},
		{name: 'gallons of milk', quantity: 4},
		{name: 'boxes of poptarts', quantity: 6},
		{name: 'bags of marshmallows', quantity: 2},
		{name: 'cans of whipped cream', quantity: 3}
	];

	check.boughtList = [];

	check.remove = function(index){
		var item = check.buyList[index];
		check.boughtList.push(item);
		check.buyList.splice(index, 1);

		if(check.boughtCondition[0] === false){
			check.boughtCondition[0] = true;
			
		}

		if(check.buyList.length === 0){
			check.buyCondition[0] = true;
			
		}

		
	};

};



//Buying Items Logic
buyController.$inject = ['checkService'];
function buyController(checkService){
	var buy = this;
	buy.list = checkService.buyList;
	buy.condition = checkService.buyCondition;
	console.log(buy.condition);

	buy.remove = function(index){
		checkService.remove(index);
		console.log(buy.condition);
	}

}

//Bought Items Logic
boughtController.$inject = ['checkService'];
function boughtController(checkService){
	var bought = this;
	bought.list = checkService.boughtList;
	bought.condition = checkService.boughtCondition;
	console.log(bought.condition);
}




})();