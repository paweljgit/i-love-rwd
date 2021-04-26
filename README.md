# I LOVE RWD . com<Br /> Responsive Web Design - Websites preview tool


|Video presentation <Br />of the project|Screen shot <br />of the project|
|--|--|
|[![Screen shot of the project](https://s08.pl/git/img/rwd/screen-yt.png)](https://www.youtube.com/watch?v=DCfQEuZP4bM)|[![Screen shot of the project](https://s08.pl/git/img/rwd/screen-www.png)](https://iloverwd.com)|


This is a Webmaster Tool that allows you to see how a website looks on different devices. You can preview the page on:

 - **phone** (in portrait and landscape variants)
 - **tablet** (in portrait and landscape variants)
 - and on the **laptop**
 
Yes I know. There are already a few such tools, but this is supposed to be the nicest. I bet on softly animated 3D models of devices. I give you the opportunity to share the link of the preview.

## Live site url 

https://iloverwd.com - I invite you to check, go ahead and click :)

## What do we have here?
I built the application on **Vue.js 2** (**Vue CLI**, Single File Components). I was using a **vue router**. **Style is pure scss** without ony frameworks (my code with **bem**). Device models are generated on the basis of data from the json file, which allows for quick modification - e.g. screen ratio, frame size in mobile devices or edge rounding. All text content is loaded from the json file in the future it will be replaced with a connection to the cms system.

**Previews are just iframes, so the success of displaying depends on the page's X-Frame settings. Preview is only possible for sites that DON'T have X-Frame Options set to Same Origin or Deny.** 

## Roadmap
 - [ ] preview on a large monitor
 - [ ] screen ratio manipulations for mobile devices - live
 - [ ] cms for the content
 - [ ] Polish language version
 - [ ] seo text content on the page
 - [ ] bug fixes

## Project setup
Project setup

    yarn install

Compiles and hot-reloads for development

    yarn serve

Compiles and minifies for production

    yarn build

Lints and fixes files

    yarn lint
