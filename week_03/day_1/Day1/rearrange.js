let arr = [2,3,4,6,5,1,8]
let array=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        array.push(arr[i])
    } 
}
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==1){
        array.push(arr[i])
    } 
}
console.log(array)

