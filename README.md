# Overview

Advertising companies like Google and Facebook track and aggregate user activity across the internet in many different ways. One of these tactics is a feature built right into HTML — [the `ping` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-ping) — with which a page author or site owner can instruct a page or application to report the user's browsing activity to an arbitrary remote recipient. This is harder to block than other tactics because the tracking capability is built right into the web's *display layer*, so the browser will send the notification *even if JavaScript code execution is disabled*. You won't know where the report is being sent unless you examine the source code of the page, and you won't know it's happening at all unless you are watching your network traffic. Browsers used to let you disable the `ping` attribute in the interest of privacy, but they have recently [removed that customization](https://www.bleepingcomputer.com/news/software/major-browsers-to-prevent-disabling-of-click-tracking-privacy-risk/). This extension allows you to block the `ping` attribute again.

The `ping` attribute is added to the `a` anchor tags which represent clickable links, and includes a URL to which the report will be sent when the link is clicked. It would look like this in the source code of a web page:

```html
<a href="https://example.com">a normal link</a>
<a href="https://example.com" ping="https://google.com/track">a link that tracks your clicks</a>
```

This extension examines web pages as they load and immediately removes any `ping` attributes it finds, so it would rewrite the second link to the simpler form:

```html
<a href="https://example.com">a link that tracks your clicks</a>
```

At this point, because there is no longer a `ping` attribute, the browser will not send a report when the link is clicked.

# Installation

For now, the extension is available through the [Chrome web store](https://chrome.google.com/webstore/detail/pingkiller/jmpbcklniocgcmbelddldiemfoflilnl).

However, Google uses the `ping` attribute in its search results and might not want to host it. If they ever decide to remove it, you can still "sideload" it using the following process:

1. Download these files, either by cloning the repository with Git or simply [as an archive](https://github.com/vijithassar/pingkiller/releases/) which you then unzip.
2. Open Google Chrome.
2. Navigate to the Chrome configuration page by typing `chrome://extensions/` into the URL bar.
3. Switch Chrome into "developer mode."
4. Click on "load unpacked."
5. Select the directory containing these files.