const arr1 = [1, 2, 3];
const arr2 = [5, 6, 7];
const arr3 = [...arr2,...arr1,1,2,3,4,5,6,7,8,9 ];

console.log(arr3)



function map(arr){
  let array = []
  for(let i=0;i<arr.length;i++){
     if(arr[i]%2==0){
       array.push(arr[i])
     }
  }
  return array
}


let data = [12,51,52,4,3,5,6]

const newData = map(data)

console.log(newData)
setTodolist(newData)


