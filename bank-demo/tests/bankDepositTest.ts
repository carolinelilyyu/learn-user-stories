import Bank from "../src/bank";

//senario 1
const bank = new Bank();
const acc = bank.createAccount('Jane Doe', 25, '123456');
bank.depositMoney('123456' , 4);

if(acc.balance === 4){
    console.log("scenario 1 passed");
}else{
    console.log("scenario 1 failed.");
}


//scenario 2
try{
    bank.depositMoney('123455' , 4);
    console.log("scenario 2 failed");
}
catch(e){
    console.log("scenario 2 passed");

}