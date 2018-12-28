# alog4js-demo
demo for [alog4js](https://github.com/alanbright/alog4js)

tested on ubuntu 14.04

tested on mac osx Sierra

## prerequisite
[nodejs 10.12.0](https://nodejs.org/dist/v10.12.0/) or bigger.
use port 8000 as default

## installation

```bash
git clone https://github.com/alanbright/alog4js-demo
cd alog4js-demo
npm install
```

## usage

* ubuntu

```bash
npm start
```

* mac

```bash
npm run mac
```

## demo

Then open the apidoc webpage, use the sample API

**page for user**

this page will not show API which can operate the log setting
[http://127.0.0.1:8000/doc/](http://127.0.0.1:8000/doc/)

**page for admin**

We demo by this page. Administator can dynamic change the log setting
[http://127.0.0.1:8000/alldoc/](http://127.0.0.1:8000/alldoc/)

* Access the user API then you can look the API log flow

* Access the admin API to change log level or layout domain

* Access the user API and check the new log layout flow
