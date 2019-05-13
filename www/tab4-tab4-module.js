(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"],{

/***/ "./src/app/tab4/tab4.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/*! exports provided: Tab4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function() { return Tab4PageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab4.page */ "./src/app/tab4/tab4.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Tab4PageModule = /** @class */ (function () {
    function Tab4PageModule() {
    }
    Tab4PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _tab4_page__WEBPACK_IMPORTED_MODULE_5__["Tab4Page"] }])
            ],
            declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_5__["Tab4Page"]]
        })
    ], Tab4PageModule);
    return Tab4PageModule;
}());



/***/ }),

/***/ "./src/app/tab4/tab4.page.html":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-title>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-icon name=\"person\"></ion-icon>\n                <ion-label>{{utenteLog}}</ion-label>\n              </ion-item>\n            </ion-col>\n            <!-- <ion-col size=\"3\">\n              <ion-item>\n                <ion-label>Total Ore:</ion-label>\n                <ion-label>{{totalOre}}</ion-label>\n                <ion-icon name=\"logo-euro\" size=\"small\"></ion-icon>\n                <ion-label>{{euro}}</ion-label>\n              </ion-item>\n            </ion-col> -->\n          </ion-row>\n        </ion-grid>\n  \n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n  <!-- List of Text Items -->\n  <ion-item-divider>\n      <ion-label>\n        <h1>{{meseCorrente}}</h1>\n        \n      </ion-label>\n    </ion-item-divider>\n  <ion-list>\n    <ion-item *ngFor=\"let item of listaArrayOre\">\n      <ion-label>\n  \n          <ion-label>\n            <ion-row>\n              <ion-col size=\"10\">\n                <h6 style=\"color:gray\"> {{item[0].utente.identificadore}}</h6>\n              </ion-col>\n              <ion-col size=\"2\">\n              </ion-col>\n            </ion-row>\n          </ion-label>\n  \n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"9\" >\n              <h6 style=\"color:gray\">Total Ore : {{item['total-ore']}}</h6>\n            </ion-col>\n            <ion-col size=\"3\">\n              \n              <h6 style=\"color:gray\"> <ion-icon name=\"logo-euro\" size=\"small\"></ion-icon> <span class=\"total-euro\">{{item['total-euro']}}</span></h6>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  </ion-content>\n  \n  \n  \n  \n  \n  \n  "

/***/ }),

/***/ "./src/app/tab4/tab4.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".total-euro {\n  font-weight: bold;\n  font-size: 18px;\n  color: black;\n  padding: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZXJtYW4vRG9jdW1lbnRzL3RhZ2xpYWNsZWFuL3RhZ2xpYWNsZWFuIDIvc3JjL2FwcC90YWI0L3RhYjQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ1EsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFiNC90YWI0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3RhbC1ldXJve1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab4/tab4.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/*! exports provided: Tab4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4Page", function() { return Tab4Page; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _taglia_clean_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../taglia-clean-service.service */ "./src/app/taglia-clean-service.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Tab4Page = /** @class */ (function () {
    function Tab4Page(tagliaCleanServices, storage) {
        this.tagliaCleanServices = tagliaCleanServices;
        this.storage = storage;
        this.utente = {
            "idUtente": null,
            "identificadore": null,
        };
        this.listaUtente = [];
        this.listaArrayOre = [];
        this.oggi = new Date();
    }
    Tab4Page.prototype.listaOre = function () {
        var _this = this;
        this.tagliaCleanServices.getOre()
            .subscribe(function (fruits) {
            _this.ore = fruits;
            _this.ore.forEach(function (element) {
                if (element && element.utente && element.utente.identificadore) {
                    var result = _this.listaUtente.filter(function (utente) { return utente === element.utente.identificadore; });
                    result.length === 0 ? _this.listaUtente.push(element.utente.identificadore) : '';
                }
            });
            _this.clasificaOre();
        });
    };
    Tab4Page.prototype.clasificaOre = function () {
        var _this = this;
        var totalOre = 0;
        this.listaArrayOre = [];
        this.listaUtente.forEach(function (element) {
            var result = _this.ore.filter(function (element2) {
                return element2.utente.identificadore === element &&
                    new Date(element2.date).getMonth() + 1 === _this.oggi.getMonth() + 1;
            });
            result['total-ore'] = 0;
            result.forEach(function (element) { result['total-ore'] = result['total-ore'] + element.numero_ore; });
            result['total-euro'] = result['total-ore'] * 6.5;
            result.length === 0 ? '' : _this.listaArrayOre.push(result);
        });
    };
    Tab4Page.prototype.ionViewDidEnter = function () {
        var _this = this;
        var meseCorrente = this.oggi.getMonth() + 1;
        var annoCurrent = this.oggi.getUTCFullYear();
        var result = this.tagliaCleanServices.mese.filter(function (mes) { return mes.id === meseCorrente; });
        this.meseCorrente = result[0].nome + " " + annoCurrent;
        this.listaOre();
        this.storage.get('email').then(function (val) {
            _this.utenteLog = val;
            _this.utente.identificadore = val;
        });
    };
    Tab4Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab4',
            template: __webpack_require__(/*! ./tab4.page.html */ "./src/app/tab4/tab4.page.html"),
            styles: [__webpack_require__(/*! ./tab4.page.scss */ "./src/app/tab4/tab4.page.scss")]
        }),
        __metadata("design:paramtypes", [_taglia_clean_service_service__WEBPACK_IMPORTED_MODULE_1__["TagliaCleanServiceService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
    ], Tab4Page);
    return Tab4Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab4-tab4-module.js.map