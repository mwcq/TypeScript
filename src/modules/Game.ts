import Food from './Food'
import ScorePanel from './ScorePanel'
import Snake from './Snake'
const Game = class {
    // 定义属性
    SnakeGame = new Snake()
    FoodGame = new Food()
    ScorePanelGame = new ScorePanel()
    // 创建一个属性来存储蛇的移动方向
    direction: string = '';
    // 创建一个属性来判断游戏是否结束
    isLive: boolean = true
    constructor() {
            this.init()
    }
    // 游戏初始化放方法，调用后游戏开始
    init() {
        // 绑定键盘的按键按下事件
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        // 调用run方法
        this.run()
    }
    // 创建键盘按下的响应函数
    keydownHandler(event: KeyboardEvent) {
        // 修改direction的值
        this.direction = event.key
    }
    // 创建控制蛇移动的方法
    run() {
        // 校驗direction的値
        let X = this.SnakeGame.X
        let Y = this.SnakeGame.Y
        switch (this.direction) {
            case 'ArrowUp':
            case 'Up':
                Y -= 10
                break
            case 'ArrowDown':
            case 'Down':
                Y += 10
                break
            case 'ArrowLeft':
            case 'Left':
                X -= 10
                break
            case 'ArrowRight':
            case 'Right':
                X += 10
                break
            default:

        }
        // 检查蛇是否吃到食物
        this.checkEat(X,Y)
        
        // 修改蛇的位置
        try {
            this.SnakeGame.X = X
            this.SnakeGame.Y = Y
            setTimeout(this.run.bind(this), 100-(this.ScorePanelGame.level-1)*30)
        }
        catch (e:any) {
            this.isLive=false
            alert('GAME OVER'+e.message)
        }
        
    }
    // 定义checkEat方法
    checkEat(X:number,Y:number){
        if(X===this.FoodGame.x&&Y===this.FoodGame.y){
            
            this.FoodGame.change()
            this.ScorePanelGame.addScore()
            this.SnakeGame.addBody()
        }
    
    }
}

export default Game