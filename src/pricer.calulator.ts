interface IResult {
    getResult: () => string
}

interface ITax {
    withTax: (tax: number) => IResult
}

interface IWithUnitPrice {
    withUnitPrice: (unitPrice: number) => ITax;
}

interface IWithQuantity {
    withQuantity: (quantity: number) => IWithUnitPrice;

}

class WithUnitPrice implements IWithUnitPrice {
    private readonly quantity: number;

    constructor(quantity: number) {
        this.quantity = quantity
    }

    withUnitPrice = (unitPrice: number): ITax => new Tax(this.quantity, unitPrice)
}

class Tax implements ITax {
    private readonly quantity: number;
    private readonly unitPrice: number;

    constructor(quantity: number, unitPrice: number) {
        this.quantity = quantity
        this.unitPrice = unitPrice
    }

    withTax = (tax: number): IResult => new Result(this.quantity, this.unitPrice, tax)
}

class Result implements IResult {
    private readonly quantity: number;
    private readonly unitPrice: number;
    private readonly tax: number;

    constructor(quantity: number, unitPrice: number, tax: number) {
        this.quantity = quantity
        this.unitPrice = unitPrice
        this.tax = tax
    }

    getResult(): string {
        return `${this.quantity * this.unitPrice * (1 + (this.tax / 100))} €`
    }
}

export class PricerCalculator implements IWithQuantity {
    withQuantity = (quantity: number): IWithUnitPrice => new WithUnitPrice(quantity);
}
