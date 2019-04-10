function absoluteValuesSumMinimization(a :number[]) : number {
    if (a.length % 2 === 0){
        return a[a.length / 2 - 1]
    }
    else{
        return a[(a.length+1)/2 - 1]
    }
}
console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));