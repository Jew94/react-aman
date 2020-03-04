/**
 * i want to create my hello world using js
 * create h1 tag and connect that tag to the div
 */

const h1 = document.createElement('h1');
h1.innerText = 'Hello world from js';

const root = document.getElementById('root');
root.appendChild(h1);