const normalPerson = {
    firstName: 'Mehedi',
    lastName: 'Hasan',
    salary: 20000,
    // getfullname: function(){
    //     console.log(this.firstName, this.lastName, this.salary);
    // }
    chargeBill : function (amount) {
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}
normalPerson.chargeBill(200);
console.log(normalPerson.salary);

// const heroPerson = {
//     firstName :'hero',
//     lastName : 'alom',
//     salary : 25000,
// }

// const heroin = {
//     firstName :'khirto',
//     lastName : 'alom',
//     salary : 25000,
// }

// const villain = {
//     firstName :'Miroh',
//     lastName : 'alom',
//     salary : 25000,
// }



// call a korte hobe comma and  apply a korte hobe array diye o kora jai 