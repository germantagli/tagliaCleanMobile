(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~login-login-module~tab1-tab1-module~tab2-tab2-module~tab3-tab3-module~tab4-tab4-module~tabs-~193679f1"],{

/***/ "./src/app/taglia-clean-service.service.ts":
/*!*************************************************!*\
  !*** ./src/app/taglia-clean-service.service.ts ***!
  \*************************************************/
/*! exports provided: TagliaCleanServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagliaCleanServiceService", function() { return TagliaCleanServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
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






var TagliaCleanServiceService = /** @class */ (function () {
    function TagliaCleanServiceService(afDB, loadingController, afAuth, storage, router) {
        this.afDB = afDB;
        this.loadingController = loadingController;
        this.afAuth = afAuth;
        this.storage = storage;
        this.router = router;
        this.utenteActivo = null;
        this.loading = null;
        this.Lista = [];
        this.attivatabs = false;
        this.mese = [
            {
                "nome": "Gennaio",
                "id": 1
            },
            {
                "nome": "Febraio",
                "id": 2
            },
            {
                "nome": "Marzo",
                "id": 3
            },
            {
                "nome": "Aprile",
                "id": 4
            },
            {
                "nome": "Maggio",
                "id": 5
            },
            {
                "nome": "Giugnio",
                "id": 6
            },
            {
                "nome": "Luglio",
                "id": 7
            },
            {
                "nome": "Agosto",
                "id": 8
            },
            {
                "nome": "Settembre",
                "id": 9
            },
            {
                "nome": "Ottobre",
                "id": 10
            },
            {
                "nome": "Nomvembre",
                "id": 11
            },
            {
                "nome": "Dicembre",
                "id": 12
            }
        ];
        this.createLoading();
    }
    TagliaCleanServiceService.prototype.getPostiLavoro = function () {
        return this.afDB.list('/postilavoro/').valueChanges();
        //Esta función devolverá todos los datos que tengamos en el apartado fruits, en nuestra base de datos
    };
    TagliaCleanServiceService.prototype.getOre = function () {
        return this.afDB.list('/ore/').valueChanges();
        //Esta función devolverá todos los datos que tengamos en el apartado fruits, en nuestra base de datos
    };
    TagliaCleanServiceService.prototype.getOreId = function () {
        return this.afDB.list('/ore/').auditTrail();
        //Esta función devolverá todos los datos que tengamos en el apartado fruits, en nuestra base de datos
    };
    TagliaCleanServiceService.prototype.addOre = function (ora) {
        var _this = this;
        this.onLoading();
        return this.afDB.list('/ore/').push(ora)
            .then(function (res) {
            _this.offLoading();
            // El usuario se ha creado correctamente.
        })
            .catch(function (err) { return _this.offLoading(); });
        //Esta función devolverá todos los datos que tengamos en el apartado fruits, en nuestra base de datos
    };
    TagliaCleanServiceService.prototype.delete = function (key) {
        var _this = this;
        this.onLoading();
        console.log(key);
        this.afDB.database.ref('ore/' + key).remove().then(function (res) {
            console.log(res);
            _this.offLoading();
            // El usuario se ha creado correctamente.
        })
            .catch(function (err) { return _this.offLoading(); });
        //Esta función devolverá todos los datos que tengamos en el apartado fruits, en nuestra base de datos
    };
    TagliaCleanServiceService.prototype.createLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Loading...',
                                spinner: 'circles'
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        this.loading.present();
                        this.loading.hidden = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    TagliaCleanServiceService.prototype.onLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.loading.hidden = false;
                return [2 /*return*/];
            });
        });
    };
    TagliaCleanServiceService.prototype.offLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.loading.hidden = true;
                return [2 /*return*/];
            });
        });
    };
    // Registro de usuario
    TagliaCleanServiceService.prototype.registerUser = function (email, password) {
        var _this = this;
        this.onLoading();
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (res) {
            _this.offLoading();
            // El usuario se ha creado correctamente.
        })
            .catch(function (err) { return _this.offLoading(); });
    };
    // Login de usuario
    TagliaCleanServiceService.prototype.loginUser = function (email, password) {
        var _this = this;
        this.onLoading();
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.utenteActivo = user.user;
            _this.storage.set('token', user.user.uid);
            _this.storage.set('email', user.user.email);
            _this.storage.set('userId', user.user.uid);
            _this.attivatabs = true;
            _this.router.navigateByUrl('/tabs/tab1');
            _this.offLoading();
        })
            .catch(function (err) { return _this.offLoading(); });
    };
    // Login de usuario
    TagliaCleanServiceService.prototype.logoutUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.storage.remove('token');
                this.storage.remove('email');
                this.storage.remove('userId');
                this.utenteActivo = null;
                this.router.navigateByUrl('login');
                return [2 /*return*/];
            });
        });
    };
    TagliaCleanServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TagliaCleanServiceService);
    return TagliaCleanServiceService;
}());



/***/ })

}]);
//# sourceMappingURL=default~login-login-module~tab1-tab1-module~tab2-tab2-module~tab3-tab3-module~tab4-tab4-module~tabs-~193679f1.js.map