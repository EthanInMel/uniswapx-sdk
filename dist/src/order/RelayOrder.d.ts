import { SignatureLike } from "@ethersproject/bytes";
import { PermitBatchTransferFromData } from "@uniswap/permit2-sdk";
import { BigNumber } from "ethers";
import { ResolvedRelayOrder } from "../utils/OrderQuoter";
import { OffChainOrder, OrderInfo, OrderResolutionOptions } from "./types";
export declare type RelayInput = {
    readonly token: string;
    readonly amount: BigNumber;
    readonly recipient: string;
};
export declare type RelayFee = {
    readonly token: string;
    readonly startAmount: BigNumber;
    readonly endAmount: BigNumber;
    readonly startTime: number;
    readonly endTime: number;
};
export declare type RelayInputJSON = Omit<RelayInput, "amount"> & {
    amount: string;
};
export declare type RelayFeeJSON = Omit<RelayFee, "startAmount" | "endAmount"> & {
    startAmount: string;
    endAmount: string;
};
declare type RelayOrderNestedOrderInfo = Omit<OrderInfo, "additionalValidationContract" | "additionalValidationData">;
export declare type RelayOrderInfo = RelayOrderNestedOrderInfo & {
    input: RelayInput;
    fee: RelayFee;
    universalRouterCalldata: string;
};
export declare type RelayOrderInfoJSON = Omit<RelayOrderInfo, "nonce" | "input" | "fee"> & {
    nonce: string;
    input: RelayInputJSON;
    fee: RelayFeeJSON;
    universalRouterCalldata: string;
};
export declare class RelayOrder implements OffChainOrder {
    readonly info: RelayOrderInfo;
    readonly chainId: number;
    readonly _permit2Address?: string | undefined;
    permit2Address: string;
    constructor(info: RelayOrderInfo, chainId: number, _permit2Address?: string | undefined);
    static fromJSON(json: RelayOrderInfoJSON, chainId: number, _permit2Address?: string): RelayOrder;
    static parse(encoded: string, chainId: number, permit2?: string): RelayOrder;
    toJSON(): RelayOrderInfoJSON & {
        permit2Address: string;
        chainId: number;
    };
    serialize(): string;
    /**
     * @inheritdoc Order
     */
    getSigner(signature: SignatureLike): string;
    /**
     * @inheritdoc OrderInterface
     */
    permitData(): PermitBatchTransferFromData;
    /**
     * @inheritdoc OrderInterface
     */
    hash(): string;
    /**
     * Returns the resolved order with the given options
     * @return The resolved order
     */
    resolve(options: OrderResolutionOptions): ResolvedRelayOrder;
    private toPermit;
    private witnessInfo;
    private witness;
}
export {};
