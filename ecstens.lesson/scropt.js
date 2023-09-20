// function Animal(name, year) {
//     console.log(this);
//     this.nameOfCat = name
//     this.yearOfCat = year
//   }
  
//   const cat1 = new Animal("tom", 2023);
  
  
  
//   console.log(cat1);

// class Animal{
//     constructor(name, year) {
//         this.name = name;
//         this.year = year
//     }
// }
// const cat1 = new Animal("tom", 2023);
// console.log(cat1);

// class Animal {
//     //   1
//       constructor (name, year){
//         this.year = year;
//         this.name = name;
//         this.renderYear = function() {
//           console.log(this.year);
//         }
//       }
      
//     //   2
//       renderName(){
//         console.log(this.name);
//       }
//     }
//     const cat1 = new Animal('rex', 2000)
    
    
    
//     cat1.hi = function() {
//       console.log("hi")
//     }

// class Animal {
//     constructor(year) {
//         this.year = year
//     }
// }


// class Bird extends Animal {
//     constructor(year, fly) {
//         super(year)
//         this.fly = fly
//     }
// }
// const tom = new Bird(2011, true)
// console.log(tom)

// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//     hello() {
//         console.log("hello")
//     }
//   }
  
//   class Student extends Person {
//     constructor(name, age, gpa) {
//       super(name, age)
//       this.gpa = gpa;
//     }
//     renderWelcome(name) {
//         super.hello()
//         console.log("welcome " + name)
//     }
    
//   }

//   class MiddleShooleStudent extends Student {
//     constructor (name, age, gpa, phClass) {
//         super(name, age, gpa)
//     this.phClass = phClass
//     }
//     renderFuulWelcome() {
//         super.renderWelcome(this.name)
//         console.log("Glad to see you")
//     }
//   }
  


//   class Teacher extends Person {
//     constructor(name, age, classSize) {
//       super(name, age)
//       this.classSize = classSize;
//     }
    
    
//   }
  
// //   const gregTeacher = new Teacher("Greg", 52, 30);
// //   const bobStudent = new Student("Bob", 14, 4.2);
// const bob = new MiddleShooleStudent("bob", 14, 3.8, 65)
// console.log(bob)
// bob.renderFuulWelcome()
  
 
class OnlineStore {
    constructor(product, brand, price) {
this.product = product;
this.brand = brand;
this.price = price
    }
}

class Admin extends OnlineStore { 
    constructor(product, brand, price, deletPtoduct) {
        super(product, brand, price)
        this.deletPtoduct = deletPtoduct
    }

}
class Users extends OnlineStore {
    constructor(product, brand, price,productsShown) {
    super(product, brand, price)
    this.productsShown = productsShown
    }
}
class UsersByProduct extends Users {
    constructor(product, brand, price,productsShown, byProduct){
        super(product, brand, price,productsShown)
        this.byProduct = byProduct
    }
}
class UsersNotBy extends Users {
    constructor(product, brand, price,productsShown, notByProduct){
        super(product, brand, price,productsShown)
        this.notByProduct = notByProduct
    }
}