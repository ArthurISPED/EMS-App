(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newmessage-newmessage-module"],{

/***/ "./src/app/newmessage/newmessage.module.ts":
/*!*************************************************!*\
  !*** ./src/app/newmessage/newmessage.module.ts ***!
  \*************************************************/
/*! exports provided: NewmessagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewmessagePageModule", function() { return NewmessagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _newmessage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newmessage.page */ "./src/app/newmessage/newmessage.page.ts");







var routes = [
    {
        path: '',
        component: _newmessage_page__WEBPACK_IMPORTED_MODULE_6__["NewmessagePage"]
    }
];
var NewmessagePageModule = /** @class */ (function () {
    function NewmessagePageModule() {
    }
    NewmessagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_newmessage_page__WEBPACK_IMPORTED_MODULE_6__["NewmessagePage"]]
        })
    ], NewmessagePageModule);
    return NewmessagePageModule;
}());



/***/ }),

/***/ "./src/app/newmessage/newmessage.page.html":
/*!*************************************************!*\
  !*** ./src/app/newmessage/newmessage.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n  \t<ion-buttons slot=\"start\">\n  \t\t<ion-back-button defaultHref=\"/tabs/tab2\"></ion-back-button>\n  \t</ion-buttons>\n    <ion-title>New Message</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row *ngFor=\"let message of messages\">\n \n      <ion-col size=\"9\" *ngIf=\"message.user !== currentUser\" class=\"message other-message\">\n        <b>{{ message.user }}</b><br>\n        <span>{{ message.msg }}</span>\n        <div class=\"time\" text-right><br>{{ message.createdAt | date:'short' }}</div>\n      </ion-col>\n \n      <ion-col offset=\"3\" size=\"9\" *ngIf=\"message.user === currentUser\" class=\"message my-message\">\n        <b>{{ message.user }}</b><br>\n        <span>{{ message.msg }}</span>\n        <div class=\"time\" text-right><br>{{ message.createdAt | date:'short' }}</div>\n      </ion-col>\n \n    </ion-row>\n  </ion-grid>\n</ion-content>\n \n<ion-footer>\n  <ion-toolbar color=\"light\">\n    <ion-row no-padding align-items-center>\n      <ion-col size=\"10\">\n        <textarea autosize class=\"message-input\" maxRows=\"4\" [(ngModel)]=\"newMsg\"></textarea>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-button expand=\"block\" fill=\"clear\" color=\"primary\" [disabled]=\"newMsg === ''\" class=\"msg-btn\"\n          (click)=\"sendMessage()\">\n          <ion-icon name=\"ios-send\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/newmessage/newmessage.page.scss":
/*!*************************************************!*\
  !*** ./src/app/newmessage/newmessage.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message {\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 4px;\n  white-space: pre-wrap; }\n\n.my-message {\n  background: var(--ion-color-primary);\n  color: #fff; }\n\n.other-message {\n  background: var(--ion-color-light);\n  color: #000000; }\n\n.time {\n  color: #dfdfdf;\n  float: right;\n  font-size: small; }\n\n.message-input {\n  width: 100%;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 10px;\n  background: #fff;\n  resize: none;\n  padding-left: 10px;\n  padding-right: 10px; }\n\n.msg-btn {\n  --padding-start: 0.5em;\n  --padding-end: 0.5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3bWVzc2FnZS9DOlxcVXNlcnNcXGFydGh1XFxUZXN0XFxJb250ZXN0XFx0ZXN0MC9zcmNcXGFwcFxcbmV3bWVzc2FnZVxcbmV3bWVzc2FnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxvQ0FBb0M7RUFDcEMsV0FBVyxFQUFBOztBQUdiO0VBQ0Usa0NBQWtDO0VBQ2xDLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFdBQVc7RUFDWCx5Q0FBeUM7RUFDekMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHNCQUFnQjtFQUNoQixvQkFBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbmV3bWVzc2FnZS9uZXdtZXNzYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxufVxyXG4gXHJcbi5teS1tZXNzYWdlIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuIFxyXG4ub3RoZXItbWVzc2FnZSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG4gXHJcbi50aW1lIHtcclxuICBjb2xvcjogI2RmZGZkZjtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG4gXHJcbi5tZXNzYWdlLWlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcbiBcclxuLm1zZy1idG4ge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMC41ZW07XHJcbiAgLS1wYWRkaW5nLWVuZDogMC41ZW07fSJdfQ== */"

/***/ }),

/***/ "./src/app/newmessage/newmessage.page.ts":
/*!***********************************************!*\
  !*** ./src/app/newmessage/newmessage.page.ts ***!
  \***********************************************/
/*! exports provided: NewmessagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewmessagePage", function() { return NewmessagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var NewmessagePage = /** @class */ (function () {
    function NewmessagePage() {
        this.messages = [
            {
                user: 'simon',
                createdAt: 1554090856000,
                msg: 'Hey whats up mate?'
            },
            {
                user: 'max',
                createdAt: 1554090956000,
                msg: 'Working on the Ionic mission, you?'
            },
            {
                user: 'simon',
                createdAt: 1554091056000,
                msg: 'Doing some new tutorial stuff'
            }
        ];
        this.currentUser = 'simon';
        this.newMsg = '';
    }
    NewmessagePage.prototype.sendMessage = function () {
        var _this = this;
        this.messages.push({
            user: 'simon',
            createdAt: new Date().getTime(),
            msg: this.newMsg
        });
        this.newMsg = '';
        setTimeout(function () {
            _this.content.scrollToBottom(200);
        });
    };
    NewmessagePage.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
    ], NewmessagePage.prototype, "content", void 0);
    NewmessagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newmessage',
            template: __webpack_require__(/*! ./newmessage.page.html */ "./src/app/newmessage/newmessage.page.html"),
            styles: [__webpack_require__(/*! ./newmessage.page.scss */ "./src/app/newmessage/newmessage.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewmessagePage);
    return NewmessagePage;
}());



/***/ })

}]);
//# sourceMappingURL=newmessage-newmessage-module.js.map