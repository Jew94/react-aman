

class Person {
    constructor(age) {
        this.myAge = age;
    }

    birthday() {
        console.log(this);
        this.myAge++;
    }

    birthday2 = () => {
        console.log(this);
        this.myAge++;
    }
}

const me = new Person(35);
console.log(me.myAge); // 35

me.birthday();
console.log(me.myAge); // 36

var differentNameForBirthday = {birthday: me.birthday}
differentNameForBirthday.birthday();
console.log(me.myAge); // eden was right said: 36 tomer said: 37