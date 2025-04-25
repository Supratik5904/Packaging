export interface EstimatorFormEntity {
    customerName: string;
    customerPhone: number;
    customerEmail: string;
    productSize: ProductDimensions;
    bleed: number;
    boardCompany: string;
    boardList: Boards;
    dieCost: number;
    lamination: Lamination;
    surfaceProtection: SurfaceProtection;
    additionalOptions: AdditionalOptions;
    printingRate: number;
    processColor: string;
    productQuantity: number;
    dhlCost: number;
    profit: number;
}

export interface ProductDimensions{
    length: number;
    breadth: number;
}

export interface Boards{
    fullName: string,
    gsmValue: number;
    length: number;
    breadth: number;
    price: number;
    type: string
}

export enum AdditionalOptions{
    FOILING = 'Foiling',
    EMBOSSING = 'Embossing',
    GLOSS = 'Glossing'
}

export enum Lamination{
    GLOSS = 'Gloss',
    PLAIN = 'Plain'
}

export enum SurfaceProtection {
    HYBRID = 'Hybrid',
    VARNISH = 'Varnish',
    SPOTUV= 'SpotUV'
}

export interface Result {
    unitPrice: 0,
    sizeTable: [],
    costBreakdown: []
  };
  