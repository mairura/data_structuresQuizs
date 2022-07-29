//Given any number return the highest value from it
function descendingOrder(n){
    //Convert it into Number
    const numFunc = num => Number(num);
    //Convert the number to array
    const array = Array.from(String(n), numFunc)
    //Sort out the number in a ascending order,reversed it to get from highest to smallest then sorted them out
    const sort = array.sort().reverse().join("");
    //Print the result
    console.log(sort);
}
descendingOrder(12);