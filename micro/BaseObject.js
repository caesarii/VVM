class BaseObject {
    static new(...args) {
        return new this(...args)
    }
}

module.exports = BaseObject