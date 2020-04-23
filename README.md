npm install express-nedb-rest
npm install cors // allows us serve api to third party domains
const nedb = require('nedb'); //database
const rest = require('express-nedb-rest'); //API

webApp Manifest
// Automatic generators

1.  tomitm.github.io/appmanifest
2.  brucelawson.github.io/manifest
3.  app-manifest.firebaseapp.com

// Steps to make angular app progressive webApp
// Create manifest.json
// create a link in index.html
// add to angular-cli.json
ng serve --host 0.0.0.0

// hosting app on Port
// cmd --> ipconfig --> get ipv4 address
// run ng serve --host on your ipv4 addresseg 192.168.1.79
// all devices on your network can now go to that ip to view your app ng serve
--host 192.168.1.779 [no port!!!]
// change fav icon from ico to png

// to change the status bar color <meta name='theme-color' content="orange">
// chrome://flags

// Serve locally
npm i -g http-server //install http-serve
ng build --prod
http-server dist/angular-pwa-demo -o

// Service Worker
is a javascript thread
Acts as the owner of a scope (origin + path)
Has Abilities on the scope

// Abilities
access cache storage
Acts as a network proxy

// Use Cases
Deliver assets from cache immediately
Act as a web server replacement when offline
React to bad connections
React to server issues

// Service Worker
chrome://serviceworker-internals
"production": {
"serviceWorker": true, // add service worker here
"fileReplacements": [
{
"replace": "src/environments/environment.ts",
"with": "src/environments/environment.prod.ts"
}

ngsw will caache the jsmiles is dist folder when built using prod flag

npm install --save-dev @angular/service-worker
ng add @angular/pwa

//
The ngsw-config.json configuration file specifies which files and data URLs the Angular service worker should cache and how it should update the cached files and data

//ng serve --prod
<noscript>Please enable JavaScript to continue using this application.</noscript>
to show a banner if javascript is disabled

http-serve [path to folder eg. dist/mycoffeeapp]
