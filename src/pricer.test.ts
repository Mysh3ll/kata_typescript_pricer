import { Pricer } from './pricer'

describe('Calculate price', () => {
    test('should throw Error message if no arguments are provided', () => {
        const pricer = new Pricer()
        expect(pricer.buildSentence).toThrow('You must provide arguments')
        expect(pricer.getTotal).toThrow('You must provide arguments')
    })

    test('should return one article', () => {
        const pricer = new Pricer(1)
        expect(pricer.buildSentence()).toEqual('1 article')
        expect(pricer.getTotal).toThrow('You must provide arguments')
    })

    test('should return two articles', () => {
        const pricer = new Pricer(2)
        expect(pricer.buildSentence()).toEqual('2 articles')
        expect(pricer.getTotal).toThrow('You must provide arguments')
    })

    test('should return five articles', () => {
        const pricer = new Pricer(5)
        expect(pricer.buildSentence()).toEqual('5 articles')
        expect(pricer.getTotal).toThrow('You must provide arguments')
    })

    test('should return one article with unit price equal to 1 €', () => {
        const pricer = new Pricer(1, 1)
        expect(pricer.buildSentence()).toEqual('1 article à 1 €')
        expect(pricer.getTotal).toThrow('You must provide arguments')
    })

    test('should return two articles with unit price equal to 2 €', () => {
        const pricer = new Pricer(2, 2)
        expect(pricer.buildSentence()).toEqual('2 articles à 2 €')
        expect(pricer.getTotal).toThrow('You must provide arguments')
    })

    test('should return five articles with unit price equal to 5,5 €', () => {
        const pricer = new Pricer(5, 5.5)
        expect(pricer.buildSentence()).toEqual('5 articles à 5,5 €')
        expect(pricer.getTotal).toThrow('You must provide arguments')
    })

    test('should return one article with unit price equal to 1 € and tax 0 %', () => {
        const pricer = new Pricer(1, 1, 0)
        expect(pricer.buildSentence()).toEqual('1 article à 1 € et taxe 0 %')
    })

    test('should return two articles with unit price equal to 2 € and tax 5 %', () => {
        const pricer = new Pricer(2, 2, 5)
        expect(pricer.buildSentence()).toEqual('2 articles à 2 € et taxe 5 %')
    })

    test('should return five articles with unit price equal to 5,5 € and tax 15 %', () => {
        const pricer = new Pricer(5, 5.5, 15)
        expect(pricer.buildSentence()).toEqual('5 articles à 5,5 € et taxe 15 %')
    })

    test('should return 3 articles à 1,21 € et taxe 0 % → "3.63 €"', () => {
        const pricer = new Pricer(3, 1.21, 0)
        expect(pricer.buildSentence()).toEqual('3 articles à 1,21 € et taxe 0 %')
        expect(pricer.getTotal()).toEqual('3 articles à 1,21 € et taxe 0 % → "3.63 €"')
    })

    test('should return 3 articles à 1,21 € et taxe 5 % → "3.81 €"', () => {
        const pricer = new Pricer(3, 1.21, 5)
        expect(pricer.buildSentence()).toEqual('3 articles à 1,21 € et taxe 5 %')
        expect(pricer.getTotal()).toEqual('3 articles à 1,21 € et taxe 5 % → "3.81 €"')
    })

    test('should return 3 articles à 1,21 € et taxe 20 % → "4.36 €"', () => {
        const pricer = new Pricer(3, 1.21, 20)
        expect(pricer.buildSentence()).toEqual('3 articles à 1,21 € et taxe 20 %')
        expect(pricer.getTotal()).toEqual('3 articles à 1,21 € et taxe 20 % → "4.36 €"')
    })

    test('should return 5 articles à 1299 € et taxe 10 % → "6787.28 €"', () => {
        const pricer = new Pricer(5, 1299, 10)
        expect(pricer.buildSentence()).toEqual('5 articles à 1299 € et taxe 10 %')
        expect(pricer.getTotal()).toEqual('5 articles à 1299 € et taxe 10 % → "6787.28 €"')
    })
})
