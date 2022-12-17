/*! For license information please see main.b6381e1f3a100a7191d5.js.LICENSE.txt */
(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=e,this._name=e.name,this._link=e.link,this._templateSelector=n,this._handleCardClick=r,this._myId=o,this._cardDelete=i,this._cardLike=a,this._isLiked=this._isCardLiked()}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._elementImage=this._element.querySelector(".element__image"),this._elementImage.src=this._link,this._elementImage.alt=this._name,this._element.querySelector(".element__text").textContent=this._name,this._likeCounter=this._element.querySelector(".element__like-counter"),this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._elementImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)})),this._elementLike=this._element.querySelector(".element__like-button"),this._elementLike.addEventListener("click",(function(){e._likeCard()})),this._elementTrashIcon=this._element.querySelector(".element__trash-icon"),this._elementTrashIcon.addEventListener("click",(function(){e._handleDelete()})),this._howManyLikes(),this._data.owner._id!=this._myId&&(this._elementTrashIcon.remove(),this._elementTrashIcon=null),this._isLiked&&this._elementLike.classList.add("element__like-button_active")}},{key:"_likeCard",value:function(){this._cardLike(this,this._isLiked)}},{key:"_isCardLiked",value:function(){var e=this;return this._data.likes.some((function(t){return t._id===e._myId}))}},{key:"setLikes",value:function(e){this._likeCounter.textContent=e,this._isLiked?(this._elementLike.classList.remove("element__like-button_active"),this._isLiked=!1):(this._elementLike.classList.add("element__like-button_active"),this._isLiked=!0)}},{key:"_howManyLikes",value:function(){this._likeCounter.textContent=this._data.likes.length}},{key:"_handleDelete",value:function(){this._cardDelete(this)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){function e(t,r){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"enableValidation",(function(){i._setListeners()})),o(this,"disableButtonSubmit",(function(){i._submitButton.setAttribute("disabled",!0),i._submitButton.classList.remove(i._activeButtonClass)})),o(this,"_setListeners",(function(){var e,t=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){u=!0,a=e},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw a}}}}(i._inputList);try{var r=function(){var t=e.value;t.addEventListener("input",(function(){i._updateInputValidation(t),i._updateSubmitButton()}))};for(t.s();!(e=t.n()).done;)r()}catch(e){t.e(e)}finally{t.f()}})),o(this,"_updateInputValidation",(function(e){var t=document.querySelector("#".concat(e.id,"-error"));t.textContent=e.validationMessage,""!==t.textContent?(e.classList.add(i._inputErrorClass),t.classList.add(i._errorClass)):(e.classList.remove(i._inputErrorClass),t.classList.remove(i._errorClass))})),o(this,"_updateSubmitButton",(function(){i._form.checkValidity()?(i._submitButton.removeAttribute("disabled"),i._submitButton.classList.add(i._activeButtonClass)):i.disableButtonSubmit()})),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._activeButtonClass=t.activeButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._form=r,this._inputList=this._form.querySelectorAll(this._inputSelector),this._submitButton=this._form.querySelector(this._submitButtonSelector)}var t,i;return t=e,(i=[{key:"cleanErrors",value:function(){var e=this;this._inputList.forEach((function(t){var n=document.querySelector("#".concat(t.id,"-error"));t.classList.remove(e._inputErrorClass),n.classList.remove(e._errorClass),n.textContent=""}))}}])&&r(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderer",value:function(e){var t=this;e.forEach((function(e){var n=t._renderer(e);t.addItem(n)}))}},{key:"addItem",value:function(e){this._container.append(e)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=t,this._closeBtn=this._popupElement.querySelector(".popup__close-btn"),this._handleEscCloseRef=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscCloseRef)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscCloseRef)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("click",(function(t){t.target===t.currentTarget&&e.close()})),this._closeBtn.addEventListener("click",(function(){e.close()}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},h.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function y(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(r);if(o){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popupElement.querySelector(".popup-image__image"),t._name=t._popupElement.querySelector(".popup-image__title"),t}return t=a,(n=[{key:"open",value:function(e,t){this._image.src=t,this._image.alt=e,this._name.textContent=e,h(v(a.prototype),"open",this).call(this)}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=w(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function S(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmit=t,n._form=n._popupElement.querySelector(".form"),n.formName=n._form.getAttribute("name"),n._allInputs=n._form.querySelectorAll(".form__input"),n._button=n._form.querySelector(".form__save-btn"),n._buttonText=n._button.textContent,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this.inputValues={},this._allInputs.forEach((function(t){e.inputValues[t.name]=t.value})),this.inputValues}},{key:"setEventListeners",value:function(){var e=this;g(L(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputValues())}))}},{key:"loading",value:function(e){e?(this._button.textContent="Сохранение...",this._button.disabled=!0):(this._button.textContent=this._buttonText,this._button.disabled=!0)}},{key:"close",value:function(){g(L(a.prototype),"close",this).call(this),this._form.reset()}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t){var n=t.profileName,r=t.profileAbout,o=t.profileAvatarka;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=n,this._profileAbout=r,this._profileAvatarka=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,about:this._profileAbout.textContent}}},{key:"getServerProfileInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar,o=e.cohort,i=e._id;this._name=t,this._about=n,this._avatar=r,this._cohort=o,this.id=i}},{key:"renderProfile",value:function(){this._profileName.textContent=this._name,this._profileAbout.textContent=this._about}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;this._profileName.textContent=t,this._profileAbout.textContent=n}},{key:"renderAvatarServer",value:function(){this._profileAvatarka.src=this._avatar}},{key:"renderAvatar",value:function(e){this._profileAvatarka.src=e}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status," ").concat(e.statusText))}},{key:"getUserInformation",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getAllCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"addNewCard",value:function(e){var t=e.inputAddNameCard,n=e.inputAddLinkCard;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:"".concat(t),link:"".concat(n)})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"setUserInformtion",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:"".concat(t),about:"".concat(n)})}).then(this._checkResponse)}},{key:"setNewAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}},{key:"_setLikeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse).then((function(e){return e.likes}))}},{key:"_deleteLikeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse).then((function(e){return e.likes}))}},{key:"toggleLike",value:function(e,t){return t?this._deleteLikeCard(e):t?void 0:this._setLikeCard(e)}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=q(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},T.apply(this,arguments)}function q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function I(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmit=t,n._buttonSubmit=n._popupElement.querySelector(".popup__save-btn"),n}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;T(B(a.prototype),"setEventListeners",this).call(this),this._buttonSubmit.addEventListener("click",(function(t){t.preventDefault(),e._handleSubmit(e._card)}))}},{key:"getCurrentCard",value:function(e){this._card=e}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s),U={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__save-btn",activeButtonClass:"form__save-btn_active",inputErrorClass:"form__input_type_error",errorClass:"error-span_visible"},D=document.querySelector(".popup-image"),V=document.querySelector(".profile__edit-button"),G=document.querySelector(".popup_edit_profile"),F=document.querySelector(".profile__name"),M=document.querySelector(".profile__about"),H=document.querySelector(".form__input_add_name"),J=document.querySelector(".form__input_add_about"),Y=document.querySelector(".popup_add_card"),z=Y.querySelector(".form"),$=(z.querySelector(".form__input_add_name"),z.querySelector(".form__input_add_link"),document.querySelector(".profile__add-button")),K=document.querySelector(".form_edit-profile"),Q=document.querySelector(".elements__list"),W=document.querySelector(".profile__pencil"),X=document.querySelector(".form_change-avatar"),Z=document.querySelector(".popup_change-avatar"),ee=document.querySelector(".profile__avatar"),te=(document.querySelector(".element__like-counter"),document.querySelector(".popup-submit"));function ne(e){return ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ne(e)}function re(){re=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function s(e,t,n,o){var i=t&&t.prototype instanceof h?t:h,a=Object.create(i.prototype),c=new E(o||[]);return r(a,"_invoke",{value:w(e,n,c)}),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var f={};function h(){}function p(){}function d(){}var y={};u(y,i,(function(){return this}));var v=Object.getPrototypeOf,_=v&&v(v(O([])));_&&_!==t&&n.call(_,i)&&(y=_);var m=d.prototype=h.prototype=Object.create(y);function b(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function g(e,t){function o(r,i,a,c){var u=l(e[r],e,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==ne(f)&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){o("next",e,a,c)}),(function(e){o("throw",e,a,c)})):t.resolve(f).then((function(e){s.value=e,a(s)}),(function(e){return o("throw",e,a,c)}))}c(u.arg)}var i;r(this,"_invoke",{value:function(e,n){function r(){return new t((function(t,r){o(e,n,t,r)}))}return i=i?i.then(r,r):r()}})}function w(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=k(a,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(e,t,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function k(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=l(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,f;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function O(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return p.prototype=d,r(m,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,u(e,c,"GeneratorFunction")),e.prototype=Object.create(m),e},e.awrap=function(e){return{__await:e}},b(g.prototype),u(g.prototype,a,(function(){return this})),e.AsyncIterator=g,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new g(s(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},b(m),u(m,c,"Generator"),u(m,i,(function(){return this})),u(m,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=O,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:O(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}function oe(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function ie(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){oe(i,r,o,a,c,"next",e)}function c(e){oe(i,r,o,a,c,"throw",e)}a(void 0)}))}}var ae=new P({baseUrl:"https://nomoreparties.co/v1/cohort-54",headers:{authorization:"eff7d243-9399-4d7f-b196-61b79a4d8723","Content-Type":"application/json"}});function ce(e){return new t(e,".element_template",be,ge.id,fe,he).generateCard()}var ue=new c(ce,".elements__list"),se=new N(te,(function(e){return le.apply(this,arguments)}));function le(){return(le=ie(re().mark((function e(t){return re().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Q.innerHTML="",e.next=3,ae.deleteCard(t).catch((function(e){console.log(e)}));case 3:return e.next=5,ae.getAllCards().then((function(e){ue.renderer(e),se.close()})).catch((function(e){console.log(e)}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fe(e){se.getCurrentCard(e._data._id),se.open()}function he(e,t){console.log(t),ae.toggleLike(e._data._id,t).then((function(t){e.setLikes(t.length)})).catch((function(e){console.log(e)}))}se.setEventListeners();var pe=new E(Z,(function(e){pe.loading(!0),ye.disableButtonSubmit(),ae.setNewAvatar(e.inputAddLinkAvatar).then((function(t){ge.renderAvatar(e.inputAddLinkAvatar),ye.disableButtonSubmit(),pe.close()})).catch((function(e){console.log(e)})).finally((function(){pe.loading(!1)}))}));pe.setEventListeners();var de=new i(U,z),ye=new i(U,X),ve=new i(U,K);ve.enableValidation(),de.enableValidation(),ye.enableValidation();var _e=new _(D);_e.setEventListeners();var me=new E(Y,(function(e){me.loading(!0),de.disableButtonSubmit(),ae.addNewCard(e).then(function(){var e=ie(re().mark((function e(t){return re().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.prepend(ce(t));case 2:return e.next=4,me.close();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)})).finally((function(){me.loading(!1)}))}));function be(e,t){_e.open(e,t)}me.setEventListeners();var ge=new C({profileName:F,profileAbout:M,profileAvatarka:ee}),we=new E(G,(function(e){we.loading(!0),ve.disableButtonSubmit(),ae.setUserInformtion(e).then((function(t){ge.getServerProfileInfo(t),ge.renderProfile(),ge.setUserInfo(e),we.close()})).catch((function(e){console.log(e)})).finally((function(){we.loading(!1)}))}));we.setEventListeners(),Promise.all([ae.getUserInformation(),ae.getAllCards()]).then((function(e){ge.getServerProfileInfo(e[0]),ge.renderProfile(),ge.renderAvatarServer(),ue.renderer(e[1])})).catch((function(e){console.log(e)})),$.addEventListener("click",(function(){de.cleanErrors(),me.open()})),V.addEventListener("click",(function(){ve.cleanErrors();var e=ge.getUserInfo();H.value=e.name,J.value=e.about,we.open()})),W.addEventListener("click",(function(){pe.open()}))})();
//# sourceMappingURL=main.b6381e1f3a100a7191d5.js.map