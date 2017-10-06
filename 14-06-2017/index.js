angular.module("services",[])
	.controller ("firstCtrl",firstCtrl)
	.controller ("secondCtrl",secondCtrl)
	.factory("dataService",dataService)



function dataService()
{
	return {};
}


function firstCtrl(dataService)
{
	var first = this;
	first.person = dataService;
	first.person.name = "abc";
	console.log(first.person);
}

function secondCtrl(dataService)
{
	var second = this;
	second.person = dataService;
	console.log(second.person);
}