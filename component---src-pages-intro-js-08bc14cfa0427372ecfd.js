webpackJsonp([0x7027b06498e6],{30:function(e,t,o){e.exports=o.p+"static/pic01.55e1797f.jpg"},140:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=o(1),u=n(l),c=o(2),s=n(c),p=o(30),f=n(p),m=function(e){function t(){return a(this,t),r(this,e.apply(this,arguments))}return i(t,e),t.prototype.componentDidMount=function(){this.props.onPageIn()},t.prototype.render=function(){var e=this,t=u.default.createElement("div",{className:"close",onClick:function(){return e.props.navigateWithTimeout("page","/")}});return u.default.createElement("div",{id:"wrapper"},u.default.createElement("div",{id:"main"},u.default.createElement("article",{id:"intro",className:this.props.articleTimeout?"timeout":""},u.default.createElement("h2",{className:"major"},"Intro"),u.default.createElement("span",{className:"image main"},u.default.createElement("img",{src:f.default,alt:""})),u.default.createElement("p",null,"Hi there, I'm David and welcome to my site. I'm a full-stack web developer based in West LA. I’ve worked on various projects such as cross-platform mobile application, full-stack web application, and .NET web application. If you want to learn more about my previous projects, please check out my ",u.default.createElement("a",{href:"/work",onClick:function(t){return e.props.navigateWithTimeout("page","/work",t)}},"awesome work"),"."),t)))},t}(l.Component);m.propTypes={route:s.default.object,article:s.default.string,articleTimeout:s.default.bool,onCloseArticle:s.default.func,timeout:s.default.bool},t.default=m,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-intro-js-08bc14cfa0427372ecfd.js.map