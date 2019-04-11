# Overview

Advertising companies like Google track user activity across the internet in many different ways. Some of them can be blocked or avoided with some diligence, but HTML includes an attribute called `ping` which reports data to an arbitrary remote URL when a link is clicked, which is trickier because it makes user behavioral tracking into a native feature of the web. Browsers used to let you disable the `ping` attribute in the interest of privacy, but they have recently [removed that customization](https://www.bleepingcomputer.com/news/software/major-browsers-to-prevent-disabling-of-click-tracking-privacy-risk/).

In the source code of the page, it looks like this:

```html
<a href="https://example.com">a normal link</a>
<a href="https://example.com" ping="https://google.com/track">a link that tracks your clicks</a>
```

This Chrome extension examines web pages as they load and removes any `ping` attributes found.

# Installation

For now, the extension is available through the [Chrome web store](#). However, Google uses the `ping` attribute in its search results and might not view it kindly. Should they ever remove it, you can also "sideload" it using the following process:

1. Download these files, either by cloning the repository with Git or simply [as an archive](https://github.com/vijithassar/pingkiller/releases/) which you then unzip.
2. Open the `chrome://extensions/` configuration page.
3. Switch Chrome into "developer mode."
4. Click on "load unpacked."
5. Select the directory containing these files.