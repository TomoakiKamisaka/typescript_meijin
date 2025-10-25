"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek[DayOfWeek["SUNDAY"] = 0] = "SUNDAY";
    DayOfWeek[DayOfWeek["MONDAY"] = 1] = "MONDAY";
    DayOfWeek[DayOfWeek["TUESDAY"] = 2] = "TUESDAY";
    DayOfWeek[DayOfWeek["WEDNESDAY"] = 3] = "WEDNESDAY";
    DayOfWeek[DayOfWeek["THURSDAY"] = 4] = "THURSDAY";
    DayOfWeek[DayOfWeek["FRIDAY"] = 5] = "FRIDAY";
    DayOfWeek[DayOfWeek["SATURDAY"] = 6] = "SATURDAY"; // 6
})(DayOfWeek || (DayOfWeek = {}));
const today = DayOfWeek.FRIDAY;
console.log("🚀 ~ today:", today);
console.log(DayOfWeek[today]);
//========
var Size;
(function (Size) {
    Size["SMALL"] = "S";
    Size["MEDIAM"] = "M";
    Size["LARGE"] = "L";
})(Size || (Size = {}));
const closeSize = Size.SMALL;
console.log(closeSize, "は150-160cmの方がベストです。");
