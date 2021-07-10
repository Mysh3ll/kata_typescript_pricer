export class Pricer {
    private readonly _nbArticle?: number
    private readonly _unitPrice?: number
    private readonly _tax?: number
    private _result: string = ''

    constructor(_nbArticle?: number, _unitPrice?: number, _tax?: number) {
        this._tax = _tax
        this._unitPrice = _unitPrice
        this._nbArticle = _nbArticle
    }

    buildSentence() {
        try {
            if (this._nbArticle != null) {
                this._result = `${this._nbArticle} article`
                if (this._nbArticle > 1) {
                    this._result += 's'
                }
            }

            if (this._unitPrice != null) {
                this._result += ` à ${this._unitPrice} €`.replace('.', ',')
            }

            if (this._tax != null) {
                this._result += ` et taxe ${this._tax} %`
            }

            return this._result
        } catch (e) {
            throw new Error('You must provide arguments')
        }
    }

    getTotal() {
        try {
            if (this._nbArticle != null && this._unitPrice != null && this._tax != null) {
                let total = this._nbArticle * this._unitPrice * (1 + (this._tax / 100))
                total > 5000
                    ? total *= 0.95
                    : total > 1000
                        ? total *= 0.97
                        : total += 0

                this._result += ` → "${total.toFixed(2)} €"`
                return this._result
            }
        } catch (e) {
            throw new Error('You must provide arguments')
        }
    }
}
