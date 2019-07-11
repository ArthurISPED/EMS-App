(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["missions-missions-module"],{

/***/ "./src/app/missions/missions.module.ts":
/*!*********************************************!*\
  !*** ./src/app/missions/missions.module.ts ***!
  \*********************************************/
/*! exports provided: MissionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissionsPageModule", function() { return MissionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _missions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./missions.page */ "./src/app/missions/missions.page.ts");







var routes = [
    {
        path: '',
        component: _missions_page__WEBPACK_IMPORTED_MODULE_6__["MissionsPage"]
    }
];
var MissionsPageModule = /** @class */ (function () {
    function MissionsPageModule() {
    }
    MissionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_missions_page__WEBPACK_IMPORTED_MODULE_6__["MissionsPage"]]
        })
    ], MissionsPageModule);
    return MissionsPageModule;
}());



/***/ }),

/***/ "./src/app/missions/missions.page.html":
/*!*********************************************!*\
  !*** ./src/app/missions/missions.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n  \t<ion-buttons slot=\"start\">\n  \t\t<ion-back-button defaultHref=\"/tabs/tab2\"></ion-back-button>\n  \t</ion-buttons>\n    <ion-title>Missions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\t<ion-col margin=\"30%\">\n\n\t\t<div><br><br><br><br><br></div>\n\t\t\n\t\t<ion-button  size=\"large\" expand=\"block\" height=\"100%\">\n\t\t\t<ion-icon name=\"arrow-dropright-circle\" slot=\"start\"></ion-icon>\n\t\t\tOngoing\n\t\t</ion-button>\n\t\n\n\t\t\n\t\t<ion-button size=\"large\" expand=\"block\" height=\"25%\" >\n\t\t\t<ion-icon name=\"cart\" slot=\"start\"></ion-icon>\n\t\t\tAvailable\n\t\t</ion-button>\n\t\n\n\t\t\n\t\t<ion-button size=\"large\" expand=\"block\" height=\"25%\">\n\t\t\t<ion-icon name=\"person\" slot=\"start\"></ion-icon>\n\t\t\tMy tasks\n\t\t</ion-button>\n\t\n\n\t\t\n\t\t<ion-button size=\"large\" expand=\"block\" height=\"25%\" >\n\t\t\t<ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n\t\t\tCompleted\n\t\t</ion-button>\n\t\n\t</ion-col>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/missions/missions.page.scss":
/*!*********************************************!*\
  !*** ./src/app/missions/missions.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21pc3Npb25zL21pc3Npb25zLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/missions/missions.page.ts":
/*!*******************************************!*\
  !*** ./src/app/missions/missions.page.ts ***!
  \*******************************************/
/*! exports provided: MissionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissionsPage", function() { return MissionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MissionsPage = /** @class */ (function () {
    function MissionsPage(navController, router) {
        this.navController = navController;
        this.router = router;
    }
    MissionsPage.prototype.ngOnInit = function () {
    };
    MissionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-missions',
            template: __webpack_require__(/*! ./missions.page.html */ "./src/app/missions/missions.page.html"),
            styles: [__webpack_require__(/*! ./missions.page.scss */ "./src/app/missions/missions.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MissionsPage);
    return MissionsPage;
}());



/***/ })

}]);
//# sourceMappingURL=missions-missions-module.js.map