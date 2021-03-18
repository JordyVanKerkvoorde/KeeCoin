import { Chain } from "./domain/chain";
import { Wallet } from "./domain/wallet";

const kee = new Wallet();
const jordy = new Wallet();
const petoetje = new Wallet();

kee.sendMoney(750, jordy.publicKey);
petoetje.sendMoney(10, kee.publicKey);
kee.sendMoney(65852, petoetje.publicKey);

console.log(Chain.instance);