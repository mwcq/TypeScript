const Snake=class{
    // 表示蛇头的元素
    head:HTMLElement;
    // 蛇的身体(包括蛇头)
    bodies:HTMLCollection;
    // 获取蛇的容器
    element:HTMLElement;
    // 设置蛇的生死属性
    Live=true;
    constructor(){
        this.head=document.querySelector('#snake > div') as HTMLElement;
        this.element=document.getElementById("snake")!;
        this.bodies=this.element.getElementsByTagName('div')
    }
    // 获取蛇头的坐标
    get X(){
        return this.head.offsetLeft;
    }
    // 获取Y轴坐标
    get Y(){
        return this.head.offsetTop;
    }
    // 设置坐标
    set X(value:number){
        if (this.X===value) {
            return;
        } 
        
        // X的合法范围是0-290之间
        if (value<0||value>290) {
            this.Live=false
            throw new Error('蛇噶了');
        }
        // 设置蛇不能调头
        if (this.bodies[1]&&(this.bodies[1] as HTMLElement).offsetLeft===value) {
            if (value>this.X) {
                value=this.X-10;
            }else{
                value=this.X+10;
            }
        }

        this.moveBody();
        this.head.style.left=value+'px';
        this.isEatBody()
    }
    set Y(value:number){
        if (this.Y===value) {
            return;
        } 
        if (value<0||value>290) {
            this.Live=false
            throw new Error('蛇噶了');
        }
        if (this.bodies[1]&&(this.bodies[1] as HTMLElement).offsetTop===value) {
            if (value>this.Y) {
                value=this.Y-10;
            }else{
                value=this.Y+10;
            }
        }
        this.moveBody();
        this.head.style.top=value+'px';
        this.isEatBody()
    }

    // 设置蛇吃到食物增加身体
    addBody(){
        // 想element中添加一个div
        this.element.insertAdjacentHTML("beforeend","<div></div>");
    
    }
    // 添加蛇身体移动的方法
    moveBody(){
        // 将后面的身体设置为前面身体的位置
        // 遍历获取所有的身体
        for(let i =this.bodies.length-1;i>0;i--){
            // 获取前边身体的位置
            let X=(this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y=(this.bodies[i-1] as HTMLElement).offsetTop;
            
            // 将值设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left=X+'px';
            (this.bodies[i] as HTMLElement).style.top=Y+'px';
        
        }
    }
    // 判断蛇头有没有撞到身体的方法
    isEatBody(){
        for (let i = 1; i < this.bodies.length; i++) {
            let bd=(this.bodies[i] as HTMLElement);
            if (this.X===bd.offsetLeft&&this.Y===bd.offsetTop) {
                throw new Error("笨比，自己吃自己？");
            }
        }
        
    
    }
}

export default Snake