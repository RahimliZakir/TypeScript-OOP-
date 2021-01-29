import { Person } from './classto';

class Workers extends Person {

    constructor(ad: string, soyad: string, yash: number) {
        super(ad, soyad, yash);
    }

}

// Polymorphism

let w1 = new Workers("Name", "Surname", 33);

let w2 = new Person("Name2", "Surname2", 22);

alert(w1.name);