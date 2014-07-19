phonegap-icon-set
=================

##### An example of generating several pixel perfect icon versions with grunt

When building an application with phonegap it is advisable to provide several sizes of icon for the various devices. [Here](http://docs.phonegap.com/en/3.5.0/config_ref_images.md.html) is the documentation available on the sizes that are useful. 
This repo was my first test with, and now example for, using [grunt rasterize](https://github.com/logankoester/grunt-rasterize) to create this icon set

Installation
============

To install this example you need to ensure you have [node](http://nodejs.org/) and [npm](https://www.npmjs.org/) installed. I have a quick [introduction to node and npm](http://crowdhailer.tumblr.com/post/84311910118/starting-with-node-js-and-npm) if you have not yet started with these.

Clone this repo and change directory into it

```
git clone 

cd phonegap-icon-set
```

Make sure that you have the grunt command line tool installed, skip this step if you have it already

```
npm install -g grunt-cli
```

Install dependencies from npm

```
npm install
```

Usage
=====

Make any changes in icon.svg. The generation of rasterized icons is done by running the rasterize task within grunt. Here it is also the default grunt task

```
grunt 
//or
grunt rasterize:icons
```

Contributions
=============

Here are some additions I would like to add to grunt-rasterize when I have the oportunity

1. Read output file sizes and location from the config.xml
2. Use standard file locations 'eg src' such that it will work with grunt-newer
