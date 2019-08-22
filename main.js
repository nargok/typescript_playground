var Person = /** @class */ (function () {
    function Person(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    Person.prototype.show = function () {
        return this.name + "\u306F" + this.sex + "\u3067\u3059";
    };
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value < 0) {
                throw new RangeError('ageプロパティは整数で指定してください');
            }
            this._age = value;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var p = new Person('Jhon', 'male');
console.log(p.show());
p.age = 10;
console.log(p.age());
