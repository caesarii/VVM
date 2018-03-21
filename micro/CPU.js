

const ControlStore = require('./ControlStore')
const DataPath = require('./DataPath')


class CPU {
    constructor() {
        this.controlStore = new ControlStore()
        this.DataPath = new DataPath()
        
    }
    
    start() {
        this.DataPath.start(this.controlStore.MIR)
    }
}