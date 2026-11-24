# Western Philosophy Atlas

A mobile field guide to Western philosophy. It runs as a static website and can be installed on your phone as a standalone web app. After the first successful online visit, the guide can open offline. External reference links require a connection.

## Publish on GitHub Pages

1. Extract the ZIP. In GitHub, create a public repository, for example `western-philosophy-atlas`.
2. Choose **Add file → Upload files** and upload the extracted files to the repository root. Commit them to `main`. On a Mac, press **Command–Shift–.** in the file picker to show the included `.nojekyll` file. You can also create it in GitHub with **Add file → Create new file**. Any file contents are fine.
3. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then select **main** and **/ (root)** and click **Save**.
4. When GitHub shows **Visit site**, open that link. For a project repository, it typically looks like `https://YOUR-USERNAME.github.io/western-philosophy-atlas/`.

[GitHub Pages publishing guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Install on your phone

- **iPhone:** Open the published site in Safari. Tap **Share → Add to Home Screen**. Turn on **Open as Web App** if shown, then tap **Add**. [Apple instructions](https://support.apple.com/guide/iphone/open-as-web-app-iphea86e5236/ios)
- **Android:** Open the published site in Chrome. Tap **More → Install and create shortcut → Install**. [Chrome instructions](https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DAndroid&hl=en)

## Update the guide

Commit your changes to the same branch. When changing the page or icons, increment the cache version in `sw.js` so browsers refresh the files used offline. If the app is open during an update, close all open copies of the site and reopen it to let the updated service worker take over.
