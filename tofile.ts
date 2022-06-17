import * as fs from 'fs';

export const returnArrayOfDates = ({ startDate, endDate }): Date[] => {
    let dates: Date[] = []
    //to avoid modifying the original date
    const theDate = new Date(startDate)
    while (theDate < endDate) {
        dates = [...dates, new Date(theDate)]
        theDate.setDate(theDate.getDate() + 1)
    }
    return dates
}

const props = {
    startDate: new Date('1970-01-01'),
    endDate: new Date()
}
// console.log(returnArrayOfDates(props))


var file = fs.createWriteStream('dates.json');
file.on('error', function (err) { /* error handling */ });
returnArrayOfDates(props).forEach(function (v) { file.write('"'+v.toString() + '", ' + '\n')});
file.end();