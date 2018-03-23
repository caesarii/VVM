// 内存模型
// 1073741824 个字的数组
// CPP LV SP 保存的是 字地址
// PC 保存的是字节地址

class Memory {
    constructor() {
        this.data = []
        
        // 常量池起点
        this.CPP = null
        
        // 局部变量结构起点
        this.LV = null
        
        // 操作数栈栈顶
        this.SP = null
        
        // 方法区 PC 寄存器
        this.PC = null
    }
}
