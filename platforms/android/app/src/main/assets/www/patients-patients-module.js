(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patients-patients-module"],{

/***/ "./src/app/patients/patients.module.ts":
/*!*********************************************!*\
  !*** ./src/app/patients/patients.module.ts ***!
  \*********************************************/
/*! exports provided: PatientsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsPageModule", function() { return PatientsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _patients_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patients.page */ "./src/app/patients/patients.page.ts");







var routes = [
    {
        path: '',
        component: _patients_page__WEBPACK_IMPORTED_MODULE_6__["PatientsPage"]
    }
];
var PatientsPageModule = /** @class */ (function () {
    function PatientsPageModule() {
    }
    PatientsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_patients_page__WEBPACK_IMPORTED_MODULE_6__["PatientsPage"]]
        })
    ], PatientsPageModule);
    return PatientsPageModule;
}());



/***/ }),

/***/ "./src/app/patients/patients.page.html":
/*!*********************************************!*\
  !*** ./src/app/patients/patients.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n\n  \t<ion-buttons slot=\"start\">\n  \t\t<ion-back-button defaultHref=\"/tabs/tab2\"></ion-back-button>\n  \t</ion-buttons>\n    <ion-title>Patients</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n  \t<ion-searchbar animated placeholder=\"Patient name, room, etc.\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t\n\t<ion-card>\n  \t\t<ion-item>\n    <ion-icon name=\"bed\" size=\"large\" slot=\"start\"></ion-icon>\n    <ion-label>Patient</ion-label>\n    <ion-button fill=\"outline\" (click)=\"openPatient()\" slot=\"end\">View</ion-button>\n  </ion-item>\n\n  \t\t<ion-card-content>\n            \t\tLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\n        \tdolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  \t\t</ion-card-content>\n\t</ion-card>\n\n\t<ion-card>\n  \t\t<ion-item>\n    <ion-icon name=\"bed\" size=\"large\" slot=\"start\"></ion-icon>\n    <ion-label>Patient</ion-label>\n    <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\n  </ion-item>\n\n  \t\t<ion-card-content>\n    \t\tLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\n        \tdolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  \t\t</ion-card-content>\n\t</ion-card>\n\n<ion-card>\n  \t\t<ion-item>\n    <ion-icon name=\"bed\" size=\"large\" slot=\"start\"></ion-icon>\n    <ion-label>Patient</ion-label>\n    <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\n  </ion-item>\n\n  \t\t<ion-card-content>\n    \t\tLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\n        \tdolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  \t\t</ion-card-content>\n\t</ion-card>\n\n<ion-card>\n  \t\t<ion-item>\n    <ion-icon name=\"bed\" size=\"large\" slot=\"start\"></ion-icon>\n    <ion-label>Patient</ion-label>\n    <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\n  </ion-item>\n\n  \t\t<ion-card-content>\n    \t\tLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\n        \tdolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  \t\t</ion-card-content>\n\t</ion-card>\n\n<ion-card>\n  \t\t<ion-item>\n    <ion-icon name=\"bed\" size=\"large\" slot=\"start\"></ion-icon>\n    <ion-label>Patient</ion-label>\n    <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\n  </ion-item>\n\n  \t\t<ion-card-content>\n    \t\tLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\n        \tdolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  \t\t</ion-card-content>\n\t</ion-card>\n\n<ion-card>\n  \t\t<ion-item>\n    <ion-icon name=\"bed\" size=\"large\" slot=\"start\"></ion-icon>\n    <ion-label>Patient</ion-label>\n    <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\n  </ion-item>\n\n  \t\t<ion-card-content>\n    \t\tLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\n        \tdolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  \t\t</ion-card-content>\n\t</ion-card>\n\n\t<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"openNewform()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/patients/patients.page.scss":
/*!*********************************************!*\
  !*** ./src/app/patients/patients.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnRzL3BhdGllbnRzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/patients/patients.page.ts":
/*!*******************************************!*\
  !*** ./src/app/patients/patients.page.ts ***!
  \*******************************************/
/*! exports provided: PatientsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsPage", function() { return PatientsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PatientsPage = /** @class */ (function () {
    function PatientsPage(navController, router, toastController) {
        this.navController = navController;
        this.router = router;
        this.toastController = toastController;
    }
    PatientsPage.prototype.ngOnInit = function () {
    };
    PatientsPage.prototype.openPatient = function () {
        this.navController.navigateForward('/patient');
        this.presentToast();
    };
    PatientsPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Start drawing',
                            position: 'bottom',
                            duration: 3000,
                            showCloseButton: true,
                            translucent: true,
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    PatientsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patients',
            template: __webpack_require__(/*! ./patients.page.html */ "./src/app/patients/patients.page.html"),
            styles: [__webpack_require__(/*! ./patients.page.scss */ "./src/app/patients/patients.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], PatientsPage);
    return PatientsPage;
}());



/***/ })

}]);
//# sourceMappingURL=patients-patients-module.js.map