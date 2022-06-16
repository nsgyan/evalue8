"use strict";
(self["webpackChunkDiyaTechnology"] = self["webpackChunkDiyaTechnology"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _print_deal_print_deal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print-deal/print-deal.component */ 1375);
/* harmony import */ var _print_table_print_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print-table/print-table.component */ 2646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    { path: 'view-quote/:id', component: _print_table_print_table_component__WEBPACK_IMPORTED_MODULE_1__.PrintTableComponent },
    { path: 'view-deal/:id', component: _print_deal_print_deal_component__WEBPACK_IMPORTED_MODULE_0__.PrintDealComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class AppComponent {
    constructor() {
        this.title = 'DiyaTechnology';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _print_table_print_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./print-table/print-table.component */ 2646);
/* harmony import */ var _print_deal_print_deal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./print-deal/print-deal.component */ 1375);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _print_table_print_table_component__WEBPACK_IMPORTED_MODULE_2__.PrintTableComponent,
        _print_deal_print_deal_component__WEBPACK_IMPORTED_MODULE_3__.PrintDealComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule] }); })();


/***/ }),

/***/ 7266:
/*!***************************!*\
  !*** ./src/app/global.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "api_key": () => (/* binding */ api_key),
/* harmony export */   "url": () => (/* binding */ url)
/* harmony export */ });
const url = 'https://app.diyatechnologies.in/dt';
// export const url: string = 'https://epr.troology.com/dt';
//  export const api_key: string = '78TGY42-5HH437H-GRK0BER-4710SHF';
const api_key = '8GWF6J1-WVG40Q4-HBWGNVY-9VXTXQ8';


/***/ }),

/***/ 1375:
/*!****************************************************!*\
  !*** ./src/app/print-deal/print-deal.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintDealComponent": () => (/* binding */ PrintDealComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _service_deal_form_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/deal-form.service */ 8102);
/* harmony import */ var _service_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/account.service */ 806);
/* harmony import */ var _service_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/contact.service */ 1440);
/* harmony import */ var _service_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/company.service */ 8850);
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/product.service */ 5366);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);








function PrintDealComponent_tr_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 16)(1, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 13)(4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const prod_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](prod_r1.productname);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Part No: ", prod_r1.PartNo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("HSN Code: ", prod_r1.HSNCode, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](prod_r1.GST.split(";").join("\n"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](prod_r1.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](prod_r1.UOM);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](18, 11, prod_r1.UnitPrice, "1.2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", prod_r1.discount, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.decimalFormat(prod_r1.type != "Group" ? prod_r1.UnitPrice * (1 - prod_r1.discount / 100) : prod_r1.amount), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.decimalFormat(prod_r1.amount));
} }
class PrintDealComponent {
    constructor(_Activatedroute, deal, account, contact, company, salesperson) {
        this._Activatedroute = _Activatedroute;
        this.deal = deal;
        this.account = account;
        this.contact = contact;
        this.company = company;
        this.salesperson = salesperson;
        this.totalAmount = 0;
        this.quantity = 0;
        this.totalAmountTax = 0;
        this.totalGST = 0;
    }
    ngOnInit() {
        this.quote_id = this._Activatedroute.snapshot.paramMap.get("id");
        console.log(this._Activatedroute.snapshot.paramMap.get("id"));
        let qtdate = new Date();
        this.quoteDate = qtdate.toLocaleString('en-IN', { day: 'numeric', month: "short", year: 'numeric' });
        console.log("fjbsjkvbksb");
        this.deal.getDealData(this._Activatedroute.snapshot.paramMap.get("id")).subscribe((data) => {
            var _a, _b;
            console.log(data);
            this.quoteData = data[0];
            console.log(this.quoteData, ';-----');
            let date = this.addDays(data[0].created_date_time, Number(data[0].deal_validity.split(" ")[0]));
            this.validDate = date === null || date === void 0 ? void 0 : date.toLocaleString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
            this.quoteData.product_services.map((item) => {
                this.totalAmount += Number(item.amount);
                this.totalGST += item.amount * (parseFloat(item.GST) / 100);
                this.totalAmountTax += (item.UnitPrice) * 100 / (100 + parseFloat(item.GST));
                // this.totalAmountTax+=((item.UnitPrice*100)/(100+parseFloat(item.GST)));
                this.quantity += parseInt(item.quantity);
                this.totalAmountTax += parseFloat(item.UnitPrice);
            });
            this.account.getAccountData(data[0].account_id).subscribe((data) => {
                console.log(data, "account");
                this.companyData = data[0];
            });
            this.contact.getContactData(data[0].contact_id).subscribe((data) => {
                console.log(data);
                this.contactData = data[0];
            });
            console.log(data[0].deal_location);
            this.company.getBranch(data[0].deal_location[0]._id).subscribe((data) => {
                console.log(data);
                this.branchData = data === null || data === void 0 ? void 0 : data.result[0];
            });
            this.salesperson.getSalesPerson((_b = (_a = data[0]) === null || _a === void 0 ? void 0 : _a.sales_person[0]) === null || _b === void 0 ? void 0 : _b._id).subscribe((data) => {
                console.log(data, 'dfd');
                this.salesPersonData = data.result[0];
            });
        });
    }
    decimalFormat(num) {
        return num.toFixed(2);
    }
    addDays(date, days) {
        if (days) {
            var result = new Date(date);
            result.setDate(result.getDate() + days);
            return result;
        }
        return null;
    }
    setGst(amount, gst) {
        let cal = 0;
        if (gst == "") {
            cal = 0;
        }
        else {
            let GstValue = gst.split('%');
            cal = (parseFloat(GstValue[0]) / 100);
        }
        return (cal * parseFloat(amount));
    }
    getTaxableAmount() {
        let data = this.quoteData.product_services;
        this.taxableAmount = 0;
        data.map((item) => {
            console.log(item.GST);
            let cal = 0;
            if (item.GST == "") {
                cal = 0;
            }
            else {
                let GstValue = item.GST.split('%');
                cal = (parseFloat(GstValue[0]) / 100);
            }
            if (item.GST == "") {
                cal = 0;
            }
            else {
                let GstValue = item.GST.split('%');
                cal = (parseFloat(GstValue[0]) / 100);
            }
            this.taxableAmount += (cal * parseFloat(item.amount));
        });
        console.log(this.taxableAmount);
        return this.taxableAmount;
    }
}
PrintDealComponent.ɵfac = function PrintDealComponent_Factory(t) { return new (t || PrintDealComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_deal_form_service__WEBPACK_IMPORTED_MODULE_0__.DealFormService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_contact_service__WEBPACK_IMPORTED_MODULE_2__.ContactService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_company_service__WEBPACK_IMPORTED_MODULE_3__.CompanyService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_product_service__WEBPACK_IMPORTED_MODULE_4__.ProductService)); };
PrintDealComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PrintDealComponent, selectors: [["app-print-deal"]], decls: 226, vars: 53, consts: [["onclick", "window.print()", 1, "printBtn"], [1, "main-content"], [1, "header-space"], [1, "quoteHeader"], [1, "quoteHeading", "bb", "bt"], [1, "borderRight"], [1, "quoteCon"], [1, "tableLeftRight", "bb"], [1, "left"], [1, "tableData", "br"], [1, "right"], [1, "tableData"], [1, "left", "br"], [1, "br"], [1, ""], [1, "table", "caption-top"], [1, "bb"], ["scope", "col", 1, "br", "srNo"], ["scope", "col", 1, "br"], ["scope", "col", 1, "amount"], ["class", "bb", 4, "ngFor", "ngForOf"], ["scope", "row", 1, "br"], [1, "fBold"], [1, "totalAmtTx", "text-right"], ["colspan", "3", 1, "br", "text-center", 2, "font-size", "1rem", "font-weight", "600", "text-transform", "uppercase"], [1, "padding"], [1, "br", 2, "width", "5%"], [1, "br", "tabletext", 2, "width", "20%"], [1, "br", "tabletext", 2, "width", "75%"], [1, "footer-space"], [1, "TopHeader"], [1, "header"], [1, "ph1"], ["src", "assets/img/DIYA.PNG"], [1, "headerLeft"], [1, "ph2"], [1, "headerRight"], [1, "headerRightBottom"], [1, "footer"], [1, "footerText"], [1, "footerImg"], ["src", "assets/img/IR.PNG"], ["src", "assets/img/URYU.PNG"], ["src", "assets/img/TOH.PNG"]], template: function PrintDealComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Click Here To Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1)(3, "table")(4, "thead")(5, "tr")(6, "td")(7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 3)(10, "div", 4)(11, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "QUOTATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 6)(14, "div", 7)(15, "div", 8)(16, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Customer Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 10)(19, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 7)(22, "div", 12)(23, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Customer Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 10)(26, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 7)(29, "div", 8)(30, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Buyer Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 13)(33, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 14)(36, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Contact No:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 14)(39, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 7)(42, "div", 8)(43, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Application / Project:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 10)(46, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "table", 15)(49, "thead", 16)(50, "tr")(51, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Sr No");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Product Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "GST %");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Qty");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "UOM");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Unit Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Disc");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Net Unit Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](70, PrintDealComponent_tr_70_Template, 25, 14, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](72, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "td", 13)(74, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](76, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "td", 13)(78, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](80, "td", 13)(81, "td", 13)(82, "td", 13)(83, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "td")(85, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](87, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div", 23)(89, "ul")(90, "li")(91, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](93, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "li")(95, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](97, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "li")(99, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](101, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "table", 15)(103, "thead", 16)(104, "tr")(105, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "tbody", 25)(108, "tr", 16)(109, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](110, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112, "INCO Terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](114);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "tr", 16)(116, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](117, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](119, "Payment Terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](122, "tr", 16)(123, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](124, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](126, "P&F");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](127, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](128);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "tr", 16)(130, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](131, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](132, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](133, "Freight");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](134, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](135);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](136, "tr", 16)(137, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](138, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](139, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](140, "Other Charges");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](141, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](142);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](143, "tr", 16)(144, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](145, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](146, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](147, "Delivery Period");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](148, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](149);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](150, "tr", 16)(151, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](152, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](153, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](154, "Warranty");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](155, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](156);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](157, "tr", 16)(158, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](159, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](160, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](161, "Quote Validity (days)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](162, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](163);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](164, "tr", 16)(165, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](166, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](167, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](168, "Not Valid After");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](169, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](170);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](171, "tr", 16)(172, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](173, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](174, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](175, "Other Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](176, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](177);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](178, "tfoot")(179, "tr")(180, "td")(181, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](182, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](183, "header", 30)(184, "div", 31)(185, "div", 32)(186, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](187, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](188, "div", 34)(189, "ul")(190, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](192, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](193);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](194, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](195, "E-Mail: info@diyatechnologies.co.in");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](196, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](197);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](198, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](199, "Website: www.diyatechnologies.in");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](200, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](201, "div", 35)(202, "div", 36)(203, "ul")(204, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](205);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](206, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](207);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](208, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](209, "div", 37)(210, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](211, "Contact person for this Offer:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](212, "ul", 14)(213, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](214);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](215, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](216);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](217, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](218);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](219, "footer", 38)(220, "h2", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](221, "Authorized Dealers:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](222, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](223, "img", 41)(224, "img", 42)(225, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.companyData == null ? null : ctx.companyData.company_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate5"]("", ctx.companyData == null ? null : ctx.companyData.address1, " ", ctx.companyData == null ? null : ctx.companyData.address2, " ", ctx.companyData == null ? null : ctx.companyData.address3, " ", ctx.companyData == null ? null : ctx.companyData.country, " ", ctx.companyData == null ? null : ctx.companyData.zip_code, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.contactData == null ? null : ctx.contactData.contact_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.contactData == null ? null : ctx.contactData.mobile_no);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.quoteData == null ? null : ctx.quoteData.quote_title);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.quoteData == null ? null : ctx.quoteData.product_services);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](87, 38, ctx.totalAmount, "1.2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Total Taxable Amount: ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](93, 41, ctx.totalAmount, "1.2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("GST Taxes: ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](97, 44, ctx.getTaxableAmount(), "1.2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Total Amount: ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](101, 47, ctx.totalAmount + ctx.getTaxableAmount(), "1.2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.quoteData == null ? null : ctx.quoteData.inco_terms);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.quoteData == null ? null : ctx.quoteData.p_t);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.quoteData == null ? null : ctx.quoteData.p_f);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.quoteData == null ? null : ctx.quoteData.freight);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.quoteData == null ? null : ctx.quoteData.other_charges);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.quoteData == null ? null : ctx.quoteData.delivery);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.quoteData == null ? null : ctx.quoteData.warranty);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.quoteData == null ? null : ctx.quoteData.deal_validity);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.validDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.quoteData == null ? null : ctx.quoteData.remark);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Bill From: ", ctx.branchData == null ? null : ctx.branchData.branch_name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate6"]("Address: ", ctx.branchData == null ? null : ctx.branchData.address1, " ", ctx.branchData == null ? null : ctx.branchData.address2, " ", ctx.branchData == null ? null : ctx.branchData.address3, " ", ctx.branchData == null ? null : ctx.branchData.state, " ", ctx.branchData == null ? null : ctx.branchData.country, " ", ctx.branchData == null ? null : ctx.branchData.zipcode, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("GSTN: ", ctx.branchData == null ? null : ctx.branchData.branch_gst, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Reference No: ", ctx.quoteData == null ? null : ctx.quoteData.deal_id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](208, 50, ctx.quoteData == null ? null : ctx.quoteData.created_date_time, "dd-MM-yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Name: ", ctx.salesPersonData == null ? null : ctx.salesPersonData.username, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("E-Mail: ", ctx.salesPersonData == null ? null : ctx.salesPersonData.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Mobile No: ", ctx.salesPersonData == null ? null : ctx.salesPersonData.phone, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: 0 auto;\n  border: 1px solid #434343;\n}\n\n\n\n\n\n.header[_ngcontent-%COMP%]   .ph1[_ngcontent-%COMP%]   .headerLeft[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .ph2[_ngcontent-%COMP%]   .headerRight[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .headerRightBottom[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\n.header[_ngcontent-%COMP%]   .ph1[_ngcontent-%COMP%]   .headerLeft[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #434343;\n}\n\n.headerRight[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #434343;\n  margin: 35px 0 10px 0;\n  padding: 3px;\n  border-top: 1px solid #434343;\n  border-right: 0;\n  border-bottom: 1px solid #434343;\n  border-left: 1px solid #434343;\n}\n\n.headerRight[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #434343;\n}\n\n.headerRight[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.headerRightBottom[_ngcontent-%COMP%] {\n  border-top: none;\n  border-right: none;\n  border-bottom: none;\n  border-left: none;\n}\n\n.headerRightBottom[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin: 0;\n  background-color: #bfbfbf;\n  font-weight: 600;\n  padding: 8px 0px 7px 5px;\n}\n\n.headerRightBottom[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 6px 6px 9px 6px;\n}\n\n.headerRightBottom[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #434343;\n}\n\n.footer[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.footer[_ngcontent-%COMP%]   .footerImg[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.footer[_ngcontent-%COMP%]   .footerImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.header[_ngcontent-%COMP%], .header-space[_ngcontent-%COMP%] {\n  height: 207px;\n}\n\n.footer[_ngcontent-%COMP%], .footer-space[_ngcontent-%COMP%] {\n  height: 120px;\n}\n\n.header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  background: rgb(239 236 236);\n  height: 13rem;\n  display: flex;\n  border-top: 1px solid #000;\n  width: 49.8%;\n  \n}\n\n.ph1[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.quoteHeader[_ngcontent-%COMP%]   .quoteHeading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  background: rgb(191 191 191);\n  text-align: center;\n  font-size: 1rem;\n  padding: 10px;\n  font-weight: 600;\n  width: 100%;\n}\n\n.tableData[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #5a5959;\n  padding: 5px 5px 5px 5px;\n}\n\n.tableLeftRight[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.tableLeftRight[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.tableLeftRight[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n.quoteHeader[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #bfbfbf;\n}\n\n.quoteHeader[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 12px;\n  vertical-align: top;\n}\n\n.quoteHeader[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.fBold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.No[_ngcontent-%COMP%] {\n  width: 4%;\n}\n\n.No[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 5px;\n  font-size: 12px;\n  color: #5a5959;\n}\n\n.bt[_ngcontent-%COMP%] {\n  border-top: 1px solid #000;\n}\n\n.br[_ngcontent-%COMP%] {\n  border-right: 1px solid #000;\n}\n\n.bb[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #000;\n}\n\n.bl[_ngcontent-%COMP%] {\n  border-left: 1px solid #000;\n}\n\n.totalAmtTx[_ngcontent-%COMP%] {\n  text-align: right;\n  line-height: 20px;\n  justify-content: end;\n  padding-right: 8px;\n}\n\n.totalAmtTx[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.totalAmtTx[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  font-size: 12px;\n  color: #434343;\n  line-height: 18px;\n}\n\n.footerText[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.tabletext[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #5a5959;\n  font-weight: 600;\n}\n\n.printBtn[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  padding: 10px;\n  border-radius: 5px;\n  left: 169px;\n  border: none;\n  background-color: #ed565b;\n  color: #fff;\n}\n\n.padding[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding: 2px 0.5rem 2px 0.5rem;\n}\n\n@media print {\n  .main-content[_ngcontent-%COMP%] {\n    width: 95%;\n    margin: 10px auto;\n  }\n\n  .header[_ngcontent-%COMP%] {\n    margin-top: 13px;\n    width: 94%;\n  }\n\n  .footer[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    background: rgb(168, 168, 168);\n  }\n\n  .headerRightBottom[_ngcontent-%COMP%] {\n    border-top: 1px solid #434343 !important;\n  }\n\n  .header[_ngcontent-%COMP%] {\n    border-top: none;\n  }\n\n  .quoteHeader[_ngcontent-%COMP%]   .quoteHeading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    width: 47rem;\n  }\n\n  .quoteHeader[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    border-top: 1px solid #000;\n  }\n\n  .srNo[_ngcontent-%COMP%] {\n    border-left: 1px solid #000;\n  }\n\n  .amount[_ngcontent-%COMP%] {\n    border-right: 1px solid #000;\n  }\n  .mobileBorder[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #000;\n  }\n    .borderRight[_ngcontent-%COMP%] {\n      border-right: 1px solid #000;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50LWRlYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTs7R0FFRzs7QUFDSDs7O0dBR0c7O0FBQ0g7OztFQUdFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBOztFQUVFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFNBQVM7SUFDVCw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSx3Q0FBd0M7RUFDMUM7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQjtJQUNFO01BQ0UsNEJBQTRCO0lBQzlCOztBQUVKIiwiZmlsZSI6InByaW50LWRlYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgIzQzNDM0Mztcbn1cblxuLyogLmNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xufSAqL1xuLyogLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcblxufSAqL1xuLmhlYWRlciAucGgxIC5oZWFkZXJMZWZ0IHVsLFxuLmhlYWRlciAucGgyIC5oZWFkZXJSaWdodCB1bCxcbi5oZWFkZXJSaWdodEJvdHRvbSB1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLmhlYWRlciAucGgxIC5oZWFkZXJMZWZ0IHVsIGxpIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzQzNDM0Mztcbn1cblxuLmhlYWRlclJpZ2h0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzQzNDM0MztcbiAgbWFyZ2luOiAzNXB4IDAgMTBweCAwO1xuICBwYWRkaW5nOiAzcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDM0MzQzO1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDM0MzQzO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM0MzQzNDM7XG59XG5cbi5oZWFkZXJSaWdodCB1bCBsaSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDM0MzQzO1xufVxuXG4uaGVhZGVyUmlnaHQgdWwgbGk6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5oZWFkZXJSaWdodEJvdHRvbSB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG5cbi5oZWFkZXJSaWdodEJvdHRvbSBoMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZiZmJmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiA4cHggMHB4IDdweCA1cHg7XG59XG5cbi5oZWFkZXJSaWdodEJvdHRvbSB1bCB7XG4gIHBhZGRpbmc6IDZweCA2cHggOXB4IDZweDtcbn1cblxuLmhlYWRlclJpZ2h0Qm90dG9tIHVsIGxpIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzQzNDM0Mztcbn1cblxuLmZvb3RlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5mb290ZXIgLmZvb3RlckltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZvb3RlciAuZm9vdGVySW1nIGltZyB7XG4gIHdpZHRoOiAzMCU7XG59XG5cbi5oZWFkZXIsXG4uaGVhZGVyLXNwYWNlIHtcbiAgaGVpZ2h0OiAyMDdweDtcbn1cblxuLmZvb3Rlcixcbi5mb290ZXItc3BhY2Uge1xuICBoZWlnaHQ6IDEyMHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6IHJnYigyMzkgMjM2IDIzNik7XG4gIGhlaWdodDogMTNyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwO1xuICB3aWR0aDogNDkuOCU7XG4gIC8qIG1hcmdpbi10b3A6IDEzcHg7ICovXG59XG5cbi5waDEge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucXVvdGVIZWFkZXIgLnF1b3RlSGVhZGluZyBoMyB7XG4gIGJhY2tncm91bmQ6IHJnYigxOTEgMTkxIDE5MSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRhYmxlRGF0YSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM1YTU5NTk7XG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDVweDtcbn1cblxuLnRhYmxlTGVmdFJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnRhYmxlTGVmdFJpZ2h0IC5sZWZ0IHtcbiAgd2lkdGg6IDI1JTtcbn1cblxuLnRhYmxlTGVmdFJpZ2h0IC5yaWdodCB7XG4gIHdpZHRoOiA3NSU7XG59XG5cbi5xdW90ZUhlYWRlciAudGFibGUgdGhlYWQge1xuICBiYWNrZ3JvdW5kOiAjYmZiZmJmO1xufVxuXG4ucXVvdGVIZWFkZXIgLnRhYmxlIHRoZWFkIHRyIHRoIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ucXVvdGVIZWFkZXIgLnRhYmxlIHRib2R5IHRyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZkJvbGQge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uTm8ge1xuICB3aWR0aDogNCU7XG59XG5cbi5ObyBoNiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNWE1OTU5O1xufVxuXG4uYnQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDtcbn1cblxuLmJyIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwMDtcbn1cblxuLmJiIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG59XG5cbi5ibCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwMDtcbn1cblxuLnRvdGFsQW10VHgge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG5cbi50b3RhbEFtdFR4IHVsIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4udG90YWxBbXRUeCB1bCBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzQzNDM0MztcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5mb290ZXJUZXh0IHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4udGFibGV0ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzVhNTk1OTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnByaW50QnRuIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbGVmdDogMTY5cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkNTY1YjtcbiAgY29sb3I6ICNmZmY7XG59XG4ucGFkZGluZyB0aCx0ZCB7XG4gIHBhZGRpbmc6IDJweCAwLjVyZW0gMnB4IDAuNXJlbTtcbn1cblxuQG1lZGlhIHByaW50IHtcbiAgLm1haW4tY29udGVudCB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgfVxuXG4gIC5oZWFkZXIge1xuICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgd2lkdGg6IDk0JTtcbiAgfVxuXG4gIC5mb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogcmdiKDE2OCwgMTY4LCAxNjgpO1xuICB9XG5cbiAgLmhlYWRlclJpZ2h0Qm90dG9tIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzQzNDM0MyAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmhlYWRlciB7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgfVxuXG4gIC5xdW90ZUhlYWRlciAucXVvdGVIZWFkaW5nIGgzIHtcbiAgICB3aWR0aDogNDdyZW07XG4gIH1cblxuICAucXVvdGVIZWFkZXIgLnRhYmxlIHRoZWFkIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDtcbiAgfVxuXG4gIC5zck5vIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMDA7XG4gIH1cblxuICAuYW1vdW50IHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwO1xuICB9XG4gIC5tb2JpbGVCb3JkZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICB9XG4gICAgLmJvcmRlclJpZ2h0IHtcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDA7XG4gICAgfVxuXG59Il19 */"] });


/***/ }),

/***/ 2646:
/*!******************************************************!*\
  !*** ./src/app/print-table/print-table.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintTableComponent": () => (/* binding */ PrintTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _service_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/account.service */ 806);
/* harmony import */ var _service_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/contact.service */ 1440);
/* harmony import */ var _service_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/company.service */ 8850);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/product.service */ 5366);
/* harmony import */ var _service_quote_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/quote-form.service */ 1286);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);









function PrintTableComponent_tr_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 16)(1, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 13)(4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](26, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const prod_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](prod_r1.productname);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Part No: ", prod_r1.PartNo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("HSN Code: ", prod_r1.HSNCode, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](prod_r1.GST.split("%").join("\n"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](prod_r1.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](prod_r1.UOM);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](18, 11, ctx_r0.decimalFormat(prod_r1.UnitPrice), "1.2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", prod_r1.discount, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](23, 14, ctx_r0.decimalFormat(prod_r1.type != "Group" ? prod_r1.UnitPrice * (1 - prod_r1.discount / 100) : prod_r1.amount), "1.2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](26, 17, ctx_r0.decimalFormat(prod_r1.amount), "1.2"));
} }
class PrintTableComponent {
    constructor(_Activatedroute, account, contact, company, titleService, salesperson, quote) {
        this._Activatedroute = _Activatedroute;
        this.account = account;
        this.contact = contact;
        this.company = company;
        this.titleService = titleService;
        this.salesperson = salesperson;
        this.quote = quote;
        this.totalAmount = 0;
        this.quantity = 0;
        this.totalAmountTax = 0;
        this.totalAmount1 = 0;
        this.totalGST = 0;
    }
    setTitle() {
        this.titleService.setTitle('omshakti');
    }
    ngOnInit() {
        this.quote_id = this._Activatedroute.snapshot.paramMap.get('id');
        // console.log(this._Activatedroute.snapshot.paramMap.get("id"))
        let qtdate = new Date();
        this.quoteDate = qtdate.toLocaleString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        });
        this.quote
            .getQuoteById(this._Activatedroute.snapshot.paramMap.get('id'))
            .subscribe((data) => {
            var _a, _b;
            // console.log(data.result[0])
            this.quoteData = data.result[0];
            let date = this.addDays(data.result[0].created_date_time, Number(data.result[0].deal_validity.split(' ')[0]));
            this.validDate = date === null || date === void 0 ? void 0 : date.toLocaleString('en-IN', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            });
            this.quoteData.product_services.map((item) => {
                this.totalAmount += Number(item.amount);
                this.totalAmountTax +=
                    (item.UnitPrice * 100) /
                        (100 + parseFloat(item.GST == '' ? 0 : item.GST));
                // this.totalAmountTax+=((item.UnitPrice*100)/(100+parseFloat(item.GST)));
                this.quantity += parseInt(item.quantity);
                // console.log((item.UnitPrice)*100/118);
                if (item.type == 'Group') {
                    this.getTaxableAmt(item.products);
                }
                else {
                    this.totalGST +=
                        item.amount -
                            (item.amount * 100) /
                                (100 + parseFloat(item.GST == '' ? 0 : item.GST));
                    //  console.log(this.totalGST);
                }
            });
            this.account
                .getAccountData(data.result[0].account_id)
                .subscribe((data) => {
                console.log(data);
                this.companyData = data[0];
            });
            this.contact
                .getContactData(data.result[0].contact_id)
                .subscribe((data) => {
                // console.log(data)
                this.contactData = data[0];
            });
            this.salesperson
                .getSalesPerson((_b = (_a = data.result[0]) === null || _a === void 0 ? void 0 : _a.sales_person[0]) === null || _b === void 0 ? void 0 : _b._id)
                .subscribe((data) => {
                // console.log(data)
                this.salesPersonData = data.result[0];
            });
            this.company
                .getBranch(data.result[0].quote_location[0]._id)
                .subscribe((data) => {
                console.log(data, 'branchDatabranchDatabranchData');
                this.branchData = data === null || data === void 0 ? void 0 : data.result[0];
            });
        });
        // this.getTaxableAmount()
    }
    getTaxableAmt(arr) {
        arr.map((item) => {
            if (item.type != 'Group') {
                console.log(item.GST);
                this.totalGST +=
                    item.amount -
                        (item.amount * 100) /
                            (100 + parseFloat(item.GST == '' ? 0 : item.GST));
            }
            else {
                this.getTaxableAmt(item.products);
            }
        });
        console.log(this.totalGST, '================>>>>>>>>>>>>>');
    }
    decimalFormat(num) {
        // return num
        num = parseFloat(num);
        return num.toFixed(2);
    }
    addDays(date, days) {
        if (days) {
            var result = new Date(date);
            result.setDate(result.getDate() + days);
            return result;
        }
        return null;
    }
    setGst(amount, gst) {
        let cal = 0;
        if (gst == '') {
            cal = 0;
        }
        else {
            let GstValue = gst.split('%');
            cal = parseFloat(GstValue[0]) / 100;
        }
        return cal * parseFloat(amount);
    }
    getTaxableAmount() {
        let data = this.quoteData.product_services;
        this.taxableAmount = 0;
        data.map((item) => {
            // console.log(item.GST)
            let cal = 0;
            if (item.GST == '') {
                cal = 0;
            }
            else {
                let GstValue = item.GST.split('%');
                cal = parseFloat(GstValue[0]) / 100;
            }
            if (item.GST == '') {
                cal = 0;
            }
            else {
                let GstValue = item.GST.split('%');
                cal = parseFloat(GstValue[0]) / 100;
            }
            this.taxableAmount += cal * parseFloat(item.amount);
        });
        return this.taxableAmount;
    }
}
PrintTableComponent.ɵfac = function PrintTableComponent_Factory(t) { return new (t || PrintTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_contact_service__WEBPACK_IMPORTED_MODULE_1__.ContactService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_company_service__WEBPACK_IMPORTED_MODULE_2__.CompanyService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_product_service__WEBPACK_IMPORTED_MODULE_3__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_quote_form_service__WEBPACK_IMPORTED_MODULE_4__.QuoteFormService)); };
PrintTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PrintTableComponent, selectors: [["app-print-table"]], decls: 225, vars: 53, consts: [["onclick", "window.print()", 1, "printBtn"], [1, "main-content"], [1, "header-space"], [1, "quoteHeader"], [1, "quoteHeading", "bb", "bt"], [1, "borderRight"], [1, "quoteCon"], [1, "tableLeftRight", "bb"], [1, "left"], [1, "tableData", "br"], [1, "right"], [1, "tableData"], [1, "left", "br"], [1, "br"], [1, ""], [1, "table", "caption-top"], [1, "bb"], ["scope", "col", 1, "br", "srNo"], ["scope", "col", 1, "br"], ["scope", "col", 1, "amount"], ["class", "bb", 4, "ngFor", "ngForOf"], ["scope", "row", 1, "br"], [1, "fBold"], [1, "totalAmtTx", "text-right"], ["colspan", "3", 1, "br", "text-center", 2, "font-size", "1rem", "font-weight", "600", "text-transform", "uppercase"], [1, "padding"], [1, "br", 2, "width", "5%"], [1, "br", "tabletext", 2, "width", "20%"], [1, "br", "tabletext", 2, "width", "75%"], [1, "footer-space"], [1, "TopHeader"], [1, "header"], [1, "ph1"], ["src", "assets/img/DIYA.PNG"], [1, "headerLeft"], [1, "ph2"], [1, "headerRight"], [1, "headerRightBottom"], [1, "footer"], [1, "footerText"], [1, "footerImg"], ["src", "assets/img/IR.PNG"], ["src", "assets/img/URYU.PNG"], ["src", "assets/img/TOH.PNG"]], template: function PrintTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Click Here To Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1)(3, "table")(4, "thead")(5, "tr")(6, "td")(7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 3)(10, "div", 4)(11, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "QUOTATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 6)(14, "div", 7)(15, "div", 8)(16, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Customer Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 10)(19, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 7)(22, "div", 12)(23, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Customer Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 10)(26, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 7)(29, "div", 8)(30, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Buyer Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 13)(33, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 14)(36, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Contact No:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 14)(39, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 7)(42, "div", 8)(43, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Application / Project:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 10)(46, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "table", 15)(49, "thead", 16)(50, "tr")(51, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Sr No");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Product Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "GST %");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Qty");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "UOM");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Unit Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Disc");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Net Unit Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](70, PrintTableComponent_tr_70_Template, 27, 20, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](72, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "td", 13)(74, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](76, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "td", 13)(78, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](80, "td", 13)(81, "td", 13)(82, "td", 13)(83, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "td")(85, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](87, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div", 23)(89, "ul")(90, "li")(91, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](93, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "li")(95, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](97, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "li")(99, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](101, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "table", 15)(103, "thead", 16)(104, "tr")(105, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "tbody", 25)(108, "tr", 16)(109, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](110, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112, "INCO Terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](114);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "tr", 16)(116, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](117, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](119, "Payment Terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](122, "tr", 16)(123, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](124, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](126, "P&F");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](127, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](128);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "tr", 16)(130, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](131, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](132, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](133, "Freight");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](134, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](135);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](136, "tr", 16)(137, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](138, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](139, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](140, "Other Charges");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](141, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](142);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](143, "tr", 16)(144, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](145, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](146, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](147, "Delivery Period");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](148, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](149);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](150, "tr", 16)(151, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](152, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](153, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](154, "Warranty");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](155, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](156);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](157, "tr", 16)(158, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](159, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](160, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](161, "Quote Validity (days)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](162, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](163);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](164, "tr", 16)(165, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](166, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](167, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](168, "Not Valid After");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](169, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](170);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](171, "tr", 16)(172, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](173, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](174, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](175, "Other Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](176, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](177);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](178, "tfoot")(179, "tr")(180, "td")(181, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](182, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](183, "header", 30)(184, "div", 31)(185, "div", 32)(186, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](187, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](188, "div", 34)(189, "ul")(190, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](192, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](193);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](194, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](195, "E-Mail: info@diyatechnologies.co.in");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](196, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](197);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](198, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](199, "Website: www.diyatechnologies.in");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](200, "div", 35)(201, "div", 36)(202, "ul")(203, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](204);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](205, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](206);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](207, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](208, "div", 37)(209, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](210, "Contact person for this Offer:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](211, "ul")(212, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](213);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](214, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](215);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](216, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](217);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](218, "footer", 38)(219, "h2", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](220, "Authorized Dealers:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](221, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](222, "img", 41)(223, "img", 42)(224, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.companyData == null ? null : ctx.companyData.company_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate5"]("", ctx.companyData == null ? null : ctx.companyData.address1, " ", ctx.companyData == null ? null : ctx.companyData.address2, " ", ctx.companyData == null ? null : ctx.companyData.address3, " ", ctx.companyData == null ? null : ctx.companyData.country, " ", ctx.companyData == null ? null : ctx.companyData.zip_code, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.contactData == null ? null : ctx.contactData.contact_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.contactData == null ? null : ctx.contactData.mobile_no);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.quoteData == null ? null : ctx.quoteData.quote_title);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.quoteData == null ? null : ctx.quoteData.product_services);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](87, 38, ctx.decimalFormat(ctx.totalAmount), "1.2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Total Taxable Amount: ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](93, 41, ctx.decimalFormat(ctx.totalAmount), "1.2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("GST Taxes: ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](97, 44, ctx.decimalFormat(ctx.getTaxableAmount()), "1.2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Total Amount: ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](101, 47, ctx.decimalFormat(ctx.totalAmount + ctx.getTaxableAmount()), "1.2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.quoteData == null ? null : ctx.quoteData.inco_terms);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.quoteData == null ? null : ctx.quoteData.p_t);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.quoteData == null ? null : ctx.quoteData.p_f);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.quoteData == null ? null : ctx.quoteData.freight);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.quoteData == null ? null : ctx.quoteData.other_charges);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.quoteData == null ? null : ctx.quoteData.delivery);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.quoteData == null ? null : ctx.quoteData.warrenty);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.quoteData == null ? null : ctx.quoteData.deal_validity);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.validDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.quoteData == null ? null : ctx.quoteData.remark);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Bill From: ", ctx.branchData == null ? null : ctx.branchData.branch_name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate6"]("Address: ", ctx.branchData == null ? null : ctx.branchData.address1, " ", ctx.branchData == null ? null : ctx.branchData.address2, " ", ctx.branchData == null ? null : ctx.branchData.address3, " ", ctx.branchData == null ? null : ctx.branchData.state, " ", ctx.branchData == null ? null : ctx.branchData.country, " ", ctx.branchData == null ? null : ctx.branchData.zipcode, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("GSTIN: ", ctx.branchData == null ? null : ctx.branchData.branch_gst, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Reference No: ", ctx.quoteData == null ? null : ctx.quoteData.quote_id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](207, 50, ctx.quoteData == null ? null : ctx.quoteData.created_date_time, "dd-MM-yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Name: ", ctx.salesPersonData == null ? null : ctx.salesPersonData.username, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("E-Mail: ", ctx.salesPersonData == null ? null : ctx.salesPersonData.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Mobile No: ", ctx.salesPersonData == null ? null : ctx.salesPersonData.phone, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], styles: ["*[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n}\n.main-content[_ngcontent-%COMP%] {\n    width: 50%;\n    margin: 0 auto;\n    border: 1px solid #434343;\n}\n\n\n.header[_ngcontent-%COMP%]   .ph1[_ngcontent-%COMP%]   .headerLeft[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .ph2[_ngcontent-%COMP%]   .headerRight[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .headerRightBottom[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    list-style-type: none;\n}\n.header[_ngcontent-%COMP%]   .ph1[_ngcontent-%COMP%]   .headerLeft[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 12px;\n    font-weight: 600;\n    color: #434343;\n}\n.headerRight[_ngcontent-%COMP%] {\n    font-size: 12px;\n    font-weight: 600;\n    color: #434343;\n    margin: 35px 0 10px 0;\n    padding: 3px;\n    border-top: 1px solid #434343;\n    border-right: 0;\n    border-bottom: 1px solid #434343;\n    border-left: 1px solid #434343;\n}\n.headerRight[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #434343;\n}\n.headerRight[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n}\n.headerRightBottom[_ngcontent-%COMP%] {\n    border-top: none;\n    border-right: none;\n    border-bottom: none;\n    border-left: none;\n}\n.headerRightBottom[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 12px;\n    margin: 0;\n    background-color: #bfbfbf;\n    font-weight: 600;\n    padding: 8px 0px 7px 5px;\n}\n.headerRightBottom[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding: 6px 6px 9px 6px;\n}\n.headerRightBottom[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 12px;\n    font-weight: 600;\n    color: #434343;\n}\n.footer[_ngcontent-%COMP%] {\n    padding: 10px;\n}\n.footer[_ngcontent-%COMP%]   .footerImg[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n.footer[_ngcontent-%COMP%]   .footerImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30%;\n}\n.header[_ngcontent-%COMP%], .header-space[_ngcontent-%COMP%] {\n  height: 207px;\n}\n.footer[_ngcontent-%COMP%], .footer-space[_ngcontent-%COMP%] {\n  height: 120px;\n}\n.header[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    background: rgb(239 236 236);\n    height: 13rem;\n    display: flex;\n    border-top: 1px solid #000;\n    width: 49.8%;\n    \n}\n.ph1[_ngcontent-%COMP%] {\n    padding: 10px;\n}\n.quoteHeader[_ngcontent-%COMP%]   .quoteHeading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    background: rgb(191 191 191);\n    text-align: center;\n    font-size: 1rem;\n    padding: 10px;\n    font-weight: 600;\n    width: 100%;\n}\n.tableData[_ngcontent-%COMP%] {\n    font-size: 12px;\n    color: #5a5959;\n    padding: 5px 5px 5px 5px;\n}\n.tableLeftRight[_ngcontent-%COMP%] {\n    display: flex;\n}\n.tableLeftRight[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    width: 25%;\n}\n.tableLeftRight[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    width: 75%;\n}\n.quoteHeader[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    background: #bfbfbf;\n}\n.quoteHeader[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    font-size: 12px;\n    vertical-align: top;\n}\n.quoteHeader[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    font-size: 12px;\n}\n.fBold[_ngcontent-%COMP%] {\n    font-weight: 700;\n}\n.No[_ngcontent-%COMP%] {\n    width: 4%;\n}\n.No[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 5px;\n    font-size: 12px;\n    color: #5a5959;\n}\n.bt[_ngcontent-%COMP%] {\n    border-top: 1px solid #000;\n}\n.br[_ngcontent-%COMP%] {\n    border-right: 1px solid #000;\n}\n.bb[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #000;\n}\n.bl[_ngcontent-%COMP%] {\n    border-left: 1px solid #000;\n}\n.totalAmtTx[_ngcontent-%COMP%] {\n    text-align: right;\n    line-height: 20px;\n    justify-content: end;\n    padding-right: 8px;\n}\n.totalAmtTx[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding: 0px;\n}\n.totalAmtTx[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style-type: none;\n    font-size: 12px;\n    line-height: 18px;\n}\n.footerText[_ngcontent-%COMP%] {\n    font-size: 15px;\n}\n.tabletext[_ngcontent-%COMP%] {\n    font-size: 12px;\n    color: #5a5959;\n    font-weight: 600;\n}\n.printBtn[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    padding: 10px;\n    border-radius: 5px;\n    left: 169px;\n    border: none;\n    background-color: #ed565b;\n    color: #fff;\n}\n.padding[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n    padding: 2px 0.5rem 2px 0.5rem;\n}\n@page {\n    margin-top: 10rem !important;\n}\n@media print {\n    .main-content[_ngcontent-%COMP%] {\n        width: 95%;\n        margin: 10px auto;\n    }\n    .header[_ngcontent-%COMP%] {\n        margin-top: 13px;\n        width: 94%;\n    }\n    .footer[_ngcontent-%COMP%] {\n        position: fixed;\n        bottom: 0;\n        background: rgb(168, 168, 168);\n    }\n    .headerRightBottom[_ngcontent-%COMP%] {\n        border-top: 1px solid #434343 !important;\n    }\n    .header[_ngcontent-%COMP%] {\n        border-top: none;\n    }\n    .quoteHeader[_ngcontent-%COMP%]   .quoteHeading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        width: 47rem;\n    }\n    .quoteHeader[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n        border-top: 1px solid #000;\n    }\n    .srNo[_ngcontent-%COMP%] {\n        border-left: 1px solid #000;\n    }\n    .amount[_ngcontent-%COMP%] {\n        border-right: 1px solid #000; \n    }\n    .borderRight[_ngcontent-%COMP%] {\n        border-right: 1px solid #000;\n    }\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50LXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLHlCQUF5QjtBQUM3QjtBQUNBOztHQUVHO0FBQ0g7OztHQUdHO0FBQ0g7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGdDQUFnQztJQUNoQyw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2Qsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksOEJBQThCO0FBQ2xDO0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLFVBQVU7SUFDZDtJQUNBO1FBQ0ksZUFBZTtRQUNmLFNBQVM7UUFDVCw4QkFBOEI7SUFDbEM7SUFDQTtRQUNJLHdDQUF3QztJQUM1QztJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLDJCQUEyQjtJQUMvQjtJQUNBO1FBQ0ksNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSw0QkFBNEI7SUFDaEM7O0FBRUoiLCJmaWxlIjoicHJpbnQtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuLm1haW4tY29udGVudCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDM0MzQzO1xufVxuLyogLmNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xufSAqL1xuLyogLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBcbn0gKi9cbi5oZWFkZXIgLnBoMSAuaGVhZGVyTGVmdCB1bCwgLmhlYWRlciAucGgyIC5oZWFkZXJSaWdodCB1bCwgLmhlYWRlclJpZ2h0Qm90dG9tIHVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4uaGVhZGVyIC5waDEgLmhlYWRlckxlZnQgdWwgbGkge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjNDM0MzQzO1xufVxuLmhlYWRlclJpZ2h0IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzQzNDM0MztcbiAgICBtYXJnaW46IDM1cHggMCAxMHB4IDA7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDM0MzQzO1xuICAgIGJvcmRlci1yaWdodDogMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQzNDM0MztcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM0MzQzNDM7XG59XG4uaGVhZGVyUmlnaHQgdWwgbGkge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDM0MzQzO1xufVxuLmhlYWRlclJpZ2h0IHVsIGxpOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4uaGVhZGVyUmlnaHRCb3R0b20ge1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG4uaGVhZGVyUmlnaHRCb3R0b20gaDIge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JmYmZiZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDhweCAwcHggN3B4IDVweDtcbn1cbi5oZWFkZXJSaWdodEJvdHRvbSB1bCB7XG4gICAgcGFkZGluZzogNnB4IDZweCA5cHggNnB4O1xufVxuLmhlYWRlclJpZ2h0Qm90dG9tIHVsIGxpIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzQzNDM0Mztcbn0gXG4uZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuLmZvb3RlciAuZm9vdGVySW1nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZvb3RlciAuZm9vdGVySW1nIGltZyB7XG4gICAgd2lkdGg6IDMwJTtcbn1cbi5oZWFkZXIsIC5oZWFkZXItc3BhY2Uge1xuICBoZWlnaHQ6IDIwN3B4O1xufVxuLmZvb3RlciwgLmZvb3Rlci1zcGFjZSB7XG4gIGhlaWdodDogMTIwcHg7XG59XG4uaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYigyMzkgMjM2IDIzNik7XG4gICAgaGVpZ2h0OiAxM3JlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwO1xuICAgIHdpZHRoOiA0OS44JTtcbiAgICAvKiBtYXJnaW4tdG9wOiAxM3B4OyAqL1xufVxuLnBoMSB7XG4gICAgcGFkZGluZzogMTBweDtcbn0gXG4ucXVvdGVIZWFkZXIgLnF1b3RlSGVhZGluZyBoMyB7XG4gICAgYmFja2dyb3VuZDogcmdiKDE5MSAxOTEgMTkxKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi50YWJsZURhdGEge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzVhNTk1OTtcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCA1cHg7XG59XG4udGFibGVMZWZ0UmlnaHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4udGFibGVMZWZ0UmlnaHQgLmxlZnQge1xuICAgIHdpZHRoOiAyNSU7XG59XG4udGFibGVMZWZ0UmlnaHQgLnJpZ2h0IHtcbiAgICB3aWR0aDogNzUlO1xufVxuLnF1b3RlSGVhZGVyIC50YWJsZSB0aGVhZCB7XG4gICAgYmFja2dyb3VuZDogI2JmYmZiZjtcbn1cbi5xdW90ZUhlYWRlciAudGFibGUgdGhlYWQgdHIgdGgge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuLnF1b3RlSGVhZGVyIC50YWJsZSB0Ym9keSB0ciB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmZCb2xkIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuLk5vIHtcbiAgICB3aWR0aDogNCU7XG59XG4uTm8gaDYge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjNWE1OTU5O1xufVxuLmJ0IHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDtcbn1cbi5iciB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwMDtcbn1cbi5iYiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG59XG4uYmwge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwMDtcbn1cblxuLnRvdGFsQW10VHgge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cbi50b3RhbEFtdFR4IHVsIHtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG4udG90YWxBbXRUeCB1bCBsaSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbn1cbi5mb290ZXJUZXh0IHtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4udGFibGV0ZXh0IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM1YTU5NTk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5wcmludEJ0biB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBsZWZ0OiAxNjlweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkNTY1YjtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5wYWRkaW5nIHRoLCB0ZCB7XG4gICAgcGFkZGluZzogMnB4IDAuNXJlbSAycHggMC41cmVtO1xufVxuIFxuQHBhZ2Uge1xuICAgIG1hcmdpbi10b3A6IDEwcmVtICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgcHJpbnQge1xuICAgIC5tYWluLWNvbnRlbnQge1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICB9XG4gICAgLmhlYWRlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgICAgIHdpZHRoOiA5NCU7XG4gICAgfVxuICAgIC5mb290ZXIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDE2OCwgMTY4LCAxNjgpO1xuICAgIH1cbiAgICAuaGVhZGVyUmlnaHRCb3R0b20ge1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzQzNDM0MyAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuaGVhZGVyIHtcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICB9XG4gICAgLnF1b3RlSGVhZGVyIC5xdW90ZUhlYWRpbmcgaDMge1xuICAgICAgICB3aWR0aDogNDdyZW07XG4gICAgfVxuICAgIC5xdW90ZUhlYWRlciAudGFibGUgdGhlYWQge1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDtcbiAgICB9XG4gICAgLnNyTm8ge1xuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMDA7XG4gICAgfVxuICAgIC5hbW91bnQge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwOyBcbiAgICB9XG4gICAgLmJvcmRlclJpZ2h0IHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwMDtcbiAgICB9XG4gICAgXG59Il19 */"] });


/***/ }),

/***/ 806:
/*!********************************************!*\
  !*** ./src/app/service/account.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountService": () => (/* binding */ AccountService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ 7266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class AccountService {
    constructor(http) {
        this.http = http;
        this.base_url = _global__WEBPACK_IMPORTED_MODULE_0__.url;
        this.api_key = _global__WEBPACK_IMPORTED_MODULE_0__.api_key;
    }
    submitForm(data) {
        let api_url = this.base_url + '/account/create-account';
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                apikey: this.api_key,
            }),
        };
        return this.http.post(api_url, data, httpOptions);
    }
    getAccountData(id) {
        console.log(id);
        let api_url = this.base_url + '/account/getaccountdetails/' + id;
        console.log(api_url);
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                apikey: this.api_key,
            }),
        };
        return this.http.get(api_url, httpOptions);
    }
    getAllAccount() {
        let api_url = this.base_url + '/account/getallaccounts';
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                apikey: this.api_key,
            }),
        };
        return this.http.get(api_url, httpOptions);
    }
    deleteAccount(id) {
        let api_url = this.base_url + '/account/deleteaccount/' + id;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                apikey: this.api_key,
            }),
        };
        return this.http.delete(api_url, httpOptions);
    }
    getStates(statename) {
        let api_url = this.base_url + '/account/getstatebycountry';
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                apikey: this.api_key,
            }),
        };
        return this.http.post(api_url, statename, httpOptions);
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
AccountService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8850:
/*!********************************************!*\
  !*** ./src/app/service/company.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyService": () => (/* binding */ CompanyService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ 7266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class CompanyService {
    constructor(http) {
        this.http = http;
        this.base_url = _global__WEBPACK_IMPORTED_MODULE_0__.url;
        this.api_key = _global__WEBPACK_IMPORTED_MODULE_0__.api_key;
    }
    submitForm(data) {
        let api_url = this.base_url + "/company/create-company";
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                'apikey': this.api_key
            }),
        };
        return this.http.post(api_url, data, httpOptions);
    }
    getCompanyData(id) {
        console.log(id);
        let api_url = this.base_url + "/company/getcompanybyid/" + id;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                'apikey': this.api_key
            }),
        };
        return this.http.get(api_url, httpOptions);
    }
    AddressSubmit(data) {
        let api_url = this.base_url + "/company/saveaddress";
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                'apikey': this.api_key
            }),
        };
        return this.http.post(api_url, data, httpOptions);
    }
    GetAddress() {
        let api_url = this.base_url + "/company/getaddress";
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                'apikey': this.api_key
            }),
        };
        return this.http.get(api_url, httpOptions);
    }
    getBranch(id) {
        let api_url = this.base_url + "/company/getbranchaddress/" + id;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                'apikey': this.api_key
            }),
        };
        return this.http.get(api_url, httpOptions);
    }
    DeleteAddress(id) {
        let api_url = this.base_url + "/company/deleteaddress/" + id;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                'apikey': this.api_key
            }),
        };
        return this.http.delete(api_url, httpOptions);
    }
    UploadFile(files, id) {
        let api_url = this.base_url + "/upload";
        const formData = new FormData();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'Accept-Encoding': "multipart/form-data",
                'apikey': this.api_key
            }),
        };
        formData.append("image", files[0], files[0].name);
        formData.append("attachmentid", id);
        return this.http.post(api_url, formData, httpOptions);
    }
}
CompanyService.ɵfac = function CompanyService_Factory(t) { return new (t || CompanyService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
CompanyService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CompanyService, factory: CompanyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1440:
/*!********************************************!*\
  !*** ./src/app/service/contact.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactService": () => (/* binding */ ContactService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ 7266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class ContactService {
    constructor(http) {
        this.http = http;
        this.base_url = _global__WEBPACK_IMPORTED_MODULE_0__.url + "/contact";
        this.api_key = _global__WEBPACK_IMPORTED_MODULE_0__.api_key;
    }
    SubmitForm(data) {
        let api_url = this.base_url + "/create-contact";
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                'apikey': this.api_key
            }),
        };
        return this.http.post(api_url, data, httpOptions);
    }
    getContactData(id) {
        console.log(id);
        let api_url = this.base_url + "/get-contact/" + id;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                'apikey': this.api_key
            }),
        };
        return this.http.get(api_url, httpOptions);
    }
    getAllContact() {
        let api_url = this.base_url + "/getallcontact";
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                'apikey': this.api_key
            }),
        };
        return this.http.get(api_url, httpOptions);
    }
    getCompanyContact(id) {
        console.log(id);
        let api_url = this.base_url + "/getcompanycontact" + id;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                'apikey': this.api_key
            }),
        };
        return this.http.get(api_url, httpOptions);
    }
    deleteContact(id) {
        let api_url = this.base_url + "/deletecontact/" + id;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                'apikey': this.api_key
            }),
        };
        return this.http.delete(api_url, httpOptions);
    }
}
ContactService.ɵfac = function ContactService_Factory(t) { return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ContactService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ContactService, factory: ContactService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8102:
/*!**********************************************!*\
  !*** ./src/app/service/deal-form.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DealFormService": () => (/* binding */ DealFormService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ 7266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class DealFormService {
    constructor(http) {
        this.http = http;
        this.base_url = _global__WEBPACK_IMPORTED_MODULE_0__.url + "/deals";
        this.api_key = _global__WEBPACK_IMPORTED_MODULE_0__.api_key;
    }
    submitForm(data) {
        console.log(data.attachments);
        let api_url = this.base_url + "/createdeal";
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                'apikey': this.api_key
            }),
        };
        return this.http.post(api_url, data, httpOptions);
    }
    getDealData(id) {
        console.log(id);
        let api_url = this.base_url + "/getdealbyid/" + id;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                'apikey': this.api_key
            }),
        };
        return this.http.get(api_url, httpOptions);
    }
    getAllDeals() {
        let api_url = this.base_url + "/getdeals";
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                'apikey': this.api_key
            }),
        };
        return this.http.get(api_url, httpOptions);
    }
    deleteDeal(id) {
        let api_url = this.base_url + "/deletequote/" + id;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                'apikey': this.api_key
            }),
        };
        return this.http.get(api_url, httpOptions);
    }
}
DealFormService.ɵfac = function DealFormService_Factory(t) { return new (t || DealFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
DealFormService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DealFormService, factory: DealFormService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5366:
/*!********************************************!*\
  !*** ./src/app/service/product.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ 7266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class ProductService {
    constructor(http) {
        this.http = http;
        this.itemList = [];
        this.base_url = _global__WEBPACK_IMPORTED_MODULE_0__.url + '/master/';
        this.api_key = _global__WEBPACK_IMPORTED_MODULE_0__.api_key;
    }
    productCount() {
        let api_url = this.base_url + 'productCount';
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                apikey: this.api_key,
            }),
        };
        return this.http.get(api_url, httpOptions);
    }
    getAllProduct() {
        let api_url = this.base_url + 'product';
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                apikey: this.api_key,
            }),
        };
        return this.http.get(api_url, httpOptions);
    }
    getproductmaster(id) {
        let api_url = this.base_url + 'getproductmaster/' + id;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                apikey: '8GWF6J1-WVG40Q4-HBWGNVY-9VXTXQ8',
            }),
        };
        return this.http.get(api_url, httpOptions);
    }
    update_productmaster(data, id) {
        let api_url = this.base_url + '/update_productmaster/' + id;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                apikey: '8GWF6J1-WVG40Q4-HBWGNVY-9VXTXQ8',
            }),
        };
        return this.http.post(api_url, data, httpOptions);
    }
    deleteNewProduct(id) {
        let api_url = this.base_url + '/deleteNewProduct/' + id;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                apikey: this.api_key,
            }),
        };
        return this.http.get(api_url, httpOptions);
    }
    addNewProductMAster(data) {
        let api_url = this.base_url + 'addNewProductMAster';
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                apikey: this.api_key,
            }),
        };
        return this.http.post(api_url, data, httpOptions);
    }
    getSearchByPartNo(data) {
        let api_url = this.base_url + 'getSearchByPartNo';
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                apikey: this.api_key,
            }),
        };
        return this.http.post(api_url, data, httpOptions);
    }
    productmaster() {
        let api_url = this.base_url + 'productmaster';
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                apikey: this.api_key,
            }),
        };
        return this.http.get(api_url, httpOptions);
    }
    getProductDataSearch(lim) {
        let api_url = this.base_url + 'getAllDataSearch';
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                apikey: this.api_key,
            }),
        };
        return this.http.post(api_url, lim, httpOptions);
    }
    getAllProductLimit(lim) {
        let api_url = this.base_url + 'productlimit';
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                apikey: this.api_key,
            }),
        };
        return this.http.post(api_url, lim, httpOptions);
    }
    createGroup(data) {
        console.log(data);
        let api_url = this.base_url + 'create-group';
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                apikey: this.api_key,
            }),
        };
        return this.http.post(api_url, data, httpOptions);
    }
    getGroups(id) {
        let api_url = this.base_url + 'get-groups/' + id;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                apikey: this.api_key,
            }),
        };
        return this.http.get(api_url, httpOptions);
    }
    deleteGroup(id) {
        let api_url = this.base_url + 'delete-group/' + id;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                apikey: this.api_key,
            }),
        };
        return this.http.get(api_url, httpOptions);
    }
    AddProduct(data) {
        let api_url = this.base_url + 'add-product';
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                apikey: this.api_key,
            }),
        };
        return this.http.post(api_url, data, httpOptions);
    }
    getAllNewProducts() {
        let api_url = this.base_url + 'get-all-new-product';
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                apikey: this.api_key,
            }),
        };
        return this.http.get(api_url, httpOptions);
    }
    getAllNewGroups() {
        let api_url = this.base_url + 'get-all-new-groups';
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                apikey: this.api_key,
            }),
        };
        return this.http.get(api_url, httpOptions);
    }
    getAllSalesPerson() {
        let api_url = this.base_url + 'all-sales-person';
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                apikey: this.api_key,
            }),
        };
        return this.http.get(api_url, httpOptions);
    }
    getSalesPerson(id) {
        let api_url = this.base_url + 'get-sales-person/' + id;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                apikey: this.api_key,
            }),
        };
        return this.http.get(api_url, httpOptions);
    }
    getproduct(id) {
        let api_url = this.base_url + '/getproductsbyid/' + id;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                apikey: '8GWF6J1-WVG40Q4-HBWGNVY-9VXTXQ8',
            }),
        };
        return this.http.get(api_url, httpOptions);
    }
    updateForm(data, id) {
        let api_url = this.base_url + '/updateproductsbyid/' + id;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                apikey: '8GWF6J1-WVG40Q4-HBWGNVY-9VXTXQ8',
            }),
        };
        return this.http.post(api_url, data, httpOptions);
    }
    bulkAddProduct(data) {
        let api_url = this.base_url + 'bulk-product';
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                apikey: this.api_key,
            }),
        };
        return this.http.post(api_url, data, httpOptions);
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ProductService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1286:
/*!***********************************************!*\
  !*** ./src/app/service/quote-form.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuoteFormService": () => (/* binding */ QuoteFormService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ 7266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class QuoteFormService {
    constructor(http) {
        this.http = http;
        this.base_url = _global__WEBPACK_IMPORTED_MODULE_0__.url + '/quotes';
        this.api_key = _global__WEBPACK_IMPORTED_MODULE_0__.api_key;
    }
    submitForm(data) {
        console.log(data.attachments);
        let api_url = this.base_url + '/create-quote';
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                apikey: this.api_key,
            }),
        };
        return this.http.post(api_url, data, httpOptions);
    }
    getQuote() {
        let api_url = this.base_url + '/getquote';
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                apikey: this.api_key,
            }),
        };
        return this.http.get(api_url, httpOptions);
    }
    getQuoteById(id) {
        let api_url = this.base_url + '/getquotebyid/' + id;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                apikey: this.api_key,
            }),
        };
        return this.http.get(api_url, httpOptions);
    }
    deleteQuote(id) {
        let api_url = this.base_url + '/deletequote/' + id;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                apikey: this.api_key,
            }),
        };
        return this.http.get(api_url, httpOptions);
    }
    getquotelogs(id) {
        let api_url = this.base_url + '/getquotebyid/' + id;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                apikey: this.api_key,
            }),
        };
        return this.http.get(api_url, httpOptions);
    }
    getOneLog(id) {
        let api_url = this.base_url + '/getOneQuoteLogsbyid/' + id;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'content-type': 'application/json;charset=UTF-8',
                apikey: this.api_key,
            }),
        };
        return this.http.get(api_url, httpOptions);
    }
}
QuoteFormService.ɵfac = function QuoteFormService_Factory(t) { return new (t || QuoteFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
QuoteFormService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: QuoteFormService, factory: QuoteFormService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map