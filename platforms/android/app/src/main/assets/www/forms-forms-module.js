(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-forms-module"],{

/***/ "./src/app/forms/forms.module.ts":
/*!***************************************!*\
  !*** ./src/app/forms/forms.module.ts ***!
  \***************************************/
/*! exports provided: FormsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsPageModule", function() { return FormsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forms_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms.page */ "./src/app/forms/forms.page.ts");







var routes = [
    {
        path: '',
        component: _forms_page__WEBPACK_IMPORTED_MODULE_6__["FormsPage"]
    }
];
var FormsPageModule = /** @class */ (function () {
    function FormsPageModule() {
    }
    FormsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_forms_page__WEBPACK_IMPORTED_MODULE_6__["FormsPage"]]
        })
    ], FormsPageModule);
    return FormsPageModule;
}());



/***/ }),

/***/ "./src/app/forms/forms.page.html":
/*!***************************************!*\
  !*** ./src/app/forms/forms.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n  \t<ion-buttons slot=\"start\">\n  \t\t<ion-back-button defaultHref=\"/tabs/tab2\"></ion-back-button>\n  \t</ion-buttons>\n    <ion-title>Forms</ion-title> \n\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-searchbar placeholder=\"Form name, staff, etc.\"></ion-searchbar>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\t\n\t<ion-card>\n  \t\t<ion-item>\n    <ion-icon name=\"clipboard\" size=\"large\" slot=\"start\"></ion-icon>\n    <ion-label>Form title</ion-label>\n    \n    <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\n  </ion-item>\n\n  \t\t<ion-card-content>\n            \t\tLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\n        \tdolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  \t\t</ion-card-content>\n\t</ion-card>\n\n\t<ion-card>\n  \t\t<ion-item>\n    <ion-icon name=\"clipboard\" size=\"large\" slot=\"start\"></ion-icon>\n    <ion-label>Form title</ion-label>\n    <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\n  </ion-item>\n\n  \t\t<ion-card-content>\n    \t\tLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\n        \tdolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  \t\t</ion-card-content>\n\t</ion-card>\n\n<ion-card>\n  \t\t<ion-item>\n    <ion-icon name=\"clipboard\" size=\"large\" slot=\"start\"></ion-icon>\n    <ion-label>Form title</ion-label>\n    <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\n  </ion-item>\n\n  \t\t<ion-card-content>\n    \t\tLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\n        \tdolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  \t\t</ion-card-content>\n\t</ion-card>\n\n<ion-card>\n  \t\t<ion-item>\n    <ion-icon name=\"clipboard\" size=\"large\" slot=\"start\"></ion-icon>\n    <ion-label>Form title</ion-label>\n    <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\n  </ion-item>\n\n  \t\t<ion-card-content>\n    \t\tLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\n        \tdolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  \t\t</ion-card-content>\n\t</ion-card>\n\n<ion-card>\n  \t\t<ion-item>\n    <ion-icon name=\"clipboard\" size=\"large\" slot=\"start\"></ion-icon>\n    <ion-label>Form title</ion-label>\n    <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\n  </ion-item>\n\n  \t\t<ion-card-content>\n    \t\tLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\n        \tdolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  \t\t</ion-card-content>\n\t</ion-card>\n\n<ion-card>\n  \t\t<ion-item>\n    <ion-icon name=\"clipboard\" size=\"large\" slot=\"start\"></ion-icon>\n    <ion-label>Form title</ion-label>\n    <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\n  </ion-item>\n\n  \t\t<ion-card-content>\n    \t\tLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\n        \tdolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  \t\t</ion-card-content>\n\t</ion-card>\n\n\t<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"openNewform()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/forms/forms.page.scss":
/*!***************************************!*\
  !*** ./src/app/forms/forms.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL2Zvcm1zLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/forms/forms.page.ts":
/*!*************************************!*\
  !*** ./src/app/forms/forms.page.ts ***!
  \*************************************/
/*! exports provided: FormsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsPage", function() { return FormsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var FormsPage = /** @class */ (function () {
    function FormsPage(navController, router) {
        this.navController = navController;
        this.router = router;
    }
    FormsPage.prototype.ngOnInit = function () {
    };
    FormsPage.prototype.openNewform = function () {
        this.navController.navigateForward("/newform");
    };
    FormsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forms',
            template: __webpack_require__(/*! ./forms.page.html */ "./src/app/forms/forms.page.html"),
            styles: [__webpack_require__(/*! ./forms.page.scss */ "./src/app/forms/forms.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FormsPage);
    return FormsPage;
}());



/***/ })

}]);
//# sourceMappingURL=forms-forms-module.js.map