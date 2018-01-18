let ajax = new XMLHttpRequest();

let whenDataLoaded = function() {
  let dataText = ajax.responseText;
  let dataObject = JSON.parse(dataText);
  manipulateData(dataObject);
}
ajax.onload = whenDataLoaded;

ajax.open("GET", "thomasdata.json", true);

ajax.send(null);

let manipulateData = function(data){
      data.age = 1200;
      for (var i = 0; i < data.children.length; i++) {
        data.children[i] = data.children[i] +  " hello";
        console.log(data.children[i]);
      }
      displayChidren(data);
    }
