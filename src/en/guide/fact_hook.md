# Method hook

如何使用Method hook 触发器。

## 重要提示

添加触发器后，请记得去Xposed管理器中勾选目标App的作用域。



## 上下文变量 - 表达式

指定一个key与MVEL表达式，key与表达式的执行结果最终会写入上下文变量。

其中MVEL表达式运行环境中，提供了一个`param`对象，这个对象是 Xposed框架API中定义的 [XC_MethodHook.MethodHookParam](https://api.xposed.info/reference/de/robv/android/xposed/XC_MethodHook.MethodHookParam.html)类型。

你可以调用这个对象，获取方法中你需要的信息。例如：

获取方法的第一个参数
```java
param.args[0]
```

获取方法的返回值
```java
param.result
```

获取当前对象
```java
param.thisObject
```


修改返回值
```java
param.result = 返回值
```


修改参数
```java
param.args[0] = 参数1
param.args[1] = 参数2
...
```

