import { network } from "hardhat";

const { viem } = await network.connect({
  network: "hardhatOp",
  chainType: "op",
});

console.log("Sending transaction using the OP chain type");
viem.sendDeploymentTransaction

const publicClient = await viem.getPublicClient();
const [senderClient] = await viem.getWalletClients();

console.log("Sending 1 wei from", senderClient.account.address, "to itself");

const owner = '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266';
// const hash = await senderClient.deployContract({
//   // abi: wagmiAbi,
//   // bytecode: ,
//   args: [
//     owner,
//     '0x6e7d74fa7d5c90fef9f0512987605a6d546181bb',   // pyth entropy
//     '0x8250f4aF4B972684F7b336503E2D6dFeDeB1487a'    // pyth price feeds
//   ]
// })
