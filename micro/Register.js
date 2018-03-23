const Base = require('./BaseObject')

const Bus = require('./Bus')

class Register extends Base {
    constructor() {
        super()
        this.value = null
        this.enableRead = true
        this.enableWrite = true
    }
    
    read() {
        if(this.enableRead) {
            Bus.B = this.value
        }
    }
    
    write() {
        if(this.enableWrite) {
            this.value = Bus.C
        }
    }
}

class Registers {
    constructor() {
        // 寄存器 10
        // 内存地址寄存器
        this.MAR = Register.new()
        // 内存数据寄存器
        this.MDR = Register.new()
        // 指向下一条指令的地址
        this.PC = Register.new()
        //
        this.MBR = Register.new()
        // 无符号 MBR
        this.MBRU = Register.new()
        
        // 指向内存中操作数栈的栈顶
        this.SP = Register.new()
        // 局部变量结构的起始处
        this.LV = Register.new()
        // 常量池的起始处
        this.CPP = Register.new()
        //
        this.TOS = Register.new()
        
        this.OPC = Register.new()
        
        // A 输入
        this.H = Register.new()
    }
}

module.exports = new Registers()