// 定义食物类
const Food=class{
    // 定义一个属性来表示食物对应的元素
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById('food')!;
    }
    // 获取食物x轴的坐标
    get x() {
        return this.element.offsetLeft;
    }
    // 获取食物y轴的坐标
    get y() {
        return this.element.offsetTop
    }

    // 修改食物位置
    change() {
        this.element.style.left = Math.round(Math.random() * 29) * 10 + 'px';
        this.element.style.top = Math.round(Math.random() * 29) * 10 + 'px';
    }
}

export default Food