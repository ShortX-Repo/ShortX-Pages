---
title: "常用MVEL表达式"
categories:
  - 教程
toc: true
lastmod: 2023-01-05
---

MVEL表达式能实现很多功能，以下是常用的表达式。



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



