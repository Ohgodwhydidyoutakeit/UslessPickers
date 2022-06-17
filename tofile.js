"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.returnArrayOfDates = void 0;
var fs = require("fs");
var returnArrayOfDates = function (_a) {
    var startDate = _a.startDate, endDate = _a.endDate;
    var dates = [];
    //to avoid modifying the original date
    var theDate = new Date(startDate);
    while (theDate < endDate) {
        dates = __spreadArray(__spreadArray([], dates, true), [new Date(theDate)], false);
        theDate.setDate(theDate.getDate() + 1);
    }
    return dates;
};
exports.returnArrayOfDates = returnArrayOfDates;
var props = {
    startDate: new Date('1970-01-01'),
    endDate: new Date()
};
// console.log(returnArrayOfDates(props))
var file = fs.createWriteStream('dates.json');
file.on('error', function (err) { });
(0, exports.returnArrayOfDates)(props).forEach(function (v) { file.write('"' + v.toString() + '", ' + '\n'); });
file.end();
