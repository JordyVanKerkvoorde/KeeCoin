export class Transaction {
    constructor(
        public amount: number,
        public payer: string, // payer public key
        public payee: string  // payee public key
    ) {}

    toString() {
        return JSON.stringify(this);
    }
}
