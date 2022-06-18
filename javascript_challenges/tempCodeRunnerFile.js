for (let i = 0; i < arr.length; i++) {
    let cloneArr = [...arr];
    cloneArr.splice(i,1);

    let toInsert = cloneArr.reduce((a,b) => a*b);

    newArr[i] = toInsert;
    
}