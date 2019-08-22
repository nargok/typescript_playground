// class Person {
//   private _age: number;

//   constructor(private name: string, private sex: string) {
//   }

//   public show() {
//     return `${this.name}は${this.sex}です`;
//   }

//   get age(): number {
//     return this._age;
//   }

//   set age(value: number) {
//     if (value < 0) {
//       throw new RangeError('ageプロパティは整数で指定してください');
//     }
//     this._age = value;
//   }
// }

// const p = new Person('Jhon', 'male');
// console.log(p.show());

// p.age = 10;
// console.log(p.age());



