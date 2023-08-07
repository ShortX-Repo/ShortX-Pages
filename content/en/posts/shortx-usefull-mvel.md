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

