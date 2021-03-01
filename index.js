// Частина 1

// Дано рядок у форматі "Student1 - Group1; Student2 - Group2; ..."

let studentsStr = "Дмитренко Олександр - ІП-84; Матвійчук Андрій - ІВ-83; Лесик Сергій - ІО-82; Ткаченко Ярослав - ІВ-83; Аверкова Анастасія - ІО-83; Соловйов Даніїл - ІО-83; Рахуба Вероніка - ІО-81; Кочерук Давид - ІВ-83; Лихацька Юлія- ІВ-82; Головенець Руслан - ІВ-83; Ющенко Андрій - ІО-82; Мінченко Володимир - ІП-83; Мартинюк Назар - ІО-82; Базова Лідія - ІВ-81; Снігурець Олег - ІВ-81; Роман Олександр - ІО-82; Дудка Максим - ІО-81; Кулініч Віталій - ІВ-81; Жуков Михайло - ІП-83; Грабко Михайло - ІВ-81; Іванов Володимир - ІО-81; Востриков Нікіта - ІО-82; Бондаренко Максим - ІВ-83; Скрипченко Володимир - ІВ-82; Кобук Назар - ІО-81; Дровнін Павло - ІВ-83; Тарасенко Юлія - ІО-82; Дрозд Світлана - ІВ-81; Фещенко Кирил - ІО-82; Крамар Віктор - ІО-83; Іванов Дмитро - ІВ-82"

// Завдання 1
// Заповніть словник, де:
// - ключ – назва групи
// - значення – відсортований масив студентів, які відносяться до відповідної групи

function toString(res) {
    let aa = ''
    for(let elem of res.keys()) {
        aa += (elem + ': ' + res.get(elem) + ', ')
    }
    return console.log(aa)
}

let studentsGroups = String(studentsStr)

// Ваш код починається тут

console.log("Завдання 1")

let spl = studentsGroups.split('; ')

let res1 = new Map()

for (let i = 0; i < spl.length; i++){
    let std = spl[i].split(' ')
    if( res1.has(std[std.length - 1])) {
        let groupList = res1.get(std[std.length - 1]).sort()
        groupList.push(std[0] + ' ' + std[1])
    } else {
        let name = [std[0] + ' ' + std[1]];
        res1.set(std[std.length - 1], name)
    }
}

toString(res1)

console.log('')

// Ваш код закінчується тут

// // Дано масив з максимально можливими оцінками
//
// Завдання 2
// Заповніть словник, де:
// - ключ – назва групи
// - значення – словник, де:
//   - ключ – студент, який відносяться до відповідної групи
//   - значення – масив з оцінками студента (заповніть масив випадковими значеннями, використовуючи функцію `randomValue(maxValue: Int) -> Int`)

// Ваш код починається тут

console.log("Завдання 2")

function studentPoints() {
    let res = [];
    for(let i = 0; i < 9; i++) {
        let a = Math.floor(Math.random() * Math.floor(20))
        res.push(a)
    }
    return res;
}

let res2 = new Map()

for (let i = 0; i < spl.length; i++){
    let std = spl[i].split(' ')
    if( res2.has(std[std.length - 1])) {
        let groupList = res2.get(std[std.length - 1]).sort()
        groupList.push(std[0] + ' ' + std[1] + ': ' + studentPoints())
    } else {
        let name = [std[0] + ' ' + std[1] + ': ' + studentPoints()];
        res2.set(std[std.length - 1], name)
    }
}

toString(res2)

console.log('')

// Ваш код закінчується тут

// Завдання 3
// Заповніть словник, де:
// - ключ – назва групи
// - значення – словник, де:
//   - ключ – студент, який відносяться до відповідної групи
//   - значення – сума оцінок студента

// // Ваш код починається тут

console.log('Завдання 3')

let res3 = new Map()

function sumPoints (arr) {
    let res = 0;
    arr.map((item) => {
        res += item
    })
    return res;
}

for (let i = 0; i < spl.length; i++){
    let std = spl[i].split(' ')
    if( res3.has(std[std.length - 1])) {
        let groupList = res3.get(std[std.length - 1]).sort()
        groupList.push(std[0] + ' ' + std[1] + ': ' + sumPoints(studentPoints()))
    } else {
        let name = [std[0] + ' ' + std[1] + ': ' + sumPoints(studentPoints())];
        res3.set(std[std.length - 1], name)
    }
}

toString(res3)

console.log('')

// // Ваш код закінчується тут

// Завдання 4
// Заповніть словник, де:
// - ключ – назва групи
// - значення – середня оцінка всіх студентів групи

// Ваш код починається тут

console.log("Завдання 4")
console.log()

let res4 = new Map()

function sumGroupPoints() {

    for (let i = 0; i < spl.length; i++){
        let std = spl[i].split(' ')
        if( res4.has(std[std.length - 1])) {
            let groupList = res4.get(std[std.length - 1])
            groupList.push(sumPoints(studentPoints()))
        } else {
            let point = [sumPoints(studentPoints())];
            res4.set(std[std.length - 1], point)
        }
    }

    let result = new Map()

    for (let key of res4){
        let pnt = key[1].reduce((a, b) => (a + b)) / key[1].length
        result.set(key[0], Math.floor(pnt))
    }

    return toString(result)
}

sumGroupPoints()

console.log('')

// Ваш код закінчується тут

// Завдання 5
// Заповніть словник, де:
// - ключ – назва групи
// - значення – масив студентів, які мають >= 60 балів


// Ваш код починається тут

console.log("Завдання 5")

let res5 = new Map()

for (let i = 0; i < spl.length; i++){
    let std = spl[i].split(' ')
    let mdlPoint = sumPoints(studentPoints())
    if( res5.has(std[std.length - 1])) {
        let groupList = res5.get(std[std.length - 1]).sort()
        if(mdlPoint >= 60) {
            groupList.push(std[0] + ' ' + std[1] + ': ' + mdlPoint)
        }
    } else {
        let point = [std[0] + ' ' + std[1] + ': ' + mdlPoint];
        if(mdlPoint >= 60) {
            res5.set(std[std.length - 1], point)
        }
    }
}

toString(res5)

console.log('')

// Ваш код закінчується тут

// Приклад виведення. Ваш результат буде відрізнятися від прикладу через використання функції random для заповнення масиву оцінок та через інші вхідні дані.
//
//Завдання 1
//["ІВ-73": ["Гончар Юрій", "Давиденко Костянтин", "Капінус Артем", "Науменко Павло", "Чередніченко Владислав"], "ІВ-72": ["Бортнік Василь", "Киба Олег", "Овчарова Юстіна", "Тимко Андрій"], "ІВ-71": ["Андрющенко Данило", "Гуменюк Олександр", "Корнійчук Ольга", "Музика Олександр", "Трудов Антон", "Феофанов Іван"]]
//
//Завдання 2
//["ІВ-73": ["Давиденко Костянтин": [5, 8, 9, 12, 11, 12, 0, 0, 14], "Капінус Артем": [5, 8, 12, 12, 0, 12, 12, 12, 11], "Науменко Павло": [4, 8, 0, 12, 12, 11, 12, 12, 15], "Чередніченко Владислав": [5, 8, 12, 12, 11, 12, 12, 12, 15], "Гончар Юрій": [5, 6, 0, 12, 0, 11, 12, 11, 14]], "ІВ-71": ["Корнійчук Ольга": [0, 0, 12, 9, 11, 11, 9, 12, 15], "Музика Олександр": [5, 8, 12, 0, 11, 12, 0, 9, 15], "Гуменюк Олександр": [5, 8, 12, 9, 12, 12, 11, 12, 15], "Трудов Антон": [5, 0, 0, 11, 11, 0, 12, 12, 15], "Андрющенко Данило": [5, 6, 0, 12, 12, 12, 0, 9, 15], "Феофанов Іван": [5, 8, 12, 9, 12, 9, 11, 12, 14]], "ІВ-72": ["Киба Олег": [5, 8, 12, 12, 11, 12, 0, 0, 11], "Овчарова Юстіна": [5, 8, 12, 0, 11, 12, 12, 12, 15], "Бортнік Василь": [4, 8, 12, 12, 0, 12, 9, 12, 15], "Тимко Андрій": [0, 8, 11, 0, 12, 12, 9, 12, 15]]]
//
//Завдання 3
//["ІВ-72": ["Бортнік Василь": 84, "Тимко Андрій": 79, "Овчарова Юстіна": 87, "Киба Олег": 71], "ІВ-73": ["Капінус Артем": 84, "Науменко Павло": 86, "Чередніченко Владислав": 99, "Гончар Юрій": 71, "Давиденко Костянтин": 71], "ІВ-71": ["Корнійчук Ольга": 79, "Трудов Антон": 66, "Андрющенко Данило": 71, "Гуменюк Олександр": 96, "Феофанов Іван": 92, "Музика Олександр": 72]]
//
//Завдання 4
//["ІВ-71": 79.333336, "ІВ-72": 80.25, "ІВ-73": 82.2]
//
//Завдання 5
//["ІВ-72": ["Бортнік Василь", "Киба Олег", "Овчарова Юстіна", "Тимко Андрій"], "ІВ-73": ["Давиденко Костянтин", "Капінус Артем", "Чередніченко Владислав", "Гончар Юрій", "Науменко Павло"], "ІВ-71": ["Музика Олександр", "Трудов Антон", "Гуменюк Олександр", "Феофанов Іван", "Андрющенко Данило", "Корнійчук Ольга"]]
