

function newQueue(arr,item) {

    arr.push(item);
  
    return arr.shift(); 

}
 

var arrOne = [1,2,3,4,5,6]; 

newQueue(arrOne, item);
console.log(newQueue(arrOne, 7));