let ajax = new XMLHttpRequest();

let whenDataLoaded = function() {
  let dataText = ajax.responseText;
  let dataObject = JSON.parse(dataText);
  manipulateData(dataObject);
  console.log(dataObject);
}
ajax.onload = whenDataLoaded;

ajax.open("GET", 'yolodata.json', true);

ajax.send(null);


let manipulateData = function(array){
  array = array.map(obj => obj.score=Math.floor(Math.random()*1000+1));

}
