(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{138:function(e,t,n){"use strict";n.d(t,"c",function(){return s}),n.d(t,"e",function(){return l}),n.d(t,"d",function(){return c}),n.d(t,"g",function(){return u}),n.d(t,"a",function(){return g}),n.d(t,"f",function(){return p}),n.d(t,"h",function(){return d}),n.d(t,"b",function(){return m});var a=n(16),r=n(13),i=n(14),o=n.n(i),s=function(e,t,n,i,s,l,c){return function(u){o.a.post(r.C,{name:e,email:t,password:n,accessToken:i,phone:s,provider:l,address:c}).then(function(e){var t=e.data;return u({type:a.b,payload:t})}).catch(function(e){console.log(e)})}},l=function(e,t,n,i,s){return function(l){o.a.post(r.H,{name:e,email:t,phone:n,password:i,address:s}).then(function(e){var t=e.data;return l({type:a.d,payload:t})}).catch(function(e){console.log(e)})}},c=function(e){return function(t){e=[];localStorage.removeItem("userSetAddress"),localStorage.removeItem("geoLocation"),t({type:a.c,payload:e}),t({type:a.e,payload:!1}),t({type:a.a,payload:[]})}},u=function(e,t,n){return function(i){o.a.post(r.O,{token:t,user_id:e,unique_order_id:n}).then(function(e){var t=e.data;return i({type:a.g,payload:t})}).catch(function(e){console.log(e)})}},g=function(e,t){return function(n){o.a.post(r.c,{token:t,user_id:e}).then(function(e){var t=e.data;return n({type:a.e,payload:t})}).catch(function(e){console.log(e)})}},p=function(e,t,n,i){return function(s){o.a.post(r.L,{email:e,phone:t,accessToken:n,provider:i}).then(function(e){var t=e.data;return s({type:a.f,payload:t})}).catch(function(e){console.log(e)})}},d=function(e,t){return function(n){o.a.post(r.P,{phone:e,otp:t}).then(function(e){var t=e.data;return n({type:a.h,payload:t})}).catch(function(e){console.log(e)})}},m=function(e,t){return function(n){o.a.post(r.A,{token:e,user_id:t}).then(function(e){var t=e.data;return n({type:a.a,payload:t})}).catch(function(e){console.log(e)})}}},152:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),i=s(r),o=s(n(1));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleTriggerClick=n.handleTriggerClick.bind(n),n.handleTransitionEnd=n.handleTransitionEnd.bind(n),n.continueOpenCollapsible=n.continueOpenCollapsible.bind(n),n.setInnerRef=n.setInnerRef.bind(n),e.open?n.state={isClosed:!1,shouldSwitchAutoOnNextCycle:!1,height:"auto",transition:"none",hasBeenOpened:!0,overflow:e.overflowWhenOpen,inTransition:!1}:n.state={isClosed:!0,shouldSwitchAutoOnNextCycle:!1,height:0,transition:"height "+e.transitionTime+"ms "+e.easing,hasBeenOpened:!1,overflow:"hidden",inTransition:!1},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"componentDidUpdate",value:function(e,t){var n=this;this.state.shouldOpenOnNextCycle&&this.continueOpenCollapsible(),"auto"===t.height&&!0===this.state.shouldSwitchAutoOnNextCycle&&window.setTimeout(function(){n.setState({height:0,overflow:"hidden",isClosed:!0,shouldSwitchAutoOnNextCycle:!1})},50),e.open!==this.props.open&&(!0===this.props.open?(this.openCollapsible(),this.props.onOpening()):(this.closeCollapsible(),this.props.onClosing()))}},{key:"closeCollapsible",value:function(){this.setState({shouldSwitchAutoOnNextCycle:!0,height:this.innerRef.offsetHeight,transition:"height "+(this.props.transitionCloseTime?this.props.transitionCloseTime:this.props.transitionTime)+"ms "+this.props.easing,inTransition:!0})}},{key:"openCollapsible",value:function(){this.setState({inTransition:!0,shouldOpenOnNextCycle:!0})}},{key:"continueOpenCollapsible",value:function(){this.setState({height:this.innerRef.offsetHeight,transition:"height "+this.props.transitionTime+"ms "+this.props.easing,isClosed:!1,hasBeenOpened:!0,inTransition:!0,shouldOpenOnNextCycle:!1})}},{key:"handleTriggerClick",value:function(e){e.preventDefault(),this.props.triggerDisabled||(this.props.handleTriggerClick?this.props.handleTriggerClick(this.props.accordionPosition):!0===this.state.isClosed?(this.openCollapsible(),this.props.onOpening()):(this.closeCollapsible(),this.props.onClosing()))}},{key:"renderNonClickableTriggerElement",value:function(){return this.props.triggerSibling&&"string"===typeof this.props.triggerSibling?i.default.createElement("span",{className:this.props.classParentString+"__trigger-sibling"},this.props.triggerSibling):this.props.triggerSibling?i.default.createElement(this.props.triggerSibling,null):null}},{key:"handleTransitionEnd",value:function(){this.state.isClosed?(this.setState({inTransition:!1}),this.props.onClose()):(this.setState({height:"auto",overflow:this.props.overflowWhenOpen,inTransition:!1}),this.props.onOpen())}},{key:"setInnerRef",value:function(e){this.innerRef=e}},{key:"render",value:function(){var e=this,t={height:this.state.height,WebkitTransition:this.state.transition,msTransition:this.state.transition,transition:this.state.transition,overflow:this.state.overflow},n=this.state.isClosed?"is-closed":"is-open",a=this.props.triggerDisabled?"is-disabled":"",r=!1===this.state.isClosed&&void 0!==this.props.triggerWhenOpen?this.props.triggerWhenOpen:this.props.trigger,o=this.props.triggerTagName,s=this.props.lazyRender&&!this.state.hasBeenOpened&&this.state.isClosed&&!this.state.inTransition?null:this.props.children,l=this.props.classParentString+"__trigger "+n+" "+a+" "+(this.state.isClosed?this.props.triggerClassName:this.props.triggerOpenedClassName),c=this.props.classParentString+" "+(this.state.isClosed?this.props.className:this.props.openedClassName),u=this.props.classParentString+"__contentOuter "+this.props.contentOuterClassName,g=this.props.classParentString+"__contentInner "+this.props.contentInnerClassName;return i.default.createElement("div",{className:c.trim()},i.default.createElement(o,{className:l.trim(),onClick:this.handleTriggerClick,style:this.props.triggerStyle&&this.props.triggerStyle,onKeyPress:function(t){var n=t.key;" "!==n&&"Enter"!==n||e.handleTriggerClick(t)},tabIndex:this.props.tabIndex&&this.props.tabIndex},r),this.renderNonClickableTriggerElement(),i.default.createElement("div",{className:u.trim(),style:t,onTransitionEnd:this.handleTransitionEnd},i.default.createElement("div",{className:g.trim(),ref:this.setInnerRef},s)))}}]),t}();l.propTypes={transitionTime:o.default.number,transitionCloseTime:o.default.number,triggerTagName:o.default.string,easing:o.default.string,open:o.default.bool,classParentString:o.default.string,openedClassName:o.default.string,triggerStyle:o.default.object,triggerClassName:o.default.string,triggerOpenedClassName:o.default.string,contentOuterClassName:o.default.string,contentInnerClassName:o.default.string,accordionPosition:o.default.oneOfType([o.default.string,o.default.number]),handleTriggerClick:o.default.func,onOpen:o.default.func,onClose:o.default.func,onOpening:o.default.func,onClosing:o.default.func,trigger:o.default.oneOfType([o.default.string,o.default.element]),triggerWhenOpen:o.default.oneOfType([o.default.string,o.default.element]),triggerDisabled:o.default.bool,lazyRender:o.default.bool,overflowWhenOpen:o.default.oneOf(["hidden","visible","auto","scroll","inherit","initial","unset"]),triggerSibling:o.default.oneOfType([o.default.element,o.default.func]),tabIndex:o.default.number},l.defaultProps={transitionTime:400,transitionCloseTime:null,triggerTagName:"span",easing:"linear",open:!1,classParentString:"Collapsible",triggerDisabled:!1,lazyRender:!1,overflowWhenOpen:"hidden",openedClassName:"",triggerStyle:null,triggerClassName:"",triggerOpenedClassName:"",contentOuterClassName:"",contentInnerClassName:"",className:"",triggerSibling:null,onOpen:function(){},onClose:function(){},onOpening:function(){},onClosing:function(){},tabIndex:null},t.default=l},159:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"c",function(){return l}),n.d(t,"a",function(){return c});var a=n(44),r=n(13),i=n(14),o=n.n(i),s=function(){return function(e){o.a.post(r.n).then(function(t){var n=t.data;return e({type:a.b,payload:n})}).catch(function(e){console.log(e)})}},l=function(e){return function(t){o.a.post(r.z,{slug:e}).then(function(e){var n=e.data;return t({type:a.c,payload:n})}).catch(function(e){console.log(e)})}},c=function(){return function(e){return e({type:a.a,payload:[]})}}},235:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(4),i=n(6),o=n(5),s=n(7),l=n(0),c=n.n(l),u=n(67),g=n(12),p=n(138),d=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"block-content block-content-full bg-white",onClick:function(){return e.props.logoutUser(e.props.user)}},c.a.createElement("div",{className:"display-flex"},c.a.createElement("div",{className:"flex-auto logout-text"},localStorage.getItem("accountLogout")),c.a.createElement("div",{className:"flex-auto text-right"},c.a.createElement("i",{className:"si si-power logout-icon"})))))}}]),t}(l.Component),m=Object(g.b)(function(e){return{user:e.user.user}},{logoutUser:p.d})(d),f=n(25),h=n(245),y=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.user_info;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"block-content block-content-full bg-white"},c.a.createElement("h2",{className:"font-w600 mb-10"},e.name),c.a.createElement("p",{className:"text-muted"},e.phone," . ",e.email),c.a.createElement("hr",{className:"hr-bold"})))}}]),t}(l.Component),b=n(152),v=n.n(b),O=n(38),C=n(65),N=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.pages;return c.a.createElement(c.a.Fragment,null,c.a.createElement(v.a,{trigger:localStorage.getItem("accountMyAccount"),transitionTime:200,open:!0},c.a.createElement("div",{className:"category-list-item"},c.a.createElement(O.a,{to:"/my-addresses",delay:200},c.a.createElement("div",{className:"display-flex py-2"},c.a.createElement("div",{className:"mr-10 border-0"},c.a.createElement("i",{className:"si si-home"})),c.a.createElement("div",{className:"flex-auto border-0"},localStorage.getItem("accountManageAddress")),c.a.createElement("div",{className:"flex-auto text-right"},c.a.createElement("i",{className:"si si-arrow-right"}))))),c.a.createElement("div",{className:"category-list-item"},c.a.createElement(O.a,{to:"/my-orders",delay:200},c.a.createElement("div",{className:"display-flex py-2"},c.a.createElement("div",{className:"mr-10 border-0"},c.a.createElement("i",{className:"si si-basket-loaded"})),c.a.createElement("div",{className:"flex-auto border-0"},localStorage.getItem("accountMyOrders")),c.a.createElement("div",{className:"flex-auto text-right"},c.a.createElement("i",{className:"si si-arrow-right"}))))),c.a.createElement("div",{className:"category-list-item"},c.a.createElement(O.a,{to:"/my-wallet",delay:200},c.a.createElement("div",{className:"display-flex py-2"},c.a.createElement("div",{className:"mr-10 border-0"},c.a.createElement("i",{className:"si si-wallet"})),c.a.createElement("div",{className:"flex-auto border-0"},localStorage.getItem("accountMyWallet")),c.a.createElement("div",{className:"flex-auto text-right"},c.a.createElement("i",{className:"si si-arrow-right"})))))),c.a.createElement(v.a,{trigger:localStorage.getItem("accountHelpFaq"),transitionTime:200},e.map(function(e){return c.a.createElement("div",{key:e.id,className:"category-list-item"},c.a.createElement(C.a,{onOpen:function(){document.getElementsByTagName("body")[0].classList.add("noscroll"),document.getElementsByClassName("popup-overlay")[0].classList.add("customizable-scroll")},onClose:function(){document.getElementsByTagName("body")[0].classList.remove("noscroll")},trigger:c.a.createElement("div",{className:"display-flex py-2"},c.a.createElement("div",{className:"flex-auto border-0"},e.name),c.a.createElement("div",{className:"flex-auto text-right"},c.a.createElement("i",{className:"si si-arrow-right"}))),modal:!0,closeOnDocumentClick:!0},function(t){return c.a.createElement("div",{className:"pages-modal"},c.a.createElement("div",{onClick:t,className:"close-modal-header text-right"},c.a.createElement("span",{className:"close-modal-icon"},"\xd7")),c.a.createElement("div",{className:"mt-50",dangerouslySetInnerHTML:{__html:e.body}}))}))})))}}]),t}(l.Component),E=n(159),S=n(18),T=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).handleOnChange=function(e){n.props.getSingleLanguageData(e.target.value),localStorage.setItem("userPreferedLanguage",e.target.value)},n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.user;if(null!==localStorage.getItem("storeColor")&&e.success&&this.props.getPages(),null!==localStorage.getItem("state")){var t=JSON.parse(localStorage.getItem("state")).languages;if(t&&t.length>0)if("true"===localStorage.getItem("multiLanguageSelection")){if(localStorage.getItem("userPreferedLanguage"))this.props.getSingleLanguageData(localStorage.getItem("userPreferedLanguage"));else if(t.length){var n=t.filter(function(e){return 1===e.is_default})[0].id;this.props.getSingleLanguageData(n)}}else if(t.length){var a=t.filter(function(e){return 1===e.is_default})[0].id;this.props.getSingleLanguageData(a)}}}},{key:"render",value:function(){if(window.innerWidth>768)return c.a.createElement(h.a,{to:"/"});if(null===localStorage.getItem("storeColor"))return c.a.createElement(h.a,{to:"/"});var e=this.props,t=e.user,n=e.pages;if(!t.success)return c.a.createElement(h.a,{to:"/login"});var a=JSON.parse(localStorage.getItem("state")).languages;return console.log(a),c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,{seotitle:"Account",seodescription:localStorage.getItem("seoMetaDescription"),ogtype:"website",ogtitle:localStorage.getItem("seoOgTitle"),ogdescription:localStorage.getItem("seoOgDescription"),ogurl:window.location.href,twittertitle:localStorage.getItem("seoTwitterTitle"),twitterdescription:localStorage.getItem("seoTwitterDescription")}),c.a.createElement(y,{user_info:t.data}),c.a.createElement(N,{pages:n}),c.a.createElement(m,null),c.a.createElement(u.a,{active_account:!0}),"true"===localStorage.getItem("multiLanguageSelection")&&a&&a.length>0&&c.a.createElement("div",{className:"mt-4 d-flex align-items-center justify-content-center"},c.a.createElement("div",{className:"mr-2"},localStorage.getItem("changeLanguageText")),c.a.createElement("select",{onChange:this.handleOnChange,defaultValue:localStorage.getItem("userPreferedLanguage")?localStorage.getItem("userPreferedLanguage"):a.filter(function(e){return 1===e.is_default})[0].id,className:"form-control language-select"},a.map(function(e){return c.a.createElement("option",{value:e.id,key:e.id},e.language_name)}))))}}]),t}(l.Component);t.default=Object(g.b)(function(e){return{user:e.user.user,pages:e.pages.pages,language:e.languages.language}},{getPages:E.b,getSingleLanguageData:S.b})(T)}}]);