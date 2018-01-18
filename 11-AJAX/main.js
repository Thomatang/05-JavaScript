// let ajax = new XMLHttpRequest();
//
// let whenDataLoaded = function() {
//   let dataText = ajax.responseText;
//   let dataObject = JSON.parse(dataText);
//   manipulateData(dataObject);
//   console.log(dataObject);
// }
// ajax.onload = whenDataLoaded;
//
// ajax.open("GET", 'yolodata.json', true);
//
// ajax.send(null);
//
//
// let manipulateData = function(array){
//   array = array.map(obj => obj.score=Math.floor(Math.random()*1000+1));
//
// }

// Part 1
let XHR = new XMLHttpRequest();

	let arrayA = []; // score > 750
	let arrayB = []; // score > 500
	let arrayC = []; // score < 500

	let whenDataLoaded = function () {
		let dataText = XHR.responseText;
		let dataObject = JSON.parse(dataText);
		manipulateData(dataObject);
		console.log(dataObject);
	}

	XHR.onload = whenDataLoaded;
	XHR.open("GET", "yolodata.json", true);
	XHR.send();


	let manipulateData = function (data) {
		// data.add(randomNumber()); for(let i = 0, length1 = data.length; i <
		// length1; i++){ // seems to work pretty well with this for loop
		// data[i].score = randomNumber(); }
		let dataCopy = data.map(function(item) {
			item.score = Math.floor(Math.random() * 1000 + 1);
		});
		// dataCopy.sort(function(a, b) {
		// 	return a.score - b.score;
		// });
		sortByScore(data);
	}
	let sortByScore = function(item) {
		item.sort(function(a, b) {
			return a.score - b.score;
		});
		categorise(item);
	}
	let categorise = function(item) {
		item.forEach( function(element) {
			if (element.score >= 750) {
				arrayA.push(element);
			} else if (element.score >= 500) {
				arrayB.push(element);
			} else {
				arrayC.push(element);
			}
		});
		console.log(arrayA);
		console.log(arrayB);
		console.log(arrayC);
		bahrainCounter(item);
	}
	let bahrainCounter = function (item) {
		let filtered = item.filter(function(element){
			return element.country == "Bahrain";
		})
		// return filtered; // doesn't show anything but works
		let message = filtered.length + " people are from Bahrain";
		console.log(message); // works only when using console.log ...?
		highestScore(item);
	}
	let highestScore = function (item) {
		let sorted = item.sort(function(a, b){
			return a.score - b.score;
		});
		// let highest = sorted[sorted.length - 1];
		let message = "The highest score is " + sorted[sorted.length - 1].score;
		console.log(message);
		smallestScore(item);
	}
	let smallestScore = function (item) {
		let sorted = item.sort(function(a, b){
			return a.score - b.score;
		});
		// let smallest = sorted[0];
		let message = "The smallest score is " + sorted[0].score;
		console.log(message);
	}
	let addElement = function (message) {
		let dataChild = document.createElement("div");
		dataChild.appendChild(message);
		// create variable in each function that contains the sentence to be printed in console.log and append it to the dataChild

	}
