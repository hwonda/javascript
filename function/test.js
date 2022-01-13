

function greet(){
    console.log("hi my name is Jessica");
}

function greet_2(userName){
    console.log("hi my name is ${userName}");
    return userName;
}

function findSmallestElement(arr){
    let smallestElement = 0;
    if(arr.length == 0){ 
        return 0; 
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]<=smallestElement){
            smallestElement = arr[i];
        }
    }
    return smallestElement;
}

let element = [100,200,3,0,-3,2,1];
console.log(findSmallestElement(element));

function cashToCoin(money){
    let [oman, man, ochun, chun, obaek, baek] = [50000,10000,5000,1000,500,100]
    console.log(oman)
}

cashToCoin(110123)