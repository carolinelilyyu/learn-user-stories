import Bank from "../src/bank";

//senario 1
const bank = new Bank();
const acc = bank.createAccount('Jane Doe', 25, '123456');
if(acc.accountNumber === "123456"){
    console.log("scenario 1 passed");
}else{
    console.log("scenario 1 failed.");
}


//scenario 2
try{
    bank.createAccount('Jane Doe', 2, '123456');
    console.log("scenario 2 failed");
}
catch(e){
    console.log("scenario 2 passed");
}