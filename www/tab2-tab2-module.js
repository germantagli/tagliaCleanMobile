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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-icon name=\"person\"></ion-icon>\n              <ion-label>{{utenteLog}}</ion-label>\n            </ion-item>\n          </ion-col>\n          <!-- <ion-col size=\"3\">\n            <ion-item>\n              <ion-label>Total Ore:</ion-label>\n              <ion-label>{{totalOre}}</ion-label>\n              <ion-icon name=\"logo-euro\" size=\"small\"></ion-icon>\n              <ion-label>{{euro}}</ion-label>\n            </ion-item>\n          </ion-col> -->\n        </ion-row>\n      </ion-grid>\n\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<!-- List of Text Items -->\n<ion-item-divider>\n  <ion-label>\n    <h1>{{meseCorrente}}</h1>\n    \n  </ion-label>\n\n\n</ion-item-divider>\n<ion-list>\n  <ion-item *ngFor=\"let ora of ore\">\n    <ion-label>\n\n        <ion-label>\n          <ion-row>\n            <ion-col size=\"10\">\n              <h6 style=\"color:gray\"> {{ora.date | date: 'dd/MM/yyyy'}}</h6>\n            </ion-col>\n            <ion-col size=\"2\">\n              <!-- <ion-icon name=\"close\" style=\"color:red\"></ion-icon> -->\n              <!-- <button  (click)=\"presentAlertConfirm(ora)\"> <ion-icon name=\"trash\"  style=\"color:red\"></ion-icon></button> -->\n             \n            </ion-col>\n          </ion-row>\n        </ion-label>\n\n      <ion-grid>\n       \n \n                \n        <ion-row>\n    \n          <ion-col size=\"10\" >\n            <h6 style=\"color:gray\">{{ora.listaPostiLavoro.indirizzo}}</h6>\n          </ion-col>\n          <ion-col size=\"2\">\n            <h6 style=\"color:gray\"> {{ora.numero_ore}}</h6>\n          </ion-col>\n    \n        </ion-row>\n      </ion-grid>\n    </ion-label>\n  </ion-item>\n</ion-list>\n</ion-content>\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MifQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _taglia_clean_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../taglia-clean-service.service */ "./src/app/taglia-clean-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var Tab2Page = /** @class */ (function () {
    function Tab2Page(alertController, tagliaCleanServices, storage) {
        this.alertController = alertController;
        this.tagliaCleanServices = tagliaCleanServices;
        this.storage = storage;
        this.utente = {
            "idUtente": null,
            "identificadore": null,
        };
        this.ore = [];
        this.oggi = new Date();
        this.meseCorrente = "";
    }
    Tab2Page.prototype.presentAlertConfirm = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: 'Sei sicuro di proseguire con la cancelazione?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        _this.deleteOre(event.key);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab2Page.prototype.idList = function () {
    };
    Tab2Page.prototype.AggiornaOra = function () {
        var _this = this;
        this.tagliaCleanServices.getOre()
            .subscribe(function (fruits) {
            console.log(fruits);
            _this.loadLista(fruits);
            // this.tagliaCleanServices.getOreId().subscribe(ids=>{
            //   this.innerLista(fruits,ids)
            // })
        });
    };
    Tab2Page.prototype.innerLista = function (ore, ids) {
        console.log(ore);
        console.log(ids);
        ids.forEach(function (element, index) {
            ore[index]['key'] = element.key;
        });
        this.loadLista(ore);
    };
    Tab2Page.prototype.loadLista = function (ore) {
        var _this = this;
        this.ore = [];
        this.totalOre = 0;
        var meseCorrente = this.oggi.getMonth() + 1;
        var annoCurrent = this.oggi.getUTCFullYear();
        var result = this.tagliaCleanServices.mese.filter(function (mes) { return mes.id === meseCorrente; });
        this.meseCorrente = result[0].nome + " " + annoCurrent;
        ore.forEach(function (element) {
            if (element.utente.identificadore === _this.utenteLog) {
                var newDate = new Date(element.date);
                var meseElement = newDate.getMonth() + 1;
                if (meseElement === meseCorrente) {
                    _this.ore.push(element);
                }
            }
        });
        this.ore = this.orderByDate(this.ore);
    };
    Tab2Page.prototype.orderByDate = function (ore) {
        var sorted = ore.sort(function (a, b) {
            var aDate = new Date(a.date);
            var bDate = new Date(b.date);
            return aDate.getTime() - bDate.getTime();
        });
        return sorted;
    };
    Tab2Page.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('email').then(function (val) {
            _this.utenteLog = val;
            _this.utente.identificadore = val;
            _this.storage.get('userId').then(function (val1) {
                _this.utente.idUtente = val1;
                _this.AggiornaOra();
            });
        });
    };
    Tab2Page.prototype.deleteOre = function (key) {
        this.tagliaCleanServices.delete(key);
    };
    Tab2Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _taglia_clean_service_service__WEBPACK_IMPORTED_MODULE_2__["TagliaCleanServiceService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map