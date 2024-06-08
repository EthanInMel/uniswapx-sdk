import { ChainId } from "@uniswap/sdk-core";
declare type AddressMap = {
    readonly [key: number]: string;
};
export declare function constructSameAddressMap<T>(address: T, additionalNetworks?: ChainId[]): {
    [chainId: number]: T;
};
export declare const PERMIT2_MAPPING: AddressMap;
export declare const UNISWAPX_ORDER_QUOTER_MAPPING: AddressMap;
export declare const EXCLUSIVE_FILLER_VALIDATION_MAPPING: AddressMap;
export declare enum KNOWN_EVENT_SIGNATURES {
    ERC20_TRANSFER = "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
}
export declare enum OrderType {
    Dutch = "Dutch",
    Relay = "Relay",
    Dutch_V2 = "Dutch_V2",
    Limit = "Limit"
}
declare type Reactors = Partial<{
    [key in OrderType]: string;
}>;
declare type ReactorMapping = {
    readonly [key: number]: Reactors;
};
declare type ReverseReactorMapping = {
    [key: string]: {
        orderType: OrderType;
    };
};
export declare const REACTOR_ADDRESS_MAPPING: ReactorMapping;
export declare const REACTOR_CONTRACT_MAPPING: ReactorMapping;
export declare const MULTICALL_ADDRESS = "0xcA11bde05977b3631167028862bE2a173976CA11";
export declare const RELAY_SENTINEL_RECIPIENT = "0x0000000000000000000000000000000000000000";
export declare const REVERSE_REACTOR_MAPPING: ReverseReactorMapping;
export declare const BPS = 10000;
export {};
