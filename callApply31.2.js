// const normalPerson = {
//     firstName : 'Rahim',
//     lasrtName : 'Uddin',
//     salary : 15000,
//    mainFigureOfSalary : function (amount) {
//        this.salary = this.salary - amount;
//        return this.salary;
//    }
// }
// normalPerson.mainFigureOfSalary(150);
// normalPerson.mainFigureOfSalary(3000);
// console.log(normalPerson.salary);  



// bacsic function 
// let vaiGunKor = 5,6;
// let machine = function(x,y){
//     let process = x*y
//     return process
// }
// let vaiGunKor =  machine(5,6);
// console.log(vaiGunKor);






// main work of the js function 
const normalPerson = {
    firstName : 'Mehedi',
    lastName :  'Hasan',
    salary : 20000,
    // getfullname: function(){
    //     console.log(this.firstName, this.lastName, this.salary);
    // }
    chargeBill : function (amount) {
        this.salary = this.salary - amount;
        return this.salary;
    }
}

normalPerson.chargeBill(50);
console.log(normalPerson.salary);
