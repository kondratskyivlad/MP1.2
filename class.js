class TimeVK {
    constructor (hour = 0, minute = 0, second = 0) {
        if (String(hour) !== String(new Date())) {
            this.hour = hour
            this.minute = minute
            this.second = second
            if (this.hour < 0 || this.hour > 23) {
                throw new Error (`Do not correct hour - ${this.hour}`)
            }
            if (this.minute < 0 || this.minute > 59) {
                throw new Error (`Do not correct minute - ${this.minute}`)
            }
            if (this.second < 0 || this.second > 59) {
                throw new Error (`Do not correct second - ${this.second}`)
            }
        } else {

            this.hour = hour.getHours()
            this.minute = hour.getMinutes()
            this.second = hour.getSeconds()
        }
    }
    toString() {
        return `${this.hour}:${this.minute}:${this.second}`  + (this.hour > 12 ? ' PM' : ' AM')
    }
    add (time) {
        let sec = 0
        let min = 0
        let h = 0
        sec += this.second + time.second
        if (sec > 59) {
            sec -= 60
            min += 1
        }
        min = this.minute + time.minute
        if (min > 59) {
            min -= 60
            h += 1
        }
        h = this.hour + time.hour
        if (h > 23) {
            h -= 24
        }
        return new TimeVK(h, min, sec)
    }

    minus (time) {
        let sec = this.second
        let min = this.minute
        let h = this.hour
        sec -= time.second
        if (sec < 0) {
            sec += 60
            min -= 1
        }
        min -= time.minute
        if (min < 0) {
            min += 60
            h -= 1
        }
        h -= time.hour
        if (h < 0) {
            h += 24
        }
        return new TimeVK(h, min, sec)
    }

    static classMinus(time1, time2) {
        let sec = time1.second
        let min = time1.minute
        let h = time1.hour
        sec -= time2.second
        if (sec < 0) {
            sec += 60
            min -= 1
        }
        min -= time2.minute
        if (min < 0) {
            min += 60
            h -= 1
        }
        h -= time2.hour
        if (h < 0) {
            h += 24
        }
        return new TimeVK (h, min, sec)
    }

    static classAdd (time1, time2) {
        let sec = time1.hour
        let min = time1.minute
        let h = time1.second
        sec += time1.second + time2.second
        if (sec > 59) {
            sec -= 60
            min += 1
        }
        min = time1.minute + time2.minute
        if (min > 59) {
            min -= 60
            h += 1
        }
        h = time1.hour + time2.hour
        if (h > 23) {
            h -= 24
        }
        return new TimeVK(h, min, sec)
    }
}

console.log('Створення об’єкту різними способами')

let a = new TimeVK();
console.log(a.toString()) // 0:0:0 AM

let b = new TimeVK(20, 13, 14);
console.log(b.toString()) // 20:13:14 PM

let c = new TimeVK(new Date());
console.log(c.toString()) // 1:32:59 PM( current date + PM or AM )

// let d = new TimeVK(25, 100, 1);
// console.log(d) //  Error: Do not correct hour - 25 at new TimeVK

console.log('')

console.log('Робота методів додавання та віднімання від поточного об’єкту')

let sum = new TimeVK(10, 5,20)
let sum2 = new TimeVK(5, 10, 15)
console.log(sum.add(sum2).toString()) // 15:15:35 PM

let minus = new TimeVK(10, 5,20)
let minus2 = new TimeVK(5, 10, 15)
console.log(minus.minus(minus2).toString()) // 4:55:5 AM

console.log('')

console.log('Робота методів додавання та віднімання двох об’єктів')

let e = new TimeVK(5, 10, 20);
let f = new TimeVK(10, 20, 40);
let g = TimeVK.classAdd(e, f)
console.log(g.toString());  // 15:30:5 PM

let ff = new TimeVK(10, 20, 40);
let ee = new TimeVK(5, 10, 20);
let gg = TimeVK.classMinus(ff, ee)
console.log(gg.toString());  // 5:10:20 AM

