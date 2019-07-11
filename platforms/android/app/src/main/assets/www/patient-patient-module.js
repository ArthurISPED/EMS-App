(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patient-patient-module"],{

/***/ "./src/app/canvas-draw/canvas-draw.component.html":
/*!********************************************************!*\
  !*** ./src/app/canvas-draw/canvas-draw.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar id=\"top-toolbar\">\n\n</ion-toolbar>\n\n<canvas #myCanvas (touchstart)=\"handleStart($event)\" (touchmove)=\"handleMove($event)\"></canvas>\n\n<ion-toolbar id=\"bottom-toolbar\">\n\n</ion-toolbar>"

/***/ }),

/***/ "./src/app/canvas-draw/canvas-draw.component.scss":
/*!********************************************************!*\
  !*** ./src/app/canvas-draw/canvas-draw.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "canvas-draw {\n  height: 100%;\n  width: 100%;\n  display: block; }\n  canvas-draw #top-toolbar {\n    position: absolute;\n    top: 0; }\n  canvas-draw #bottom-toolbar {\n    position: absolute;\n    bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FudmFzLWRyYXcvQzpcXFVzZXJzXFxhcnRodVxcVGVzdFxcSW9udGVzdFxcdGVzdDAvc3JjXFxhcHBcXGNhbnZhcy1kcmF3XFxjYW52YXMtZHJhdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYyxFQUFBO0VBSmxCO0lBT1Esa0JBQWtCO0lBQ2xCLE1BQU0sRUFBQTtFQVJkO0lBWVEsa0JBQWtCO0lBQ2xCLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NhbnZhcy1kcmF3L2NhbnZhcy1kcmF3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiY2FudmFzLWRyYXcge1xyXG5cclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgI3RvcC10b29sYmFye1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgI2JvdHRvbS10b29sYmFyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgfVxyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/canvas-draw/canvas-draw.component.ts":
/*!******************************************************!*\
  !*** ./src/app/canvas-draw/canvas-draw.component.ts ***!
  \******************************************************/
/*! exports provided: CanvasDrawComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasDrawComponent", function() { return CanvasDrawComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var CanvasDrawComponent = /** @class */ (function () {
    function CanvasDrawComponent(platform, renderer) {
        this.platform = platform;
        this.renderer = renderer;
        this.currentColour = '#1abc9c';
        this.brushSize = 10;
        console.log('Hello CanvasDraw Component');
    }
    CanvasDrawComponent.prototype.ngAfterViewInit = function () {
        this.canvasElement = this.canvas.nativeElement;
        this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform.width() + '');
        this.renderer.setElementAttribute(this.canvasElement, 'height', this.platform.height() + '');
    };
    CanvasDrawComponent.prototype.handleStart = function (ev) {
        this.lastX = ev.touches[0].pageX;
        this.lastY = ev.touches[0].pageY;
    };
    CanvasDrawComponent.prototype.handleMove = function (ev) {
        var ctx = this.canvasElement.getContext('2d');
        var currentX = ev.touches[0].pageX;
        var currentY = ev.touches[0].pageY;
        ctx.beginPath();
        ctx.lineJoin = "round";
        ctx.moveTo(this.lastX, this.lastY);
        ctx.lineTo(currentX, currentY);
        ctx.closePath();
        ctx.strokeStyle = this.currentColour;
        ctx.lineWidth = this.brushSize;
        ctx.stroke();
        this.lastX = currentX;
        this.lastY = currentY;
    };
    CanvasDrawComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myCanvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanvasDrawComponent.prototype, "canvas", void 0);
    CanvasDrawComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-canvas-draw',
            template: __webpack_require__(/*! ./canvas-draw.component.html */ "./src/app/canvas-draw/canvas-draw.component.html"),
            styles: [__webpack_require__(/*! ./canvas-draw.component.scss */ "./src/app/canvas-draw/canvas-draw.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"]])
    ], CanvasDrawComponent);
    return CanvasDrawComponent;
}());



/***/ }),

/***/ "./src/app/patient/patient.module.ts":
/*!*******************************************!*\
  !*** ./src/app/patient/patient.module.ts ***!
  \*******************************************/
/*! exports provided: PatientPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientPageModule", function() { return PatientPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _patient_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patient.page */ "./src/app/patient/patient.page.ts");
/* harmony import */ var _canvas_draw_canvas_draw_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../canvas-draw/canvas-draw.component */ "./src/app/canvas-draw/canvas-draw.component.ts");








var routes = [
    {
        path: '',
        component: _patient_page__WEBPACK_IMPORTED_MODULE_6__["PatientPage"]
    }
];
var PatientPageModule = /** @class */ (function () {
    function PatientPageModule() {
    }
    PatientPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_patient_page__WEBPACK_IMPORTED_MODULE_6__["PatientPage"], _canvas_draw_canvas_draw_component__WEBPACK_IMPORTED_MODULE_7__["CanvasDrawComponent"]]
        })
    ], PatientPageModule);
    return PatientPageModule;
}());



/***/ }),

/***/ "./src/app/patient/patient.page.html":
/*!*******************************************!*\
  !*** ./src/app/patient/patient.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n  \t<ion-buttons slot=\"start\">\n  \t\t<ion-back-button defaultHref=\"/tabs/tab2\"></ion-back-button>\n  \t</ion-buttons>\n    <ion-title>Patient</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n    \n<ion-content >\n\t<ion-fab  vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button *ngIf=\"changes\" (click)=\"validate()\" color=\"success\">\n      <ion-icon name=\"checkmark\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <canvas class=\"myCanvas\" #myCanvas (touchstart)=\"handleStart($event)\" (touchmove)=\"handleMove($event)\"></canvas>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/patient/patient.page.scss":
/*!*******************************************!*\
  !*** ./src/app/patient/patient.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myCanvas {\n  display: block;\n  border: 1px solid #000;\n  position: fixed;\n  height: 90%;\n  width: 100%;\n  display: block;\n  background-image: url(\"/assets/corps.jpg\");\n  background-size: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudC9DOlxcVXNlcnNcXGFydGh1XFxUZXN0XFxJb250ZXN0XFx0ZXN0MC9zcmNcXGFwcFxccGF0aWVudFxccGF0aWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDTSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGVBQWU7RUFFZixXQUFXO0VBQ2IsV0FBVztFQUNYLGNBQWM7RUFDZCwwQ0FBMEM7RUFDMUMsc0JBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYXRpZW50L3BhdGllbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15Q2FudmFzIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuXHJcbiAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9jb3Jwcy5qcGcnKSAgIDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/patient/patient.page.ts":
/*!*****************************************!*\
  !*** ./src/app/patient/patient.page.ts ***!
  \*****************************************/
/*! exports provided: PatientPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientPage", function() { return PatientPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PatientPage = /** @class */ (function () {
    function PatientPage(platform, renderer, navController, router, toastController) {
        this.platform = platform;
        this.renderer = renderer;
        this.navController = navController;
        this.router = router;
        this.toastController = toastController;
        this.currentColour = '#DA011C';
        this.brushSize = 10;
        this.changes = false;
        console.log('Hello CanvasDraw Component');
    }
    PatientPage.prototype.ngAfterViewInit = function () {
        this.canvasElement = this.canvas.nativeElement;
        this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform.width() + '');
        this.renderer.setElementAttribute(this.canvasElement, 'height', this.platform.height() + '');
    };
    PatientPage.prototype.handleStart = function (ev) {
        this.lastX = ev.touches[0].pageX;
        this.lastY = ev.touches[0].pageY;
        this.changes = true;
    };
    PatientPage.prototype.handleMove = function (ev) {
        var ctx = this.canvasElement.getContext('2d');
        var currentX = ev.touches[0].pageX;
        var currentY = ev.touches[0].pageY;
        ctx.beginPath();
        ctx.lineJoin = "round";
        ctx.moveTo(this.lastX, this.lastY);
        ctx.lineTo(currentX, currentY);
        ctx.closePath();
        ctx.strokeStyle = this.currentColour;
        ctx.lineWidth = this.brushSize;
        ctx.stroke();
        this.lastX = currentX;
        this.lastY = currentY;
    };
    PatientPage.prototype.validate = function () {
        this.navController.navigateForward('/patients');
    };
    PatientPage.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myCanvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PatientPage.prototype, "canvas", void 0);
    PatientPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patient',
            template: __webpack_require__(/*! ./patient.page.html */ "./src/app/patient/patient.page.html"),
            styles: [__webpack_require__(/*! ./patient.page.scss */ "./src/app/patient/patient.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], PatientPage);
    return PatientPage;
}());



/***/ })

}]);
//# sourceMappingURL=patient-patient-module.js.map