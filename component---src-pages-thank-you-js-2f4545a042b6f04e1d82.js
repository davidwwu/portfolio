webpackJsonp([0xae674455b0ea],{142:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var u=n(1),c=o(u),l=function(t){function e(n){r(this,e);var o=a(this,t.call(this,n));return o.state={countdown:10},o}return i(e,t),e.prototype.componentDidMount=function(){var t=this;this.props.onPageIn(),this.countdownTimerID=setInterval(function(){t.state.countdown>1?t.setState(function(t){return{countdown:t.countdown-1}}):(clearInterval(t.countdownTimerID),t.props.navigateWithTimeout("page","/"))},1e3)},e.prototype.componentWillUnmount=function(){clearInterval(this.countdownTimerID)},e.prototype.render=function(){var t=this,e=c.default.createElement("div",{className:"close",onClick:function(){return t.props.navigateWithTimeout("page","/")}});return c.default.createElement("div",{id:"wrapper"},c.default.createElement("div",{id:"main"},c.default.createElement("article",{className:this.props.articleTimeout?"timeout":""},c.default.createElement("h2",null,"Awesome!"),c.default.createElement("p",null,"Thanks for contacting me! I'll get back to you ASAP :)",c.default.createElement("br",null),"Auto redirecting in ",this.state.countdown," second(s)."),e)))},e}(u.Component);e.default=l,t.exports=e.default}});
//# sourceMappingURL=component---src-pages-thank-you-js-2f4545a042b6f04e1d82.js.map