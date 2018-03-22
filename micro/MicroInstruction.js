

// Mic-1 的微指令格式 36 位
// 每一条微指令都指出下一条指令

class MicroInstruction {
    
    constructor() {
        
        // Addr 下一条可能执行的微指令地址 9 bit
        this.NEXT_ADDRESS = null
        
        // 决定如何选择下一条微指令 3 bit
        this.JAM = {
            JMPC: null,
            JAMN: null,
            JAMZ: null,
        }
        
        // alu 和 移位器的操作 8
        this.ALU = {
            SLL8: null,
            SRA1: null,
            F0: null,
            F1: null,
            ENA: null,
            ENB: null,
            INVA: null,
            INC: null,
        }
        
        // 选择 c 总线的数据要写入的寄存器 9
        this.C = {
            H: false,
            OPC: false,
            TOS: false,
            CPP: false,
            LV: false,
            SP: false,
            PC: false,
            MDR: false,
            MAR: false,
        }
        
        // 内存操作 3
        this.Mem = {
            WRITE: null,
            READ: null,
            FETCH: null,
        }
        
        // 选择 b 总线的数据来源, 采用编码方式 4 bit
        // 使用 4To16 译码器 决定那个寄存器驱动  b 总线
        // 0 - 15 的整数
        this.B = null
          // {
          //       MDR: 0,
          //       PC: 1,
          //       MBR: 2,
          //       MBRU: 3,
          //       SP: 4,
          //       LV: 5,
          //       CPP: 6,
          //       TOS: 7,
          //       OPC: 8,
          //       // 9-15
          //
          //   }
    }
}

module.exprts = MicroInstruction