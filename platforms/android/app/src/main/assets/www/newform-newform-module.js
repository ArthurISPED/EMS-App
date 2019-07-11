(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newform-newform-module"],{

/***/ "./src/app/newform/newform.module.ts":
/*!*******************************************!*\
  !*** ./src/app/newform/newform.module.ts ***!
  \*******************************************/
/*! exports provided: NewformPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewformPageModule", function() { return NewformPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _newform_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newform.page */ "./src/app/newform/newform.page.ts");







var routes = [
    {
        path: '',
        component: _newform_page__WEBPACK_IMPORTED_MODULE_6__["NewformPage"]
    }
];
var NewformPageModule = /** @class */ (function () {
    function NewformPageModule() {
    }
    NewformPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_newform_page__WEBPACK_IMPORTED_MODULE_6__["NewformPage"]]
        })
    ], NewformPageModule);
    return NewformPageModule;
}());



/***/ }),

/***/ "./src/app/newform/newform.page.html":
/*!*******************************************!*\
  !*** ./src/app/newform/newform.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n  \t<ion-buttons slot=\"start\">\n  \t\t<ion-back-button defaultHref=\"/tabs/tab2\"></ion-back-button>\n  \t</ion-buttons>\n    <ion-title>New form</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n\t<form margin-top=\"5%\">\n\t\t<ion-item border-bottom=\"none\">\n\t\t\t<h4>Description</h4>\n\t\t</ion-item>\n\t\t<ion-item margin-top=\"5%\">\n\t\t\t<ion-label>Title</ion-label>\n\t\t\t<ion-input required slot =\"end\" value=\"Form 1\" clearInput placeholder=\"Enter form title\"></ion-input>\n\t\t</ion-item>\n\t<ion-item margin-top=\"5%\">\n    <ion-label>Gender</ion-label>\n    <ion-select placeholder=\"Select One\">\n      <ion-select-option value=\"f\">Female</ion-select-option>\n      <ion-select-option value=\"m\">Male</ion-select-option>\n      <ion-select-option value=\"o\">Other</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item margin-top=\"5%\">\n  \t<ion-label>Conscious</ion-label>\n  <ion-toggle ng-checked=\"true\" (click)=\"checked()\"></ion-toggle>\n</ion-item>\n<ion-item *ngIf=\"toggleChecked\">\n\t<ion-label *ngIf=\"toggleChecked\">Name</ion-label>\n\t<ion-input *ngIf=\"toggleChecked\" slot=\"end\" value =\"Default 1\" clearInput placeholder=\"Enter name\"></ion-input>\n</ion-item>\n<ion-item *ngIf=\"toggleChecked\">\n\t<ion-label *ngIf=\"toggleChecked\">Age</ion-label>\n\t<ion-input type=\"number\" *ngIf=\"toggleChecked\" slot=\"end\" value =\"20\" clearInput placeholder=\"Enter age\"></ion-input>\n</ion-item>\n<ion-item margin-top=\"10%\">\n<h4>Comments</h4>\n</ion-item>\n<ion-item >\n<ion-textarea placeholder=\"Enter comments here\"> </ion-textarea>\n</ion-item>\n\n\t<ion-button margin=\"auto\"  center expand=\"block\"  color=\"dark\" size=\"large\" (click)=\"photo()\" >\n\t\t<ion-icon slot =\"icon-only\" name=\"camera\" size=\"large\"></ion-icon>\n\t</ion-button>\n\t<ion-button  id =\"buttontext\"  expand=\"full\" (click)=\"confirm()\" color=\"primary\">\n\t\t\n\t<p>Submit</p>\n\t</ion-button>\n\n</form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/newform/newform.page.scss":
/*!*******************************************!*\
  !*** ./src/app/newform/newform.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld2Zvcm0vbmV3Zm9ybS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/newform/newform.page.ts":
/*!*****************************************!*\
  !*** ./src/app/newform/newform.page.ts ***!
  \*****************************************/
/*! exports provided: NewformPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewformPage", function() { return NewformPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NewformPage = /** @class */ (function () {
    function NewformPage(navController, router) {
        this.navController = navController;
        this.router = router;
        this.confirm = function () {
            var buttontext = document.getElementById('buttontext');
            buttontext.innerHTML = '<ion-icon name="checkmark-circle"></ion-icon><p>Submitted</p>';
            var color = buttontext.getAttribute('color');
            buttontext.setAttribute('color', 'success');
            this.navController.navigateForward('/forms');
        };
        this.toggleChecked = false;
    }
    NewformPage.prototype.checked = function () {
        this.toggleChecked = !this.toggleChecked;
    };
    NewformPage.prototype.photo = function () {
        this.navController.navigateForward('/photo');
    };
    NewformPage.prototype.ngOnInit = function () {
    };
    NewformPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newform',
            template: __webpack_require__(/*! ./newform.page.html */ "./src/app/newform/newform.page.html"),
            styles: [__webpack_require__(/*! ./newform.page.scss */ "./src/app/newform/newform.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NewformPage);
    return NewformPage;
}());



/***/ })

}]);
//# sourceMappingURL=newform-newform-module.js.map