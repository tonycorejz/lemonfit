export interface PriceInfo {
    price: string;
    textInfo: string;
};

export interface PriceCard {
    title?: string;
    subtitle?: string;
    onlyDay?: PriceInfo;
    full?: PriceInfo;
}