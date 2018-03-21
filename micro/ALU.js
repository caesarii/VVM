
class ALU {
    constructor(option) {
        const {F0, F1, ENA, ENB, INVA, INC, A, B} = option
        // 6 根ALU 控制线
        // 决定操作 2
        this.F0 = F0
        this.F1 = F1
        // 输入A和B的使能信号
        this.ENA = ENA
        this.ENB = ENB
        // 转换左输入
        this.INVA = INVA
        // 最低位的进位信号
        this.INC = INC
        
        // 左输入: 寄存器 H
        this.A = A
        
        // 右输入
        this.B = B
        
        // 输出
        this.shifter = null
        
        // 控制输出
        // 把移位器的内容左移一个字节
        this.SLL8 = null
        // 被移位器内容右移1位
        this.SRA1 = null
        
    }
    
    run() {
        const {F0, F1, ENA, ENB, INVA, INC, A, B} = this
        
        const valueA = F0 === 0 && F1 === 1 && ENA === 1 && ENB === 0 && INVA === 0 && INC === 0
        const valueB = F0 === 0 && F1 === 1 && ENA === 0 && ENB === 1 && INVA === 0 && INC === 0
        const barA = F0 === 0 && F1 === 1 && ENA === 0 && ENB === 1 && INVA === 0 && INC === 0
        const barB = F0 === 0 && F1 === 1 && ENA === 0 && ENB === 1 && INVA === 0 && INC === 0
        
        const addAB = F0 === 0 && F1 === 1 && ENA === 0 && ENB === 1 && INVA === 0 && INC === 0
        const addAB1 = F0 === 0 && F1 === 1 && ENA === 0 && ENB === 1 && INVA === 0 && INC === 0
        const addA1 = F0 === 0 && F1 === 1 && ENA === 0 && ENB === 1 && INVA === 0 && INC === 0
        const addB1 = F0 === 0 && F1 === 1 && ENA === 0 && ENB === 1 && INVA === 0 && INC === 0
        
        const subBA = F0 === 0 && F1 === 1 && ENA === 0 && ENB === 1 && INVA === 0 && INC === 0
        const subB1 = F0 === 0 && F1 === 1 && ENA === 0 && ENB === 1 && INVA === 0 && INC === 0
        const subA = F0 === 0 && F1 === 1 && ENA === 0 && ENB === 1 && INVA === 0 && INC === 0
        const andAB = F0 === 0 && F1 === 1 && ENA === 0 && ENB === 1 && INVA === 0 && INC === 0
        
        const orAB = F0 === 0 && F1 === 1 && ENA === 0 && ENB === 1 && INVA === 0 && INC === 0
        const zero = F0 === 0 && F1 === 1 && ENA === 0 && ENB === 1 && INVA === 0 && INC === 0
        const one = F0 === 0 && F1 === 1 && ENA === 0 && ENB === 1 && INVA === 0 && INC === 0
        const subOne = F0 === 0 && F1 === 1 && ENA === 0 && ENB === 1 && INVA === 0 && INC === 0
        
        if(valueA) {
            return A
        }
        
        if(valueB) {
            return B
        }
        
        if(barA) {
            // 补码
        }
        
        if(barB) {
        
        }
        
        if(addAB) {
            // 二进制加法
        }
        
        if(addAB1) {
        
        }
        
        if(addA1) {
        
        }
        
        if(addB1) {
        
        }
        
        if(subBA) {
        
        }
        
        if(subB1) {
        
        }
        
        if(subA) {
        
        }
        if(andAB) {
        
        }
        
        if(orAB) {
        
        }
        
        if(zero) {
        
        }
        
        if(one) {
        
        }
        
        if(subOne) {
        
        }
        
        
    }
}

module.exports = ALU