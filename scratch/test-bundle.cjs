global.MutationObserver = class { observe(){} disconnect(){} };
const fs = require('fs');
const path = require('path');

const bundlePath = path.resolve('dist/assets/index-BMXs8ick.js');

const makeElement = (tag) => ({
  tagName: tag,
  style: {},
  classList: {
    add: () => {},
    remove: () => {},
    contains: () => false,
  },
  setAttribute: () => {},
  getAttribute: () => null,
  appendChild: () => {},
  removeChild: () => {},
  addEventListener: () => {},
  removeEventListener: () => {},
});

global.window = global;
global.document = {
  createElement: (tag) => makeElement(tag),
  getElementById: (id) => makeElement('div'),
  querySelector: () => makeElement('div'),
  querySelectorAll: () => [],
  addEventListener: () => {},
  removeEventListener: () => {},
  documentElement: makeElement('html'),
  body: makeElement('body'),
  head: makeElement('head'),
};
global.navigator = { userAgent: 'Mozilla/5.0' };
global.location = { pathname: '/', search: '', hash: '', href: 'https://luxorahotels.co.ke/' };
global.history = { pushState: () => {}, replaceState: () => {} };
global.requestAnimationFrame = (cb) => setTimeout(cb, 0);
global.cancelAnimationFrame = (id) => clearTimeout(id);
global.IntersectionObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};
global.matchMedia = () => ({ matches: false, addListener: () => {}, removeListener: () => {} });

async function run() {
  try {
    const fileUrl = 'file:///' + bundlePath.replace(/\\/g, '/');
    console.log('Importing bundle:', fileUrl);
    await import(fileUrl);
    console.log('SUCCESS! Bundle imported and executed with NO top-level errors!');
  } catch (err) {
    console.error('BUNDLE CRASHED AT TOP LEVEL:', err);
  }
}

run();
