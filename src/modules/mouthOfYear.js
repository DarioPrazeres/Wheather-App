function mouthOfYear(number) {
    var nameOfMouth = ' January';
    switch(number){
        case 0: nameOfMouth = 'January'; break;
        case 1: nameOfMouth = 'February'; break;
        case 2: nameOfMouth = 'March'; break;
        case 3: nameOfMouth = 'April'; break;
        case 4: nameOfMouth = 'May'; break;
        case 5: nameOfMouth = 'June'; break;
        case 6: nameOfMouth = 'July'; break;
        case 7: nameOfMouth = 'August'; break;
        case 8: nameOfMouth = 'September'; break;
        case 9: nameOfMouth = 'October'; break;
        case 10: nameOfMouth = 'November'; break;
        case 11: nameOfMouth = 'December'; break;
    }
    return nameOfMouth;
}
export default mouthOfYear;