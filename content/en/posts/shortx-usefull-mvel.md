---
title: "Usefull MVEL expressions"
categories:
  - Tutorial
toc: true
lastmod: 2023-01-05
---

MVEL表达式能实现很多功能，因为它可以调用Android SDK，而且ShortX还为MVEL执行器添加了Android Context，有了这两个条件，它能实现的功能就非常多了。

MVEL表达式[语法官方网站](http://mvel.documentnode.com/#language-guide-for-2.0)
Andrid SDK [API 文档](https://developer.android.com/reference/packages)



### Webview API

**Get current webview package name**

```java
android.webkit.WebViewFactory.getUpdateService().getCurrentWebViewPackageName()
```

**Switch default webview**

```java
android.webkit.WebViewFactory.getUpdateService().changeProviderAndSetting("package_name")
```



### System Settings

**Get font scale**

```java
android.provider.Settings$System.getFloat(context.contentResolver, "font_scale")
```

**Set font scale**


```java
android.provider.Settings$System.putFloat(context.contentResolver, "font_scale", 1.0)
```

**Get wifi passwords**

```java
wifiPasswords = "";

configs = context.getSystemService(context.WIFI_SERVICE).getPrivilegedConfiguredNetworks();
    
foreach(conf : configs) {
    wifiPasswords += conf.SSID + "-->" + conf.preSharedKey + "\n";
}
          
wifiPasswords;
```

