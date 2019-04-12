function addTwoDigits(n: any) {
    var number : string = n.toString();
    var numbers : any[] = number.split('');
    
    for (let i=0; i < 2; i++){
        numbers[i] = parseInt(numbers[i])
    }

    return numbers[0] + numbers[1] ;
}

console.log(addTwoDigits(29));