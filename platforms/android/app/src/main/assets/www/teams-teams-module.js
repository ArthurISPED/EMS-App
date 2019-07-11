(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["teams-teams-module"],{

/***/ "./src/app/teams/teams.module.ts":
/*!***************************************!*\
  !*** ./src/app/teams/teams.module.ts ***!
  \***************************************/
/*! exports provided: TeamsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsPageModule", function() { return TeamsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _teams_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teams.page */ "./src/app/teams/teams.page.ts");







var routes = [
    {
        path: '',
        component: _teams_page__WEBPACK_IMPORTED_MODULE_6__["TeamsPage"]
    }
];
var TeamsPageModule = /** @class */ (function () {
    function TeamsPageModule() {
    }
    TeamsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_teams_page__WEBPACK_IMPORTED_MODULE_6__["TeamsPage"]]
        })
    ], TeamsPageModule);
    return TeamsPageModule;
}());



/***/ }),

/***/ "./src/app/teams/teams.page.html":
/*!***************************************!*\
  !*** ./src/app/teams/teams.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n\n  \t<ion-buttons slot=\"start\">\n  \t\t<ion-back-button defaultHref=\"/tabs/tab2\"></ion-back-button>\n  \t</ion-buttons>\n    <ion-title>Teams</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n  \t<ion-searchbar animated placeholder=\"Search team name, staff, etc.\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-col>\n\n\t\t\n\t\n\t</ion-col>\n\t\n\t<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"openNewform()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/teams/teams.page.scss":
/*!***************************************!*\
  !*** ./src/app/teams/teams.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlYW1zL3RlYW1zLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/teams/teams.page.ts":
/*!*************************************!*\
  !*** ./src/app/teams/teams.page.ts ***!
  \*************************************/
/*! exports provided: TeamsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsPage", function() { return TeamsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var TeamsPage = /** @class */ (function () {
    function TeamsPage(navController, router) {
        this.navController = navController;
        this.router = router;
    }
    TeamsPage.prototype.ngOnInit = function () {
    };
    TeamsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teams',
            template: __webpack_require__(/*! ./teams.page.html */ "./src/app/teams/teams.page.html"),
            styles: [__webpack_require__(/*! ./teams.page.scss */ "./src/app/teams/teams.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TeamsPage);
    return TeamsPage;
}());



/***/ })

}]);
//# sourceMappingURL=teams-teams-module.js.map