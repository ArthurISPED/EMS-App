(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.html":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Menu\n    </ion-title>\n    <ion-icon slot=\"end\" name=\"more\" size=\"large\"></ion-icon>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-grid fixed >\n\t\t<ion-row >\n\t\t\t<ion-col >\n\t\t\t\t<ion-button  fill=\"solid\" class=\"tile top\"  size=\"large\"  expand=\"block\" (click)=\"openForms()\" >\n\t\t\t\t\t<ion-icon slot=\"start\" name=\"clipboard\"></ion-icon>\n\t\t\t\t\tForms\n\t\t\t\t</ion-button>\n\t\t\t\t\n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t\t\t\t<ion-button fill=\"clear\" class=\"tile top\"  size=\"large\"  expand=\"block\" (click)=\"openMissions()\">\n\t\t\t\t\t<ion-icon slot=\"start\" name=\"medkit\"></ion-icon>\n\t\t\t\t\tMissions\n\t\t\t\t</ion-button>\n\t\t\t\t\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<ion-button  fill=\"clear\" class=\"tile bottom\"  size=\"large\"  expand=\"block\" (click)=\"openPatients()\">\n\t\t\t\t\t<ion-icon slot=\"start\" name=\"people\"></ion-icon>\n\t\t\t\t\tPatients\n\t\t\t\t</ion-button>\n\t\t\t\t\n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t\t\t\t<ion-button  fill=\"solid\" class=\"tile bottom\"  size=\"large\"  expand=\"block\" (click)=\"openTeams()\">\n\t\t\t\t\t<ion-icon slot=\"start\" name=\"medical\"></ion-icon>\n\t\t\t\t\tTeams\n\t\t\t\t</ion-button>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tile {\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  border-collapse: collapse; }\n\n.top {\n  margin-bottom: 120%; }\n\n.bottom {\n  margin-bottom: 120%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9DOlxcVXNlcnNcXGFydGh1XFxUZXN0XFxJb250ZXN0XFx0ZXN0MC9zcmNcXGFwcFxcdGFiMlxcdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxxQkFBb0I7RUFDcEIsWUFBVztFQUNYLFdBQVU7RUFDVix5QkFBeUIsRUFBQTs7QUFLMUI7RUFDQyxtQkFBbUIsRUFBQTs7QUFHcEI7RUFDQyxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGlsZXtcclxuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxuXHRoZWlnaHQ6MTAwJTtcclxuXHR3aWR0aDoxMDAlO1xyXG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcblxyXG5cclxuLnRvcHtcclxuXHRtYXJnaW4tYm90dG9tOiAxMjAlO1xyXG59XHJcblxyXG4uYm90dG9te1xyXG5cdG1hcmdpbi1ib3R0b206IDEyMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var Tab2Page = /** @class */ (function () {
    function Tab2Page(navController, router) {
        this.navController = navController;
        this.router = router;
    }
    Tab2Page.prototype.ngOnInit = function () {
    };
    Tab2Page.prototype.openForms = function () {
        this.navController.navigateForward("/forms");
    };
    Tab2Page.prototype.openMissions = function () {
        this.navController.navigateForward("/missions");
    };
    Tab2Page.prototype.openPatients = function () {
        this.navController.navigateForward("/patients");
    };
    Tab2Page.prototype.openTeams = function () {
        this.navController.navigateForward("/teams");
    };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map