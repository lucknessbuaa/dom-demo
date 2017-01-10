# dom-demo
DOM事件行为，事件从发生开始经历了三个阶段:
1. 捕获阶段
2. 命中阶段（事件处理阶段）
3. 冒泡阶段
###  注册事件处理程序的方法
* on+事件名（事件处理程序属性）
* addEventListener（标准事件模型）
* attachEvent（IE8及以下）

### 对比
* 事件处理程序属性方式：每个事件目标对于每种事件类型最多只有一个处理程序，注册多个会覆盖；
* IE事件模型不支持事件捕获，所以attachEvent只有两个参数：事件类型和处理程序函数；
* attachEvent()允许相同的事件处理程序函数注释多次。当特定的事件类型发生时，注册函数的调用次数和注册次数一样；

### 调用顺序
* 通过设置对象属性或HTML属性注册的处理程序一直优先调用；(?)
* 使用addEventListener()注册的处理程序按照它们的注册顺序调用；
* 使用attachEvent()注册的处理程序可能按照任何顺序调用，所以代码不应该依赖于调用顺序；

### 事件取消
#### 取消默认行为
```
if (event.preventDefault) event.preventDefault(); // 标准技术
if (event.returnValue) event.returnValue = false; // IE
return false; // 用于处理使用对象属性注册的处理程序
```
#### 取消事件传播
```
if (event.stopPropagation) event.stopPropagation() // 标准技术
if (event.cancelBubble) event.cancelBubble = true; // IE
```
#### stopPropagation and stopImmediatePropagation
* stopPropagation会阻止该对象之后的其他对象触发事件处理程序，但是该对象上注册的所有事件处理程序都会执行；
* stopImmediatelyPropagation也会阻止在相同对象上注册的任何其他事件处理程序的调用；
* stopImmediatelyPropagation还未得到广泛的支持，可以使用jQuery的该方法；
