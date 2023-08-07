---
title: "Usefull MVEL expressions"
categories:
  - Tutorial
toc: true
lastmod: 2023-01-05
---

Usefull MVEL expressions listed below.



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

