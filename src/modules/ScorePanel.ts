// 定义积分类
const ScorePanel=class{
    score = 0;
    level = 1;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    private _maxLevel:number=5;
    private _upScore:number=10;
    constructor() {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
    }

    set maxLevel(value:number){
        this._maxLevel=value;
    }

    // 设置一个加分的方法
    addScore() {
        // 使分数自增
        if(this.score%this._upScore==0){
            this.levelUp()
            this.scoreEle.innerHTML = ++this.score + '';
        }else{
            this.scoreEle.innerHTML = ++this.score + '';
        }
    }

    // 提升等级的方法
    levelUp(){
        if(this.level<this._maxLevel){
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}

export default ScorePanel