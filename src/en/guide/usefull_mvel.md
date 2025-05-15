# MVEL表达式

MVEL表达式能实现很多功能，因为它可以调用Android SDK，而且ShortX还为MVEL执行器添加了Android Context，有了这两个条件，它能实现的功能就非常多了。

MVEL表达式[语法官方网站](http://mvel.documentnode.com/#language-guide-for-2.0)
Andrid SDK [API 文档](https://developer.android.com/reference/packages)


### Webview 相关

**获取当前webview实现的包名**

```java
android.webkit.WebViewFactory.getUpdateService().getCurrentWebViewPackageName()
```

**判断当前webview实现的包名是否是XXX**

```java
android.webkit.WebViewFactory.getUpdateService().getCurrentWebViewPackageName() == "com.google.android.webview"
```


**切换webview**

```java
android.webkit.WebViewFactory.getUpdateService().changeProviderAndSetting("package_name")
```



### 系统设置相关

**获取字体缩放**

```java
android.provider.Settings$System.getFloat(context.contentResolver, "font_scale")
```

**设置字体缩放**

默认是1.0f，表示缩放倍数

```java
android.provider.Settings$System.putFloat(context.contentResolver, "font_scale", 1.0)
```



**获取Wifi密码**

```java
wifiPasswords = "";

configs = context.getSystemService(context.WIFI_SERVICE).getPrivilegedConfiguredNetworks();
    
foreach(conf : configs) {
    wifiPasswords += conf.SSID + "-->" + conf.preSharedKey + "\n";
}
          
wifiPasswords;
```



### 常用ShortX API

MVEL里还支持常用的ShortX 操作，通过 `shortx`来调用。

全部API <a href="../../javadoc/tornaco/apps/shortx/core/rule/script/api/ScriptShortXApi.html" target="_blank">查看 Javadoc</a>

常用API如下：

#### 读取全局变量
```kotlin
shortx.readGlobalVar("varName");
```
#### 写入全局变量
```kotlin
shortx.writeGlobalVarWithOp("varName", "value", 3);
```
其中第三个参数代表操作类型：

```
    // Op value: one of below op enum numbers, e.g. 3 for override.
    //    WriteGlobalVarOp_Auto(0),
    //    WriteGlobalVarOp_AppendToLast(1),
    //    WriteGlobalVarOp_AppendToFirst(2),
    //    WriteGlobalVarOp_Override(3),
    //    WriteGlobalVarOp_DeleteValue(4),
    //    WriteGlobalVarOp_DeleteLast(5),
    //    WriteGlobalVarOp_DeleteFirst(6),
    //    WriteGlobalVarOp_Clear(7),
    //    WriteGlobalVarOp_Reverse(8),
    //    WriteGlobalVarOp_Shuffle(9),
    //    WriteGlobalVarOp_Plus1(10),
    //    WriteGlobalVarOp_Minus1(11),
    //    WriteGlobalVarOp_Invert(12),
    //    WriteGlobalVarOp_PlusDelta(13),
    //    WriteGlobalVarOp_MinusDelta(14),
    //    WriteGlobalVarOp_RemoveAtIndex(15),
```


#### 在MVEL里执行Action（动作）

1. 先定义动作参数，可参考文档里的动作模型来定义：

<a href="../../javadoc/tornaco/apps/shortx/core/proto/action/package-summary.html" target="_blank">查看 Javadoc</a>


2. 调用shortx来执行动作

例如：

```java
action = ShowAlertDialog.newBuilder().setTitle("Test").setMessage("Hello world").build();
shortx.executeAction(action);
```
