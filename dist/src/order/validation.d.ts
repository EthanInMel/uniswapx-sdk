import { OrderInfo } from "./types";
export declare enum ValidationType {
    None = 0,
    ExclusiveFiller = 1
}
declare type ExclusiveFillerData = {
    filler: string;
    lastExclusiveTimestamp: number;
};
export declare type ValidationInfo = {
    additionalValidationContract: string;
    additionalValidationData: string;
};
export declare type CustomOrderValidation = {
    type: ValidationType.None;
    data: null;
} | {
    type: ValidationType.ExclusiveFiller;
    data: ExclusiveFillerData;
};
export declare function parseValidation(info: OrderInfo): CustomOrderValidation;
export declare function parseExclusiveFillerData(encoded: string): CustomOrderValidation;
export declare function encodeExclusiveFillerData(fillerAddress: string, lastExclusiveTimestamp: number, chainId?: number, additionalValidationContractAddress?: string): ValidationInfo;
export {};