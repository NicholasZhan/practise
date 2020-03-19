# 《使用 工厂模式完成链式调用》

## 目标

GodMan("jack")
输出:
    I am jack

GodMan("jack").rest(10).learn("computer")
输出
I am jack
//等待10秒 
Start learning after 10 seconds
Learning computer

GodMan("jack").restFirst(5).learn("chinese").rest(5).learn('english')
输出
//等待5秒 
Start learning after 5 seconds
I am jack
Learning chinese
//等待5秒 
Start learning after 5 seconds
Learning english

## 知识点

1. js工厂模式
2. 事件数组插入与执行
3. eventloop的原理
