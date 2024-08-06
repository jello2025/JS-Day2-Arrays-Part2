 
 //task 1
 
 
 function isArrayLengthOdd(n1) {
if(n1.length % 2 ==1){
    return true
}else{
    return false
}
}



console.log(isArrayLengthOdd([1,2,3]));


//task 2

function isArrayLengthEven(array) {
    if(array.length % 2 ==0){
        return true
    }else{
        return false
    }
    }
    
    
    
    console.log(isArrayLengthEven([1,2,3,4]));
    

//task 3

function addLailaToArray(instructors) {
    return instructors.push("laila")
  }

  let instructors = ["mshary", "hassan"]

  let lailaAdded = addLailaToArray(instructors);

  console.log(lailaAdded);

  //task 4

  function eliminateTeam(teams) {
     return teams.pop();
  }

let eliminated = eliminateTeam(["Brazil", "Germany", "Italy"]);

console.log(eliminated);

//challenge 1

function secondHalfOfArrayIfItIsEven(fruits) {
    if(fruits.length % 2 ==0){
        let evenArrayLength = fruits.length / 2
        return fruits.slice(evenArrayLength);

    }else{
        let oddArrayLength = fruits.length
        return []
    }
  }

  let array1 = ["kiwi", "banana", "apple", "lemon", "berry"]

  console.log(secondHalfOfArrayIfItIsEven(array1));

 
  //challenge 2

  function youGottaCalmDown(insertShout) {
    let exclimation = insertShout.indexOf("!")
    let oneEx = insertShout.slice(0, exclimation)
    return `${oneEx}!`;
    
  }

  let shout = "i frkn hate Gperms!!!!!!!"

  console.log(youGottaCalmDown(shout));