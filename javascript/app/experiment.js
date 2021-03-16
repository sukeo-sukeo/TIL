class Nagayake {
  constructor(name, age, msg) {
    this.name = name
    this.age = age
    this.msg = msg
  }
  sayname(more) {
    console.log(`わたしは${this.name}です。${more}ともいいます`);
  }
  sayage() {
    console.log(`わたしは${this.name}です`);
  }
  
}

const sukeo = new Nagayake('sukeo', '37', 'こんぬつは');
console.log(sukeo.sayname('サーモン'));
