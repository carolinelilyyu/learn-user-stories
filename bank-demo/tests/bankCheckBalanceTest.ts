import Bank from "../src/bank";

//senario 1
const bank = new Bank();
const acc = bank.createAccount('Jane Doe', 25, '123456');
const balance = bank.checkBalance('123456');

if(acc.balance === 0){
    console.log("scenario 1 passed");
}else{
    console.log("scenario 1 failed.");
}


//scenario 2
try{
    bank.checkBalance('123455');
    console.log("scenario 2 failed");
}
catch(e){
    console.log("scenario 2 passed");

}