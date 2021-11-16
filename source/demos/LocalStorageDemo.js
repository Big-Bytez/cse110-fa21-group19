
displayLocalStorage()
// code for storing items to local
document.getElementById("save").addEventListener('click', function() { 
var data = {"ingredients" : document.getElementById("ing").value, 
"time" : document.getElementById("time").value}
localStorage.setItem(document.getElementById("name").value, JSON.stringify(data))
console.log(localStorage);})

// code for displaying items in local storage
document.getElementById("load").addEventListener('click', displayLocalStorage)

function displayLocalStorage(){
    console.log(localStorage)
    let ans = "";
    for (let i = 0; i < localStorage.length; i++)   {
        let item = JSON.parse(localStorage.getItem(localStorage.key(i)))
        ans =  ans + i + ") " + "Name: " + localStorage.key(i) + " Ingredients: " + item.ingredients + " Minutes: \n" + item.time + "\n";
        }
    console.log(ans)
    document.getElementById("output").textContent = ans;
    
}

function displayList(MyList){
    console.log(MyList)
    let ans = "";
    for (let i = 0; i < MyList.length; i++)   {
        let item = MyList[i]
        ans =  ans + i + ") " + "Name: " + item.key + " Ingredients: " + item.ingredients + " Minutes: \n" + item.time + "\n";
        }
    console.log(ans)
    document.getElementById("output").textContent = ans;
    
}

// code for deleting an element from local storage
document.getElementById("delete_button").addEventListener('click', function() {
    localStorage.removeItem( document.getElementById("delete").textConten)
})

// code for sorting 
// taken from https://gist.github.com/atljeremy/1757119
// and modified 
 function makeSortedList() {
    var myList, callbackFunc;
    myList = [];
    Object.keys(localStorage).forEach(function(key){
      var myObj, value;
      value = localStorage.getItem(key);
      myObj = JSON.parse(value);
      myObj.key = key;
      myList.push(myObj);
    });
    callbackFunc = function(a, b) {
      if (parseInt(a.time) === parseInt(b.time)) {
        if (parseInt(a.time) === parseInt(b.time)) return 0;
        return (parseInt(a.time) < parseInt(b.time) ? -1 : 1);
      }
      if (parseInt(a.time) < parseInt(b.time)) {
        return -1;
      } else {
        return 1;
      }
    };
    return myList.sort(callbackFunc);
    };

document.getElementById("sort").addEventListener('click', function() { 
    var sortedList = makeSortedList()
    console.log(sortedList)
     displayList(sortedList);
    
})

