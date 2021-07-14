import { PricerCalculator } from './pricer.calulator'

describe('Pricer Calculator', () => {
    test('should return "3.63 €"', () => {
        const pricerCalculator : PricerCalculator = new PricerCalculator()

        const result: string = pricerCalculator
            .withQuantity(3)
            .withUnitPrice(1.21)
            .withTax(0)
            .getResult()

        expect(result).toEqual('3.63 €')
    })
})
