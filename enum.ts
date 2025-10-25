enum DayOfWeek{
    SUNDAY,    // 0
    MONDAY,    // 1
    TUESDAY,   // 2
    WEDNESDAY, // 3
    THURSDAY,  // 4
    FRIDAY,    // 5
    SATURDAY   // 6
}

const today: DayOfWeek = DayOfWeek.FRIDAY;
console.log("🚀 ~ today:", today)
console.log(DayOfWeek[today]);

//========

enum Size{
    SMALL = "S",
    MEDIAM = "M",
    LARGE = "L"
}

const closeSize:Size = Size.SMALL;
console.log(closeSize,"は150-160cmの方がベストです。");
