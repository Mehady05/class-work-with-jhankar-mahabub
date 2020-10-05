function explainCallBack(name, age, task) {
    console.log("Helo", name);
    console.log("Your age",  age);
    // washHand();/
    task();
    // takeShower();/

}

function washHand() {
    console.log("wash hand with soap")
}
function takeShower() {
    console.log("go to shower")
}

function usingFb() {
    console.log("always using fb")
}


var name = explainCallBack("sagir uddin", 17, washHand);

var name = explainCallBack("Magir uddin", 30, takeShower);

var name = explainCallBack("Vagir uddin", 50, usingFb);