"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeploylessMulticall2__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "bool",
                name: "requireSuccess",
                type: "bool",
            },
            {
                components: [
                    {
                        internalType: "address",
                        name: "target",
                        type: "address",
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes",
                    },
                ],
                internalType: "struct DeploylessMulticall2.Call[]",
                name: "calls",
                type: "tuple[]",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
];
class DeploylessMulticall2__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.DeploylessMulticall2__factory = DeploylessMulticall2__factory;
DeploylessMulticall2__factory.abi = _abi;
//# sourceMappingURL=DeploylessMulticall2__factory.js.map