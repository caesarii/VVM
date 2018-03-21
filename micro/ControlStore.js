

// 控制存储器
// 长度为 512 个字, 每个字是 36 位的微指令
// 时钟周期
// 1. 从 MPC 只是的存储器位置读出微指令, 存入 MIR

class ControlStore {
    
    constructor() {
        // length 512
        this.data = []
        
        // 微程序计数器: 内存地址寄存器
        this.MPC = null
        
        // 微指令寄存器: 内存数据寄存器
        // MicroInstruction 实例
        this.MIR = null
        
        // MIR.B 解码后的结果
        this.B = null
        
        // 周期开始 1
        this.init()
    }
    
    init() {
        let {data, MPC, MIR} = this
        MIR = data[MPC]
    }
    
    
}

module.exports = ControlStore