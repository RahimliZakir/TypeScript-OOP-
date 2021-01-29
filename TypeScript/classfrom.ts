import { Person } from './classto';

class Workers extends Person {

    constructor(ad: string, soyad: string, yash: number) {
        super(ad, soyad, yash);
    }

}

// Polymorphism

let w1 = new Workers("Name", "Surname", 33);

let w2 = new Person("Name2", "Surname2", 22);

let workersArray = [w1, w2];

workersArray.forEach(function (item) {
    console.log(`${item.name},${item.surname},${item.age}`);
});