
// 总线不是直接传递信号的导线, 而是保存数据的结构,
// 通过使能信号, 可以将数据从寄存器加载到总线, 或者从总线保存到寄存器
const Bus = {
    A: null,
    B: null,
    C: null
}

module.exports = Bus