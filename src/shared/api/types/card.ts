export interface PriceInfo {
    price: string;
    textInfo: string;
};

export interface Card {
    title?: string;
    subtitle?: string;
    onlyDay?: PriceInfo;
    full?: PriceInfo;
}