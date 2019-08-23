class Person {
  protected name: string;
  protected sex: string;

  constructor(name: string, sex: string) {    
    this.name = name;
    this.sex = sex;
  }

  show(): string {
    return  `${this.name}は${this.sex}です。`
  }
}

class BusinessPerson extends Person {
  protected clazz: string;

  constructor(name: string, sex: string, clazz: string) {
    super(name, sex);
    this.clazz = clazz;
  }

  show(): string {
    return super.show() + `${this.clazz}です。`
  }

  work(): string {
    return `${this.name}はテキパキ働きます`;
  }
}

export {
  Person,
  BusinessPerson
};
