function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested div.target');
}

function increaseRankBy(n){
   var myVar = document.querySelectorAll('ul.ranked-list li');
for (let i = 0; i < myVar.length; i++) {
  myVar[i].innerHTML = (parseInt(myVar[i].innerHTML) + n).toString();
}
}

function deepestChild(){
  
  function drill(current){
    var myRes;
    if (current.querySelector('div') != null){
      current = current.querySelector('div');
      return drill(current);
  }
    else{
      myRes = current;
      return myRes;
    }
  
}
  
  var current = document.getElementById('grand-node');
  return drill(current);
}