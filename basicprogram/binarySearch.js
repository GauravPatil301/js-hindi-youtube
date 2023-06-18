// recursive function method

let recursiveFunction = function(arr,x,start,end) {
    //base condition
    if(start>end)return false
    let mid = Math.floor((start+end)/20)
    if(arr[mid]===x){
        return true
    }
    if(arr[mid]>x){
        return recursiveFunction(arr,x,start,mid-1)
    }else{
        return recursiveFunction(arr,x,mid+1,end)
    }    
}
// arr = [1,2,3,4,5]
let x =5 ;
if(recursiveFunction(arr,x,0,arr.length-1)){
    console.log("Element found")
}else{
    console.log("Element not found")
}

// Iterative method for binary search
let iterativeFunction = function(arr,x) {
    let start =0,end=arr.length-1;
    while(start<=end){
        let mid = Math.floor((start+end)/2)
        if(arr[mid] === x)return true
        else if(arr[mid]<x)
         start = mid+1
         else end = mid-1
    }
    return false;
}
let arr = [1,2,3,4,5]
let x = 5;
if(iterativeFunction(arr,x)){
    console.log("Element found")
}else{
    console.log("Element not found")
}