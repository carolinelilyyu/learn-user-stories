/**
 * This is a type for all bank accountsi nthe bank
 */

interface BankAccount{
    name: string;
    age: number;
    accountNumber: string;
    balance: number;
}

/**
 * This class represents a simple bank with the ability to create new accounts
 */
export default class Bank {
    //This is a private field that holds all the accounts
    private accounts: BankAccount[] = [];

    /**
     *  This method checks if an account with the given account number exists
     * @param {string} -- accountNumber The account number to check
     * @returns {BankAccount}-- The account if it exists, otherwise return undefined bank account
     */
    private isAccountExists(accountNumber:string): BankAccount | undefined{
        return this.accounts.find(acc => acc.accountNumber === accountNumber);
    }  

    /**
     * This methods create a new account with the given name, age and account
     * @param {string} -- The name
     * @param {number} -- The age 
     * @param {string} -- The account number
     * @returns {BankAccount} -- the bank account
     */
    public createAccount(name: string, age:number, accountNumber:string): BankAccount{
        const isAccExists = this.isAccountExists(accountNumber);

        if(isAccExists!=null){
            throw new Error("Account already exists");
        }
        const account = {name, age, accountNumber, balance: 0}
        this.accounts.push(account);
        return account;
    }
}