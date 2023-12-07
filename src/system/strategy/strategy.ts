/**
 * 策略接口
 */
interface Strategy {
    /**
     * 执行策略
     */
    run():void
}

/**
 * 发育策略
 * 房间等级未满时触发
 */
class DevelopingStrategy implements Strategy {
    run(){

    }
}

/**
 * 稳定策略
 * 房间等级已满时触发
 */
class StableStrategy implements Strategy {
    run(): void {
    }

}

/**
 * 防守策略
 * 房间内出现其他
 */
class defendStrategy implements Strategy {
    run(): void {
    }

}