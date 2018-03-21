
const ALU = require('./ALU')

// 4 bit to int 16 译码器
const translater = (B) => {
    
    return 7
}

class DataPath {
    constructor() {
        // 寄存器 10
        // 内存地址寄存器
        this.MAR = null
        // 内存数据寄存器
        this.MDR = null
        //
        this.PC = null
        
        this.MBR = null
        
        this.SP = null
        
        this.LV = null
        
        this.CPP = null
        
        this.TOS = null
        
        this.OPC = null
        
        this.H = null
        
        // alu
        this.ALU = ALU
        
        // 微指令 B 码与寄存器对应关系
        this.registers = ['MDR', 'PC', 'MBR', 'MBRU', 'SP', 'LV', 'CPP', 'TOS', 'OPC']
    }
    
    start(microInstruction) {
        // instruction 是微指令
        const mi = microInstruction
        
        const {ALU, B:bCode} = mi
        
        // ALU 控制位
        const {F0, F1, ENA, ENB, INVA, INC, SLL8, SRA1, } = ALU
        
        // 输入 A
        const A = this.H
        
        // 输入B
        // B 是一个整数, 按如下顺序映射寄存器
        const index = translater(bCode)
        const register = this.registers[index]
        const B = this[register]
        
        const option = {F0, F1, ENA, ENB, INVA, INC, A, B, SLL8, SRA1}
        
        const alu = new ALU(option)
    }
    
    writeCToRegisters(microinstruction) {
        // c 不载入 mbr 9
        const busC = microinstruction
        Object.keys(busC).forEach(line => {
            this[line] = busC[line]
        })
    }
    
    writeRegistersToB() {
        // 8 位
        // b 不载入 mar
        const {MDR, PC, SP, LV, CPP, TOS, OPC, H} = this
        return {MDR, PC, SP, LV, CPP, TOS, OPC, H}
    }
    
    
}

module.exports = DataPath