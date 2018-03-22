
const ALU = require('./ALU')
const Registers = require('./Register')
const Bus = require('./Bus')
const controlStore = require('./ControlStore')
const Trigger = require('./Trigger')


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
    
    _alu(ALU, B) {
        // alu 执行运算, 将结果写入到 busC
        // ALU 控制位
        const {F0, F1, ENA, ENB, INVA, INC, SLL8, SRA1, } = ALU
        // 输入 A
        const A = this.H
        // 输入B
        // B 是一个整数, 按如下顺序映射寄存器
        const index = translater(B)
        const register = this.registers[index]
        const BValue = this[register]
        const option = {F0, F1, ENA, ENB, INVA, INC, A, B: BValue, SLL8, SRA1}
        const alu = ALU.new(option)
        alu.run()
    }
    
    _write(C) {
        // 将 busC 写入到指定寄存器
        Object.keys(C).forEach(r => {
            if(C[r]) {
                Registers[r].write(Bus.C)
            }
        })
    }
    
    _nextInstruction(JAM, NEXT_ADDRESS) {
        const {JMPC, JAMN, JAMZ} = JAM
        const {N, Z} = Trigger
        let F
        let rest
        if(JAMN === 1 || JAMZ === 1) {
            //最高位
            F = (JAMZ && Z) || (JAMN && N) || NEXT_ADDRESS.slice(0, 1)
        }
        
        if(JMPC === 1) {
            rest = this.MBR || NEXT_ADDRESS
        }
        
        // 拼接最高位与后8位
        controlStore.MPC = F + rest
    }
    
    start(microInstruction) {
        // instruction 是微指令
        const mi = microInstruction
        const {ALU, B, C, NEXT_ADDRESS, JAM} = mi
        
        // 执行微指令
        // 运行 alu
        this._alu(ALU, B)
        
        // 将 busC 写入到指定寄存器
        this._write(C)
        
        // 计算下一条微指令
        this._nextInstruction(JAM, NEXT_ADDRESS)
        
        // TODO
        // M
        
        
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