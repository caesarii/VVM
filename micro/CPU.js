

const controlStore = require('./ControlStore')
const DataPath = require('./DataPath')


class CPU {
    constructor() {
        this.DataPath = new DataPath()
        
    }
    
    start() {
        this.DataPath.start(controlStore.MIR)
    }
}

const __run = () => {

}