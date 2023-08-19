# Algorithms

## Unique Sort 

Solution 1
```javascript
const isUnique = (arr) => {
    let result = true;
    for(let i=0;i<arr.length;i++){
        console.log(`----OUTER LOOP------ i == ${i}`);
        for(let j=0;j<arr.length;j++){
            console.log(`----INNER LOOP------ j == ${j}`);
            if(i!=j && arr[i] === arr[j]){
                result = false;
        }
    }
}
return result
}
console.log(isUnique([1,2,2]) === true);
```

```javascript

```