/*Практика № 5

Задание 1.*/
var user = {};
user.name = "Cris";
user.surname = "Simons";
console.log (user.name);
user.name = "Brain";
console.log (user.name);
delete user.name;
console.log (user.name);
Задание 1.
var car = {};
car.model = "Toyota";
car.speed = "120"
car.run = function () {
console.log (car.model + " едет со скоростью " + car.speed);
};
car.run();
car.stop = function () {
console.log ( car.model + " остановилась ")
}
car.stop();
#
var car = {};
car["model"] = "Toyota";
car["speed"] = "120"
car["run"] = function () {
console.log (car.model + " едет со скоростью " + car.speed);
};
car["run"]();
car["stop"] = function () {
console.log ( car.model + " остановилась ")
}
car["stop"]();



var car = {
	"model":  "Toyota",
    "speed": 120,
	"stop": function () {
console.log (car.model + " остановилась ");
	},
	"run": function () {
console.log (car.model + " едет со скоростью " + car.speed);
}    
};
car.run();
car.stop();

//Задание 3.

var tv = {
	currentChannel: 1,
	nextChannel: function(){
		tv.currentCount++;
	},
	previosChanel: function(){
		tv.previosChanel--;
	},
	setChannel: function(number){
		tv.currentChannel = number;
	}
};
tv.setChannel(758);
console.log(tv.currentChannel);

//Задание 4.

var mp3 = {
	model: "Apple mp3",
	year: 2018,
	color: "blue",
	memory: "16Gb",
	track: 1,
	play: function(){
		console.log(mp3.model + " play music");
	},
	stop: function(){
		console.log(mp3.model + " stop play")
	},
	nextTrack: function(){
		mp3.track++;
	},
	previosTrack: function(){
		mp3.track--;
	},
	setTrack: function(number){
		mp3.track = number;
	}
};
mp3.setTrack(17);
console.log(mp3.setTrack);
mp3.play();
mp3.stop();
mp3.nextTrack();
console.log(mp3.track);
mp3.previosTrack();
console.log(mp3.track);


//Задание 5.
var programmers={
persons: [
{
	name: "John",
	age: 28,
	experience: 1,
	language: ["Java", "JavaScript", "SQL"]	
},
{
    name: "Bill",
	age: 30,
	experience: 5,
	language: ["HTML", "JavaScript", "CSS"]	
},
{   
    name: "Mike",
	age: 32,
	experience: 4,
	language: ["Python", "SQL"]	
}]
};
console.log(programmers.persons[2].language[1]);


//Задание 6.
var user = {
    name: "Sergey",
	sername: "Bagdasarov",
	age: 33,
};
function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}
alert(isEmpty(user));

//Задание 7.

var salaries1 = {
John: 100,
Bill: 300,
Mike: 250
};
var salaries2 = {
Cris: 150,
Brain: 600,
John: 300,
Steve: 400,
Bill: 50
};
function sum(obj){
	var rez = 0;
	var count = 0;
for (key in obj){
	rez+=obj[key];
    count++;}
	console.log(rez/count);
}
	
sum(salaries1);
sum(salaries2);
