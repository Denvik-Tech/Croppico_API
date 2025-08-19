(self["webpackChunkcropicco_ui"] = self["webpackChunkcropicco_ui"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var D_Cropicco_cropicco_pi_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _chartinfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chartinfo */ 4510);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_shared_model_api_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/model/api.model */ 7860);
/* harmony import */ var src_shared_component_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/component/auth/auth.component */ 4278);
/* harmony import */ var src_shared_component_flush_dialog_flush_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/component/flush-dialog/flush-dialog.component */ 7519);
/* harmony import */ var src_shared_component_charts_charts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/component/charts/charts.component */ 3725);
/* harmony import */ var src_shared_component_guide_guide_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shared/component/guide/guide.component */ 9626);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 2516);
/* harmony import */ var src_shared_component_topup_dialog_topup_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/shared/component/topup-dialog/topup-dialog.component */ 4765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var src_core_screen_saver_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/core/screen-saver.service */ 3160);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toggle-switch */ 8853);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular-slider/ngx-slider */ 2102);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var src_shared_directives_disable_one_sec_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/shared/directives/disable-one-sec.directive */ 7619);
/* harmony import */ var _mainstatus_mainstatus_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mainstatus/mainstatus.component */ 5121);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./settings/settings.component */ 4586);
/* harmony import */ var _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./maintenance/maintenance.component */ 1499);
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./info/info.component */ 3050);

























function AppComponent_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "ui-switch", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function AppComponent_div_1_div_2_Template_ui_switch_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return ctx_r5.light_state[5] = $event;
    })("change", function AppComponent_div_1_div_2_Template_ui_switch_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return ctx_r7.onLightBtnChange(5);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "ui-switch", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function AppComponent_div_1_div_2_Template_ui_switch_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return ctx_r8.light_state[4] = $event;
    })("change", function AppComponent_div_1_div_2_Template_ui_switch_change_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r6);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return ctx_r9.onLightBtnChange(4);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "ui-switch", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function AppComponent_div_1_div_2_Template_ui_switch_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r6);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return ctx_r10.light_state[3] = $event;
    })("change", function AppComponent_div_1_div_2_Template_ui_switch_change_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r6);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return ctx_r11.onLightBtnChange(3);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "ui-switch", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function AppComponent_div_1_div_2_Template_ui_switch_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r6);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return ctx_r12.light_state[2] = $event;
    })("change", function AppComponent_div_1_div_2_Template_ui_switch_change_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r6);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return ctx_r13.onLightBtnChange(2);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "ui-switch", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function AppComponent_div_1_div_2_Template_ui_switch_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r6);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return ctx_r14.light_state[1] = $event;
    })("change", function AppComponent_div_1_div_2_Template_ui_switch_change_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r6);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return ctx_r15.onLightBtnChange(1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r3.light_state[5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r3.light_state[4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r3.light_state[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r3.light_state[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r3.light_state[1]);
  }
}

function AppComponent_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "ngx-slider", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function AppComponent_div_1_div_3_Template_ngx_slider_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return ctx_r16.brightness_level = $event;
    })("userChangeEnd", function AppComponent_div_1_div_3_Template_ngx_slider_userChangeEnd_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return ctx_r18.onLightBrightnessChange();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r4.brightness_level)("options", ctx_r4.slider_options);
  }
}

const _c0 = function () {
  return {
    "pointer-events": "none"
  };
};

const _c1 = function () {
  return {
    "pointer-events": "initial"
  };
};

function AppComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, AppComponent_div_1_div_2_Template, 11, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, AppComponent_div_1_div_3_Template, 2, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "g", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "g", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](8, "path", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](9, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](10, "path", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](11, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](12, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](13, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](14, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](15, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](16, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngStyle", ctx_r0.prevent_toggle ? _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](3, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r0.show_brightness_slider);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r0.show_brightness_slider);
  }
}

function AppComponent_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("Timeout- ", ctx_r19.countdown, "");
  }
}

function AppComponent_div_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AppComponent_div_2_div_12_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return ctx_r29.showGuide();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AppComponent_div_2_div_12_Template_div_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r30);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return ctx_r31.showCharts();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](4, "img", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AppComponent_div_2_div_12_Template_div_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r30);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return ctx_r32.openFlushPopUp();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AppComponent_div_2_div_12_Template_div_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r30);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return ctx_r33.openTopupPopUp();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](8, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}

const _c2 = function (a0) {
  return {
    "disable-class": a0
  };
};

function AppComponent_div_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AppComponent_div_2_div_13_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      ctx_r34.update();
      return ctx_r34.isDisabled = true;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](1, _c2, ctx_r21.isDisabled));
  }
}

function AppComponent_div_2_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AppComponent_div_2_div_14_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return ctx_r36.reserAlarm();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "img", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}

function AppComponent_div_2_img_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "img", 87);
  }

  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("src", ctx_r23.wifi_signal_image, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsanitizeUrl"]);
  }
}

function AppComponent_div_2_app_mainstatus_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "app-mainstatus", 88);
  }

  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("meterData", ctx_r25.meterData)("allData", ctx_r25.allData);
  }
}

function AppComponent_div_2_app_settings_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "app-settings", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("screenSaverData", function AppComponent_div_2_app_settings_21_Template_app_settings_screenSaverData_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return ctx_r38.screenSaverData($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}

function AppComponent_div_2_app_maintenance_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "app-maintenance");
  }
}

function AppComponent_div_2_app_info_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "app-info", 88);
  }

  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("meterData", ctx_r28.meterData)("allData", ctx_r28.allData);
  }
}

function AppComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, AppComponent_div_2_div_2_Template, 3, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](12, AppComponent_div_2_div_12_Template, 9, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](13, AppComponent_div_2_div_13_Template, 3, 3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](14, AppComponent_div_2_div_14_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](15, AppComponent_div_2_img_15_Template, 1, 1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AppComponent_div_2_Template_div_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      ctx_r40.showInfo();
      return ctx_r40.isShowResetAlarm = !ctx_r40.isShowResetAlarm;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](17, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "div", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](20, AppComponent_div_2_app_mainstatus_20_Template, 1, 2, "app-mainstatus", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](21, AppComponent_div_2_app_settings_21_Template, 1, 0, "app-settings", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](22, AppComponent_div_2_app_maintenance_22_Template, 1, 0, "app-maintenance", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](23, AppComponent_div_2_app_info_23_Template, 1, 2, "app-info", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](24, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](25, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AppComponent_div_2_Template_div_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r41);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return ctx_r42.openSettings();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](26, "svg", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](27, "linearGradient", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](28, "stop", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](29, "stop", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](30, "stop", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](31, "circle", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](32, "linearGradient", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](33, "stop", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](34, "stop", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](35, "stop", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](36, "stop", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](37, "circle", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](38, "linearGradient", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](39, "stop", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](40, "stop", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](41, "stop", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](42, "stop", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](43, "path", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](44, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AppComponent_div_2_Template_div_click_44_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r41);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return ctx_r43.openMaintenance();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](45, "svg", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](46, "path", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](47, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AppComponent_div_2_Template_div_click_47_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r41);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return ctx_r44.showHome();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](48, "svg", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](49, "g", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](50, "path", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](51, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](52, "path", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](53, "path", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](54, "path", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](55, "path", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](56, "path", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](57, "path", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.show_maintenance_screen || ctx_r1.show_settings_screen);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](7, 11, ctx_r1.time, "hh:mm:ss a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](10, 14, ctx_r1.time, "dd/MM/YY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.show_maintenance_screen);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.show_settings_screen);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.isShowResetAlarm && !ctx_r1.show_settings_screen);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.wifi_signal_image && !ctx_r1.show_settings_screen && !ctx_r1.show_maintenance_screen);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r1.show_settings_screen && !ctx_r1.show_maintenance_screen && !ctx_r1.show_info_screen);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.show_settings_screen && !ctx_r1.show_maintenance_screen && !ctx_r1.show_info_screen);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.show_maintenance_screen && !ctx_r1.show_settings_screen && !ctx_r1.show_info_screen);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.show_info_screen && !ctx_r1.show_maintenance_screen && !ctx_r1.show_settings_screen);
  }
}

const _c3 = function (a0) {
  return {
    "background-image": a0
  };
};

function AppComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](1, _c3, "url(" + ctx_r2.screen_saver_img + ")"));
  }
}

class AppComponent {
  constructor(http, dialog, screensaver) {
    this.http = http;
    this.dialog = dialog;
    this.screensaver = screensaver;
    this.apexChart = new _chartinfo__WEBPACK_IMPORTED_MODULE_1__.Apex();
    this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.api;
    this.wifiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.wifi;
    this.wifi_signal_image = '';
    this.screen_saver_img = '';
    this.title = 'cropicco-ui';
    this.isShowResetAlarm = false;
    this.time = new Date();
    this.show_brightness_slider = false;
    this.show_settings_screen = false;
    this.show_maintenance_screen = false;
    this.show_home_screen = true;
    this.show_info_screen = false;
    this.prevent_toggle = false;
    this.brightness_level = 5;
    this.light_last_updated = 0;
    this.disable_brightness_slider = false;
    this.slider_options = {
      floor: 0,
      ceil: 100,
      step: 10,
      vertical: true,
      showTicks: false,
      hidePointerLabels: true,
      hideLimitLabels: true,
      disabled: false
    };
    this.meterData = {
      'water': [0, 0, 0],
      'ambient': [0, 0]
    };
    this.waterDataStr = '';
    this.ambientDataStr = '';
    this.light_state = {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false
    };
    this.isDisabled = false;
    this.showScreenSaver = false;
    this.isIdle = false;
    this.idleAfterSeconds = 1000 * 60 * 1;
    this.screenSaverStatus = true;
    this.image_urls = ["/assets/images/screen_saver/screen_saver_1.jpg", "/assets/images/screen_saver/screen_saver_2.jpg", "/assets/images/screen_saver/screen_saver_3.jpg"];

    this.setWifiSignalImgFn = () => {
      var _a;

      const wifi_urls = [{
        key: 'low',
        url: '/assets/images/wifi/wifi_low.svg'
      }, {
        key: 'medium',
        url: '/assets/images/wifi/wifi_mid.svg'
      }, {
        key: 'good',
        url: '/assets/images/wifi/wifi_full.svg'
      }, {
        key: 'notconnected',
        url: '/assets/images/wifi/wifi_not_connected.svg'
      }];
      this.wifi_signal_image = ((_a = wifi_urls.find(k => {
        var _a, _b;

        return k.key.includes((_b = (_a = this.allData) === null || _a === void 0 ? void 0 : _a.data.wifi_strength) === null || _b === void 0 ? void 0 : _b.toLowerCase());
      })) === null || _a === void 0 ? void 0 : _a.url) || '';
      console.log(this.wifi_signal_image);
    };

    this.countdown = ''; // Variable to display the countdown timer

    this.screen_saver_img = this.image_urls[0];
  }

  ngOnInit() {
    this.screensaver.screenSaver.subscribe(res => {
      console.log(res);
      this.screenSaverStatus = res;
    });
    this.getSettings();
    this.getData();
    setInterval(() => {
      this.time = new Date(); // this.light_1_state = !this.light_1_state;
    }, 1000);
    setInterval(() => {
      if (!this.show_settings_screen && !this.show_maintenance_screen) {
        this.getData();
      }
    }, 5000);
  }

  fetchImageUrl() {
    let i = 0;
    this.screen_saver_img = this.image_urls[i];
    this.clearScreenSaverInterval = setInterval(() => {
      i++;
      console.log("I", i);

      if (this.image_urls.length == i) {
        i = 0;
      }

      this.screen_saver_img = this.image_urls[i];
    }, 1000 * 5);
  }

  ngOnChanges(changes) {
    console.log(changes);
  }

  reserAlarm() {
    const obj = {
      retAlarm: true
    };
    this.httpPost(src_shared_model_api_model__WEBPACK_IMPORTED_MODULE_3__.APIS.RESET_ALARM, obj);
  }

  update() {
    var _this = this;

    return (0,D_Cropicco_cropicco_pi_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const obj = {
        update: true
      };
      const url = _this.wifiUrl;
      console.log('update url', _this.wifiUrl);

      _this.http.post(url, obj).subscribe(res => {
        console.log('update res', res);
      });

      setTimeout(() => {
        _this.isDisabled = false;
      }, 1000 * 10);
    })();
  }

  getData() {
    var _this2 = this;

    return (0,D_Cropicco_cropicco_pi_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a;

      let dataApiCallData = yield new Promise((resolve, reject) => {
        _this2.http.get(_this2.url + "/data").subscribe({
          next: data => {
            resolve(data);
          },
          error: error => {
            console.log(error);
            resolve(false);
          }
        });
      });
      console.log("GET DATA", dataApiCallData);

      if (dataApiCallData) {
        _this2.allData = dataApiCallData; // console.log("Ultrasonic",parsed_data);

        _this2.setWifiSignalImgFn();

        _this2.brightness_level = ((_a = dataApiCallData === null || dataApiCallData === void 0 ? void 0 : dataApiCallData.data) === null || _a === void 0 ? void 0 : _a.light_brightness) || 0;

        _this2.updateStats(_this2.allData.data);
      } else {
        console.log("Data Api error");
      }
    })();
  }

  openFlushPopUp() {
    const config = {
      panelClass: "dialog-responsive",
      disableClose: true,
      minWidth: "200px",
      minHeight: '200px',
      data: {
        title: `Flush Water`
      }
    };
    this.screensaver.updateScreenSaverStatus(false);
    const dialog = this.dialog.open(src_shared_component_flush_dialog_flush_dialog_component__WEBPACK_IMPORTED_MODULE_5__.FlushDialogComponent, config);
    dialog.afterClosed().subscribe(result => {
      this.screensaver.updateScreenSaverStatus(true);
      console.log(result);
    });
  }

  openTopupPopUp() {
    const config = {
      panelClass: "dialog-responsive",
      disableClose: true,
      minWidth: "200px",
      minHeight: '200px',
      data: {
        title: `Topup Water`
      }
    };
    this.screensaver.updateScreenSaverStatus(false);
    const dialog = this.dialog.open(src_shared_component_topup_dialog_topup_dialog_component__WEBPACK_IMPORTED_MODULE_8__.TopupDialogComponent, config);
    dialog.afterClosed().subscribe(result => {
      this.screensaver.updateScreenSaverStatus(true);
      console.log(result);
    });
  }

  resetUserError() {
    var _this3 = this;

    return (0,D_Cropicco_cropicco_pi_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      // this.httpPost(APIS.USER_ERROR_RESET, { reset: true });
      const config = {
        panelClass: "dialog-responsive",
        disableClose: true,
        minWidth: "200px",
        minHeight: '200px',
        data: {
          title: `user_error`
        }
      };

      _this3.screensaver.updateScreenSaverStatus(false);

      const dialog = _this3.dialog.open(src_shared_component_flush_dialog_flush_dialog_component__WEBPACK_IMPORTED_MODULE_5__.FlushDialogComponent, config);

      dialog.afterClosed().subscribe(result => {
        _this3.screensaver.updateScreenSaverStatus(true);

        console.log(result);
      });
    })();
  }

  showCharts() {
    var _this4 = this;

    return (0,D_Cropicco_cropicco_pi_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const config = {
        panelClass: "dialog-responsive",
        disableClose: true,
        minWidth: "900px",
        minHeight: '100px',
        position: {
          top: "10px"
        },
        data: {
          title: `Charts`
        }
      };

      _this4.screensaver.updateScreenSaverStatus(false);

      const dialog = _this4.dialog.open(src_shared_component_charts_charts_component__WEBPACK_IMPORTED_MODULE_6__.ChartsComponent, config);

      dialog.afterClosed().subscribe(result => {
        _this4.screensaver.updateScreenSaverStatus(true);

        console.log(result);
      });
    })();
  }

  showGuide() {
    var _this5 = this;

    return (0,D_Cropicco_cropicco_pi_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const config = {
        panelClass: "dialog-responsive",
        disableClose: true,
        minWidth: "900px",
        height: '360px',
        position: {
          top: "10px"
        },
        data: {
          title: `Guide`
        }
      };

      _this5.screensaver.updateScreenSaverStatus(false);

      const dialog = _this5.dialog.open(src_shared_component_guide_guide_component__WEBPACK_IMPORTED_MODULE_7__.GuideComponent, config);

      dialog.afterClosed().subscribe(result => {
        _this5.screensaver.updateScreenSaverStatus(true);

        console.log(result);
      });
    })();
  } // updateStats(data: any) {
  //   if (Object.keys(data).length) {
  //     this.brightness_level = data.light_brightness || 0;
  //     this.meterData = {
  //       'water': [data["water_level"], data["water_flow"], data["water_temperature"]],
  //       'ambient': [data["ambient_humid"], data["ambient_temp"]]
  //     }
  //     // console.log('date ',this.light_last_updated + 60, Math.floor(Date.now() / 1000),this.light_last_updated + 60 < Math.floor(Date.now() / 1000));
  //     // && this.light_last_updated + 60 < Math.floor(Date.now() / 1000)
  //     if (data?.light_stat?.length && this.light_last_updated + 60 < Math.floor(Date.now() / 1000)) {
  //       for (let lS in data?.light_stat) {
  //         this.light_state[parseInt(lS) + 1] = Boolean(data?.light_stat[lS]);
  //       }
  //       this.light_last_updated = Math.floor(Date.now() / 1000);
  //     }
  //   }
  // }


  updateStats(data) {
    this.meterData = {
      'water': [data["water_level"], data["water_flow"], data["water_temperature"]],
      'ambient': [data["ambient_humid"], data["ambient_temp"]]
    }; // for (let lS in data["light_stat"]) {
    //   this.light_state[parseInt(lS) + 1] = Boolean(data["light_stat"][lS]);
    // }
    // this.light_last_updated = Math.floor(Date.now() / 1000);

    if (this.light_last_updated + 60 < Math.floor(Date.now() / 1000)) {
      for (let lS in data["light_stat"]) {
        this.light_state[parseInt(lS) + 1] = Boolean(data["light_stat"][lS]);
      }

      this.light_last_updated = Math.floor(Date.now() / 1000);
    }
  }

  showInfo() {
    this.show_info_screen = !this.show_info_screen;
    this.show_settings_screen = false;
    this.show_maintenance_screen = false;

    if (!this.show_info_screen) {
      this.show_home_screen = true;
    }
  }

  toggleBrightnessMenu() {
    this.show_brightness_slider = !this.show_brightness_slider;
  }

  openSettings() {
    //CALIBRATION POP UP
    // this.show_settings_screen = !this.show_settings_screen;
    // this.show_maintenance_screen = false;
    // this.show_info_screen = false;
    // this.isShowResetAlarm = false
    if (!this.show_settings_screen) {
      const config = {
        panelClass: "dialog-responsive",
        disableClose: true,
        height: '200px',
        data: {
          module: 'settings'
        }
      };
      const dialog = this.dialog.open(src_shared_component_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__.AuthComponent, config);
      dialog.afterClosed().subscribe(result => {
        console.log('close', result);

        if (result === null || result === void 0 ? void 0 : result.isValid) {
          this.show_settings_screen = !this.show_settings_screen;

          if (this.timerInterval) {
            clearInterval(this.timerInterval);
          }

          this.startCountdown(15);
          this.show_maintenance_screen = false;
          this.show_home_screen = false;
          this.show_info_screen = false;
          this.isShowResetAlarm = false;
        }
      });
    } else {
      this.show_settings_screen = !this.show_settings_screen;
      this.show_maintenance_screen = false;
      this.show_info_screen = false;
      this.isShowResetAlarm = false;
    }
  }

  openMaintenance() {
    if (!this.show_maintenance_screen) {
      const config = {
        panelClass: "dialog-responsive",
        disableClose: true,
        height: '200px',
        data: {
          module: 'maintenance'
        }
      };
      const dialog = this.dialog.open(src_shared_component_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__.AuthComponent, config);
      dialog.afterClosed().subscribe(result => {
        console.log('close', result);

        if (result === null || result === void 0 ? void 0 : result.isValid) {
          this.show_maintenance_screen = !this.show_maintenance_screen;

          if (this.timerInterval) {
            clearInterval(this.timerInterval);
          }

          this.startCountdown(20);
          this.show_settings_screen = false;
          this.show_home_screen = false;
          this.show_info_screen = false;
          this.isShowResetAlarm = false;
        }
      });
    } else {
      this.show_maintenance_screen = !this.show_maintenance_screen;
      this.show_settings_screen = false;
      this.show_info_screen = false;
      this.isShowResetAlarm = false;
    }
  }

  showHome() {
    console.log("Moving to Home screen");

    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }

    this.show_maintenance_screen = false;
    this.show_settings_screen = false;
    this.show_home_screen = true;
  }

  onLightBtnChange(lightNum) {
    var _this6 = this;

    return (0,D_Cropicco_cropicco_pi_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this6.prevent_toggle = true;
      setTimeout(() => {
        _this6.prevent_toggle = false;
      }, 1000);
      console.log("onChange EVent");
      console.log(lightNum, _this6.light_state);
      let bod = {
        light: lightNum,
        state: _this6.light_state[lightNum] ? 0 : 1
      };
      console.log(bod);
      yield _this6.httpPost("lights", bod);
      _this6.light_last_updated = Math.floor(Date.now());
    })();
  }

  onLightBrightnessChange() {
    var _this7 = this;

    return (0,D_Cropicco_cropicco_pi_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this7.disable_brightness_slider = true;

      _this7.updateSliderOptions();

      setTimeout(() => {
        _this7.disable_brightness_slider = false;

        _this7.updateSliderOptions();
      }, 1000);
      console.log(_this7.brightness_level);
      yield _this7.httpPost("lights", {
        light: 0,
        state: _this7.brightness_level
      });
    })();
  } // Method to update slider options dynamically


  updateSliderOptions() {
    this.slider_options = Object.assign(Object.assign({}, this.slider_options), {
      disabled: this.disable_brightness_slider
    });
  }

  startCountdown(minutes) {
    // Convert minutes to milliseconds
    let remainingTime = minutes * 60 * 1000; // Initialize the countdown display

    this.updateCountdownDisplay(remainingTime); // Start the interval to update the countdown every second

    this.timerInterval = setInterval(() => {
      remainingTime -= 1000; // Decrement the remaining time by 1 second (1000 milliseconds)
      // Update the countdown display

      this.updateCountdownDisplay(remainingTime); // Stop the countdown when time runs out

      if (remainingTime <= 0) {
        clearInterval(this.timerInterval);

        if (this.show_maintenance_screen) {
          this.show_maintenance_screen = false;
        } else if (this.show_settings_screen) {
          this.show_settings_screen = false;
        }

        this.countdown = '00:00'; // Display 00:00 when countdown ends
      }
    }, 1000);
  }

  updateCountdownDisplay(remainingTime) {
    // Calculate the remaining minutes and seconds
    const minutes = Math.floor(remainingTime / (1000 * 60));
    const seconds = Math.floor(remainingTime % (1000 * 60) / 1000); // Format minutes and seconds to display as two digits

    const minutesDisplay = minutes.toString().padStart(2, '0');
    const secondsDisplay = seconds.toString().padStart(2, '0'); // Update the countdown variable with formatted time

    this.countdown = `${minutesDisplay}:${secondsDisplay}`;
    console.log("this.countdown", this.countdown);
  }

  httpPost(method, body) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + "/" + method, body).subscribe({
        next: data => {
          resolve(data);
        },
        error: error => {
          console.error(method + " Api error" + JSON.stringify(error));
          resolve(false);
        }
      });
    });
  }

  onInteraction(i) {
    // console.log("OnInteractionFn",i)
    // Is idle and interacting, emit Wake
    // console.log("Entering onInteraction")
    if (this.isIdle) {
      this.isIdle = false;
      this.showScreenSaver = false;
      console.log('im awake!');
      clearInterval(this.clearScreenSaverInterval);
    } // User interaction, reset start-idle-timer


    clearTimeout(this.countDown);
    this.countDown = setTimeout(() => {
      // Countdown done without interaction - emit Idle
      this.isIdle = true;
      this.showScreenSaver =  true && this.screenSaverStatus;
      console.log("this.showScreenSaver", this.showScreenSaver);
      console.log("screenSaverStatus", this.screenSaverStatus);
      console.log('im idle');
      this.fetchImageUrl();
    }, this.idleAfterSeconds);
  }

  screenSaverData(data) {
    console.log("screenSaverData", data);

    if (data.status == true) {
      console.log("Entering start loop");
      this.idleAfterSeconds = Number(data.interval_time) * 60 * 1000;
      this.screenSaverFn(1);
    }

    if (data.status !== true) {
      console.log("Entering stop loop");
      this.screenSaverUnSubscribeFn();
    }
  }

  screenSaverFn(i) {
    // Setup events
    console.log("screeeennnn----->", i);
    this.screenSaverStatus = true;
    this.onInteraction(1);
    this.mouseMoveSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.fromEvent)(document, 'mousemove').subscribe(() => this.onInteraction(2));
    this.touchStartSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.fromEvent)(document, 'touchstart').subscribe(() => this.onInteraction(3));
    this.keyDownSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.fromEvent)(document, 'keydown').subscribe(() => this.onInteraction(4));
    this.clickSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.fromEvent)(document, 'click').subscribe(() => this.onInteraction(5));
    clearInterval(this.clearScreenSaverInterval);
  }

  screenSaverUnSubscribeFn() {
    var _a, _b, _c, _d;

    console.log("Entering unsubscribe loop");
    (_a = this.mouseMoveSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    (_b = this.touchStartSubscription) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    (_c = this.keyDownSubscription) === null || _c === void 0 ? void 0 : _c.unsubscribe();
    (_d = this.clickSubscription) === null || _d === void 0 ? void 0 : _d.unsubscribe();
    this.screenSaverStatus = false; // this.onInteraction(10);
    // clearInterval(this.clearScreenSaverInterval);
  }

  getSettings() {
    var _this8 = this;

    return (0,D_Cropicco_cropicco_pi_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let settingApiCallData = yield new Promise((resolve, reject) => {
        _this8.http.get(_this8.url + "/getsettings").subscribe({
          next: data => {
            resolve(data);
          },
          error: error => {
            console.log(error);
            resolve(false);
          }
        });
      });
      const data = settingApiCallData['system_setting'];
      console.log("screen--->>>>>>", data);

      if (Boolean(Number(data.screensaver_status))) {
        console.log("data.screensaver_status", data.screensaver_status);
        _this8.idleAfterSeconds = Number(data.screensaver_time) * 60 * 1000;
        console.log("Entering last loop");

        _this8.screenSaverFn(2);
      } else {
        console.log("Entering last else loop");

        _this8.screenSaverUnSubscribeFn();
      }
    })();
  }

}

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_core_screen_saver_service__WEBPACK_IMPORTED_MODULE_9__.ScreenSaverService));
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵNgOnChangesFeature"]],
  decls: 4,
  vars: 3,
  consts: [[1, "home-body"], ["class", "light-bar", 3, "ngStyle", 4, "ngIf"], ["class", "content-space", 4, "ngIf"], ["style", "width: 100%;height: 100%;", 4, "ngIf"], [1, "light-bar", 3, "ngStyle"], [1, "light-backdrop"], ["class", "switch-panel", 4, "ngIf"], ["class", "birghtness-slider", 4, "ngIf"], [1, "brightness-button"], ["width", "50", "height", "50", "viewBox", "0 0 61.165 61.165"], ["id", "Icon_ionic-ios-sunny", "data-name", "Icon ionic-ios-sunny", "transform", "translate(-3.375 -3.375)"], ["id", "brightness_icon", "data-name", "brightness_icon", "transform", "translate(3.375 3.375)"], ["id", "Path_398", "data-name", "Path 398", "d", "M19.181,27.211a2.265,2.265,0,0,0-2.264,2.264v6.793a2.264,2.264,0,0,0,4.529,0V29.475A2.265,2.265,0,0,0,19.181,27.211Z", "transform", "translate(11.401 22.632)", "fill", "#fff"], ["id", "Path_399", "data-name", "Path 399", "d", "M19.181,3.375a2.265,2.265,0,0,0-2.264,2.264v6.793a2.264,2.264,0,0,0,4.529,0V5.639A2.265,2.265,0,0,0,19.181,3.375Z", "transform", "translate(11.401 -3.375)", "fill", "#fff"], ["id", "Path_400", "data-name", "Path 400", "d", "M14.7,19.181a2.265,2.265,0,0,0-2.264-2.264H5.639a2.264,2.264,0,0,0,0,4.529h6.793A2.265,2.265,0,0,0,14.7,19.181Z", "transform", "translate(-3.375 11.401)", "fill", "#fff"], ["id", "Path_401", "data-name", "Path 401", "d", "M36.268,16.917H29.475a2.264,2.264,0,1,0,0,4.529h6.793a2.264,2.264,0,0,0,0-4.529Z", "transform", "translate(22.632 11.401)", "fill", "#fff"], ["id", "Path_402", "data-name", "Path 402", "d", "M14.413,24.195a2.258,2.258,0,0,0-1.6.662L8,29.664a2.266,2.266,0,0,0,3.205,3.205l4.808-4.808a2.264,2.264,0,0,0-1.6-3.867Z", "transform", "translate(0.952 19.341)", "fill", "#fff"], ["id", "Path_403", "data-name", "Path 403", "d", "M26.459,16.677a2.258,2.258,0,0,0,1.6-.662l4.808-4.808A2.266,2.266,0,0,0,29.664,8L24.856,12.81a2.264,2.264,0,0,0,1.6,3.867Z", "transform", "translate(19.341 0.952)", "fill", "#fff"], ["id", "Path_404", "data-name", "Path 404", "d", "M11.208,8A2.266,2.266,0,0,0,8,11.208l4.808,4.808a2.266,2.266,0,0,0,3.205-3.205Z", "transform", "translate(0.952 0.952)", "fill", "#fff"], ["id", "Path_405", "data-name", "Path 405", "d", "M28.061,24.856a2.266,2.266,0,0,0-3.205,3.205l4.808,4.808a2.266,2.266,0,0,0,3.205-3.205Z", "transform", "translate(19.341 19.341)", "fill", "#fff"], ["id", "Path_406", "data-name", "Path 406", "d", "M25.365,11.25A14.115,14.115,0,1,0,39.48,25.365,14.137,14.137,0,0,0,25.365,11.25Z", "transform", "translate(8.592 8.592)", "fill", "#fff"], [1, "switch-panel"], [1, "switch-backdrop"], ["size", "small", 3, "ngModel", "ngModelChange", "change"], [1, "birghtness-slider"], [3, "ngModel", "options", "ngModelChange", "userChangeEnd"], [1, "content-space"], [1, "top-bar", 2, "justify-content", "center"], ["style", "position: absolute;left:225px", 4, "ngIf"], [1, "clock-pane"], [2, "margin-top", "4px"], [2, "margin-top", "-15px"], [2, "display", "flex", "align-items", "center", "gap", "5px", "position", "absolute", "right", "0"], ["style", "display: flex;column-gap: 5px;height: 35px;", 4, "ngIf"], ["style", "display: flex;gap: 5px;height: 35px;", 4, "ngIf"], ["class", "p-r-10", 3, "click", 4, "ngIf"], ["style", "width: 2.3rem;padding-right: 5px;", "alt", "", 3, "src", 4, "ngIf"], [1, "p-r-10", 3, "click"], ["src", "../assets/images/info-icon-23.png", "alt", "", 1, "info", "bounce", 2, "width", "35px", "height", "35px"], [2, "z-index", "0 !important"], ["mainContent", ""], [3, "meterData", "allData", 4, "ngIf"], [3, "screenSaverData", 4, "ngIf"], [4, "ngIf"], [1, "footer"], [2, "margin-right", "20px", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "x", "0px", "y", "0px", "width", "80", "height", "80", "viewBox", "0 0 48 48", 2, "fill", "#000000"], ["id", "L4rKfs~Qrm~k0Pk8MRsoza_s5NUIabJrb4C_gr1", "x1", "32.012", "x2", "15.881", "y1", "32.012", "y2", "15.881", "gradientUnits", "userSpaceOnUse"], ["offset", "0", "stop-color", "#fff"], ["offset", ".242", "stop-color", "#f2f2f2"], ["offset", "1", "stop-color", "#ccc"], ["cx", "24", "cy", "24", "r", "11.5", "fill", "url(#L4rKfs~Qrm~k0Pk8MRsoza_s5NUIabJrb4C_gr1)"], ["id", "L4rKfs~Qrm~k0Pk8MRsozb_s5NUIabJrb4C_gr2", "x1", "17.45", "x2", "28.94", "y1", "17.45", "y2", "28.94", "gradientUnits", "userSpaceOnUse"], ["offset", "0", "stop-color", "#0d61a9"], ["offset", ".363", "stop-color", "#0e5fa4"], ["offset", ".78", "stop-color", "#135796"], ["offset", "1", "stop-color", "#16528c"], ["cx", "24", "cy", "24", "r", "7", "fill", "url(#L4rKfs~Qrm~k0Pk8MRsozb_s5NUIabJrb4C_gr2)"], ["id", "L4rKfs~Qrm~k0Pk8MRsozc_s5NUIabJrb4C_gr3", "x1", "5.326", "x2", "38.082", "y1", "5.344", "y2", "38.099", "gradientUnits", "userSpaceOnUse"], ["offset", "0", "stop-color", "#889097"], ["offset", ".331", "stop-color", "#848c94"], ["offset", ".669", "stop-color", "#78828b"], ["offset", "1", "stop-color", "#64717c"], ["fill", "url(#L4rKfs~Qrm~k0Pk8MRsozc_s5NUIabJrb4C_gr3)", "d", "M43.407,19.243c-2.389-0.029-4.702-1.274-5.983-3.493c-1.233-2.136-1.208-4.649-0.162-6.693 c-2.125-1.887-4.642-3.339-7.43-4.188C28.577,6.756,26.435,8,24,8s-4.577-1.244-5.831-3.131c-2.788,0.849-5.305,2.301-7.43,4.188 c1.046,2.044,1.071,4.557-0.162,6.693c-1.281,2.219-3.594,3.464-5.983,3.493C4.22,20.77,4,22.358,4,24 c0,1.284,0.133,2.535,0.364,3.752c2.469-0.051,4.891,1.208,6.213,3.498c1.368,2.37,1.187,5.204-0.22,7.345 c2.082,1.947,4.573,3.456,7.34,4.375C18.827,40.624,21.221,39,24,39s5.173,1.624,6.303,3.971c2.767-0.919,5.258-2.428,7.34-4.375 c-1.407-2.141-1.588-4.975-0.22-7.345c1.322-2.29,3.743-3.549,6.213-3.498C43.867,26.535,44,25.284,44,24 C44,22.358,43.78,20.77,43.407,19.243z M24,34.5c-5.799,0-10.5-4.701-10.5-10.5c0-5.799,4.701-10.5,10.5-10.5S34.5,18.201,34.5,24 C34.5,29.799,29.799,34.5,24,34.5z"], [2, "width", "30", "margin-right", "20px", 3, "click"], ["x", "0px", "y", "0px", "width", "80", "height", "80", "viewBox", "0 0 72 72"], ["d", "M57.39,45.92a8,8,0,0,0-7.72-2.06L37.61,31.8,46,23.44l.84.84a1,1,0,0,0,1.42,0l1.4-1.4,3.64,3.81A1,1,0,0,0,54,27a.92.92,0,0,0,.33-.06,1,1,0,0,0,.67-.86l0-.53a17.27,17.27,0,0,0-5-13.62l-1.79-1.79a1,1,0,0,0-1.42,0l-1.38,1.38a4.48,4.48,0,0,1-1-3.13A4,4,0,0,0,43.13,5a4.09,4.09,0,0,0-5.62.27l-2.3,2.31c-1.79,1.79-2,4.27-.55,5.9a4,4,0,0,0,3.4,1.3,4.36,4.36,0,0,1,3.08,1l-.68.68a1,1,0,0,0,0,1.42l.1.1L32.2,26.39,20,14.17a8,8,0,0,0-10.4-9.6,1,1,0,0,0-.64.73,1,1,0,0,0,.27.92l2.35,2.35A2,2,0,0,1,8.73,11.4L6.38,9.05a1,1,0,0,0-1.65.37A8,8,0,0,0,6.82,18a8.14,8.14,0,0,0,7.49,1.85L26.54,32l-7.78,7.79.07.07A6,6,0,0,0,14,41.6L5.47,50.08A6,6,0,0,0,14,58.57l8.49-8.49a6,6,0,0,0,1.7-4.81L32,37.46,44,49.53A8.11,8.11,0,0,0,45.88,57a8,8,0,0,0,5.85,2.55,8.09,8.09,0,0,0,2.69-.46,1,1,0,0,0,.37-1.65l-2.35-2.35a2,2,0,0,1,0-2.82,2,2,0,0,1,2.83,0l2.35,2.34a1,1,0,0,0,.93.27,1,1,0,0,0,.72-.64A8,8,0,0,0,57.39,45.92ZM37.85,12.84a2,2,0,0,1-1.71-.66c-.74-.83-.55-2.12.48-3.15l2.31-2.31a2.11,2.11,0,0,1,2.86-.19,2,2,0,0,1,.66,1.68,6.71,6.71,0,0,0,2.09,5.3l.16.17a1,1,0,0,0,1.42,0l1.41-1.42,1.08,1.08A15.29,15.29,0,0,1,53.08,23.6l-2.7-2.84a1.08,1.08,0,0,0-.72-.31h0a1,1,0,0,0-.7.3l-1.42,1.41-.84-.85-4-4-.11-.1.71-.71a1,1,0,0,0,0-1.41L43,14.83A6.42,6.42,0,0,0,37.85,12.84ZM42,19.44,44.56,22,36.2,30.39,33.61,27.8ZM21,48.67l-8.49,8.48A4,4,0,1,1,6.88,51.5L15.37,43A4,4,0,0,1,21,43,4,4,0,0,1,21,48.67Zm2.47-5.58a5.71,5.71,0,0,0-1.06-1.49,6,6,0,0,0-1.54-1.09l7.06-7L30.54,36ZM57.72,51.9l-1-1a4.1,4.1,0,0,0-5.66,0,4,4,0,0,0,0,5.66l1,1a5.94,5.94,0,0,1-4.72-1.9,6.11,6.11,0,0,1-1.23-6.09,1,1,0,0,0-.24-1L15.3,18a1,1,0,0,0-.71-.29.86.86,0,0,0-.32.05A6.11,6.11,0,0,1,8.18,16.5a6,6,0,0,1-1.9-4.72l1,1A4,4,0,0,0,13,7.15l-1-1a6,6,0,0,1,6,8,1,1,0,0,0,.23,1.05L48.68,45.7a1,1,0,0,0,1,.23,6,6,0,0,1,8,6Z", "data-name", "02 Wrench Hammer, Fix, Hammer, Repair", "fill", "#595bd4", 1, "color000000", "svgShape"], ["xmlns", "http://www.w3.org/2000/svg", "x", "0px", "y", "0px", "width", "70", "height", "70", "viewBox", "0 0 172 172", 2, "fill", "#000000"], ["fill", "none", "fill-rule", "nonzero", "stroke", "none", "stroke-width", "1", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke-miterlimit", "10", "stroke-dasharray", "", "stroke-dashoffset", "0", "font-family", "none", "font-weight", "none", "font-size", "none", "text-anchor", "none", 2, "mix-blend-mode", "normal"], ["d", "M0,172v-172h172v172z", "fill", "none"], ["d", "M150.5,139.75h-129v-57.33333l64.5,-60.91667l64.5,60.91667z", "fill", "#e8eaf6"], ["d", "M139.75,75.25l-17.91667,-17.91667v-25.08333h17.91667zM21.5,139.75h129v17.91667h-129z", "fill", "#c5cae9"], ["d", "M86,15.40833l-71.66667,66.65l7.16667,7.88333l64.5,-59.84167l64.5,59.84167l7.16667,-7.88333z", "fill", "#094786"], ["d", "M64.5,100.33333h43v57.33333h-43z", "fill", "#3498db"], ["d", "M75.25,60.91667h21.5v21.5h-21.5z", "fill", "#01579b"], ["d", "M98.54167,127.20833c-1.075,0 -1.79167,0.71667 -1.79167,1.79167v7.16667c0,1.075 0.71667,1.79167 1.79167,1.79167c1.075,0 1.79167,-0.71667 1.79167,-1.79167v-7.16667c0,-1.075 -0.71667,-1.79167 -1.79167,-1.79167z", "fill", "#ff8a65"], [2, "position", "absolute", "left", "225px"], [2, "display", "flex", "column-gap", "5px", "height", "35px"], [3, "click"], ["src", "../assets/images/user_guide.png", "alt", "", 1, "info", "bounce", 2, "height", "38px", "width", "35px", "margin", "0"], ["src", "../assets/images/graph.svg", "alt", "", 1, "info", "bounce", 2, "height", "34px", "width", "35px"], ["src", "../assets/images/Flush_new.svg", "alt", "Flush", 1, "info", "bounce", 2, "height", "45px", "width", "45px", "margin-top", "-1px", "margin-left", "-3px"], ["src", "../assets/images/Topup_new.svg", "alt", "Topup", 1, "info", "bounce", 2, "height", "45px", "width", "45px", "margin-top", "-1px", "margin-left", "-3px"], [2, "display", "flex", "gap", "5px", "height", "35px"], ["mat-button", "", "disableOneSec", "", 2, "padding", "0", "min-width", "auto", 3, "ngClass", "click"], ["src", "../assets/images/update.png", "alt", "", 1, "update", "bounce"], ["src", "../assets/images/reset-error.png", "alt", "", 1, "info", "bounce"], ["alt", "", 2, "width", "2.3rem", "padding-right", "5px", 3, "src"], [3, "meterData", "allData"], [3, "screenSaverData"], [2, "width", "100%", "height", "100%"], [1, "screen-save-element", 3, "ngStyle"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, AppComponent_div_1_Template, 17, 5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, AppComponent_div_2_Template, 58, 17, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, AppComponent_div_3_Template, 2, 3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx.showScreenSaver);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx.showScreenSaver);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.showScreenSaver);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgStyle, ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_10__.UiSwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgModel, _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_22__["ɵa"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatAnchor, src_shared_directives_disable_one_sec_directive__WEBPACK_IMPORTED_MODULE_11__.DisableOneSecDirective, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgClass, _mainstatus_mainstatus_component__WEBPACK_IMPORTED_MODULE_12__.MainstatusComponent, _settings_settings_component__WEBPACK_IMPORTED_MODULE_13__.SettingsComponent, _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_14__.MaintenanceComponent, _info_info_component__WEBPACK_IMPORTED_MODULE_15__.InfoComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.DatePipe],
  styles: [".home-body[_ngcontent-%COMP%] {\r\n  width: 1280px;\r\n  height: 350px;\r\n  margin: 0;\r\n  background-color: #ffffff;\r\n  display: flex;\r\n  flex-direction: row;\r\n  overflow: hidden;\r\n  color: #262626;\r\n}\r\n\r\nimg.info[_ngcontent-%COMP%] {\r\n  height: 45px;\r\n  width: 45px;\r\n  transition: all 0.3s;\r\n  margin: 5px;\r\n}\r\n\r\nimg.update[_ngcontent-%COMP%] {\r\n  height: 2.5rem;\r\n  width: 2.5rem;\r\n  \r\n  transition: all 0.3s;\r\n}\r\n\r\n.disable-class[_ngcontent-%COMP%] {\r\n  pointer-events: none !important;\r\n  cursor: pointer !important;\r\n}\r\n\r\n.bounce[_ngcontent-%COMP%]:active {\r\n  box-shadow: 0px 4px 8px rgba(darken(dodgerblue, 30%));\r\n  transform: scale(.58)\r\n}\r\n\r\n.light-bar[_ngcontent-%COMP%] {\r\n  width: 80px;\r\n  padding: 5px;\r\n}\r\n\r\n.light-backdrop[_ngcontent-%COMP%] {\r\n  width: 70px;\r\n  height: 480px;\r\n  background-color: #ffffff;\r\n  border-radius: 60px;\r\n  padding-top: 25px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.light-backdrop[_ngcontent-%COMP%]   .switch-backdrop[_ngcontent-%COMP%] {\r\n  height: 50px;\r\n  margin: 5px;\r\n  border-radius: 10px;\r\n  display: block;\r\n  align-items: center;\r\n  background-color: #ffffff;\r\n  \r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);\r\n  padding-top: 15px;\r\n}\r\n\r\n.light-backdrop[_ngcontent-%COMP%]   .switch-backdrop[_ngcontent-%COMP%]    > ui-switch[_ngcontent-%COMP%] {\r\n  margin: 13px;\r\n}\r\n\r\n\r\n\r\n.birghtness-slider[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n}\r\n\r\n.birghtness-slider[_ngcontent-%COMP%]    > ngx-slider[_ngcontent-%COMP%] {\r\n  \r\n  margin-left: 12px;\r\n  height: 270px;\r\n}\r\n\r\n.light-backdrop[_ngcontent-%COMP%]   .brightness-button[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: 60px;\r\n  margin: 5px;\r\n  margin-top: 300px;\r\n  border-radius: 10px;\r\n  display: block;\r\n  align-items: center;\r\n  background-color: #6d6d6d;\r\n  padding: 5px;\r\n  \r\n}\r\n\r\n.content-space[_ngcontent-%COMP%] {\r\n  width: 1200px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  \r\n  \r\n}\r\n\r\n.content-space[_ngcontent-%COMP%]    > .top-bar[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  height: 50px;\r\n  width: 1200px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  \r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n}\r\n\r\n.top-bar[_ngcontent-%COMP%]    > .notification-pane[_ngcontent-%COMP%] {\r\n  width: 400px;\r\n  height: 100%;\r\n  border-radius: 30px;\r\n  background-color: #696969;\r\n  \r\n}\r\n\r\n.top-bar[_ngcontent-%COMP%]    > .warning-pane[_ngcontent-%COMP%] {\r\n  width: 400px;\r\n  height: 100%;\r\n  border-radius: 30px;\r\n  background-color: #ffffff;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n}\r\n\r\n.notification-icon[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.warning-icon[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.top-bar[_ngcontent-%COMP%]    > .clock-pane[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n  height: 100%;\r\n  border-radius: 30px;\r\n  text-align: center;\r\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n  color: black\r\n}\r\n\r\n.data-space[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.data-space[_ngcontent-%COMP%]    > .data-circles[_ngcontent-%COMP%] {\r\n  padding-top: 30px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  \r\n  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n  \r\n}\r\n\r\n.data-circles[_ngcontent-%COMP%]    > .water-status-circle[_ngcontent-%COMP%] {\r\n  margin-left: 80px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.data-circles[_ngcontent-%COMP%]    > .water-status-circle[_ngcontent-%COMP%]    > apx-chart[_ngcontent-%COMP%] {\r\n  margin-top: -10px;\r\n  height: 350px;\r\n  position: fixed;\r\n  \r\n  \r\n}\r\n\r\n.water-status-circle[_ngcontent-%COMP%]    > .water-status-data[_ngcontent-%COMP%] {\r\n  margin-top: 120px;\r\n  margin-left: 45px;\r\n  color: black;\r\n  \r\n  \r\n}\r\n\r\n.data-circles[_ngcontent-%COMP%]    > .ambience-status-circle[_ngcontent-%COMP%] {\r\n  margin-left: 280px;\r\n  height: 250px;\r\n  position: fixed;\r\n  \r\n}\r\n\r\n.data-circles[_ngcontent-%COMP%]    > .ambience-status-circle[_ngcontent-%COMP%]    > apx-chart[_ngcontent-%COMP%] {\r\n  margin-top: -170px;\r\n  position: fixed;\r\n  height: 200px;\r\n  \r\n  \r\n}\r\n\r\n.ambience-status-circle[_ngcontent-%COMP%]    > .ambience-status-data[_ngcontent-%COMP%] {\r\n  color: black;\r\n  margin-top: 80px;\r\n  margin-left: 180px;\r\n  \r\n  \r\n}\r\n\r\n.content-space[_ngcontent-%COMP%]    > .footer[_ngcontent-%COMP%] {\r\n  height: 80px;\r\n  width: 1200px;\r\n  margin-top: 310px;\r\n  position: fixed;\r\n  display: flex;\r\n  padding: 5px;\r\n  flex-direction: row-reverse;\r\n  background-color: #ffffff;\r\n  \r\n}\r\n\r\n.screen-save-element[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-size: cover;\r\n  background-position: center;\r\n  transition: background-image 0.5s ease-in-out;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLG9CQUFvQjtFQUNwQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UscURBQXFEO0VBQ3JEO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLDBDQUEwQztFQUMxQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixvQkFBb0I7RUFDcEIsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QiwwQ0FBMEM7RUFDMUMsYUFBYTtFQUNiLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFHQUFxRztFQUNyRztBQUNGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsc0VBQXNFO0VBQ3RFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLCtDQUErQztFQUMvQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGVBQWU7RUFDZiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDZDQUE2QztBQUMvQyIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLWJvZHkge1xyXG4gIHdpZHRoOiAxMjgwcHg7XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxuICBtYXJnaW46IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjb2xvcjogIzI2MjYyNjtcclxufVxyXG5cclxuaW1nLmluZm8ge1xyXG4gIGhlaWdodDogNDVweDtcclxuICB3aWR0aDogNDVweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuaW1nLnVwZGF0ZSB7XHJcbiAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgd2lkdGg6IDIuNXJlbTtcclxuICAvKiBtYXJnaW4tdG9wOiAxMnB4OyAqL1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4uZGlzYWJsZS1jbGFzcyB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvdW5jZTphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoZGFya2VuKGRvZGdlcmJsdWUsIDMwJSkpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoLjU4KVxyXG59XHJcblxyXG4ubGlnaHQtYmFyIHtcclxuICB3aWR0aDogODBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5saWdodC1iYWNrZHJvcCB7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiA0ODBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDYwcHg7XHJcbiAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ubGlnaHQtYmFja2Ryb3AgLnN3aXRjaC1iYWNrZHJvcCB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIC8qIHotaW5kZXg6IDEwOyAqL1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxufVxyXG5cclxuLmxpZ2h0LWJhY2tkcm9wIC5zd2l0Y2gtYmFja2Ryb3AgPiB1aS1zd2l0Y2gge1xyXG4gIG1hcmdpbjogMTNweDtcclxufVxyXG5cclxuLyogLnN3aXRjaC1wYW5lbHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59ICovXHJcblxyXG4uYmlyZ2h0bmVzcy1zbGlkZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5iaXJnaHRuZXNzLXNsaWRlciA+IG5neC1zbGlkZXIge1xyXG4gIC8qIG1hcmdpbi10b3A6IDIwcHg7ICovXHJcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgaGVpZ2h0OiAyNzBweDtcclxufVxyXG5cclxuLmxpZ2h0LWJhY2tkcm9wIC5icmlnaHRuZXNzLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBtYXJnaW46IDVweDtcclxuICBtYXJnaW4tdG9wOiAzMDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZkNmQ2ZDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgLyogcGFkZGluZy10b3A6IDFweDsgKi9cclxufVxyXG5cclxuLmNvbnRlbnQtc3BhY2Uge1xyXG4gIHdpZHRoOiAxMjAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC8qIGhlaWdodDogNDgwcHg7ICovXHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlOyAqL1xyXG59XHJcblxyXG4uY29udGVudC1zcGFjZSA+IC50b3AtYmFyIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogMTIwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLyogY29sb3I6ICNGRkZGRkY7ICovXHJcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4udG9wLWJhciA+IC5ub3RpZmljYXRpb24tcGFuZSB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2OTY5Njk7XHJcbiAgLyogbWFyZ2luLWxlZnQ6IDEwcHg7ICovXHJcbn1cclxuXHJcbi50b3AtYmFyID4gLndhcm5pbmctcGFuZSB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLWljb24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi53YXJuaW5nLWljb24ge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4udG9wLWJhciA+IC5jbG9jay1wYW5lIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiBibGFja1xyXG59XHJcblxyXG4uZGF0YS1zcGFjZSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmRhdGEtc3BhY2UgPiAuZGF0YS1jaXJjbGVzIHtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgLyogcGFkZGluZy1sZWZ0OiAxMDBweDsgKi9cclxuICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGFxdWE7ICovXHJcbn1cclxuXHJcbi5kYXRhLWNpcmNsZXMgPiAud2F0ZXItc3RhdHVzLWNpcmNsZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZGF0YS1jaXJjbGVzID4gLndhdGVyLXN0YXR1cy1jaXJjbGUgPiBhcHgtY2hhcnQge1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIGhlaWdodDogMzUwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIC8qIHotaW5kZXg6IDk5OTsgKi9cclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5OSwgMjU1LCAyNDksIDAuNSk7ICovXHJcbn1cclxuXHJcbi53YXRlci1zdGF0dXMtY2lyY2xlID4gLndhdGVyLXN0YXR1cy1kYXRhIHtcclxuICBtYXJnaW4tdG9wOiAxMjBweDtcclxuICBtYXJnaW4tbGVmdDogNDVweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsIDExOCwgMjIzLDAuNSk7ICovXHJcbiAgLyogei1pbmRleDogOTsgKi9cclxufVxyXG5cclxuLmRhdGEtY2lyY2xlcyA+IC5hbWJpZW5jZS1zdGF0dXMtY2lyY2xlIHtcclxuICBtYXJnaW4tbGVmdDogMjgwcHg7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzMsIDk3LCA3MywwLjUpOyAqL1xyXG59XHJcblxyXG4uZGF0YS1jaXJjbGVzID4gLmFtYmllbmNlLXN0YXR1cy1jaXJjbGUgPiBhcHgtY2hhcnQge1xyXG4gIG1hcmdpbi10b3A6IC0xNzBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICAvKiB6LWluZGV4OiA5OTkxOyAqL1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7ICovXHJcbn1cclxuXHJcbi5hbWJpZW5jZS1zdGF0dXMtY2lyY2xlID4gLmFtYmllbmNlLXN0YXR1cy1kYXRhIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgbWFyZ2luLXRvcDogODBweDtcclxuICBtYXJnaW4tbGVmdDogMTgwcHg7XHJcbiAgLyogei1pbmRleDogMTk7ICovXHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NCwgNjQsIDIzMCwgMC41KTsgKi9cclxufVxyXG5cclxuLmNvbnRlbnQtc3BhY2UgPiAuZm9vdGVyIHtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW4tdG9wOiAzMTBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4OSwgMTkwLCA5NCwgMC41KSAqL1xyXG59XHJcblxyXG4uc2NyZWVuLXNhdmUtZWxlbWVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMC41cyBlYXNlLWluLW91dDtcclxufSJdfQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings/settings.component */ 4586);
/* harmony import */ var _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maintenance/maintenance.component */ 1499);
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-circle-progress */ 1685);
/* harmony import */ var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toggle-switch */ 8853);
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular-slider/ngx-slider */ 2102);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-apexcharts */ 4664);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1288);
/* harmony import */ var _mainstatus_mainstatus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mainstatus/mainstatus.component */ 5121);
/* harmony import */ var _keypad_keypad_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./keypad/keypad.component */ 8830);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var ng_qrcode__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-qrcode */ 2211);
/* harmony import */ var _keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./keyboard/keyboard.component */ 4810);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var src_assets_material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/assets/material/material.module */ 1981);
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/shared/shared.module */ 8395);
/* harmony import */ var angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-onscreen-material-keyboard */ 4909);
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./info/info.component */ 3050);
/* harmony import */ var src_shared_directives_disable_one_sec_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/shared/directives/disable-one-sec.directive */ 7619);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng2-pdf-viewer */ 9035);
/* harmony import */ var src_core_screen_saver_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/core/screen-saver.service */ 3160);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2316);










// import { NgVirtualKeyboardModule } from '@protacon/ng-virtual-keyboard';














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [
        _keypad_keypad_component__WEBPACK_IMPORTED_MODULE_5__.KeypadComponent,
        src_core_screen_saver_service__WEBPACK_IMPORTED_MODULE_11__.ScreenSaverService
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
            ng_circle_progress__WEBPACK_IMPORTED_MODULE_14__.NgCircleProgressModule.forRoot({
                // set defaults here
                radius: 100,
                outerStrokeWidth: 16,
                innerStrokeWidth: 8,
                outerStrokeColor: "#209100",
                innerStrokeColor: "#C7E596",
                animationDuration: 200
            }),
            ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__.UiSwitchModule,
            _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_15__.NgxSliderModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_16__.NgApexchartsModule,
            angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_17__.MatKeyboardModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModalModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
            ng_qrcode__WEBPACK_IMPORTED_MODULE_20__.QrCodeModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule,
            src_assets_material_material_module__WEBPACK_IMPORTED_MODULE_7__.MaterialModule,
            src_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule,
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_22__.PdfViewerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _settings_settings_component__WEBPACK_IMPORTED_MODULE_1__.SettingsComponent,
        _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_2__.MaintenanceComponent,
        _mainstatus_mainstatus_component__WEBPACK_IMPORTED_MODULE_4__.MainstatusComponent,
        _keypad_keypad_component__WEBPACK_IMPORTED_MODULE_5__.KeypadComponent,
        _keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_6__.KeyboardComponent,
        _info_info_component__WEBPACK_IMPORTED_MODULE_9__.InfoComponent,
        src_shared_directives_disable_one_sec_directive__WEBPACK_IMPORTED_MODULE_10__.DisableOneSecDirective], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, ng_circle_progress__WEBPACK_IMPORTED_MODULE_14__.NgCircleProgressModule, ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__.UiSwitchModule,
        _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_15__.NgxSliderModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_16__.NgApexchartsModule,
        angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_17__.MatKeyboardModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModalModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
        ng_qrcode__WEBPACK_IMPORTED_MODULE_20__.QrCodeModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule,
        src_assets_material_material_module__WEBPACK_IMPORTED_MODULE_7__.MaterialModule,
        src_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule,
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_22__.PdfViewerModule] }); })();


/***/ }),

/***/ 4510:
/*!******************************!*\
  !*** ./src/app/chartinfo.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Apex": () => (/* binding */ Apex)
/* harmony export */ });
class Apex {
    constructor() {
        this.series = [];
        this.water_chart = {
            width: 300,
            height: 350,
            type: 'radialBar',
            redrawOnParentResize: true,
            redrawOnWindowResize: true,
            stacked: true,
            stackType: "100%",
            sparkline: {
                enabled: false
            },
            animations: {
                enabled: true,
                easing: "easeinout",
                speed: 0.5,
                animateGradually: {
                    enabled: true,
                    // delay:2
                }
            }
        };
        this.water_plotOption = {
            radialBar: {
                startAngle: -50,
                endAngle: 180,
                hollow: {
                    margin: 0,
                    size: "30%",
                    image: undefined
                },
                track: {
                    show: true,
                    startAngle: -50,
                    endAngle: 180
                },
                dataLabels: {
                    show: false
                }
            }
        };
        this.ambient_chart = {
            height: 200,
            type: 'radialBar',
            redrawOnParentResize: true,
            redrawOnWindowResize: true,
            stacked: true,
            stackType: "100%",
            sparkline: {
                enabled: false
            },
            animations: {
                enabled: true,
                easing: "easeinout",
                animateGradually: {
                    enabled: true
                }
            }
        };
        this.ambient_plotOptions = {
            radialBar: {
                startAngle: -200,
                endAngle: 60,
                hollow: {
                    margin: 0,
                    size: "20%",
                    image: undefined
                },
                track: {
                    show: true,
                    startAngle: -200,
                    endAngle: 60
                },
                dataLabels: {
                    show: false
                }
            }
        };
        this.labels = ["", "", ""];
        this.water_colors = ["#0336ff", "#29B6F6", "#FF3D00"];
        this.ambient_colors = ["#0336ff", "#FF3D00"];
    }
}

//   <!-- <circle-progress [percent]="85.8" [subtitle]="'Water Level'" [subtitleFontSize]="'12'" [radius]="50"
//   [outerStrokeWidth]="12" [innerStrokeWidth]="5" [outerStrokeColor]="'#00FFA2'" [innerStrokeColor]="'#18A572'"
//   [animation]="true" [animationDuration]="300" [toFixed]="1" [titleColor]="'#FFFF'" [titleFontSize]="'18'"
//   [titleFontWeight]="'100'" [unitsColor]="'#FFFFFF'" [units]="' %'" [unitsFontSize]="'18'"
//   [unitsFontWeight]="'100'">
// </circle-progress>
// <circle-progress [percent]="22.3" [subtitle]="'Water Temperature'" [subtitleFontSize]="'18'" [radius]="100"
//   [outerStrokeWidth]="16" [innerStrokeWidth]="8" [outerStrokeColor]="'#0058FF'" [innerStrokeColor]="'#13316B'"
//   [animation]="true" [animationDuration]="300" [toFixed]="1" [titleColor]="'#FFFF'" [titleFontSize]="'36'"
//   [titleFontWeight]="'100'" [unitsColor]="'#FFFFFF'" [units]="'°C'" [unitsFontSize]="'36'"
//   [unitsFontWeight]="'100'">
// </circle-progress>
// <circle-progress [percent]="28.3" [subtitle]="'Ambient Temperature'" [subtitleFontSize]="'12'" [radius]="75"
//   [outerStrokeWidth]="16" [innerStrokeWidth]="8" [outerStrokeColor]="'#FF6F00'" [innerStrokeColor]="'#924000'"
//   [animation]="true" [animationDuration]="300" [toFixed]="1" [titleColor]="'#FFFF'" [titleFontSize]="'32'"
//   [titleFontWeight]="'100'" [unitsColor]="'#FFFFFF'" [units]="'°C'" [unitsFontSize]="'32'"
//   [unitsFontWeight]="'100'">
// </circle-progress>
// <circle-progress [percent]="25" [subtitle]="'Humidity'" [subtitleFontSize]="'15'" [radius]="50"
//   [outerStrokeWidth]="12" [innerStrokeWidth]="5" [outerStrokeColor]="'#fefefe'" [innerStrokeColor]="'#5f5f5f'"
//   [animation]="true" [maxPercent]="50" [animationDuration]="300" [toFixed]="1" [titleColor]="'#FFFF'"
//   [titleFontSize]="'18'" [titleFontWeight]="'100'" [unitsColor]="'#FFFFFF'" [units]="' %'"
//   [unitsFontSize]="'12'" [unitsFontWeight]="'100'">
// </circle-progress> -->


/***/ }),

/***/ 3050:
/*!****************************************!*\
  !*** ./src/app/info/info.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoComponent": () => (/* binding */ InfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);



function InfoComponent_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.key, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.value, "");
} }
function InfoComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InfoComponent_ng_container_2_div_2_Template, 4, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r1.key !== "EC DOSE TIME" && data_r1.key !== "PH DOWN DOSE TIME" && data_r1.key !== "PH UP DOSE TIME");
} }
class InfoComponent {
    constructor() {
        this.infoData = [];
        this.sortOrder = ["water_ec", "water_pH", "ec_a_pump", "ec_b_pump", "ph_inc_pump", "ph_dec_pump", "chiller_state",
            "irrigation_state", "water_level", "water_flow", "supp_ec_a", "supp_ec_b", "supp_ph_inc", "supp_ph_dec", "light_stat", "light_brightness",
            "water_temperature", "ambient_temp", "ambient_humid", "error"];
    }
    ngOnInit() {
        this.initFn();
        setInterval(() => {
            this.initFn();
        }, 2000);
    }
    initFn() {
        var _a, _b;
        if ((_a = this.allData) === null || _a === void 0 ? void 0 : _a.data) {
            const ordered = Object.keys((_b = this.allData) === null || _b === void 0 ? void 0 : _b.data).sort((a, b) => this.sortOrder.indexOf(a) - this.sortOrder.indexOf(b)).reduce((obj, key) => {
                var _a;
                obj[key] = (_a = this.allData) === null || _a === void 0 ? void 0 : _a.data[key];
                return obj;
            }, {});
            const obj = [];
            for (let [key, value] of Object.entries(ordered)) {
                obj.push({
                    key: key.replace(/[^a-zA-Z ]/g, " ").toLocaleUpperCase(), value
                });
            }
            this.infoData = [];
            this.infoData = obj;
            console.log("INFODARA", this.infoData);
        }
    }
}
InfoComponent.ɵfac = function InfoComponent_Factory(t) { return new (t || InfoComponent)(); };
InfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoComponent, selectors: [["app-info"]], inputs: { meterData: "meterData", allData: "allData" }, decls: 3, vars: 1, consts: [["id", "container", 1, "mat-elevation-z8"], [1, "row-warp-class"], [4, "ngFor", "ngForOf"], ["class", "header-bg p-10", 4, "ngIf"], [1, "header-bg", "p-10"], [2, "color", "black", "font-size", "14px", "margin-top", "4px"]], template: function InfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InfoComponent_ng_container_2_Template, 3, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.infoData);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: [".header-bg[_ngcontent-%COMP%] {\r\n    color: #2565AE;\r\n    font-weight: 500;\r\n    font-size: 13px;\r\n}\r\n\r\n#container[_ngcontent-%COMP%] {\r\n    height: 14rem;\r\n    width: 73rem;\r\n    margin: 10px;\r\n    padding: 10px;\r\n}\r\n\r\n.row-warp-class[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    grid-gap: 10px;\r\n    grid-gap: 10px;\r\n    gap: 10px;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.mat-card[_ngcontent-%COMP%] {\r\n    padding: 0px;\r\n    width: 25%;\r\n    text-align: center;\r\n}\r\n\r\n.align-row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    grid-gap: 20px;\r\n    gap: 20px;\r\n    text-align: center;\r\n    justify-content: center;\r\n}\r\n\r\n.button-class[_ngcontent-%COMP%] {\r\n    border-radius: 40px;\r\n    min-width: 100px !important;\r\n}\r\n\r\n.p-10[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n}\r\n\r\n.mat-card-title[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n}\r\n\r\n.main-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    grid-gap: 20px;\r\n    gap: 20px;\r\n    margin-top: 20px;\r\n    height: 10rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGNBQVM7SUFBVCxTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQVM7SUFBVCxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsY0FBUztJQUFULFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQiIsImZpbGUiOiJpbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWJnIHtcclxuICAgIGNvbG9yOiAjMjU2NUFFO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDE0cmVtO1xyXG4gICAgd2lkdGg6IDczcmVtO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnJvdy13YXJwLWNsYXNzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBncmlkLWdhcDogMTBweDtcclxuICAgIGdhcDogMTBweDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLm1hdC1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hbGlnbi1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0dG9uLWNsYXNzIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBtaW4td2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wLTEwIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ubWFpbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGhlaWdodDogMTByZW07XHJcbn0iXX0= */"] });


/***/ }),

/***/ 4810:
/*!************************************************!*\
  !*** ./src/app/keyboard/keyboard.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyboardComponent": () => (/* binding */ KeyboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1288);
/* harmony import */ var angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-onscreen-material-keyboard */ 4909);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);





class KeyboardComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.passEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.wifipassword = "";
    }
    ngOnInit() {
    }
    submit() {
        this.passEntry.emit(this.wifipassword);
    }
    cancel() {
        this.passEntry.emit("------");
    }
}
KeyboardComponent.ɵfac = function KeyboardComponent_Factory(t) { return new (t || KeyboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal)); };
KeyboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KeyboardComponent, selectors: [["app-keyboard"]], inputs: { defVal: "defVal" }, outputs: { passEntry: "passEntry" }, decls: 9, vars: 3, consts: [[2, "text-align", "center", "padding-top", "20px", "padding-bottom", "20px"], [2, "margin", "5px", "text-align", "center"], ["type", "text", 1, "input", 3, "matKeyboard", "ngModel", "ngModelChange"], [3, "click"]], template: function KeyboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function KeyboardComponent_Template_input_ngModelChange_4_listener($event) { return ctx.wifipassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeyboardComponent_Template_button_click_5_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeyboardComponent_Template_button_click_7_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("SSID: ", ctx.defVal, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matKeyboard", "en-GB")("ngModel", ctx.wifipassword);
    } }, directives: [angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_2__.MatKeyboardDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrZXlib2FyZC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 8830:
/*!********************************************!*\
  !*** ./src/app/keypad/keypad.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeypadComponent": () => (/* binding */ KeypadComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1288);



class KeypadComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.passEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.value = "";
    }
    ngOnInit() {
        console.log("Default Val : ", this.defVal);
        this.value = "" + this.defVal;
    }
    keyPress(key) {
        switch (key) {
            case "Done":
                // console.log("Done Pressed", this.value);
                console.log("Submitting : ", this.value);
                this.passEntry.emit(this.value);
                break;
            case "Cancel":
                console.log("Restoring Default : ", this.defVal);
                this.passEntry.emit(this.defVal);
                break;
            case "Clear":
                if (this.value.length > 0) {
                    this.value = '';
                }
                break;
            default:
                this.value = this.value + key;
                break;
        }
    }
}
KeypadComponent.ɵfac = function KeypadComponent_Factory(t) { return new (t || KeypadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal)); };
KeypadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KeypadComponent, selectors: [["app-keypad"]], inputs: { defVal: "defVal" }, outputs: { passEntry: "passEntry" }, decls: 37, vars: 1, consts: [[2, "text-align", "center", "padding-top", "20px", "padding-bottom", "20px", "z-index", "2000 !important"], [2, "margin", "5px", "text-align", "center"], [1, "input", 3, "value"], ["fxLayout", "column", "fxLayoutGap", "10px", "fxLayoutAlign", "space-evenly center", 2, "padding-left", "20px", "padding-right", "20px"], ["fxFlex", "20", "fxLayout", "row", 1, "number-row"], [1, "number-button", 3, "click"], ["fxFlex", "20", 1, "number-row"], ["fxFlex", "20", 1, "number-row1"]], template: function KeypadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeypadComponent_Template_button_click_5_listener() { return ctx.keyPress(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeypadComponent_Template_button_click_7_listener() { return ctx.keyPress(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeypadComponent_Template_button_click_9_listener() { return ctx.keyPress(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeypadComponent_Template_button_click_12_listener() { return ctx.keyPress(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeypadComponent_Template_button_click_14_listener() { return ctx.keyPress(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeypadComponent_Template_button_click_16_listener() { return ctx.keyPress(6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeypadComponent_Template_button_click_19_listener() { return ctx.keyPress(7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeypadComponent_Template_button_click_21_listener() { return ctx.keyPress(8); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeypadComponent_Template_button_click_23_listener() { return ctx.keyPress(9); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeypadComponent_Template_button_click_26_listener() { return ctx.keyPress("."); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeypadComponent_Template_button_click_28_listener() { return ctx.keyPress(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeypadComponent_Template_button_click_30_listener() { return ctx.keyPress("Clear"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeypadComponent_Template_button_click_33_listener() { return ctx.keyPress("Done"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Enter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeypadComponent_Template_button_click_35_listener() { return ctx.keyPress("Cancel"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.value);
    } }, styles: [".number-button[_ngcontent-%COMP%] {\r\n  height: 40px;\r\n  width: 80px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: larger;\r\n}\r\n\r\n.number-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  \r\n  justify-content: space-around;\r\n}\r\n\r\n.number-row[_ngcontent-%COMP%] > button[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 50px;\r\n}\r\n\r\n.number-row1[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  \r\n  display: flex;\r\n  flex-direction: row;\r\n  \r\n  justify-content: space-around;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtleXBhZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiw2QkFBNkI7QUFDL0IiLCJmaWxlIjoia2V5cGFkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubnVtYmVyLWJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA4MHB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG59XHJcblxyXG4ubnVtYmVyLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC8qIGhlaWdodDogNDBweDsgKi9cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLm51bWJlci1yb3c+YnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5udW1iZXItcm93MSB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICAvKiB3aWR0aDogMzAwcHg7ICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC8qIGhlaWdodDogNDBweDsgKi9cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 5121:
/*!****************************************************!*\
  !*** ./src/app/mainstatus/mainstatus.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainstatusComponent": () => (/* binding */ MainstatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3882);


// import { Apex } from './chartinfo';
class MainstatusComponent {
    // apexChart: any = new Apex();
    // meterData:any = {'water':[9,35,20],'ambient':[28,87.5]}
    constructor(http) {
        this.http = http;
    }
    ngOnChanges(changes) {
    }
    ngOnInit() {
        console.log("meterData", this.allData);
    }
}
MainstatusComponent.ɵfac = function MainstatusComponent_Factory(t) { return new (t || MainstatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
MainstatusComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainstatusComponent, selectors: [["app-mainstatus"]], inputs: { meterData: "meterData", allData: "allData" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 137, vars: 11, consts: [[1, "grid-container", 2, "z-index", "0 !important"], [1, "grid-item"], ["width", "40", "height", "100", "enable-background", "new 0 0 512 512", "viewBox", "0 0 512 512"], ["d", "M220.242 338.358c-36.954 0-67.018-30.067-67.018-67.025 0-36.957 30.064-67.023 67.018-67.023 36.957 0 67.024 30.066 67.024 67.023 0 30.197-20.36 56.812-49.514 64.721C231.968 337.585 226.084 338.358 220.242 338.358zM220.242 212.31c-32.542 0-59.018 26.478-59.018 59.023 0 32.547 26.475 59.025 59.018 59.025 5.151 0 10.346-.684 15.44-2.032 25.652-6.959 43.584-30.398 43.584-56.993C279.267 238.787 252.789 212.31 220.242 212.31zM458.938 463.743c-22.512 0-40.827-18.318-40.827-40.834 0-22.512 18.315-40.827 40.827-40.827s40.827 18.315 40.827 40.827C499.766 445.425 481.45 463.743 458.938 463.743zM458.938 390.082c-18.101 0-32.827 14.727-32.827 32.827 0 18.104 14.727 32.834 32.827 32.834s32.827-14.729 32.827-32.834C491.766 404.809 477.039 390.082 458.938 390.082zM79.298 446.799c-23.308 0-42.271-18.963-42.271-42.271s18.962-42.271 42.271-42.271c11.771 0 22.666 4.718 30.679 13.285 7.427 7.77 11.534 18.075 11.534 28.986C121.51 427.836 102.574 446.799 79.298 446.799zM79.298 370.256c-18.897 0-34.271 15.374-34.271 34.271s15.374 34.271 34.271 34.271c18.865 0 34.212-15.374 34.212-34.271 0-8.843-3.319-17.185-9.347-23.49C97.65 374.073 88.83 370.256 79.298 370.256zM53.765 229.976c-22.512 0-40.828-18.315-40.828-40.828 0-22.516 18.315-40.833 40.828-40.833s40.827 18.317 40.827 40.833C94.592 211.66 76.277 229.976 53.765 229.976zM53.765 156.314c-18.101 0-32.828 14.729-32.828 32.833 0 18.102 14.727 32.828 32.828 32.828s32.827-14.727 32.827-32.828C86.592 171.043 71.866 156.314 53.765 156.314zM270.529 487.833c-17.045 0-30.912-13.87-30.912-30.918 0-17.045 13.867-30.912 30.912-30.912 17.049 0 30.918 13.867 30.918 30.912C301.447 473.963 287.578 487.833 270.529 487.833zM270.529 434.003c-12.634 0-22.912 10.278-22.912 22.912 0 12.637 10.278 22.918 22.912 22.918 12.637 0 22.918-10.281 22.918-22.918C293.447 444.281 283.166 434.003 270.529 434.003zM364.016 136.554c-12.34 0-24.059-3.914-33.89-11.318-14.092-10.622-22.504-27.493-22.504-45.131 0-31.129 25.298-56.453 56.394-56.453 31.124 0 56.445 25.324 56.445 56.453C420.461 111.23 395.14 136.554 364.016 136.554zM364.016 31.651c-26.685 0-48.394 21.735-48.394 48.453 0 15.141 7.222 29.623 19.318 38.741 8.432 6.351 18.486 9.708 29.075 9.708 26.713 0 48.445-21.734 48.445-48.449C412.461 53.387 390.729 31.651 364.016 31.651z", "fill", "#595bd4", 1, "color000000", "svgShape"], ["d", "M220.242 338.358c-36.954 0-67.018-30.067-67.018-67.025 0-36.957 30.064-67.023 67.018-67.023 36.957 0 67.024 30.066 67.024 67.023 0 30.197-20.36 56.812-49.514 64.721C231.968 337.585 226.084 338.358 220.242 338.358zM220.242 212.31c-32.542 0-59.018 26.478-59.018 59.023 0 32.547 26.475 59.025 59.018 59.025 5.151 0 10.346-.684 15.44-2.032 25.652-6.959 43.584-30.398 43.584-56.993C279.267 238.787 252.789 212.31 220.242 212.31zM364.016 136.554c-12.34 0-24.059-3.914-33.89-11.318-14.092-10.622-22.504-27.493-22.504-45.131 0-31.129 25.298-56.453 56.394-56.453 31.124 0 56.445 25.324 56.445 56.453C420.461 111.23 395.14 136.554 364.016 136.554zM364.016 31.651c-26.685 0-48.394 21.735-48.394 48.453 0 15.141 7.222 29.624 19.318 38.741 8.432 6.351 18.486 9.708 29.075 9.708 26.713 0 48.445-21.734 48.445-48.449C412.461 53.387 390.729 31.651 364.016 31.651zM458.938 463.743c-22.512 0-40.827-18.318-40.827-40.834 0-22.512 18.315-40.827 40.827-40.827s40.827 18.315 40.827 40.827C499.766 445.425 481.45 463.743 458.938 463.743zM458.938 390.082c-18.101 0-32.827 14.727-32.827 32.827 0 18.104 14.727 32.834 32.827 32.834s32.827-14.729 32.827-32.834C491.766 404.809 477.039 390.082 458.938 390.082zM270.529 487.833c-17.045 0-30.912-13.87-30.912-30.918 0-17.045 13.867-30.912 30.912-30.912 17.049 0 30.918 13.867 30.918 30.912C301.447 473.963 287.578 487.833 270.529 487.833zM270.529 434.003c-12.634 0-22.912 10.278-22.912 22.912 0 12.637 10.278 22.918 22.912 22.918 12.637 0 22.918-10.281 22.918-22.918C293.447 444.281 283.166 434.003 270.529 434.003zM79.298 446.799c-23.308 0-42.271-18.963-42.271-42.271s18.962-42.271 42.271-42.271c11.771 0 22.666 4.718 30.679 13.285 7.427 7.77 11.534 18.075 11.534 28.986C121.51 427.836 102.574 446.799 79.298 446.799zM79.298 370.256c-18.897 0-34.271 15.374-34.271 34.271s15.374 34.271 34.271 34.271c18.865 0 34.212-15.374 34.212-34.271 0-8.843-3.319-17.185-9.347-23.49C97.65 374.073 88.83 370.256 79.298 370.256zM53.765 229.976c-22.512 0-40.828-18.315-40.828-40.828 0-22.516 18.315-40.833 40.828-40.833s40.827 18.317 40.827 40.833C94.592 211.66 76.277 229.976 53.765 229.976zM53.765 156.314c-18.101 0-32.828 14.729-32.828 32.833 0 18.102 14.727 32.828 32.828 32.828s32.827-14.727 32.827-32.828C86.592 171.043 71.866 156.314 53.765 156.314z", "fill", "#595bd4", 1, "color000000", "svgShape"], ["d", "M104.897 384.314c-1.061 0-2.12-.42-2.907-1.252-1.518-1.605-1.447-4.137.159-5.654l2.159-2.041 66.257-63.132c1.599-1.525 4.131-1.463 5.655.136 1.524 1.6 1.463 4.132-.137 5.655l-66.268 63.143-2.17 2.052C106.872 383.952 105.883 384.314 104.897 384.314zM161.728 246.434c-.594 0-1.197-.133-1.766-.413l-74.922-36.945c-1.981-.978-2.795-3.376-1.818-5.357.977-1.98 3.376-2.794 5.356-1.818l74.922 36.945c1.981.978 2.795 3.376 1.818 5.357C164.622 245.614 163.203 246.434 161.728 246.434zM427.874 407.145c-.732 0-1.475-.202-2.139-.623l-153.142-97.147c-1.866-1.184-2.419-3.655-1.236-5.521 1.186-1.866 3.657-2.416 5.521-1.235l153.142 97.147c1.865 1.184 2.419 3.655 1.235 5.521C430.494 406.487 429.198 407.145 427.874 407.145zM262.718 432.079c-1.761 0-3.374-1.172-3.858-2.953l-26.014-95.885-.554-2.154c-.55-2.14.739-4.319 2.878-4.869 2.142-.551 4.32.738 4.87 2.879l.54 2.102 26 95.832c.579 2.133-.681 4.33-2.813 4.908C263.417 432.033 263.064 432.079 262.718 432.079zM260.013 222.465c-.837 0-1.681-.262-2.401-.803-1.766-1.328-2.12-3.836-.792-5.602l72.516-96.425c1.328-1.765 3.836-2.118 5.602-.793 1.766 1.328 2.12 3.836.793 5.602l-72.517 96.425C262.426 221.914 261.227 222.465 260.013 222.465z", "fill", "#595bd4", 1, "color000000", "svgShape"], [2, "font-size", "10px", "margin-top", "-20px"], ["width", "40", "height", "100", "xmlns", "http://www.w3.org/2000/svg", "fill-rule", "evenodd", "clip-rule", "evenodd", "image-rendering", "optimizeQuality", "shape-rendering", "geometricPrecision", "text-rendering", "geometricPrecision", "viewBox", "0 0 64000 64000"], ["points", "25401 5604 5604 32000 25401 32000 12203 58396 58396 25401 32000 25401 51797 5604", "fill", "#595bd4", 1, "color000000", "svgShape"], ["width", "40", "height", "100", "enable-background", "new 0 0 20 20", "viewBox", "0 0 64 64"], ["d", "M34.6,42.21V7.58C34.6,3.4,31.19,0,26.94,0c-4.19,0-7.6,3.4-7.6,7.58v34.63c-2.89,2.31-4.6,5.84-4.6,9.55\n        c0,6.75,5.48,12.24,12.23,12.24c4.33,0,8.16-2.27,10.33-5.68c0.49-0.78,0.9-1.62,1.21-2.51c0.45-1.27,0.69-2.63,0.69-4.04\n        C39.19,48.05,37.49,44.52,34.6,42.21z M26.97,62.06c-0.26,0-0.51-0.01-0.77-0.03h-0.07c-0.26-0.03-0.51-0.06-0.76-0.1\n        c-4.93-0.77-8.7-5.04-8.7-10.17c0-3.26,1.57-6.36,4.2-8.29c0.25-0.18,0.4-0.48,0.4-0.79V7.58c0-2.57,1.73-4.74,4.13-5.42\n        c0.33-0.1,0.68-0.16,1.04-0.19c0.18-0.02,0.38-0.03,0.56-0.03c3.12,0,5.65,2.53,5.65,5.64v35.1c0,0.31,0.15,0.6,0.4,0.79\n        c2.63,1.93,4.2,5.03,4.2,8.29C37.25,57.44,32.64,62.06,26.97,62.06z"], ["fill", "#60bbe9", "d", "M33.05,43.47c-0.25-0.18-0.4-0.48-0.4-0.79V7.58c0-3.11-2.53-5.64-5.65-5.64c-0.18,0-0.38,0.01-0.56,0.03\n        C26.08,2,25.73,2.07,25.4,2.16c-2.4,0.68-4.13,2.85-4.13,5.42v35.1c0,0.31-0.15,0.6-0.4,0.79c-2.63,1.93-4.2,5.03-4.2,8.29\n        c0,5.13,3.77,9.41,8.7,10.17c0.25,0.04,0.5,0.08,0.76,0.1h0.07c0.25,0.02,0.5,0.03,0.77,0.03c5.67,0,10.29-4.63,10.29-10.3\n        C37.25,48.5,35.68,45.4,33.05,43.47z M22.61,52.27c0-2.07,1.45-3.79,3.38-4.24V20.35c0-0.54,0.44-0.97,0.97-0.97\n        s0.97,0.43,0.97,0.97v27.68c1.93,0.45,3.38,2.17,3.38,4.24c0,2.4-1.96,4.35-4.35,4.35S22.61,54.66,22.61,52.27z"], ["fill", "#51b8e0", "d", "M37.25,51.76c0,5.67-4.62,10.3-10.29,10.3c-0.54,0-1.08-0.04-1.59-0.13c4.93-0.77,8.7-5.04,8.7-10.17\n        c0-3.26-1.57-6.36-4.2-8.29c-0.25-0.18-0.4-0.48-0.4-0.79V7.58c0-2.56-1.72-4.73-4.07-5.42c0.5-0.15,1.05-0.22,1.6-0.22\n        c3.12,0,5.65,2.53,5.65,5.64v35.1c0,0.31,0.15,0.6,0.4,0.79C35.68,45.4,37.25,48.5,37.25,51.76z"], ["d", "M27.93,48.03V20.35c0-0.54-0.44-0.97-0.97-0.97S26,19.81,26,20.35v27.68c-1.93,0.45-3.38,2.17-3.38,4.24\n        c0,2.4,1.96,4.35,4.35,4.35s4.35-1.96,4.35-4.35C31.32,50.2,29.86,48.48,27.93,48.03z M26.97,54.68c-1.33,0-2.41-1.09-2.41-2.41\n        s1.09-2.41,2.41-2.41s2.41,1.09,2.41,2.41S28.29,54.68,26.97,54.68z"], ["cx", "26.97", "cy", "52.27", "r", "2.41", "fill", "#ffcb4c"], ["fill", "#f7be3d", "d", "M26.97,49.85c-1.33,0-2.41,1.09-2.41,2.41s1.09,2.41,2.41,2.41s2.41-1.09,2.41-2.41S28.29,49.85,26.97,49.85z\n         M26.97,53.52c-0.69,0-1.25-0.56-1.25-1.25c0-0.69,0.56-1.25,1.25-1.25c0.69,0,1.25,0.56,1.25,1.25\n        C28.22,52.96,27.65,53.52,26.97,53.52z"], ["d", "M39.35 8.1h4.77c.54 0 .97-.43.97-.97s-.43-.97-.97-.97h-4.77c-.54 0-.97.43-.97.97S38.81 8.1 39.35 8.1zM44.12 31.81h-4.77c-.54 0-.97.43-.97.97s.43.97.97.97h4.77c.54 0 .97-.43.97-.97S44.65 31.81 44.12 31.81zM48.29 18.98h-9.45c-.54 0-.97.43-.97.97s.43.97.97.97h9.45c.54 0 .97-.43.97-.97S48.83 18.98 48.29 18.98z"], ["width", "40", "height", "100", "data-name", "Layer 1", "viewBox", "0 0 512 512"], ["id", "a", "x1", "155.791", "x2", "155.791", "y1", "38.769", "y2", "468.074", "gradientUnits", "userSpaceOnUse"], ["offset", "0", "stop-color", "#00efd1"], ["offset", "1", "stop-color", "#00acea"], ["id", "b", "x1", "174.738", "x2", "174.738", "y1", "38.769", "y2", "468.074", 0, "xlink", "href", "#a"], ["id", "c", "x1", "343.962", "x2", "343.962", "y1", "38.769", "y2", "468.074", 0, "xlink", "href", "#a"], ["id", "d", "x1", "366.095", "x2", "366.095", "y1", "38.769", "y2", "468.074", 0, "xlink", "href", "#a"], ["id", "e", "x1", "382", "x2", "382", "y1", "38.769", "y2", "468.074", 0, "xlink", "href", "#a"], ["id", "f", "x1", "335", "x2", "335", "y1", "38.769", "y2", "468.074", 0, "xlink", "href", "#a"], ["id", "g", "x1", "288", "x2", "288", "y1", "38.769", "y2", "468.074", 0, "xlink", "href", "#a"], ["id", "h", "x1", "241", "x2", "241", "y1", "38.769", "y2", "468.074", 0, "xlink", "href", "#a"], ["fill", "url(#a)", "d", "M226.343,216.382,162.29,127.236A7.9,7.9,0,0,0,155.8,124h0a7.909,7.909,0,0,0-6.494,3.227L85.244,216.18c-.15.208-.289.4-.418.619-13.237,22.709-13.078,50.284.425,73.784a81.107,81.107,0,0,0,141.152-.1c13.436-23.448,13.565-50.918.343-73.48C226.621,216.791,226.487,216.582,226.343,216.382Zm-13.822,66.142a65.105,65.105,0,0,1-113.4.075c-10.708-18.636-10.943-39.552-.662-57.445l57.32-79.646,57.34,79.893C223.379,243.148,223.166,263.948,212.521,282.524Z"], ["fill", "url(#b)", "d", "M194.174,243.686a8,8,0,0,0-8,8A30.8,30.8,0,0,1,155.3,282.352a8,8,0,0,0,0,16,46.823,46.823,0,0,0,46.872-46.666A8,8,0,0,0,194.174,243.686Z"], ["fill", "url(#c)", "d", "M425.285,356.386,350.461,252.234A7.9,7.9,0,0,0,343.967,249h0a7.905,7.905,0,0,0-6.493,3.225L262.644,356.144c-.149.208-.289.4-.418.619-15.217,26.106-15.03,57.816.5,84.845a93.4,93.4,0,0,0,162.554-.114c15.453-26.967,15.605-58.552.407-84.487C425.564,356.8,425.429,356.586,425.285,356.386ZM411.4,433.536a77.4,77.4,0,0,1-134.8.088c-12.765-22.217-13.027-47.165-.738-68.5L343.953,270.5l68.112,94.9C424.328,386.577,424.09,411.387,411.4,433.536Z"], ["fill", "url(#d)", "d", "M388.8,388.842a8,8,0,0,0-8,8,37.33,37.33,0,0,1-37.408,37.167,8,8,0,0,0,0,16A53.348,53.348,0,0,0,396.8,396.842,8,8,0,0,0,388.8,388.842Z"], ["fill", "url(#e)", "d", "M382 236a8 8 0 0 0 8-8V210a8 8 0 0 0-16 0v18A8 8 0 0 0 382 236zM382 180a8 8 0 0 0 8-8V78a8 8 0 0 0-16 0v94A8 8 0 0 0 382 180zM382 56a8 8 0 0 0 8-8V31a8 8 0 0 0-16 0V48A8 8 0 0 0 382 56z"], ["fill", "url(#f)", "d", "M335 216a8 8 0 0 0 8-8V127a8 8 0 0 0-16 0v81A8 8 0 0 0 335 216zM335 96a8 8 0 0 0 8-8V60a8 8 0 0 0-16 0V88A8 8 0 0 0 335 96z"], ["fill", "url(#g)", "d", "M288 237a8 8 0 0 0 8-8V188a8 8 0 0 0-16 0v41A8 8 0 0 0 288 237zM288 166a8 8 0 0 0 8-8V53a8 8 0 0 0-16 0V158A8 8 0 0 0 288 166z"], ["fill", "url(#h)", "d", "M241 103a8 8 0 0 0-8 8v71a8 8 0 0 0 16 0V111A8 8 0 0 0 241 103zM241 33a8 8 0 0 0-8 8V81a8 8 0 0 0 16 0V41A8 8 0 0 0 241 33z"], [2, "display", "flex", "flex-direction", "row", "justify-content", "space-evenly"], ["width", "40", "height", "100", "viewBox", "0 0 16.933 16.933"], ["transform", "translate(-588.754)", "fill", "#34a853", 1, "color000000", "svgShape"], ["fill", "none", "stroke", "#4285f4", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.058", "d", "m 589.28307,10.581016 v 5.823391 l 15.875,2.6e-5 v -5.823417 c 0,1.47923 -1.18517,2.678385 -2.64737,2.678389 -1.46021,-0.0014 -2.6439,-1.19861 -2.64533,-2.675805 0,1.47719 -1.18462,2.674362 -2.6448,2.675805 -1.46018,-0.0014 -2.64337,-1.198628 -2.6448,-2.675805 0,1.477195 -1.18512,2.674369 -2.6453,2.675805 -1.46222,1e-6 -2.6474,-1.199155 -2.6474,-2.678389 z", "paint-order", "stroke fill markers", 1, "colorStroke000000", "svgStroke"], ["fill", "none", "stroke", "#4285f4", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.058", "d", "M 605.15807,12.06967 V 6.2462527 c 0,1.47923 -1.18517,2.678385 -2.64737,2.678389 -1.46021,-0.0014 -2.6439,-1.19861 -2.64533,-2.675805 0,1.47719 -1.18462,2.674362 -2.6448,2.675805 -1.46018,-0.0014 -2.64337,-1.198628 -2.6448,-2.675805 0,1.477195 -1.18512,2.674369 -2.6453,2.675805 -1.46222,10e-7 -2.6474,-1.199155 -2.6474,-2.678389 v 5.8233913", "paint-order", "stroke fill markers", 1, "colorStroke000000", "svgStroke"], ["fill", "none", "stroke", "#4285f4", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.058", "d", "M591.74175 5.9973542V2.4696202M590.40627 3.5495545l1.33545-2.1382236 1.3355 2.1382236", "paint-order", "stroke fill markers", "transform", "translate(-.076 -.882)", 1, "colorStroke000000", "svgStroke"], ["fill", "none", "stroke", "#4285f4", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.058", "d", "M597.22057 5.1154052V1.5876712M595.88509 2.6676055l1.33545-2.13822364 1.3355 2.13822364M602.77503 5.1154052V1.5876712M601.43955 2.6676055L602.775.52938186 604.1105 2.6676055", "paint-order", "stroke fill markers", 1, "colorStroke000000", "svgStroke"], [2, "display", "flex", "flex-direction", "column", "align-items", "center", "justify-content", "center", "gap", "9px"], [2, "font-size", "1.1rem"], ["width", "40", "height", "100", "xmlns", "http://www.w3.org/2000/svg", "enable-background", "new 0 0 64 64", "viewBox", "0 0 64 64"], ["d", "M44.2,37.6v-4.8h5.1c0.5,0,1-0.4,1-1s-0.4-1-1-1h-5.1v-4.2h3.5c0.5,0,1-0.4,1-1c0-0.5-0.4-1-1-1h-3.5V21h2h3.2c0.5,0,1-0.4,1-1s-0.4-1-1-1h-3.2h-2v-4h3.1c0.5,0,1-0.4,1-1c0-0.5-0.4-1-1-1h-3.1v-4h5.1c0.5,0,1-0.4,1-1c0-0.5-0.4-1-1-1h-5.1v-1c0-1.6-0.6-3.2-1.7-4.3C41.4,0.6,39.9,0,38.3,0c-3.3,0-5.9,2.8-5.9,6.1v4.2c-0.9-0.3-1.9-0.4-2.9-0.4c-5.6,0-10.1,4.5-10.1,10.1s4.5,10.1,10.1,10.1c1,0,2-0.2,2.9-0.4v7.9c-4.9,2.3-8,7.1-8,12.5c0,7.6,6.2,13.9,13.9,13.9c7.6,0,13.9-6.2,13.9-13.9C52.2,44.7,49.1,39.9,44.2,37.6z M29.5,28.2c-4.5,0-8.2-3.7-8.2-8.2c0-4.5,3.7-8.2,8.2-8.2c1,0,2,0.2,2.9,0.6v15.2C31.5,28,30.5,28.2,29.5,28.2z M38.3,62.1c-6.6,0-11.9-5.3-11.9-11.9c0-4.8,2.9-9.2,7.4-11c0,0,0,0,0,0c0.1,0,0.2-0.1,0.3-0.2c0,0,0.1-0.1,0.1-0.1c0-0.1,0.1-0.1,0.1-0.2c0-0.1,0.1-0.2,0.1-0.4c0,0,0,0,0,0V6.1c0-2.3,1.8-4.2,4-4.2c1.1,0,2,0.4,2.8,1.2c0.8,0.8,1.2,1.9,1.2,3V20c0,0,0,0,0,0c0,0,0,0,0,0v5.8c0,0,0,0,0,0c0,0,0,0,0,0v12.4c0,0,0,0,0,0c0,0.1,0,0.3,0.1,0.4c0,0.1,0.1,0.1,0.1,0.2c0,0.1,0.1,0.1,0.1,0.2c0.1,0.1,0.2,0.2,0.3,0.2c0,0,0,0,0,0c4.5,1.8,7.4,6.2,7.4,11C50.2,56.7,44.9,62.1,38.3,62.1z", "fill", "#595bd4", 1, "color000000", "svgShape"], ["d", "M39.3 42V12.3c0-.5-.4-1-1-1-.5 0-1 .4-1 1V42c-4.1.5-7.3 4-7.3 8.2 0 4.5 3.7 8.2 8.2 8.2 4.5 0 8.2-3.7 8.2-8.2C46.6 45.9 43.4 42.4 39.3 42zM38.3 56.4c-3.5 0-6.3-2.8-6.3-6.3 0-3.5 2.8-6.3 6.3-6.3 3.5 0 6.3 2.8 6.3 6.3C44.6 53.6 41.8 56.4 38.3 56.4zM29.5 9.4c.5 0 1-.4 1-1V3.3c0-.5-.4-1-1-1-.5 0-1 .4-1 1v5.1C28.5 9 28.9 9.4 29.5 9.4zM24.2 9.7c.2.4.5.6.9.6.1 0 .3 0 .4-.1C25.9 10 26.2 9.5 26 9l-1-2.4c-.2-.5-.8-.7-1.3-.5-.5.2-.7.8-.5 1.3L24.2 9.7zM20.6 12.5c.2.2.4.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4l-3.6-3.6c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4L20.6 12.5zM16.1 15.5l2.4 1c.1.1.2.1.4.1.4 0 .7-.2.9-.6.2-.5 0-1.1-.5-1.3l-2.4-1c-.5-.2-1.1 0-1.3.5C15.3 14.7 15.6 15.3 16.1 15.5zM18.9 20c0-.5-.4-1-1-1h-5.1c-.5 0-1 .4-1 1s.4 1 1 1h5.1C18.5 21 18.9 20.5 18.9 20zM19.2 25.3c.5-.2.7-.8.5-1.3-.2-.5-.8-.7-1.3-.5l-2.4 1c-.5.2-.7.8-.5 1.3.2.4.5.6.9.6.1 0 .3 0 .4-.1L19.2 25.3zM20.6 27.5L17 31.1c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.2 0 .5-.1.7-.3l3.6-3.6c.4-.4.4-1 0-1.4C21.6 27.1 21 27.1 20.6 27.5zM25 33.4l1-2.4c.2-.5 0-1.1-.5-1.3-.5-.2-1.1 0-1.3.5l-1 2.4c-.2.5 0 1.1.5 1.3C23.8 34 24 34 24.1 34 24.5 34 24.8 33.8 25 33.4zM30.5 36.7v-5.1c0-.5-.4-1-1-1-.5 0-1 .4-1 1v5.1c0 .5.4 1 1 1C30 37.7 30.5 37.2 30.5 36.7z", "fill", "#595bd4", 1, "color000000", "svgShape"], ["width", "40", "height", "100", "fill-rule", "evenodd", "clip-rule", "evenodd", "image-rendering", "optimizeQuality", "shape-rendering", "geometricPrecision", "text-rendering", "geometricPrecision", "viewBox", "0 0 6.827 6.827"], ["fill", "#167ffc", "d", "M3.44243 0.884874c0.246122,0.268453 0.482421,0.546921 0.702138,0.837469 0.184654,0.244181 0.358374,0.49787 0.513213,0.762071 0.234327,0.399846 0.437362,0.843713 0.529661,1.3001 0.035811,0.177063 0.055126,0.358098 0.0507047,0.538854 -0.00384646,0.157087 -0.0257283,0.313409 -0.0696575,0.464409 -0.0786929,0.2705 -0.22374,0.508327 -0.430232,0.700118 -0.354661,0.329406 -0.846394,0.485406 -1.32502,0.485429 -0.478583,1.9685e-005 -0.970319,-0.155898 -1.32496,-0.485287 -0.20648,-0.191776 -0.351488,-0.429587 -0.430154,-0.700075 -0.0439134,-0.150996 -0.0657717,-0.307319 -0.0696024,-0.464398 -0.00440157,-0.180764 0.014937,-0.361799 0.0507677,-0.538862 0.0923504,-0.456413 0.295433,-0.900295 0.529799,-1.30015 0.154862,-0.26422 0.32861,-0.517929 0.513283,-0.762134 0.219744,-0.290571 0.456079,-0.569063 0.70222,-0.837543l0.0289213 -0.0315472 0.0289213 0.0315472z", 1, "color1e88e5", "svgShape"], ["fill", "#53d86a", "d", "M3.1375 3.55728c-0.0526063,-0.057378 -0.117417,-0.0837008 -0.195059,-0.0837008 -0.0796142,0 -0.14574,0.0257835 -0.192748,0.0914134 -0.0505709,0.0706024 -0.07,0.152925 -0.07,0.238961 0,0.0902165 0.0141339,0.197118 0.0767244,0.26713 0.0505591,0.0565512 0.112193,0.0840079 0.188031,0.0840079 0.0771654,0 0.140059,-0.0286339 0.191957,-0.0856142 0.0625039,-0.0686339 0.0798307,-0.164547 0.0798307,-0.254472 0,-0.0895866 -0.0159646,-0.189264 -0.0787362,-0.257724z", 1, "colorffffff", "svgShape"], ["fill", "#53d86a", "points", "3.734 3.434 2.947 4.95 3.095 4.95 3.879 3.434", 1, "colorffffff", "svgShape"], ["fill", "#53d86a", "d", "M3.87317 4.22888c-0.0797362,0 -0.146425,0.0253543 -0.193862,0.0909016 -0.0509646,0.0704252 -0.0698898,0.153594 -0.0698898,0.239472 0,0.0904921 0.014252,0.196551 0.0767953,0.266866 0.0503898,0.0566575 0.112157,0.0842638 0.187965,0.0842638 0.0775472,0 0.141102,-0.0281575 0.193256,-0.0855748 0.0624882,-0.0687835 0.0795354,-0.164843 0.0795354,-0.254843 0,-0.0893622 -0.0157638,-0.189067 -0.0784055,-0.257386 -0.0526929,-0.0574764 -0.117661,-0.0837008 -0.195394,-0.0837008z", 1, "colorffffff", "svgShape"], ["fill", "#167ffc", "d", "M3.03027 3.70272c-.0228425-.0249134-.0509882-.0363465-.0847008-.0363465-.0345709 0-.0632874.0111969-.0836969.0396969-.0219606.0306575-.0303976.0664055-.0303976.103764 0 .0391732.0061378.0855945.033315.115996.0219567.0245551.0487205.0364803.0816496.0364803.0335079 0 .0608189-.012437.0833543-.0371772.0271417-.0298031.0346654-.0714528.0346654-.1105 0-.0389016-.00693307-.082185-.034189-.111913zM3.96049 4.45801c-.0228425-.0249134-.0509882-.0363465-.0847008-.0363465-.0345709 0-.0632874.0111969-.0836969.0396969-.0219606.0306575-.0303976.0664055-.0303976.103764 0 .0391732.0061378.0855945.033315.115996.0219567.0245551.0487205.0364803.0816496.0364803.0335079 0 .0608189-.012437.0833543-.0371772.0271417-.0298031.0346654-.0714528.0346654-.1105 0-.0389016-.00693307-.082185-.034189-.111913z", 1, "color1e88e5", "svgShape"], ["width", "6.827", "height", "6.827", "fill", "none"], ["width", "80", "height", "100", "viewBox", "0 0 512 512"], ["d", "M367.94,334.64q1.17.09,2.34.09a34.28,34.28,0,0,0,34.23-35.47l-.05-1.7-1.7-.21a34.24,34.24,0,0,0-34.82,18.5v-12l.23-1.34A26.89,26.89,0,0,0,342,271.05l-1.7,0-.29,1.68a26.88,26.88,0,0,0,23.94,31.34v54.74a47.63,47.63,0,0,0-54.1-28.36l-1.67.36.09,1.7A47.66,47.66,0,0,0,363.94,377v18H262.68V334.64q1.17.09,2.34.09a34.28,34.28,0,0,0,34.23-35.47l-.06-1.7-1.69-.21a34.24,34.24,0,0,0-34.82,18.5v-12l.23-1.34a26.89,26.89,0,0,0-26.18-31.46l-1.7,0-.29,1.68a26.88,26.88,0,0,0,23.94,31.34v54.74a47.64,47.64,0,0,0-54.11-28.36l-1.66.36.09,1.7A47.66,47.66,0,0,0,258.68,377v18h-103V334.64q1.17.09,2.34.09a34.28,34.28,0,0,0,34.23-35.47l-.06-1.7-1.69-.21a34.24,34.24,0,0,0-34.82,18.5v-12l.23-1.34a26.89,26.89,0,0,0-26.18-31.46l-1.7,0-.29,1.68a26.88,26.88,0,0,0,23.94,31.34v54.74a47.64,47.64,0,0,0-54.11-28.36l-1.66.36.09,1.7A47.66,47.66,0,0,0,151.68,377v18h-45v4H410.92v-4h-43Zm9.73-25.26a30.18,30.18,0,0,1,22.85-8.23,30.27,30.27,0,0,1-32.29,29.51A30.33,30.33,0,0,1,377.67,309.38ZM328.74,364.2A43.74,43.74,0,0,1,312.38,334a43.71,43.71,0,0,1,51,39A43.62,43.62,0,0,1,328.74,364.2Zm19.9-72.59a22.93,22.93,0,0,1-4.93-16.47,22.87,22.87,0,0,1,20.76,24.74l-.15.19A22.79,22.79,0,0,1,348.64,291.61Zm-76.23,17.77a30.17,30.17,0,0,1,22.85-8.23A30.27,30.27,0,0,1,263,330.66,30.29,30.29,0,0,1,272.41,309.38ZM223.47,364.2A43.77,43.77,0,0,1,207.12,334a43.72,43.72,0,0,1,51,39A43.65,43.65,0,0,1,223.47,364.2Zm19.91-72.59a22.89,22.89,0,0,1-4.93-16.47,22.87,22.87,0,0,1,20.76,24.74,1.39,1.39,0,0,0-.15.19A22.77,22.77,0,0,1,243.38,291.61Zm-78,17.77a30.18,30.18,0,0,1,22.85-8.23A30.27,30.27,0,0,1,156,330.66,30.29,30.29,0,0,1,165.41,309.38ZM116.47,364.2A43.77,43.77,0,0,1,100.12,334a43.72,43.72,0,0,1,51,39A43.65,43.65,0,0,1,116.47,364.2Zm19.91-72.59a22.89,22.89,0,0,1-4.93-16.47,22.87,22.87,0,0,1,20.76,24.74,1.39,1.39,0,0,0-.15.19A22.77,22.77,0,0,1,136.38,291.61Z", "fill", "#595bd4", 1, "color000000", "svgShape"], ["width", "4", "height", "17.72", "x", "392.85", "y", "194.78", "transform", "rotate(-20.49 394.883 203.64)", "fill", "#595bd4", 1, "color000000", "svgShape"], ["width", "4", "height", "12.5", "x", "404.34", "y", "228.14", "transform", "rotate(-20.49 406.217 234.342)", "fill", "#595bd4", 1, "color000000", "svgShape"], ["width", "4", "height", "17.72", "x", "328.18", "y", "194.78", "transform", "rotate(-20.48 330.167 203.637)", "fill", "#595bd4", 1, "color000000", "svgShape"], ["width", "4", "height", "12.5", "x", "339.67", "y", "228.14", "transform", "rotate(-20.49 341.624 234.352)", "fill", "#595bd4", 1, "color000000", "svgShape"], ["width", "4", "height", "17.72", "x", "265.51", "y", "194.78", "transform", "rotate(-20.49 267.448 203.605)", "fill", "#595bd4", 1, "color000000", "svgShape"], ["width", "4", "height", "12.5", "x", "277", "y", "228.14", "transform", "rotate(-20.49 279.05 234.412)", "fill", "#595bd4", 1, "color000000", "svgShape"], ["width", "4", "height", "17.72", "x", "200.85", "y", "194.78", "transform", "rotate(-20.49 202.827 203.61)", "fill", "#595bd4", 1, "color000000", "svgShape"], ["width", "4", "height", "12.5", "x", "212.34", "y", "228.14", "transform", "rotate(-20.49 214.373 234.407)", "fill", "#595bd4", 1, "color000000", "svgShape"], ["width", "4", "height", "17.72", "x", "136.18", "y", "194.78", "transform", "rotate(-20.48 138.162 203.62)", "fill", "#595bd4", 1, "color000000", "svgShape"], ["width", "4", "height", "12.5", "x", "147.67", "y", "228.14", "transform", "rotate(-20.49 149.646 234.364)", "fill", "#595bd4", 1, "color000000", "svgShape"], ["width", "12.5", "height", "4", "x", "105.11", "y", "232.39", "transform", "rotate(-69.52 111.362 234.383)", "fill", "#595bd4", 1, "color000000", "svgShape"], ["width", "17.72", "height", "4", "x", "113.99", "y", "201.63", "transform", "rotate(-69.51 122.858 203.636)", "fill", "#595bd4", 1, "color000000", "svgShape"], ["width", "12.5", "height", "4", "x", "363.11", "y", "232.39", "transform", "rotate(-69.52 369.366 234.387)", "fill", "#595bd4", 1, "color000000", "svgShape"], ["width", "17.72", "height", "4", "x", "371.99", "y", "201.63", "transform", "rotate(-69.51 380.866 203.63)", "fill", "#595bd4", 1, "color000000", "svgShape"], ["width", "12.5", "height", "4", "x", "300.44", "y", "232.39", "transform", "rotate(-69.51 306.705 234.384)", "fill", "#595bd4", 1, "color000000", "svgShape"], ["width", "17.72", "height", "4", "x", "309.32", "y", "201.63", "transform", "rotate(-69.51 318.208 203.635)", "fill", "#595bd4", 1, "color000000", "svgShape"], ["width", "12.5", "height", "4", "x", "235.77", "y", "232.39", "transform", "rotate(-69.51 242.043 234.386)", "fill", "#595bd4", 1, "color000000", "svgShape"], ["width", "17.72", "height", "4", "x", "244.65", "y", "201.63", "transform", "rotate(-69.51 253.534 203.64)", "fill", "#595bd4", 1, "color000000", "svgShape"], ["width", "12.5", "height", "4", "x", "171.11", "y", "232.39", "transform", "rotate(-69.51 177.38 234.388)", "fill", "#595bd4", 1, "color000000", "svgShape"], ["width", "17.72", "height", "4", "x", "179.99", "y", "201.63", "transform", "rotate(-69.51 188.837 203.629)", "fill", "#595bd4", 1, "color000000", "svgShape"], ["d", "M405.79,139.56H339.22L324.14,113H196.53l-15.08,26.57H114.88a10.32,10.32,0,0,0-10.3,10.3v20h18.86l3.56,9.55,3.51-1.31,3.51,1.31,3.57-9.55H188.1l3.57,9.55,3.75-1.4-3-8.15h6.95l-3,8.15,3.75,1.4,3.57-9.55h49.18l3.57,9.55,3.75-1.4-3-8.15H264L260.94,178l3.75,1.4,3.57-9.55h47.18l3.56,9.55,3.75-1.4-3-8.15h8.94l-3,8.15,3.74,1.4,3.57-9.55H380.1l3.57,9.55,3.75-1.4-3.05-8.15h6.95L388.27,178l3.75,1.4,3.57-9.55h20.5v-20A10.32,10.32,0,0,0,405.79,139.56ZM198.86,117h123l12.73,22.44H186.13Zm-84,26.57H405.79a6.32,6.32,0,0,1,6,4.3H108.9A6.32,6.32,0,0,1,114.88,143.56Zm15.63,33.84-2.8-7.51h5.61Zm281.58-11.51H108.58v-14H412.09Z", "fill", "#595bd4", 1, "color000000", "svgShape"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "width", "50", "height", "100", "viewBox", "0 0 512 512"], ["d", "M0 0 C1.03380798 0.00021149 2.06761597 0.00042297 3.13275146 0.00064087 C19.46626331 0.03392692 35.10724464 0.94422291 51.125 4.375 C52.04732422 4.56223633 52.96964844 4.74947266 53.91992188 4.94238281 C74.5928498 9.18994323 94.17118523 16.14031389 113.125 25.375 C113.92679687 25.76558594 114.72859375 26.15617187 115.5546875 26.55859375 C147.90121044 42.52249261 177.80671158 65.96210206 200.125 94.375 C200.7540625 95.12523438 201.383125 95.87546875 202.03125 96.6484375 C234.74090499 135.92683467 255.95016295 189.79704268 256.36328125 241.0234375 C256.3730751 242.02561813 256.38286896 243.02779877 256.39295959 244.06034851 C256.55656304 265.13485402 256.69898944 285.69806143 252.125 306.375 C251.91069336 307.38626953 251.69638672 308.39753906 251.47558594 309.43945312 C242.04491088 353.11981417 221.43367068 391.8676441 192.125 425.375 C191.68430176 425.8803125 191.24360352 426.385625 190.78955078 426.90625 C170.67112022 449.82201518 146.10055562 468.25422179 119.125 482.375 C118.29532715 482.8095752 117.4656543 483.24415039 116.61083984 483.69189453 C80.28649972 502.45047414 41.42590904 510.82146141 0.75 510.75 C-0.35894623 510.74978851 -1.46789246 510.74957703 -2.61044312 510.74935913 C-19.06837064 510.71801013 -34.76744658 510.00113624 -50.875 506.375 C-52.67423881 506.00793447 -54.47371817 505.64204602 -56.2734375 505.27734375 C-96.55837464 496.73933112 -134.74599077 477.22749998 -165.875 450.375 C-166.62007813 449.74078125 -167.36515625 449.1065625 -168.1328125 448.453125 C-181.63779833 436.64198485 -194.30918743 423.89139772 -204.875 409.375 C-205.73149066 408.22505169 -206.58826433 407.07531411 -207.4453125 405.92578125 C-213.48610848 397.73535854 -218.87986304 389.23858177 -223.875 380.375 C-224.52686279 379.22499512 -224.52686279 379.22499512 -225.19189453 378.05175781 C-238.1505624 354.95172393 -246.7936413 330.04111637 -252.125 304.125 C-252.27622314 303.39442383 -252.42744629 302.66384766 -252.58325195 301.91113281 C-255.59451717 286.31580553 -256.28217792 270.84616241 -256.25 255 C-256.24945618 253.98887146 -256.24891235 252.97774292 -256.24835205 251.93597412 C-256.20844236 235.75786304 -255.33840717 220.23127908 -251.875 204.375 C-251.65537598 203.34874512 -251.43575195 202.32249023 -251.20947266 201.26513672 C-241.46597407 156.86429639 -220.68787393 117.33482804 -190.0625 83.78515625 C-187.94233383 81.44918746 -185.8780269 79.07173125 -183.8125 76.6875 C-180.80761474 73.31214943 -177.69220965 70.27787668 -174.23828125 67.3671875 C-172.41837564 65.8330522 -170.63245061 64.27791116 -168.85546875 62.6953125 C-155.61750115 50.98889856 -141.2414679 41.07658935 -125.875 32.375 C-125.24754883 32.01341797 -124.62009766 31.65183594 -123.97363281 31.27929688 C-86.13072907 9.61657459 -43.2950223 -0.08194724 0 0 Z ", "fill", "#1170B8", "transform", "translate(256.875,0.625)"], ["d", "M0 0 C1.64355469 -0.00580078 1.64355469 -0.00580078 3.3203125 -0.01171875 C5.03734375 0.00568359 5.03734375 0.00568359 6.7890625 0.0234375 C7.92601562 0.01183594 9.06296875 0.00023437 10.234375 -0.01171875 C11.33265625 -0.00785156 12.4309375 -0.00398438 13.5625 0 C15.06562744 0.00507568 15.06562744 0.00507568 16.59912109 0.01025391 C19.89200901 0.46434686 21.74856293 1.43690172 24.4140625 3.3984375 C26.64089446 6.73868543 26.6792844 7.88209894 26.73291016 11.7878418 C26.76271469 13.43921394 26.76271469 13.43921394 26.79312134 15.12394714 C26.81044815 16.90530815 26.81044815 16.90530815 26.828125 18.72265625 C26.85717422 20.54746269 26.85717422 20.54746269 26.8868103 22.40913391 C26.94667271 26.30133007 26.99301868 30.19355569 27.0390625 34.0859375 C27.07723609 36.72201823 27.11628745 39.35808641 27.15625 41.99414062 C27.2523798 48.46212828 27.33740789 54.93019132 27.4140625 61.3984375 C28.32696045 60.45935547 29.2398584 59.52027344 30.18041992 58.55273438 C33.56888415 55.07380836 36.97383845 51.61142512 40.3840332 48.15380859 C41.85799268 46.65469623 43.3274346 45.15112819 44.79223633 43.64306641 C46.89795382 41.47673734 49.01937114 39.32692527 51.14453125 37.1796875 C51.79681198 36.50160034 52.44909271 35.82351318 53.12113953 35.12487793 C57.69972359 30.54350615 57.69972359 30.54350615 61.1875 29.83520508 C64.6938164 30.72216472 66.79592058 33.05794009 69.2265625 35.5859375 C69.72865234 36.06869141 70.23074219 36.55144531 70.74804688 37.04882812 C72.89638098 39.22639126 74.31312172 40.7913736 74.8221283 43.85256958 C74.4140625 46.3984375 74.4140625 46.3984375 72.63648987 48.25241089 C71.80455612 48.8379776 70.97262238 49.42354431 70.11547852 50.02685547 C69.17792725 50.71541122 68.24037598 51.40396698 67.27441406 52.11338806 C66.24928711 52.86487625 65.22416016 53.61636444 64.16796875 54.390625 C46.64855687 68.0245935 27.83882844 82.75737691 24.73790073 105.9931221 C23.68567712 115.92739664 23.66190636 125.86207128 23.9765625 135.8359375 C24.00483753 136.7407058 24.03311256 137.64547409 24.06224442 138.57765961 C24.45244365 149.88906427 25.24630672 161.14120519 26.4140625 172.3984375 C30.03022267 170.39785239 33.6453499 168.39541558 37.2596283 166.39143372 C38.48305634 165.71340261 39.70674031 165.03583304 40.93070984 164.35877991 C51.34356242 158.59811985 61.65870473 152.69499247 71.8515625 146.55078125 C75.38342959 144.47116214 78.85609454 142.72721284 82.6640625 141.21484375 C91.2055877 137.70430366 91.2055877 137.70430366 96.78369141 130.64404297 C99.17453694 124.01769529 100.58213055 117.21984155 101.85400391 110.30371094 C102.4890505 107.00944131 103.39951685 103.88673218 104.4765625 100.7109375 C105.75796896 96.72311223 106.85777259 92.71608446 107.8828125 88.65625 C108.27714478 87.09910278 108.27714478 87.09910278 108.67944336 85.51049805 C109.20166756 83.43071817 109.71581137 81.34888878 110.22094727 79.26489258 C110.46127686 78.30736084 110.70160645 77.3498291 110.94921875 76.36328125 C111.1594165 75.503396 111.36961426 74.64351074 111.58618164 73.75756836 C112.49513571 71.16741112 113.5842347 69.43702195 115.4140625 67.3984375 C121.15977105 66.59381165 127.24891672 69.13302268 132.4140625 71.3984375 C133.0740625 72.0584375 133.7340625 72.7184375 134.4140625 73.3984375 C134.20434877 79.79470636 132.62500264 85.37053987 130.6640625 91.43359375 C128.75447232 97.37750726 127.11901083 103.40485744 125.43286133 109.41503906 C125.06197388 110.72746582 125.06197388 110.72746582 124.68359375 112.06640625 C124.46292236 112.85297607 124.24225098 113.6395459 124.01489258 114.44995117 C123.4140625 116.3984375 123.4140625 116.3984375 122.4140625 118.3984375 C125.02273831 116.9426438 127.63085677 115.48586627 130.23828125 114.02783203 C132.49614143 112.76614448 134.7552755 111.50673414 137.015625 110.24951172 C142.5341454 107.17133815 148.02176228 104.06080949 153.43359375 100.796875 C154.36083252 100.24418945 155.28807129 99.69150391 156.2434082 99.12207031 C157.97954692 98.08283123 159.70661689 97.02823563 161.42260742 95.95605469 C166.74039252 92.79603088 171.2003933 91.10730535 177.4140625 92.3984375 C182.58322883 95.15335136 185.0204741 100.17959263 187.7890625 105.1484375 C188.25183594 105.921875 188.71460938 106.6953125 189.19140625 107.4921875 C191.26169659 111.17545031 192.81417437 114.30978875 192.640625 118.6015625 C189.77529416 127.47131273 180.19298551 131.01655981 172.4765625 135.2109375 C170.24992859 136.43867259 168.02336618 137.66653735 165.796875 138.89453125 C164.7130957 139.48862793 163.62931641 140.08272461 162.51269531 140.69482422 C158.27534623 143.02449818 154.0617458 145.39513235 149.8515625 147.7734375 C148.57951675 148.48974258 147.3073922 149.20590778 146.03515625 149.921875 C145.17019531 150.40914062 144.30523437 150.89640625 143.4140625 151.3984375 C148.17053037 153.56269152 152.67724683 155.08243715 157.7890625 156.2734375 C163.77393136 157.72207685 169.73468761 159.23605593 175.6640625 160.8984375 C176.37868652 161.08776855 177.09331055 161.27709961 177.82958984 161.47216797 C181.98078508 162.6589343 184.89226146 163.80537005 187.4140625 167.3984375 C187.47265625 169.4765625 187.47265625 169.4765625 186.8515625 171.6484375 C186.63628906 172.42574219 186.42101562 173.20304688 186.19921875 174.00390625 C185.04601062 177.52090417 183.78895166 180.9612146 182.4140625 184.3984375 C175.14083063 184.76321576 169.3854314 183.52437898 162.4765625 181.3359375 C160.36668551 180.69268232 158.25597469 180.05215712 156.14453125 179.4140625 C155.05060059 179.08212891 153.95666992 178.75019531 152.82958984 178.40820312 C145.91585343 176.36422787 138.93880853 174.5502391 131.96899414 172.70874023 C130.93766357 172.43489502 129.90633301 172.1610498 128.84375 171.87890625 C127.88436523 171.62544434 126.92498047 171.37198242 125.93652344 171.11083984 C123.4140625 170.3984375 123.4140625 170.3984375 120.046875 169.13671875 C115.98049823 167.99644396 112.69079156 168.79032898 108.91064453 170.59082031 C108.08935059 171.08936523 107.26805664 171.58791016 106.421875 172.1015625 C105.48134277 172.66343262 104.54081055 173.22530273 103.57177734 173.80419922 C102.57098145 174.41279785 101.57018555 175.02139648 100.5390625 175.6484375 C91.06403279 181.29967314 81.48770195 186.68464898 71.76367188 191.89428711 C65.03796231 195.50223321 58.40132891 199.22711851 51.828125 203.10546875 C49.4140625 204.3984375 49.4140625 204.3984375 47.4140625 204.3984375 C49.87157709 207.15561132 52.53667132 208.72213277 55.76953125 210.48046875 C56.85556641 211.07609619 57.94160156 211.67172363 59.06054688 212.28540039 C59.92619263 212.75600388 59.92619263 212.75600388 60.80932617 213.2361145 C63.86507537 214.89818024 66.91127816 216.57751635 69.95703125 218.2578125 C70.57915497 218.60078873 71.20127869 218.94376495 71.84225464 219.2971344 C79.062087 223.29002426 86.17706507 227.46029025 93.28198242 231.65356445 C95.09226341 232.71972746 96.90701615 233.77834098 98.7265625 234.82861328 C100.57848296 235.91035825 102.41111747 237.02557815 104.2265625 238.16748047 C109.38964921 241.28057077 113.0373435 243.246144 119.07714844 242.02880859 C119.84833008 241.82078613 120.61951172 241.61276367 121.4140625 241.3984375 C122.29610352 241.17881348 123.17814453 240.95918945 124.08691406 240.73291016 C127.08827786 239.94498825 130.06209483 239.08636505 133.0390625 238.2109375 C135.24688391 237.57634127 137.45523108 236.94357172 139.6640625 236.3125 C140.78039062 235.99313477 141.89671875 235.67376953 143.046875 235.34472656 C149.30294846 233.58656671 155.59590063 231.97165063 161.88916016 230.3527832 C165.73714621 229.3616141 169.57668985 228.36587399 173.390625 227.25 C176.30166483 226.43009473 178.42153591 225.98280881 181.4140625 226.3984375 C184.42355297 228.7246508 185.19483418 231.16355651 186.1640625 234.7734375 C186.42703125 235.70929688 186.69 236.64515625 186.9609375 237.609375 C187.4591986 240.67625798 187.52298073 242.48995898 186.4140625 245.3984375 C183.11289588 247.68282885 179.94130498 249.01694434 176.09765625 250.1171875 C175.08509766 250.40980469 174.07253906 250.70242188 173.02929688 251.00390625 C171.45631836 251.44669922 171.45631836 251.44669922 169.8515625 251.8984375 C168.82998047 252.19363281 167.80839844 252.48882812 166.75585938 252.79296875 C147.18610614 258.3984375 147.18610614 258.3984375 142.4140625 258.3984375 C142.4140625 259.0584375 142.4140625 259.7184375 142.4140625 260.3984375 C143.20425781 260.61628906 143.99445313 260.83414062 144.80859375 261.05859375 C149.55739882 262.82331763 153.73666918 265.28336362 158.1015625 267.8359375 C159.96863679 268.92076778 161.83582697 270.00539864 163.703125 271.08984375 C164.64833008 271.64043457 165.59353516 272.19102539 166.56738281 272.75830078 C169.32072636 274.34466115 172.09251472 275.89122598 174.875 277.42578125 C175.73391846 277.90539307 176.59283691 278.38500488 177.4777832 278.87915039 C179.10323 279.78612906 180.7343524 280.68303487 182.37182617 281.56811523 C186.97750328 284.16620241 190.15761512 286.41050118 192.4140625 291.3984375 C192.50251137 297.6193412 189.65066582 302.38303858 186.6640625 307.6484375 C186.23351562 308.45023437 185.80296875 309.25203125 185.359375 310.078125 C181.112198 317.68235208 181.112198 317.68235208 176.4140625 319.3984375 C171.13175465 319.78797782 168.02705055 319.10262612 163.45703125 316.46875 C161.79957886 315.52914429 161.79957886 315.52914429 160.10864258 314.57055664 C158.93947091 313.88843202 157.77044685 313.20605435 156.6015625 312.5234375 C155.40018329 311.83631987 154.19794621 311.15070008 152.99487305 310.46655273 C150.59388301 309.09917657 148.19716007 307.724769 145.80371094 306.34423828 C141.13874741 303.66635299 136.43567638 301.06010796 131.7265625 298.4609375 C130.28490174 297.66061454 128.84346542 296.85988704 127.40234375 296.05859375 C125.92314453 295.23681641 125.92314453 295.23681641 124.4140625 294.3984375 C126.59182014 305.00539826 129.13744427 315.36518779 132.48291016 325.67089844 C133.84896216 329.98779847 135.04461599 333.82007084 134.4140625 338.3984375 C132.33873292 341.54625284 129.57703463 342.19851622 126.0390625 343.1484375 C125.10320312 343.41140625 124.16734375 343.674375 123.203125 343.9453125 C120.13624202 344.4435736 118.32254102 344.50735573 115.4140625 343.3984375 C113.13020301 340.10634552 111.83264601 336.9979609 110.80078125 333.14453125 C110.52524414 332.13479248 110.24970703 331.12505371 109.96582031 330.0847168 C109.5380127 328.47657104 109.5380127 328.47657104 109.1015625 326.8359375 C108.48729426 324.58028815 107.87138635 322.32508473 107.25390625 320.0703125 C106.94694824 318.94689453 106.63999023 317.82347656 106.32373047 316.66601562 C105.01077891 311.94982033 103.59447659 307.26758158 102.1640625 302.5859375 C96.4140625 283.63139947 96.4140625 283.63139947 96.4140625 277.3984375 C95.71474609 277.13595215 95.01542969 276.8734668 94.29492188 276.60302734 C91.17115916 275.29687097 88.2833915 273.76356278 85.3203125 272.125 C84.74044083 271.8051413 84.16056915 271.48528259 83.56312561 271.1557312 C81.6783644 270.11474387 79.79612181 269.0693007 77.9140625 268.0234375 C76.60542804 267.29875468 75.29675255 266.57414594 73.98803711 265.84960938 C64.00969611 260.31751231 54.08391848 254.69620403 44.19874573 248.99923706 C40.83764391 247.06707822 37.47169168 245.14349386 34.10522461 243.22070312 C33.45978447 242.85197083 32.81434433 242.48323853 32.1493454 242.10333252 C30.57095747 241.20163134 28.99251551 240.30002474 27.4140625 239.3984375 C27.04086127 249.42113317 26.75784465 259.4421394 26.58506775 269.47040558 C26.50207024 274.12911351 26.38985547 278.7830209 26.20703125 283.43896484 C24.21698491 306.47851265 24.21698491 306.47851265 32.96508789 326.64001465 C35.67436414 329.07601706 38.45094882 331.1925306 41.52546692 333.14518738 C44.17014191 334.90016303 46.24865957 337.09326651 48.4140625 339.3984375 C50.27041347 340.98908253 52.15735863 342.53001369 54.05859375 344.06640625 C54.50589844 344.50597656 54.95320312 344.94554687 55.4140625 345.3984375 C55.4140625 346.0584375 55.4140625 346.7184375 55.4140625 347.3984375 C56.4040625 347.7284375 57.3940625 348.0584375 58.4140625 348.3984375 C63.18678977 352.71661932 63.18678977 352.71661932 64.4140625 356.3984375 C65.73267948 357.09375864 67.0682029 357.75743503 68.4140625 358.3984375 C70.1171875 359.94921875 70.1171875 359.94921875 71.6640625 361.7109375 C72.18484375 362.28457031 72.705625 362.85820312 73.2421875 363.44921875 C74.81497631 366.0652908 74.94759039 367.38716992 74.4140625 370.3984375 C72.4375 373.07421875 72.4375 373.07421875 69.7890625 375.7109375 C68.93054688 376.59394531 68.07203125 377.47695313 67.1875 378.38671875 C64.4140625 380.3984375 64.4140625 380.3984375 61.36328125 380.91796875 C57.81464288 380.29284438 56.44041423 379.24650874 53.8515625 376.7734375 C53.08328125 376.04511719 52.315 375.31679688 51.5234375 374.56640625 C48.98319013 371.95559645 46.71259649 369.22235069 44.4140625 366.3984375 C43.08505186 365.39269972 41.75332449 364.39048342 40.4140625 363.3984375 C40.4140625 362.7384375 40.4140625 362.0784375 40.4140625 361.3984375 C39.4240625 361.0684375 38.4340625 360.7384375 37.4140625 360.3984375 C32.64133523 356.08025568 32.64133523 356.08025568 31.4140625 352.3984375 C30.4240625 352.0684375 29.4340625 351.7384375 28.4140625 351.3984375 C28.4140625 350.7384375 28.4140625 350.0784375 28.4140625 349.3984375 C27.7540625 349.3984375 27.0940625 349.3984375 26.4140625 349.3984375 C26.42516556 350.07415802 26.43626862 350.74987854 26.44770813 351.44607544 C26.55842561 358.48637662 26.63378193 365.52643003 26.6887207 372.56738281 C26.71384679 375.19411262 26.74795335 377.82077264 26.79125977 380.44726562 C26.85199056 384.2254357 26.88029265 388.00268046 26.90234375 391.78125 C26.92815018 392.95334015 26.9539566 394.1254303 26.98054504 395.33303833 C26.98366982 404.44029756 26.98366982 404.44029756 24.07104492 408.12451172 C19.01740682 412.44956779 13.44777526 411.68730753 7.1015625 411.7734375 C6.06837891 411.81082031 5.03519531 411.84820312 3.97070312 411.88671875 C-4.58210548 411.9854683 -4.58210548 411.9854683 -8.25390625 409.0625 C-11.48502876 405.37133492 -11.71049985 402.83568655 -11.69946289 398.10083008 C-11.69938736 397.01993607 -11.69931183 395.93904205 -11.69923401 394.82539368 C-11.69149208 393.07684334 -11.69149208 393.07684334 -11.68359375 391.29296875 C-11.68147133 389.50145638 -11.68147133 389.50145638 -11.67930603 387.67375183 C-11.673701 383.85278842 -11.66114761 380.03188325 -11.6484375 376.2109375 C-11.64342315 373.62304772 -11.63886013 371.03515702 -11.63476562 368.44726562 C-11.62372993 362.09763632 -11.60698686 355.74804107 -11.5859375 349.3984375 C-12.2459375 349.3984375 -12.9059375 349.3984375 -13.5859375 349.3984375 C-13.79968018 349.93380127 -14.01342285 350.46916504 -14.23364258 351.02075195 C-16.08909319 354.28311584 -18.60873614 356.78606895 -21.22265625 359.44140625 C-22.05915459 360.29500481 -22.05915459 360.29500481 -22.91255188 361.16584778 C-24.09243292 362.36458073 -25.27521729 363.56046202 -26.46069336 364.75366211 C-28.26402504 366.57642362 -30.04489587 368.41938542 -31.82617188 370.26367188 C-32.97783823 371.42839837 -34.13079226 372.59185333 -35.28515625 373.75390625 C-35.81147141 374.30491501 -36.33778656 374.85592377 -36.88005066 375.42362976 C-40.59805042 379.09817527 -43.36523268 380.29182051 -48.5859375 380.3984375 C-50.9140625 379.10546875 -50.9140625 379.10546875 -52.8359375 377.2109375 C-53.48046875 376.59863281 -54.125 375.98632812 -54.7890625 375.35546875 C-55.67851562 374.38673828 -55.67851562 374.38673828 -56.5859375 373.3984375 C-57.47539062 372.44517578 -57.47539062 372.44517578 -58.3828125 371.47265625 C-59.5859375 369.3984375 -59.5859375 369.3984375 -59.43214417 366.98983765 C-58.35405843 363.68833738 -57.08036892 362.8339604 -54.24975586 360.86181641 C-26.12890212 340.75312507 -26.12890212 340.75312507 -10.79508877 311.07654381 C-9.0730761 299.45360604 -9.20034638 287.73296978 -9.7109375 276.0234375 C-9.75024761 275.11781319 -9.78955772 274.21218887 -9.83005905 273.2791214 C-10.35904843 261.94374304 -11.28858016 250.67123596 -12.5859375 239.3984375 C-16.5053473 241.59219973 -20.42456395 243.78630682 -24.34375 245.98046875 C-25.4366333 246.59216919 -26.5295166 247.20386963 -27.65551758 247.83410645 C-41.39732864 255.5272629 -41.39732864 255.5272629 -55.09375 263.30078125 C-58.7444691 265.37885298 -62.4237561 267.38273136 -66.140625 269.33984375 C-67.01734863 269.81397705 -67.89407227 270.28811035 -68.79736328 270.77661133 C-70.43203119 271.65997341 -72.07831025 272.52234042 -73.73779297 273.3581543 C-77.70934393 275.53894953 -79.90992862 277.19626093 -81.40234375 281.55859375 C-81.81679391 283.16687307 -82.21057614 284.78058857 -82.5859375 286.3984375 C-83.09146234 288.09249411 -83.60615349 289.78383633 -84.12890625 291.47265625 C-84.67948319 293.34304524 -85.22753436 295.21417905 -85.7734375 297.0859375 C-86.07096924 298.09817383 -86.36850098 299.11041016 -86.67504883 300.15332031 C-88.44532313 306.243541 -90.10963747 312.35192505 -91.6796875 318.49609375 C-92.0323074 319.86433933 -92.38492784 321.23258478 -92.73754883 322.60083008 C-93.42249103 325.26235517 -94.08839784 327.92776556 -94.74487305 330.59643555 C-95.057229 331.81500244 -95.36958496 333.03356934 -95.69140625 334.2890625 C-96.09588989 335.91376465 -96.09588989 335.91376465 -96.50854492 337.57128906 C-97.71583619 340.73930014 -98.9161983 342.32729875 -101.5859375 344.3984375 C-107.41981542 344.28404774 -115.33777955 342.64659545 -119.5859375 338.3984375 C-119.86025948 331.97084925 -117.64348484 325.62793131 -115.7109375 319.5859375 C-115.16728761 317.83134243 -114.62561334 316.07613398 -114.0859375 314.3203125 C-113.69728516 313.05864258 -113.69728516 313.05864258 -113.30078125 311.77148438 C-110.59406675 303.22328451 -110.59406675 303.22328451 -109.5859375 294.3984375 C-123.42416887 301.87553023 -137.15888134 309.5082229 -150.78027344 317.3737793 C-154.59725152 319.53979566 -157.14303577 319.69965118 -161.5859375 319.3984375 C-167.09969594 317.15342185 -169.16551631 312.75342722 -171.8984375 307.7734375 C-172.35283203 307.00386719 -172.80722656 306.23429687 -173.27539062 305.44140625 C-176.19542166 300.19852345 -178.00408448 295.41909588 -176.5859375 289.3984375 C-173.38970948 285.04937151 -168.97208282 282.58710314 -164.3359375 279.9609375 C-163.62300537 279.5498877 -162.91007324 279.13883789 -162.17553711 278.71533203 C-159.65134428 277.26620445 -157.11893549 275.83211705 -154.5859375 274.3984375 C-152.99966553 273.49472412 -152.99966553 273.49472412 -151.38134766 272.57275391 C-147.97405815 270.63306936 -144.56226064 268.70159727 -141.1484375 266.7734375 C-140.04016602 266.1451001 -138.93189453 265.5167627 -137.79003906 264.86938477 C-136.23687988 263.99817993 -136.23687988 263.99817993 -134.65234375 263.109375 C-133.2593103 262.32506104 -133.2593103 262.32506104 -131.83813477 261.52490234 C-129.5859375 260.3984375 -129.5859375 260.3984375 -127.5859375 260.3984375 C-127.5859375 259.7384375 -127.5859375 259.0784375 -127.5859375 258.3984375 C-128.21322754 258.29974365 -128.84051758 258.2010498 -129.48681641 258.09936523 C-137.47653703 256.7537813 -145.17982122 254.69995987 -152.9609375 252.4609375 C-154.20488281 252.11353516 -155.44882813 251.76613281 -156.73046875 251.40820312 C-157.92800781 251.06595703 -159.12554687 250.72371094 -160.359375 250.37109375 C-161.43622559 250.06437744 -162.51307617 249.75766113 -163.62255859 249.44165039 C-166.62634346 248.38421319 -169.03450929 247.30808293 -171.5859375 245.3984375 C-172.42347358 239.32630095 -171.10364361 233.96510881 -168.5859375 228.3984375 C-167.5959375 227.4084375 -167.5959375 227.4084375 -166.5859375 226.3984375 C-159.44743298 226.72680871 -152.91747645 228.52620206 -146.0859375 230.5234375 C-145.00948975 230.83039551 -143.93304199 231.13735352 -142.82397461 231.45361328 C-138.26186384 232.75499417 -133.7048235 234.07353297 -129.14892578 235.39648438 C-125.81732011 236.36216718 -122.48296996 237.3179194 -119.1484375 238.2734375 C-118.1378125 238.57137207 -117.1271875 238.86930664 -116.0859375 239.17626953 C-113.26435539 239.9835764 -110.44034492 240.71691411 -107.5859375 241.3984375 C-106.74925537 241.60573486 -105.91257324 241.81303223 -105.05053711 242.02661133 C-97.34724189 243.42075896 -92.47011996 240.29877984 -86.0234375 236.3359375 C-83.81813685 235.0396353 -81.61239448 233.74408434 -79.40625 232.44921875 C-78.28250977 231.77842285 -77.15876953 231.10762695 -76.00097656 230.41650391 C-70.52517072 227.1806581 -64.95935569 224.10983366 -59.3984375 221.0234375 C-57.33140492 219.86570088 -55.26497583 218.70688597 -53.19921875 217.546875 C-49.78320321 215.62949483 -46.36423672 213.71768174 -42.94140625 211.8125 C-41.65605922 211.09148582 -40.37088444 210.37016444 -39.0859375 209.6484375 C-38.02375 209.05546875 -36.9615625 208.4625 -35.8671875 207.8515625 C-33.47321229 206.60141689 -33.47321229 206.60141689 -32.5859375 204.3984375 C-33.74802734 204.08326172 -33.74802734 204.08326172 -34.93359375 203.76171875 C-39.9469902 201.8904082 -44.39712015 199.25719861 -49.0234375 196.5859375 C-51.08324179 195.40869398 -53.14314038 194.23161544 -55.203125 193.0546875 C-56.25725586 192.45011719 -57.31138672 191.84554687 -58.39746094 191.22265625 C-64.43252262 187.76982463 -70.49082897 184.35773179 -76.55444336 180.95532227 C-80.7071753 178.61961302 -84.83816212 176.26953205 -88.89453125 173.76953125 C-89.52931396 173.38450439 -90.16409668 172.99947754 -90.81811523 172.6027832 C-92.43716455 171.61427098 -94.04350517 170.60502114 -95.6484375 169.59375 C-101.54095667 167.19599619 -107.64597611 169.8359292 -113.5234375 171.5234375 C-114.28414551 171.73790527 -115.04485352 171.95237305 -115.82861328 172.17333984 C-120.45179705 173.48331873 -125.06451765 174.82842271 -129.67578125 176.1796875 C-130.71806885 176.48503418 -131.76035645 176.79038086 -132.83422852 177.10498047 C-134.86029123 177.70012749 -136.88557298 178.29794225 -138.90991211 178.89892578 C-160.29098611 185.20204832 -160.29098611 185.20204832 -166.5859375 184.3984375 C-170.55796932 181.29408253 -170.9017753 177.15611718 -171.5859375 172.3984375 C-171.71955295 170.03215105 -171.68688481 167.77069932 -171.5859375 165.3984375 C-165.55521037 162.38307393 -159.58028071 160.52999338 -153.04858398 158.97631836 C-147.7028921 157.6990181 -142.42195779 156.25930662 -137.1484375 154.7109375 C-136.40851563 154.49638916 -135.66859375 154.28184082 -134.90625 154.06079102 C-131.46911916 153.25108039 -131.46911916 153.25108039 -128.5859375 151.3984375 C-129.31482178 150.99641113 -130.04370605 150.59438477 -130.79467773 150.18017578 C-139.07194634 145.61030471 -147.33520771 141.01603343 -155.5859375 136.3984375 C-156.53726563 135.86669922 -157.48859375 135.33496094 -158.46875 134.78710938 C-160.82765233 133.4615794 -163.17739172 132.12155629 -165.5234375 130.7734375 C-166.1949585 130.39719238 -166.86647949 130.02094727 -167.55834961 129.63330078 C-171.44243177 127.37363735 -174.37679806 125.3516344 -176.5859375 121.3984375 C-178.01196188 114.33278327 -175.55919244 109.38024302 -171.8359375 103.5234375 C-171.3925 102.77835937 -170.9490625 102.03328125 -170.4921875 101.265625 C-165.99571458 93.91256928 -165.99571458 93.91256928 -162.5859375 92.3984375 C-153.84991267 91.04046136 -148.05173934 94.86960031 -140.7109375 99.2109375 C-139.52141062 99.89567417 -138.33088832 100.57868434 -137.1394043 101.26000977 C-134.74995634 102.63080121 -132.36737632 104.01241851 -129.99072266 105.40527344 C-126.86812501 107.2332447 -123.73586232 109.04274804 -120.59765625 110.84375 C-116.24908739 113.34293205 -111.91349035 115.86305026 -107.5859375 118.3984375 C-108.68944369 114.6065783 -109.79386553 110.81498636 -110.8984375 107.0234375 C-111.3615332 105.43208984 -111.3615332 105.43208984 -111.83398438 103.80859375 C-114.90427871 93.06889395 -114.90427871 93.06889395 -118.24829102 82.41333008 C-119.43438553 78.72495556 -120.01333038 76.06887635 -118.5859375 72.3984375 C-114.71084747 68.03896122 -108.17815997 67.79290614 -102.7109375 66.9609375 C-100.5859375 67.3984375 -100.5859375 67.3984375 -99.15234375 69.2734375 C-96.96346335 73.64028119 -95.71930572 78.14365193 -94.3984375 82.8359375 C-93.95431519 84.38462524 -93.95431519 84.38462524 -93.5012207 85.96459961 C-90.28642148 97.26948915 -87.28128143 108.63171597 -84.28515625 119.99609375 C-83.81952271 121.69137207 -83.81952271 121.69137207 -83.34448242 123.42089844 C-82.5859375 126.3984375 -82.5859375 126.3984375 -82.0546875 130.35546875 C-79.52229772 135.60209545 -74.42730363 137.43739792 -69.3984375 140.0234375 C-67.10764234 141.25180151 -64.81728708 142.48098621 -62.52734375 143.7109375 C-61.36477051 144.32582031 -60.20219727 144.94070312 -59.00439453 145.57421875 C-53.89634542 148.30006813 -48.86666878 151.15814806 -43.8359375 154.0234375 C-42.15369007 154.97403662 -40.47139735 155.92455559 -38.7890625 156.875 C-29.70657564 162.02348375 -20.64868583 167.21531958 -11.5859375 172.3984375 C-10.35485459 160.20616528 -9.5808518 148.02206476 -9.2109375 135.7734375 C-9.18358521 134.87362782 -9.15623291 133.97381813 -9.12805176 133.04674149 C-8.55155383 110.28817859 -9.7752643 91.93177488 -25.90982056 74.82324219 C-33.72438689 66.87814881 -42.47320733 59.61564569 -51.48544312 53.07423401 C-52.40290314 52.4057695 -53.32036316 51.73730499 -54.265625 51.04858398 C-55.07757324 50.48300278 -55.88952148 49.91742157 -56.72607422 49.33470154 C-59.20210852 46.75695498 -59.47056797 44.92931672 -59.5859375 41.3984375 C-57.92142762 39.06324598 -56.51847591 37.4354934 -54.4609375 35.5234375 C-53.97367187 35.02585938 -53.48640625 34.52828125 -52.984375 34.015625 C-50.91468965 32.01199343 -49.17874352 30.54766176 -46.35717773 29.83740234 C-41.84780622 30.75032065 -39.4313594 33.94149629 -36.31640625 37.1796875 C-35.63540359 37.86776489 -34.95440094 38.55584229 -34.25276184 39.26477051 C-32.08097604 41.46453821 -29.92721679 43.68105055 -27.7734375 45.8984375 C-26.3038892 47.39306341 -24.8331991 48.8865676 -23.36132812 50.37890625 C-19.7561544 54.0392002 -16.16705227 57.71460785 -12.5859375 61.3984375 C-12.58007126 60.74555252 -12.57420502 60.09266754 -12.56816101 59.41999817 C-12.50421116 52.62273112 -12.41978688 45.82593683 -12.32348633 39.02905273 C-12.29023862 36.49265782 -12.26220625 33.95618894 -12.23950195 31.41967773 C-12.2059541 27.77295422 -12.15363598 24.12690839 -12.09765625 20.48046875 C-12.09126633 19.34696487 -12.0848764 18.213461 -12.07829285 17.04560852 C-12.04860161 15.45452522 -12.04860161 15.45452522 -12.01831055 13.83129883 C-12.00165596 12.43564445 -12.00165596 12.43564445 -11.98466492 11.01179504 C-11.40394692 7.20562649 -9.51717708 4.64224199 -7.24755859 1.61083984 C-4.83328659 -0.15073447 -2.96349232 0.01002955 0 0 Z ", "fill", "#FDFEFE", "transform", "translate(248.5859375,49.6015625)"], ["d", "M0 0 C0.99 0.495 0.99 0.495 2 1 C1.99254257 1.97195313 1.98508514 2.94390625 1.97740173 3.9453125 C1.9128535 13.12595352 1.89585058 22.30562961 1.92484188 31.48646545 C1.93823253 36.20611463 1.9351433 40.9245307 1.89379883 45.64404297 C1.85447817 50.20287103 1.85922199 54.75975915 1.89392281 59.31860352 C1.89950177 61.05365074 1.88946939 62.78882381 1.86323357 64.52368164 C1.46776494 74.12893625 1.46776494 74.12893625 4.95608521 82.7565918 C7.20644913 84.75217971 9.497056 86.34358522 12 88 C13.84898376 89.97216797 13.84898376 89.97216797 15.4375 91.9375 C17.64389102 94.98818803 17.64389102 94.98818803 20 96 C19.67 96.66 19.34 97.32 19 98 C17.1617775 96.45673584 15.35839699 94.8891985 13.57978821 93.27705383 C11.83163854 91.73404698 10.02567202 90.25460261 8.17375183 88.83781433 C2.83412942 84.34701505 -0.51384492 80.85655012 -1.16732311 73.71622181 C-1.31220626 69.60973037 -1.2146886 65.53099247 -1.07421875 61.42578125 C-1.05366377 59.64793241 -1.03802393 57.87002061 -1.02705383 56.09208679 C-0.98535096 51.44617099 -0.87758119 46.80412938 -0.75531006 42.159729 C-0.64212186 37.40714928 -0.59240505 32.65393399 -0.53710938 27.90039062 C-0.41966688 18.59857198 -0.23231186 9.29960995 0 0 Z ", "fill", "#2878BC", "transform", "translate(275,288)"], ["d", "M0 0 C0.66 0.33 1.32 0.66 2 1 C1.49058365 1.30518051 0.9811673 1.61036102 0.45631409 1.92478943 C-6.30774675 6.30877686 -13.33649619 11.88829248 -15.54123688 19.9885025 C-17.62295798 31.53484794 -16.66128728 43.66964244 -16.16729736 55.32513428 C-15.99151831 59.91658152 -15.91536242 64.5096544 -15.83007812 69.10351562 C-15.64923228 78.07324662 -15.36021693 87.03580217 -15 96 C-16.485 96.495 -16.485 96.495 -18 97 C-18.42034612 87.01219923 -18.73847369 77.02655635 -18.93261909 67.03165627 C-19.02589722 62.38800632 -19.15192064 57.75047676 -19.35791016 53.11035156 C-20.83444258 18.99676179 -20.83444258 18.99676179 -11.48043823 8.78988647 C-7.87098237 5.49429259 -4.16169044 2.56567256 0 0 Z ", "fill", "#1F73BA", "transform", "translate(293,125)"], ["d", "M0 0 C0.33 0 0.66 0 1 0 C1 17.49 1 34.98 1 53 C-3.57179244 49.08132077 -7.79868491 45.28080293 -11.90625 40.9453125 C-12.98997302 39.8246378 -14.0746361 38.70487153 -15.16015625 37.5859375 C-16.84099116 35.84938703 -18.51566874 34.10841333 -20.17529297 32.3515625 C-21.79866144 30.63723968 -23.44359081 28.94631018 -25.09375 27.2578125 C-25.5825061 26.72979034 -26.07126221 26.20176819 -26.5748291 25.65774536 C-29.41884385 22.79135239 -30.77959 22.01871983 -34.86914062 21.67138672 C-35.90232422 21.7798291 -36.93550781 21.88827148 -38 22 C-37.67 21.34 -37.34 20.68 -37 20 C-33.77682599 19.60154403 -31.13670196 19.2773533 -28.30111694 21.08004761 C-26.52970806 22.67806978 -24.89163626 24.34765714 -23.26171875 26.08984375 C-22.35145683 27.01852013 -22.35145683 27.01852013 -21.42280579 27.96595764 C-19.49384437 29.94058874 -17.59046551 31.93783469 -15.6875 33.9375 C-13.76166556 35.92816118 -11.8309511 37.91396161 -9.89863586 39.89833069 C-8.69951654 41.13333383 -7.50517012 42.37299253 -6.31608582 43.61766052 C-3.46361693 46.70032357 -3.46361693 46.70032357 0 49 C0 32.83 0 16.66 0 0 Z ", "fill", "#1F73BA", "transform", "translate(236,59)"], ["d", "M0 0 C1.5994614 3.19892281 2.42595236 5.35462576 3.125 8.75 C3.29257813 9.54921875 3.46015625 10.3484375 3.6328125 11.171875 C3.81457031 12.07679688 3.81457031 12.07679688 4 13 C2.68 12.34 1.36 11.68 0 11 C0 7.37 0 3.74 0 0 Z ", "fill", "#307CBE", "transform", "translate(137,155)"], ["d", "M0 0 C3.7952131 1.49097658 5.61042731 3.75700849 8 7 C5 7 5 7 2.3125 4.625 C0 2 0 2 0 0 Z ", "fill", "#2B79BD", "transform", "translate(295,386)"], [2, "height", "100%", "display", "flex", "align-items", "center", "justify-content", "center"], [2, "width", "140px", "font-size", "18px", "font-weight", "550"]], template: function MainstatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "WATER PH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "polygon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "WATER EC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "circle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "WATER TEMPERATURE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "linearGradient", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "stop", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "stop", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "linearGradient", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "linearGradient", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "linearGradient", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "linearGradient", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "linearGradient", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "linearGradient", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "linearGradient", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "WATER FLOW RATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "g", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "RESERVOIR LEVEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "svg", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "AMBIENT TEMPERATURE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "svg", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "polygon", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "rect", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "AMBIENT HUMIDITY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "svg", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "rect", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "rect", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "rect", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "rect", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "rect", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "rect", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "rect", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "rect", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "rect", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "rect", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "rect", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "rect", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "rect", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "rect", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "rect", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "rect", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "rect", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "rect", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "rect", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "rect", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "path", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "IRRIGATION STATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "svg", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "path", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "path", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "path", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "path", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "path", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "path", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "path", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "CHILLER STATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "PROGRAM NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.allData == null ? null : ctx.allData.data) ? ctx.allData.data.water_pH ? ctx.allData.data.water_pH : "-" : "-", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.allData == null ? null : ctx.allData.data) ? ctx.allData.data.water_ec ? ctx.allData.data.water_ec : "-" : "-", " mS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.meterData == null ? null : ctx.meterData.water[2]) ? ctx.meterData.water[2] : "-", " \u00B0C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.meterData == null ? null : ctx.meterData.water[1]) ? ctx.meterData.water[1] : "-", " lpm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.meterData == null ? null : ctx.meterData.water[0]) ? (ctx.meterData == null ? null : ctx.meterData.water[0]) == 2 ? "Normal" : (ctx.meterData == null ? null : ctx.meterData.water[0]) == 1 ? "Low" : "Critically Low" : "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.allData == null ? null : ctx.allData.data == null ? null : ctx.allData.data.ultrasonic) && (ctx.allData == null ? null : ctx.allData.alarm == null ? null : ctx.allData.alarm.ultrasonic_error) == 0 ? ctx.allData == null ? null : ctx.allData.data == null ? null : ctx.allData.data.ultrasonic : "-", " L ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx.meterData == null ? null : ctx.meterData.ambient[1]) ? ctx.meterData.ambient[1] : "-", " \u00B0C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.meterData == null ? null : ctx.meterData.ambient[0]) ? ctx.meterData == null ? null : ctx.meterData.ambient[0] : "-", " % ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.allData == null ? null : ctx.allData.data) ? ctx.allData.data.irrigation_state ? ctx.allData.data.irrigation_state == 1 ? "ON" : "OFF" : "-" : "-", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.allData == null ? null : ctx.allData.data) ? ctx.allData.data.chiller_state ? ctx.allData.data.chiller_state == 1 ? "ON" : "OFF" : "-" : "-", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.allData == null ? null : ctx.allData.data) ? ctx.allData.data.program_name ? ctx.allData.data.program_name : "-" : "-");
    } }, styles: [".data-space[_ngcontent-%COMP%] {\r\n    height: 250px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: aqua;\r\n  }\r\n  \r\n  .data-space[_ngcontent-%COMP%] > .data-circles[_ngcontent-%COMP%] {\r\n    padding-top: 5px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    \r\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n    \r\n  }\r\n  \r\n  .data-circles[_ngcontent-%COMP%] > .water-status-circle[_ngcontent-%COMP%] {\r\n    margin-left: 80px;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .data-circles[_ngcontent-%COMP%] > .water-status-circle[_ngcontent-%COMP%] > apx-chart[_ngcontent-%COMP%] {\r\n    margin-top: -10px;\r\n    height: 350px;\r\n    position: fixed;\r\n    z-index: 999;\r\n    \r\n  }\r\n  \r\n  .water-status-circle[_ngcontent-%COMP%] > .water-status-data[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    margin-left: 45px;\r\n    color: black;\r\n    \r\n    z-index: 9;\r\n  }\r\n  \r\n  .data-circles[_ngcontent-%COMP%] > .ambience-status-circle[_ngcontent-%COMP%] {\r\n    margin-left: 500px;\r\n    height: 250px;\r\n    position: fixed;\r\n    \r\n  }\r\n  \r\n  .data-circles[_ngcontent-%COMP%] > .ambience-status-circle[_ngcontent-%COMP%] > apx-chart[_ngcontent-%COMP%] {\r\n    margin-top: -170px;\r\n    position: fixed;\r\n    height: 200px;\r\n    z-index: 9991;\r\n    \r\n  }\r\n  \r\n  .ambience-status-circle[_ngcontent-%COMP%] > .ambience-status-data[_ngcontent-%COMP%] {\r\n    color: black;\r\n    margin-top: 75px;\r\n    margin-left: 80px;\r\n    z-index: 19;\r\n    \r\n  }\r\n  \r\n  .grid-container[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    display: grid;\r\n    grid-template-columns: auto auto auto auto auto;\r\n    background-color: #ffffff;\r\n    padding: 2px;\r\n  }\r\n  \r\n  .grid-item[_ngcontent-%COMP%] {\r\n    background-color: rgba(255, 255, 255, 0.8);\r\n    border: 1px solid rgba(0, 0, 0, 0.0);\r\n    z-index: 10;\r\n    box-shadow:  0 4px 8px 0 rgba(0,0,0,0.2);\r\n    height: 100px;\r\n    font-size: 30px;\r\n    text-align: center;\r\n    margin: 10px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW5zdGF0dXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixzRUFBc0U7SUFDdEUsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0RBQWdEO0VBQ2xEOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osK0NBQStDO0lBQy9DLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLDZDQUE2QztFQUMvQzs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGFBQWE7SUFDYixrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsOENBQThDO0VBQ2hEOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiwrQ0FBK0M7SUFDL0MseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLDBDQUEwQztJQUMxQyxvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLHdDQUF3QztJQUN4QyxhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2QiLCJmaWxlIjoibWFpbnN0YXR1cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGEtc3BhY2Uge1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcclxuICB9XHJcbiAgXHJcbiAgLmRhdGEtc3BhY2U+LmRhdGEtY2lyY2xlcyB7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAvKiBwYWRkaW5nLWxlZnQ6IDEwMHB4OyAqL1xyXG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGFxdWE7ICovXHJcbiAgfVxyXG4gIFxyXG4gIC5kYXRhLWNpcmNsZXM+LndhdGVyLXN0YXR1cy1jaXJjbGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgLmRhdGEtY2lyY2xlcz4ud2F0ZXItc3RhdHVzLWNpcmNsZT5hcHgtY2hhcnQge1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTksIDI1NSwgMjQ5LCAwLjUpOyAqL1xyXG4gIH1cclxuICBcclxuICAud2F0ZXItc3RhdHVzLWNpcmNsZT4ud2F0ZXItc3RhdHVzLWRhdGEge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0NXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsIDExOCwgMjIzLDAuNSk7ICovXHJcbiAgICB6LWluZGV4OiA5O1xyXG4gIH1cclxuICBcclxuICAuZGF0YS1jaXJjbGVzPi5hbWJpZW5jZS1zdGF0dXMtY2lyY2xlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MDBweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMywgOTcsIDczLDAuNSk7ICovXHJcbiAgfVxyXG4gIFxyXG4gIC5kYXRhLWNpcmNsZXM+LmFtYmllbmNlLXN0YXR1cy1jaXJjbGU+YXB4LWNoYXJ0IHtcclxuICAgIG1hcmdpbi10b3A6IC0xNzBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB6LWluZGV4OiA5OTkxO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTsgKi9cclxuICB9XHJcbiAgXHJcbiAgLmFtYmllbmNlLXN0YXR1cy1jaXJjbGU+LmFtYmllbmNlLXN0YXR1cy1kYXRhIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogODBweDtcclxuICAgIHotaW5kZXg6IDE5O1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NCwgNjQsIDIzMCwgMC41KTsgKi9cclxuICB9XHJcblxyXG4gIC5ncmlkLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICB9XHJcbiAgXHJcbiAgLmdyaWQtaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMCk7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGJveC1zaGFkb3c6ICAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ 1499:
/*!******************************************************!*\
  !*** ./src/app/maintenance/maintenance.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaintenanceComponent": () => (/* binding */ MaintenanceComponent)
/* harmony export */ });
/* harmony import */ var D_Cropicco_cropicco_pi_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _keypad_keypad_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../keypad/keypad.component */ 8830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1288);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var src_shared_directives_disable_one_sec_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/directives/disable-one-sec.directive */ 7619);









class MaintenanceComponent {
  constructor(modalService, http) {
    this.modalService = modalService;
    this.http = http;
    this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api;
    this.adhocSet = {
      water_pump: 0,
      water_temperature_time: 0,
      ec_pump: 0,
      ph_inc_pump: 0,
      ph_decc_pump: 0,
      light_brightness_time: 0,
      flush_pump: 0,
      topup_pump: 0
    };
  }

  ngOnInit() {
    setTimeout(() => {
      this.systemScreen(1);
    }, 100);
  }

  updateAdhocSettings(form) {
    let payload = {
      "water_pump": form.value.water_pump.toString() + ":00",
      "water_temperature_time": form.value.water_temperature_time.toString() + ":00",
      "ec_pump": "00:" + form.value.ec_pump,
      "ph_inc_pump": "00:" + form.value.ph_inc_pump,
      "ph_decc_pump": "00:" + form.value.ph_decc_pump,
      "flush_pump": form.value.flush_pump.toString() + ":00",
      "topup_pump": form.value.topup_pump.toString() + ":00"
    };
    console.log(payload);
    this.httpPost('/adhoc/start', payload);
  }

  open(form, inputItem) {
    console.log("Opening Modal", form.value, inputItem);
    let tempFormVal = form.value;
    const modalRef = this.modalService.open(_keypad_keypad_component__WEBPACK_IMPORTED_MODULE_2__.KeypadComponent, {
      size: 'sm',
      backdrop: 'static',
      centered: true,
      scrollable: false
    });
    console.log('tempFormVal[inputItem]', tempFormVal[inputItem]);
    const value = tempFormVal[inputItem];
    modalRef.componentInstance.defVal = tempFormVal[inputItem];
    modalRef.componentInstance.passEntry.subscribe(receivedEntry => {
      const isValidFn = obj => {
        if (this.minMaxFn(obj)) {
          tempFormVal[inputItem] = receivedEntry;
          form.setValue(tempFormVal);
        } else {
          tempFormVal[inputItem] = value;
          form.setValue(tempFormVal);
        }
      };

      console.log("Received Data:", receivedEntry, tempFormVal);
      let obj = {};

      switch (true) {
        case inputItem == 'water_pump':
          obj = {
            min: 0,
            max: 5,
            value: Number(receivedEntry)
          };
          isValidFn(obj);
          break;

        case inputItem == 'water_temperature_time':
          obj = {
            min: 0,
            max: 10,
            value: Number(receivedEntry)
          };
          isValidFn(obj);
          break;

        case inputItem == 'ec_pump':
          obj = {
            min: 0,
            max: 60,
            value: Number(receivedEntry)
          };
          isValidFn(obj);
          break;

        case inputItem == 'ph_inc_pump':
          obj = {
            min: 0,
            max: 60,
            value: Number(receivedEntry)
          };
          isValidFn(obj);
          break;

        case inputItem == 'ph_decc_pump':
          obj = {
            min: 0,
            max: 60,
            value: Number(receivedEntry)
          };
          isValidFn(obj);
          break;

        case inputItem == 'flush_pump':
          obj = {
            min: 0,
            max: 5,
            value: Number(receivedEntry)
          };
          isValidFn(obj);
          break;

        case inputItem == 'topup_pump':
          obj = {
            min: 0,
            max: 5,
            value: Number(receivedEntry)
          };
          isValidFn(obj);
          break;

        default:
          tempFormVal[inputItem] = receivedEntry;
          form.setValue(tempFormVal);
          break;
      }

      modalRef.close();
    });
  }

  minMaxFn(num) {
    return num.value >= num.min && num.value <= num.max;
  }

  systemScreen(index) {
    var _this = this;

    return (0,D_Cropicco_cropicco_pi_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let payloadData;

      if (index == 1) {
        payloadData = {
          "screen": "maintanence",
          "status": "true"
        };
      }

      if (index == 2) {
        payloadData = {
          "screen": "maintanence",
          "status": "false"
        };
      }

      _this.httpPost("system/screen", payloadData);
    })();
  }

  httpPost(method, body) {
    console.log("Http Post : ", method, body);
    return new Promise((resolve, reject) => {
      this.http.post(this.url + "/" + method, body).subscribe({
        next: data => {
          resolve(data);
        },
        error: error => {
          console.error(method + " Api error");
          resolve(false);
        }
      });
    });
  }

  ngOnDestroy() {
    setTimeout(() => {
      this.systemScreen(2);
    }, 100);
  }

}

MaintenanceComponent.ɵfac = function MaintenanceComponent_Factory(t) {
  return new (t || MaintenanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
};

MaintenanceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: MaintenanceComponent,
  selectors: [["app-maintenance"]],
  decls: 58,
  vars: 7,
  consts: [[1, "adhoc-space"], ["adHocSettings", "ngForm"], [1, "field", "subrow"], ["type", "number", "name", "water_pump", 3, "ngModel", "ngModelChange", "click"], ["type", "number", "name", "water_temperature_time", 3, "ngModel", "ngModelChange", "click"], ["type", "number", "name", "ec_pump", 3, "ngModel", "ngModelChange", "click"], ["type", "number", "name", "ph_inc_pump", 3, "ngModel", "ngModelChange", "click"], ["type", "number", "name", "ph_decc_pump", 3, "ngModel", "ngModelChange", "click"], ["type", "number", "name", "flush_pump", 3, "ngModel", "ngModelChange", "click"], ["type", "number", "name", "topup_pump", 3, "ngModel", "ngModelChange", "click"], [1, "subbtn"], [1, "subrow", 2, "margin-top", "17px", "height", "30px", "margin-top", "-0.1px"], ["mat-raised-button", "", "disableOneSec", "", "type", "submit", 1, "bg-success", "clickable-button", 3, "click"]],
  template: function MaintenanceComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "form", null, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "table");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "tr", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Water pump");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MaintenanceComponent_Template_input_ngModelChange_8_listener($event) {
        return ctx.adhocSet.water_pump = $event;
      })("click", function MaintenanceComponent_Template_input_click_8_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);

        return ctx.open(_r0, "water_pump");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "( 0 - 5 mins)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "tr", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Water chiller ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MaintenanceComponent_Template_input_ngModelChange_15_listener($event) {
        return ctx.adhocSet.water_temperature_time = $event;
      })("click", function MaintenanceComponent_Template_input_click_15_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);

        return ctx.open(_r0, "water_temperature_time");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "( 0 - 10 mins)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "tr", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "EC dose pump");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MaintenanceComponent_Template_input_ngModelChange_22_listener($event) {
        return ctx.adhocSet.ec_pump = $event;
      })("click", function MaintenanceComponent_Template_input_click_22_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);

        return ctx.open(_r0, "ec_pump");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "( 0 - 60 secs)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "tr", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "pH increase dose pump");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MaintenanceComponent_Template_input_ngModelChange_29_listener($event) {
        return ctx.adhocSet.ph_inc_pump = $event;
      })("click", function MaintenanceComponent_Template_input_click_29_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);

        return ctx.open(_r0, "ph_inc_pump");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "( 0 - 60 secs)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "tr", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "pH decrease dose pump");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MaintenanceComponent_Template_input_ngModelChange_36_listener($event) {
        return ctx.adhocSet.ph_decc_pump = $event;
      })("click", function MaintenanceComponent_Template_input_click_36_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);

        return ctx.open(_r0, "ph_decc_pump");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "( 0 - 60 secs)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "tr", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Flush pump");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MaintenanceComponent_Template_input_ngModelChange_43_listener($event) {
        return ctx.adhocSet.flush_pump = $event;
      })("click", function MaintenanceComponent_Template_input_click_43_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);

        return ctx.open(_r0, "flush_pump");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "( 0 - 5 mins)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "tr", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Topup pump");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MaintenanceComponent_Template_input_ngModelChange_50_listener($event) {
        return ctx.adhocSet.topup_pump = $event;
      })("click", function MaintenanceComponent_Template_input_click_50_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);

        return ctx.open(_r0, "topup_pump");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "( 0 - 5 mins)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MaintenanceComponent_Template_button_click_56_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);

        return ctx.updateAdhocSettings(_r0);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Update");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.adhocSet.water_pump);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.adhocSet.water_temperature_time);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.adhocSet.ec_pump);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.adhocSet.ph_inc_pump);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.adhocSet.ph_decc_pump);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.adhocSet.flush_pump);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.adhocSet.topup_pump);
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, src_shared_directives_disable_one_sec_directive__WEBPACK_IMPORTED_MODULE_3__.DisableOneSecDirective],
  styles: [".adhoc-space[_ngcontent-%COMP%] {\r\n  height: 300px;\r\n  width: 1150px;\r\n  \r\n  margin-left: 350px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  color: black;\r\n  padding: 10px;\r\n  \r\n  \r\n  \r\n}\r\n\r\nform[_ngcontent-%COMP%] > .subrow[_ngcontent-%COMP%] {\r\n  margin-top: 2px;\r\n  width: 50%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n.subrow[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n}\r\n\r\n.subrow[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n}\r\n\r\nform[_ngcontent-%COMP%]    > .subbtn[_ngcontent-%COMP%] {\r\n  \r\n  width: 50%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n}\r\n\r\n.clickable-button[_ngcontent-%COMP%]{\r\n  transition: transform 0.5s ease-in-out;\r\n}\r\n\r\n.clickable-button[_ngcontent-%COMP%]:active {\r\n  transform: scale(0.50); \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW50ZW5hbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQ0FBZ0M7RUFDaEMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usc0JBQXNCLEVBQUUsaUNBQWlDO0FBQzNEIiwiZmlsZSI6Im1haW50ZW5hbmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRob2Mtc3BhY2Uge1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgd2lkdGg6IDExNTBweDtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7ICovXHJcbiAgbWFyZ2luLWxlZnQ6IDM1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICAvKiBtYXJnaW4tdG9wOiAxMHB4OyAqL1xyXG4gIC8qIGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0OyAqL1xyXG4gIC8qIGFsaWduLWl0ZW1zOmJhc2VsaW5lOyAqL1xyXG59XHJcblxyXG5mb3JtPi5zdWJyb3cge1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxuICB3aWR0aDogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLnN1YnJvdz4gdGR7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcbi5zdWJyb3c+IHRkID5pbnB1dCB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbmZvcm0gPi5zdWJidG4ge1xyXG4gIC8qIG1hcmdpbi10b3A6IDFweDsgKi9cclxuICB3aWR0aDogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmNsaWNrYWJsZS1idXR0b257XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5jbGlja2FibGUtYnV0dG9uOmFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUwKTsgLyogU2xpZ2h0bHkgc2NhbGUgZG93biBvbiBjbGljayAqL1xyXG59Il19 */"]
});

/***/ }),

/***/ 4586:
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var D_Cropicco_cropicco_pi_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _keypad_keypad_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../keypad/keypad.component */ 8830);
/* harmony import */ var src_shared_component_calibration_dialog_calibration_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/component/calibration-dialog/calibration-dialog.component */ 2767);
/* harmony import */ var src_shared_component_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/component/auth/auth.component */ 4278);
/* harmony import */ var src_shared_model_api_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/model/api.model */ 7860);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1288);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var src_core_screen_saver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/core/screen-saver.service */ 3160);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var src_shared_directives_disable_one_sec_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shared/directives/disable-one-sec.directive */ 7619);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var ng_qrcode__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-qrcode */ 2211);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/radio */ 5644);
/* harmony import */ var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toggle-switch */ 8853);






















function SettingsComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "form", null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "ON Time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SettingsComponent_ng_template_6_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r10.wtPumpSet.ontime = $event;
    })("click", function SettingsComponent_ng_template_6_Template_input_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11);

      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1);

      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r12.open(_r9, "ontime");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "OFF Time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SettingsComponent_ng_template_6_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r13.wtPumpSet.offtime = $event;
    })("click", function SettingsComponent_ng_template_6_Template_input_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11);

      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1);

      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r14.open(_r9, "offtime");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SettingsComponent_ng_template_6_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11);

      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1);

      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r15.updateWaterPumpSettings(_r9);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r1.wtPumpSet.ontime);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r1.wtPumpSet.offtime);
  }
}

function SettingsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "form", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-card-title", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "PH");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, " Minimum (0.0 - 10.0) : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SettingsComponent_ng_template_10_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r18.pHSet.phmin = $event;
    })("click", function SettingsComponent_ng_template_10_Template_input_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);

      const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](2);

      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r20.open(_r16, "phmin");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, " Maximum (0.0 - 10.0) : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SettingsComponent_ng_template_10_Template_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r21.pHSet.phmax = $event;
    })("click", function SettingsComponent_ng_template_10_Template_input_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);

      const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](2);

      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r22.open(_r16, "phmax");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, " Sensor error set point : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SettingsComponent_ng_template_10_Template_input_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r23.pHSet.phsensor_setpoint = $event;
    })("click", function SettingsComponent_ng_template_10_Template_input_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);

      const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](2);

      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r24.open(_r16, "phsensor_setpoint");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, " Pump error set point (0.0 - 4.0): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SettingsComponent_ng_template_10_Template_input_ngModelChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r25.pHSet.phpump_setpoint = $event;
    })("click", function SettingsComponent_ng_template_10_Template_input_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);

      const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](2);

      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r26.open(_r16, "phpump_setpoint");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SettingsComponent_ng_template_10_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);

      const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](2);

      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r27.updatePhSettings(_r16);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](29, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "form", 15, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "mat-card-title", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "EC");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, " Setpoint (0 - 3000) : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SettingsComponent_ng_template_10_Template_input_ngModelChange_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r28.eCSet.ecmin = $event;
    })("click", function SettingsComponent_ng_template_10_Template_input_click_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);

      const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](31);

      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r29.open(_r17, "ecmin");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42, " Delta (0 - 900) : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SettingsComponent_ng_template_10_Template_input_ngModelChange_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r30.eCSet.ecideal = $event;
    })("click", function SettingsComponent_ng_template_10_Template_input_click_43_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);

      const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](31);

      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r31.open(_r17, "ecideal");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, " Sensor error set point (0 - 500) : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SettingsComponent_ng_template_10_Template_input_ngModelChange_48_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r32.eCSet.ecsensor_setpoint = $event;
    })("click", function SettingsComponent_ng_template_10_Template_input_click_48_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);

      const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](31);

      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r33.open(_r17, "ecsensor_setpoint");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51, " Pump error set point (0 - 300) : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SettingsComponent_ng_template_10_Template_input_ngModelChange_52_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r34.eCSet.ecpump_setpoint = $event;
    })("click", function SettingsComponent_ng_template_10_Template_input_click_52_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);

      const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](31);

      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r35.open(_r17, "ecpump_setpoint");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SettingsComponent_ng_template_10_Template_button_click_54_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);

      const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](31);

      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r36.updateEcSettings(_r17);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](57, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r2.pHSet.phmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r2.pHSet.phmax);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r2.pHSet.phsensor_setpoint);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r2.pHSet.phpump_setpoint);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r2.eCSet.ecmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r2.eCSet.ecideal);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r2.eCSet.ecsensor_setpoint);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r2.eCSet.ecpump_setpoint);
  }
}

function SettingsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "form", null, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Ideal (25 - 35): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SettingsComponent_ng_template_14_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r38.wtTempSet.tempideal = $event;
    })("click", function SettingsComponent_ng_template_14_Template_input_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39);

      const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1);

      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r40.open(_r37, "tempideal");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SettingsComponent_ng_template_14_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39);

      const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1);

      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r41.updateWaterTempSettings(_r37);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.wtTempSet.tempideal);
  }
}

function SettingsComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "form", null, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Supplement check Wait Time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SettingsComponent_ng_template_18_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r43.suppPumpSet.cycle = $event;
    })("click", function SettingsComponent_ng_template_18_Template_input_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r44);

      const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1);

      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r45.open(_r42, "cycle");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Ph Dose Concentration (0.0 - 10.0): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SettingsComponent_ng_template_18_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r44);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r46.suppPumpSet.phdose = $event;
    })("click", function SettingsComponent_ng_template_18_Template_input_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r44);

      const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1);

      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r47.open(_r42, "phdose");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Ec Dose Concentration (0 - 10): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SettingsComponent_ng_template_18_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r44);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r48.suppPumpSet.ecdose = $event;
    })("click", function SettingsComponent_ng_template_18_Template_input_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r44);

      const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1);

      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r49.open(_r42, "ecdose");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SettingsComponent_ng_template_18_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r44);

      const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1);

      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r50.updateSuppPumpSettings(_r42);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r4.suppPumpSet.cycle);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r4.suppPumpSet.phdose);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r4.suppPumpSet.ecdose);
  }
}

function SettingsComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Master # :");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Controller Board # : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Controller Version :");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Master Version : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "GUI Version : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, " 2.01 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "Local IP : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r5.sno, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r5.versionData == null ? null : ctx_r5.versionData.board_version, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r5.versionData == null ? null : ctx_r5.versionData.slave, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r5.versionData == null ? null : ctx_r5.versionData.master, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r5.versionData == null ? null : ctx_r5.versionData.local_ip, " ");
  }
}

function SettingsComponent_ng_template_26_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Connected");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function SettingsComponent_ng_template_26_div_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Click to connect");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function SettingsComponent_ng_template_26_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SettingsComponent_ng_template_26_div_7_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r56);
      const wifiname_r52 = restoredCtx.$implicit;
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return ctx_r55.openWifiPasswordField(wifiname_r52);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, SettingsComponent_ng_template_26_div_7_div_2_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, SettingsComponent_ng_template_26_div_7_div_3_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const wifiname_r52 = ctx.$implicit;
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", wifiname_r52, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", wifiname_r52 == ctx_r51.curWifiName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", wifiname_r52 != ctx_r51.curWifiName);
  }
}

function SettingsComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "qr-code", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Scan this QR code to register your device");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, SettingsComponent_ng_template_26_div_7_Template, 4, 3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r6.sno);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r6.wifinamelist);
  }
}

function SettingsComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-card", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "mat-card-title", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Sensor Calibration");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SettingsComponent_ng_template_30_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r58);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r57.openCalibarionPopup(1, "ph", "SENSOR");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "PH");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SettingsComponent_ng_template_30_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r58);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r59.openCalibarionPopup(2, "ec", "SENSOR");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "EC");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function SettingsComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "mat-card-title", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "System Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "mat-radio-group", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "mat-radio-button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Manual");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "mat-radio-button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Auto");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SettingsComponent_ng_template_34_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r62);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r61.sendSystemType();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "mat-card-title", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Screen Saver Setting");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Screen saver :");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "ui-switch", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "form", 67, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, " Interval Minutes");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SettingsComponent_ng_template_34_Template_input_ngModelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r62);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r63.screen_saver_setting.interval_time = $event;
    })("click", function SettingsComponent_ng_template_34_Template_input_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r62);

      const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](23);

      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r64.open(_r60, "interval_time");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SettingsComponent_ng_template_34_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r62);

      const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](23);

      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r65.sendScreenSaverData(_r60);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formControl", ctx_r8.systemFormControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formControl", ctx_r8.screenSaverFormControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r8.screen_saver_setting.interval_time);
  }
}

class SettingsComponent {
  constructor(modalService, http, dialog, screensaver) {
    this.modalService = modalService;
    this.http = http;
    this.dialog = dialog;
    this.screensaver = screensaver;
    this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api;
    this.myAngularxQrCode = "";
    this.active = 1;
    this.sno = "1234567";
    this.mode = "Custom";
    this.mActive = false;
    this.wifinamelist = [];
    this.curWifiName = "";
    this.slaveVersion = "00.0";
    this.screenSaverStatus = true;
    this.wtPumpSet = {
      ontime: 0,
      offtime: 0
    };
    this.pHSet = {
      phmin: 0.0,
      phmax: 0.0,
      phideal: 0.0,
      phsensor_setpoint: 0,
      phpump_setpoint: 0
    };
    this.eCSet = {
      ecmin: 0,
      ecideal: 0,
      ecsensor_setpoint: 0,
      ecpump_setpoint: 0
    };
    this.wtTempSet = {
      tempmax: 0,
      tempideal: 0,
      phdose: 0,
      ecdose: 0
    };
    this.suppPumpSet = {
      ec: 0,
      phinc: 0,
      phdec: 0,
      cycle: 0
    };
    this.screen_saver_setting = {
      status: false,
      interval_time: 0
    };
    this.systemFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('');
    this.screenSaverFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(false);
    this.screenSaverData = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
    this.myAngularxQrCode = 'tutsmake.com';
  }

  ngAfterViewInit() {}

  ngOnInit() {
    this.getSettings();
    this.getVersion();
    this.getWifiNames();
    setTimeout(() => {
      this.systemScreen(1);
    }, 100);
    this.intervalId = setInterval(() => {
      this.getWifiNames(); // this.light_1_state = !this.light_1_state;
    }, 10000);
  } //CALIBRATION POP UP


  openCalibarionPopup(endPoint, solution, type) {
    const config = {
      panelClass: "dialog-responsive",
      disableClose: true,
      minWidth: "200px",
      minHeight: '200px',
      data: {
        title: `Select Calibration Value`,
        endPoint,
        calibration: type,
        solution
      }
    };
    this.screensaver.updateScreenSaverStatus(false);
    const dialog = this.dialog.open(src_shared_component_calibration_dialog_calibration_dialog_component__WEBPACK_IMPORTED_MODULE_3__.CalibrationDialogComponent, config);
    dialog.afterClosed().subscribe(result => {
      this.screensaver.updateScreenSaverStatus(true);
      console.log(result);
    });
  }

  sendSystemType() {
    var _this = this;

    return (0,D_Cropicco_cropicco_pi_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const type = _this.systemFormControl.value;

      if (type) {
        const obj = {
          type
        };
        yield _this.httpPost(src_shared_model_api_model__WEBPACK_IMPORTED_MODULE_5__.APIS.SYSTEM_TYPE, obj);
      }
    })();
  }

  getVersion() {
    var _this2 = this;

    return (0,D_Cropicco_cropicco_pi_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let version = yield new Promise((resolve, reject) => {
        _this2.http.get(_this2.url + "/system/versioninfo").subscribe({
          next: data => {
            resolve(data);
          },
          error: error => {
            console.log(error);
            resolve(false);
          }
        });
      });
      _this2.versionData = version;
      _this2.slaveVersion = version["slave"];
      _this2.sno = version["serial"];
    })();
  }

  systemScreen(index) {
    var _this3 = this;

    return (0,D_Cropicco_cropicco_pi_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let payloadData;

      if (index == 1) {
        payloadData = {
          "screen": "settings",
          "status": "true"
        };
      }

      if (index == 2) {
        payloadData = {
          "screen": "settings",
          "status": "false"
        };
      }

      _this3.httpPost("system/screen", payloadData);
    })();
  }

  getSettings() {
    var _this4 = this;

    return (0,D_Cropicco_cropicco_pi_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let settingApiCallData = yield new Promise((resolve, reject) => {
        _this4.http.get(_this4.url + "/getsettings").subscribe({
          next: data => {
            resolve(data);
          },
          error: error => {
            console.log(error);
            resolve(false);
          }
        });
      });
      console.log('settingApiCallData', settingApiCallData);

      if (Object.keys(settingApiCallData).length && settingApiCallData != false) {
        _this4.allSettings = settingApiCallData;
        _this4.wtPumpSet = _this4.allSettings["water_pump_setting"];
        _this4.pHSet = _this4.allSettings["ph_setting"];
        _this4.eCSet = _this4.allSettings["ec_setting"];
        _this4.wtTempSet = {
          tempmax: _this4.allSettings["water_temperature_setting"].tempmax || 0,
          tempideal: _this4.allSettings["water_temperature_setting"].tempideal || 0,
          phdose: _this4.allSettings["water_temperature_setting"].phdose || 0,
          ecdose: _this4.allSettings["water_temperature_setting"].ecdose || 0
        };
        _this4.suppPumpSet = _this4.allSettings["supplement_pump_setting"];

        _this4.systemFormControl.setValue(_this4.allSettings["system_setting"].system_type);

        _this4.screenSaverFormControl.setValue(Boolean(Number(_this4.allSettings["system_setting"].screensaver_status)));

        _this4.screen_saver_setting.interval_time = Number(_this4.allSettings["system_setting"].screensaver_time);
      } else {
        console.log("Api error");
      }
    })();
  }

  getWifiNames() {
    var _this5 = this;

    return (0,D_Cropicco_cropicco_pi_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      // const data = { "cur": "DENVIK AIRTEL", "res": ["Denvik_JIO2_4_EXT", "DENVIK AIRTEL", "JioFiber-Ped1o", "JioFiber-x3R2q", "JP Home", "MANI5", "VASKANNEN"] }
      // let k: any = data;
      // const moveToTop = k["res"];
      // const index = moveToTop?.indexOf(k["cur"]);
      // const element = moveToTop.splice(index, 1)[0];
      // moveToTop.unshift(element);
      // this.wifinamelist = moveToTop;
      // this.curWifiName = k["cur"];
      var wifinames = yield new Promise((resolve, reject) => {
        _this5.http.get(_this5.url + "/system/wifinames").subscribe({
          next: data => {
            let k = data;
            const moveToTop = k["res"];
            const index = moveToTop === null || moveToTop === void 0 ? void 0 : moveToTop.indexOf(k["cur"]);
            const element = moveToTop.splice(index, 1)[0];
            moveToTop.unshift(element);
            _this5.wifinamelist = moveToTop;
            _this5.curWifiName = (k === null || k === void 0 ? void 0 : k.cur) || '';
            resolve(data);
          },
          error: error => {
            console.log(error);
            resolve(false);
          }
        });
      });
      console.log(_this5.wifinamelist, _this5.curWifiName); // this.wifiname = wifinames;
    })();
  }

  updateWaterPumpSettings(form) {
    var _this6 = this;

    return (0,D_Cropicco_cropicco_pi_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      console.log('Water Pump Setting Data : ', form.value);
      yield _this6.httpPost("settings/waterpump", form.value);
    })();
  }

  updatePhSettings(form) {
    console.log('Ph Setting Data : ', form.value);
    this.httpPost("settings/ph", form.value);
  }

  updateEcSettings(form) {
    console.log('Ph Setting Data : ', form.value);
    this.httpPost("settings/ec", form.value);
  }

  updateWaterTempSettings(form) {
    console.log('Water Temp Setting Data : ', form.value);
    this.httpPost("settings/watertemp", form.value);
  }

  updateSuppPumpSettings(form) {
    console.log('Supp Pump Setting Data : ', form.value);
    let tempsupp = form.value; // tempsupp["phdec"] = form.value.phinc

    this.httpPost("settings/supplementpump", tempsupp);
  } // maintWaterPump (state: boolean) {
  //   console.log("Maintenance Mode - Water Pump : " + state);
  //   this.httpPost("maintenance/control/1", { state: state });
  // }
  // maintPhUpPump (state: boolean) {
  //   console.log("Maintenance Mode - ph Up Pump : " + state);
  //   this.httpPost("maintenance/control/4", { state: state });
  // }
  // maintPhDownPump (state: boolean) {
  //   console.log("Maintenance Mode - ph Down Pump : " + state);
  //   this.httpPost("maintenance/control/5", { state: state });
  // }
  // maintEcPump (state: boolean) {
  //   console.log("Maintenance Mode - EC Pump : " + state);
  //   this.httpPost("maintenance/control/3", { state: state });
  // }
  // maintWaterChiller (state: boolean) {
  //   console.log("Maintenance Mode - Water Chiller : " + state);
  //   this.httpPost("maintenance/control/2", { state: state });
  // }


  settingMenuChange(opt) {
    if (opt.nextId == 6) {//activate maint
      // this.httpPost("maintenance/state/True", {});
    } else {//deactivate maint
      // this.httpPost("maintenance/state/False", {});
    }

    return;
  }

  open(form, inputItem) {
    console.log("Opening Modal", form.value, inputItem);
    let tempFormVal = form.value;
    const modalRef = this.modalService.open(_keypad_keypad_component__WEBPACK_IMPORTED_MODULE_2__.KeypadComponent, {
      size: 'sm',
      backdrop: 'static',
      centered: true,
      scrollable: false
    });
    const value = tempFormVal[inputItem] || 0;
    console.log('tempFormVal[inputItem]', tempFormVal[inputItem]);
    modalRef.componentInstance.defVal = tempFormVal[inputItem] || 0;
    modalRef.componentInstance.passEntry.subscribe(receivedEntry => {
      console.log("RECEIVERD data", receivedEntry);

      const isValidFn = obj => {
        if (this.minMaxFn(obj)) {
          tempFormVal[inputItem] = receivedEntry;
          form.setValue(tempFormVal);
        } else {
          tempFormVal[inputItem] = value;
          form.setValue(tempFormVal);
        }
      };

      console.log("Received Data:", receivedEntry, tempFormVal);
      let obj = {};

      switch (true) {
        case inputItem == 'phmin':
          obj = {
            min: 0.0,
            max: 10.0,
            value: Number(receivedEntry)
          };
          isValidFn(obj);
          break;

        case inputItem == 'phmax':
          obj = {
            min: 0.0,
            max: 10.0,
            value: Number(receivedEntry)
          };
          isValidFn(obj);
          break;

        case inputItem == 'phideal':
          obj = {
            min: 0.0,
            max: 1.0,
            value: Number(receivedEntry)
          };
          isValidFn(obj);
          break;

        case inputItem == 'phsensor_setpoint':
          obj = {
            min: 0,
            max: 999999,
            value: Number(receivedEntry)
          };
          isValidFn(obj);
          break;

        case inputItem == 'phpump_setpoint':
          obj = {
            min: 0.0,
            max: 4.0,
            value: Number(receivedEntry)
          };
          isValidFn(obj);
          break;

        case inputItem == 'ecmin':
          obj = {
            min: 0,
            max: 3000,
            value: Number(receivedEntry)
          };
          isValidFn(obj);
          break;

        case inputItem == 'ecideal':
          obj = {
            min: 0,
            max: 900,
            value: Number(receivedEntry)
          };
          isValidFn(obj);
          break;

        case inputItem == 'ecsensor_setpoint':
          obj = {
            min: 0,
            max: 500,
            value: Number(receivedEntry)
          };
          isValidFn(obj);
          break;

        case inputItem == 'ecpump_setpoint':
          obj = {
            min: 0,
            max: 300,
            value: Number(receivedEntry)
          };
          isValidFn(obj);
          break;

        case inputItem == 'tempideal':
          obj = {
            min: 25,
            max: 35,
            value: Number(receivedEntry)
          };
          isValidFn(obj);
          break;

        case inputItem == 'phdose':
          obj = {
            min: 0.0,
            max: 10.0,
            value: Number(receivedEntry)
          };
          isValidFn(obj);
          break;

        case inputItem == 'ecdose':
          obj = {
            min: 0,
            max: 10,
            value: Number(receivedEntry)
          };
          isValidFn(obj);
          break;

        default:
          tempFormVal[inputItem] = receivedEntry;
          form.setValue(tempFormVal);
          break;
      }

      modalRef.close();
    });
  }

  minMaxFn(num) {
    return num.value >= num.min && num.value <= num.max;
  }

  httpPost(method, body) {
    console.log("Http Post : ", method, body);
    return new Promise((resolve, reject) => {
      this.http.post(this.url + "/" + method, body).subscribe({
        next: data => {
          resolve(data);
          console.log("dataaaaa", data);
        },
        error: error => {
          console.error(method + " Api error");
          resolve(false);
        }
      });
    });
    return true;
  }

  connectToWifi(ssid, password) {
    this.httpPost('system/connectwifi', {
      "ssid": ssid,
      "pwd": password
    });
  }

  openWifiPasswordField(ssid) {
    const config = {
      panelClass: "dialog-responsive",
      disableClose: true,
      height: '220px',
      position: {
        top: "10px"
      },
      data: {
        module: 'wifi',
        wifiName: ssid
      }
    };
    const dialog = this.dialog.open(src_shared_component_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__.AuthComponent, config);
    dialog.afterClosed().subscribe(res => {
      console.log('close', res);

      if (res) {
        this.connectToWifi(ssid, res.password);
      }
    });
  }

  sendScreenSaverData(data) {
    var _this7 = this;

    return (0,D_Cropicco_cropicco_pi_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      console.log("Entering onClick sendScreenSaverData");
      const obj = {
        status: Boolean(Number(_this7.screenSaverFormControl.value)),
        interval_time: Number(data.value.interval_time)
      };

      _this7.screenSaverData.emit(obj);

      yield _this7.httpPost(src_shared_model_api_model__WEBPACK_IMPORTED_MODULE_5__.APIS.SCREEN_SAVER, obj);
      console.log("after api call");
    })();
  }

  ngOnDestroy() {
    setTimeout(() => {
      this.systemScreen(2);
    }, 100);

    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

}

SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
  return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_core_screen_saver_service__WEBPACK_IMPORTED_MODULE_6__.ScreenSaverService));
};

SettingsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: SettingsComponent,
  selectors: [["app-settings"]],
  outputs: {
    screenSaverData: "screenSaverData"
  },
  decls: 36,
  vars: 10,
  consts: [[1, "setting-space"], ["ngbNav", "", 1, "nav-tabs", 2, "justify-content", "space-between", 3, "activeId", "activeIdChange", "navChange"], ["nav", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "mt-2", 3, "ngbNavOutlet"], ["waterPumpSettings", "ngForm"], [1, "field"], ["type", "number", "name", "ontime", 3, "ngModel", "ngModelChange", "click"], ["type", "number", "name", "offtime", 3, "ngModel", "ngModelChange", "click"], [1, "subrow", 2, "margin-top", "17px", "height", "30px", "width", "17%"], ["mat-raised-button", "", "disableOneSec", "", "value", "Update", 1, "bg-success", 2, "line-height", "10px", 3, "click"], ["mat-raised-button", "", 1, "bg-failed", 2, "line-height", "10px"], [1, "main-container"], [2, "justify-content", "initial"], ["pHSettings", "ngForm"], [1, "header-bg", "p-10", 2, "background-color", "transparent", "border", "none"], [2, "display", "flex", "gap", "10px"], [1, "align-column"], [1, "space"], ["type", "number", "name", "phmin", 3, "ngModel", "ngModelChange", "click"], ["type", "number", "name", "phmax", 3, "ngModel", "ngModelChange", "click"], ["type", "number", "name", "phsensor_setpoint", 3, "ngModel", "ngModelChange", "click"], ["type", "number", "name", "phpump_setpoint", 3, "ngModel", "ngModelChange", "click"], [1, "subrow", 2, "margin-right", "4.3rem", "height", "30px", "width", "35%"], [1, "vertical-line", 2, "height", "12.5rem"], ["eCSettings", "ngForm"], ["type", "number", "name", "ecmin", 3, "ngModel", "ngModelChange", "click"], ["type", "number", "name", "ecideal", 3, "ngModel", "ngModelChange", "click"], ["type", "number", "name", "ecsensor_setpoint", 3, "ngModel", "ngModelChange", "click"], ["type", "number", "name", "ecpump_setpoint", 3, "ngModel", "ngModelChange", "click"], ["wTSettings", "ngForm"], [1, "field", 2, "width", "27%"], ["type", "number", "name", "tempideal", 3, "ngModel", "ngModelChange", "click"], [1, "subrow", 2, "height", "30px"], ["mat-raised-button", "", "type", "submit", "disableOneSec", "", "value", "Update", 1, "bg-success", 2, "line-height", "10px", 3, "click"], ["sPSettings", "ngForm"], ["type", "number", "name", "cycle", 3, "ngModel", "ngModelChange", "click"], ["type", "number", "name", "phdose", 3, "ngModel", "ngModelChange", "click"], ["type", "number", "name", "ecdose", 3, "ngModel", "ngModelChange", "click"], [1, "subrow", 2, "margin-top", "17px", "height", "30px"], ["mat-raised-button", "", "disableOneSec", "", "type", "submit", "value", "Update", 1, "bg-success", 2, "line-height", "10px", 3, "click"], [1, "outliner"], [1, "outlinewrapper"], [1, "outlinecontentleft"], ["size", "150", "errorCorrectionLevel", "M", 3, "value"], [1, "outlinecontentright"], [2, "height", "180px", "width", "100%", "overflow-y", "scroll", "padding-left", "50px"], ["type", "button", "class", "wifinames", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "wifinames", 3, "click"], [4, "ngIf"], [2, "display", "flex", "justify-content", "center", "margin-top", "10px"], [1, "mat-elevation-z3"], [1, "header-bg", "p-10"], [1, "p-10", "align-row", "m-t-12"], ["mat-raised-button", "", "color", "primary", 1, "button-class", 3, "click"], [2, "display", "flex", "justify-content", "space-between"], [2, "display", "flex", "flex-direction", "column", "gap", "5px", "align-items", "center", "width", "50%"], [1, "p-10", 2, "color", "#2565AE"], ["id", "radio-button", 3, "formControl"], ["value", "1.00", 2, "font-weight", "550", "font-size", "16px"], ["value", "0.00", 2, "font-weight", "550", "font-size", "16px"], [1, "subrow", 2, "margin-top", "17px", "height", "30px", "display", "flex", "gap", "17px"], [2, "display", "flex", "gap", "5px", "width", "30%"], [1, "switch-backdrop"], ["size", "small", 3, "formControl"], [2, "width", "33%"], ["screenSaverSetting", "ngForm"], [1, "field", 2, "width", "100%", "margin-left", "16px"], ["type", "number", "name", "interval_time", 3, "ngModel", "ngModelChange", "click"]],
  template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ul", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("activeIdChange", function SettingsComponent_Template_ul_activeIdChange_1_listener($event) {
        return ctx.active = $event;
      })("navChange", function SettingsComponent_Template_ul_navChange_1_listener($event) {
        return ctx.settingMenuChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Water Pump");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, SettingsComponent_ng_template_6_Template, 13, 2, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Supplements");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, SettingsComponent_ng_template_10_Template, 58, 8, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Water Temperature");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, SettingsComponent_ng_template_14_Template, 10, 1, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Supplement Pump");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, SettingsComponent_ng_template_18_Template, 16, 3, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, SettingsComponent_ng_template_22_Template, 25, 5, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "System");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, SettingsComponent_ng_template_26_Template, 8, 2, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "Calibration");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, SettingsComponent_ng_template_30_Template, 9, 0, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "System Setting");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, SettingsComponent_ng_template_34_Template, 32, 3, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](35, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](2);

      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("activeId", ctx.active);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngbNavItem", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngbNavItem", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngbNavItem", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngbNavItem", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngbNavItem", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngbNavItem", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngbNavItem", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngbNavItem", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngbNavOutlet", _r0);
    }
  },
  directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, src_shared_directives_disable_one_sec_directive__WEBPACK_IMPORTED_MODULE_7__.DisableOneSecDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardTitle, ng_qrcode__WEBPACK_IMPORTED_MODULE_16__.QrCodeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCard, _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__.MatRadioGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlDirective, _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__.MatRadioButton, ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_8__.UiSwitchComponent],
  styles: [".header-bg[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n  background-color: whitesmoke;\n  color: #2565AE;\n}\n\n.align-column[_ngcontent-%COMP%] {\n  grid-gap: 15px;\n  gap: 15px;\n  flex-direction: column;\n  display: flex;\n  padding: 10px;\n  justify-content: center;\n}\n\n.vertical-line[_ngcontent-%COMP%] {\n  border-left: 1.5px solid #929292;\n  height: 8.5rem;\n}\n\n.space[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  grid-gap: 15px;\n  gap: 15px;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  padding: 0px;\n  width: 25%;\n  text-align: center;\n}\n\n.align-row[_ngcontent-%COMP%] {\n  display: flex;\n  grid-gap: 15px;\n  gap: 15px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.button-class[_ngcontent-%COMP%] {\n  border-radius: 40px;\n  min-width: 100px !important;\n}\n\n.p-10[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.mat-card-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  display: flex;\n  \n  grid-gap: 5px;\n  gap: 5px;\n  \n  \n}\n\n.setting-space[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 1150px;\n  \n  display: flex;\n  flex-direction: column;\n  color: black;\n  padding: 10px;\n}\n\n.setting-option[_ngcontent-%COMP%] {\n  width: 100px;\n  background-color: aqua;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.setting-space[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  width: 100%;\n  word-wrap: break-word;\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\ndiv[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  width: 75px;\n}\n\nform[_ngcontent-%COMP%]    > .field[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 25%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.field[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  width: 25%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.outliner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.outlinewrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n}\n\n.outlinecontentleft[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.outlinecontentright[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  border-left: 3px solid #929292;\n}\n\n.outliner[_ngcontent-%COMP%]    > .field[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 30%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\nform[_ngcontent-%COMP%]    > .subrow[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 17%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n.wifinames[_ngcontent-%COMP%] {\n  \n  height: 40px;\n  margin-top: 5px;\n  padding: 10px;\n  box-shadow: 0 1px 0px 0 rgba(0, 0, 0, 0.2);\n  \n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.wifibtn[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background-color: white;\n  color: black;\n  \n  height: 100%;\n}\n\nli[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  width: 50px;\n}\n\n  #radio-button {\n  grid-gap: 20px;\n  gap: 20px;\n  display: flex;\n}\n\n  #radio-button .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #4286f4;\n}\n\n  #radio-button .mat-radio-button.mat-accent .mat-radio-inner-circle {\n  color: #4286f4;\n  background-color: #4286f4;\n}\n\n  #radio-button .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(255, 37, 37, 0.26);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFBQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FBQ0Y7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUFBLFFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7QUFBRjs7QUFJRTtFQUNFLGNBQUE7RUFBQSxTQUFBO0VBQ0EsYUFBQTtBQURKOztBQUdJO0VBQ0UscUJBQUE7QUFETjs7QUFJSTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBQUZOOztBQUtJO0VBQ0UseUNBQUE7QUFITiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItYmcge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgY29sb3I6ICMyNTY1QUU7XHJcbn1cclxuXHJcbi5hbGlnbi1jb2x1bW4ge1xyXG4gIGdhcDogMTVweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnZlcnRpY2FsLWxpbmUge1xyXG4gIGJvcmRlci1sZWZ0OiAxLjVweCBzb2xpZCByZ2IoMTQ2LCAxNDYsIDE0Nik7XHJcbiAgaGVpZ2h0OiA4LjVyZW07XHJcbn1cclxuXHJcbi5zcGFjZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAxNXB4O1xyXG5cclxufVxyXG5cclxuLm1hdC1jYXJkIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgd2lkdGg6IDI1JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hbGlnbi1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxNXB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmJ1dHRvbi1jbGFzcyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICBtaW4td2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wLTEwIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LWNhcmQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ubWFpbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAgZ2FwOiA1cHg7XHJcbiAgLyogbWFyZ2luLXRvcDogMjBweDsgKi9cclxuICAvKiBoZWlnaHQ6IDEwcmVtOyAqL1xyXG59XHJcblxyXG4uc2V0dGluZy1zcGFjZSB7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICB3aWR0aDogMTE1MHB4O1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHllbGxvdzsgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5zZXR0aW5nLW9wdGlvbiB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5zZXR0aW5nLXNwYWNlID4gdWwgPiBsaSA+IGEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmRpdiA+IGlucHV0IHtcclxuICB3aWR0aDogNzVweDtcclxufVxyXG5cclxuZm9ybSA+IC5maWVsZCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICB3aWR0aDogMjUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5maWVsZCB7XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxuICB3aWR0aDogMjUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5vdXRsaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5vdXRsaW5ld3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4ub3V0bGluZWNvbnRlbnRsZWZ0IHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ub3V0bGluZWNvbnRlbnRyaWdodCB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHJnYigxNDYsIDE0NiwgMTQ2KTtcclxufVxyXG5cclxuLm91dGxpbmVyID4gLmZpZWxkIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuZm9ybSA+IC5zdWJyb3cge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgd2lkdGg6IDE3JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi53aWZpbmFtZXMge1xyXG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xyXG4gIGhlaWdodDogNDBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDFweCAwcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgLyogei1pbmRleDogMTAwOyAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi53aWZpYnRuIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgLyogcGFkZGluZzogMTRweCAyOHB4OyAqL1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxubGkgPiBhIHtcclxuICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICAjcmFkaW8tYnV0dG9uIHtcclxuICAgIGdhcDogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiKDY2LCAxMzQsIDI0NCk7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSB7XHJcbiAgICAgIGNvbG9yOiByZ2IoNjYsIDEzNCwgMjQ0KTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LCAxMzQsIDI0NCk7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMzcsIDM3LCAuMjYpXHJcbiAgICB9XHJcbiAgfVxyXG59Il19 */"]
});

/***/ }),

/***/ 1981:
/*!************************************************!*\
  !*** ./src/assets/material/material.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/autocomplete */ 5924);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button-toggle */ 3894);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ 4058);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ 9243);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ 2937);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ 2323);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/grid-list */ 5937);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ 8417);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ 221);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 8021);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-bar */ 365);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ 181);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/radio */ 5644);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ 6608);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/slider */ 3616);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/slide-toggle */ 2080);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/sort */ 5381);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 4302);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tabs */ 9348);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/stepper */ 8210);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/badge */ 330);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 2220);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 6322);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/divider */ 1124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);




































/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__.MatAutocompleteModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__.MatBottomSheetModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__.MatChipsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_23__.MatBadgeModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__.MatSidenavModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__.MatSlideToggleModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__.MatToolbarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatButtonModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__.MatDividerModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__.MatSliderModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__.MatSortModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_32__.MatStepperModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__.MatTabsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__.MatTooltipModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatNativeDateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_35__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__.MatAutocompleteModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__.MatBottomSheetModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__.MatChipsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_23__.MatBadgeModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__.MatSidenavModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__.MatSlideToggleModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__.MatToolbarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatButtonModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__.MatDividerModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__.MatSliderModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__.MatSortModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_32__.MatStepperModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__.MatTabsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__.MatTooltipModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatNativeDateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_35__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormsModule] }); })();


/***/ }),

/***/ 909:
/*!*********************************************!*\
  !*** ./src/core/api-service/api.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3882);



class ApiService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
    }
    // Post Api Call
    httpPost(method, body) {
        console.log("Http Post : ", method, body);
        return this.http.post(this.BASE_URL + "/" + method, body);
    }
    // Get Api Call
    httpGet(endPoint) {
        console.log("Http Get : ", endPoint);
        return this.http.get(this.BASE_URL + "/" + endPoint);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3160:
/*!******************************************!*\
  !*** ./src/core/screen-saver.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScreenSaverService": () => (/* binding */ ScreenSaverService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class ScreenSaverService {
    constructor() {
        this.screenSaverBehaviorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(true);
        this.screenSaver = this.screenSaverBehaviorSubject.asObservable();
    }
    updateScreenSaverStatus(status) {
        this.screenSaverBehaviorSubject.next(status);
    }
}
ScreenSaverService.ɵfac = function ScreenSaverService_Factory(t) { return new (t || ScreenSaverService)(); };
ScreenSaverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ScreenSaverService, factory: ScreenSaverService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    api: "http://172.25.100.95:14999",
    // api:"http://127.0.0.1:14999",
    wifi: 'http://172.25.100.95:15999/system/update'
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 4278:
/*!*****************************************************!*\
  !*** ./src/shared/component/auth/auth.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthComponent": () => (/* binding */ AuthComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var src_app_keypad_keypad_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/keypad/keypad.component */ 8830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-onscreen-material-keyboard */ 4909);













function AuthComponent_div_3_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enter Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AuthComponent_div_3_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Incorrect Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AuthComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", null, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthComponent_div_3_Template_input_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.open(_r2, "pass"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthComponent_div_3_Template_img_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.hide = !ctx_r7.hide; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AuthComponent_div_3_mat_error_7_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AuthComponent_div_3_mat_error_8_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthComponent_div_3_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.isValidPassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx_r0.hide ? "password" : "text")("formControl", ctx_r0.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.hide ? "../../../assets/images/visiblity_off.png" : "../../../assets/images/visiblity_on.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.password.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.password.hasError("incorrect"));
} }
const _c0 = function (a0, a1) { return { "key-pad-close": a0, "hide-key-pad": a1 }; };
function AuthComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", null, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function AuthComponent_div_4_Template_input_focus_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.closeKeyboard = true; })("focusout", function AuthComponent_div_4_Template_input_focusout_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.closeKeyboard = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthComponent_div_4_Template_img_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.hide = !ctx_r13.hide; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthComponent_div_4_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.dialogRef.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthComponent_div_4_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.sendPassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthComponent_div_4_Template_img_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.dialogRef.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.dialogData == null ? null : ctx_r1.dialogData.wifiName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matKeyboard", "en-GB")("type", ctx_r1.hide ? "password" : "text")("formControl", ctx_r1.wifiPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.hide ? "../../../assets/images/visiblity_off.png" : "../../../assets/images/visiblity_on.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](6, _c0, ctx_r1.closeKeyboard, !ctx_r1.closeKeyboard));
} }
class AuthComponent {
    constructor(dialogRef, http, modalService, dialogData) {
        this.dialogRef = dialogRef;
        this.http = http;
        this.modalService = modalService;
        this.dialogData = dialogData;
        this.hide = true;
        this.isPassword = false;
        this.closeKeyboard = false;
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
        this.wifiPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
    }
    ngOnInit() {
        console.log('dialogData', this.dialogData);
    }
    isValidPassword() {
        var _a, _b;
        if (this.password.invalid) {
            return;
        }
        if (((_a = this.dialogData) === null || _a === void 0 ? void 0 : _a.module) == 'settings') {
            this.password.value == '0806' ? this.dialogRef.close({ isValid: true }) : this.password.setErrors({ 'incorrect': true });
        }
        if (((_b = this.dialogData) === null || _b === void 0 ? void 0 : _b.module) == 'maintenance') {
            this.password.value == '0608' ? this.dialogRef.close({ isValid: true }) : this.password.setErrors({ 'incorrect': true });
        }
    }
    sendPassword() {
        var _a;
        if (this.wifiPassword.invalid) {
            return;
        }
        if (((_a = this.dialogData) === null || _a === void 0 ? void 0 : _a.module) == 'wifi') {
            this.dialogRef.close({ password: this.wifiPassword.value });
        }
    }
    open(form, inputItem) {
        console.log("Opening Modal", form.value, inputItem);
        let tempFormVal = form.value;
        const modalRef = this.modalService.open(src_app_keypad_keypad_component__WEBPACK_IMPORTED_MODULE_0__.KeypadComponent, {
            size: 'sm',
            backdrop: 'static',
            centered: true,
            scrollable: false
        });
        console.log('tempFormVal[inputItem]', tempFormVal[inputItem]);
        modalRef.componentInstance.defVal = this.password.value;
        modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
            console.log("Received Data:", receivedEntry, tempFormVal);
            this.password.setValue(receivedEntry);
            modalRef.close();
        });
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA)); };
AuthComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 5, vars: 2, consts: [[2, "height", "100%"], [2, "display", "flex", "justify-content", "end", "padding", "8px"], ["src", "../../../assets/images/close.png", 1, "close-icon", 3, "click"], ["class", "container", 4, "ngIf"], [1, "container"], [2, "margin-top", "1rem"], ["auth", "ngForm"], ["matInput", "", "name", "pass", "placeholder", "Password", "required", "", 3, "type", "formControl", "click"], ["matSuffix", "", "alt", "", 2, "width", "1.5rem", 3, "src", "click"], [4, "ngIf"], ["mat-raised-button", "", 1, "bg-success", 3, "click"], [2, "font-weight", "500", "margin-bottom", "10px"], ["matInput", "", "name", "pass", "placeholder", "Password", "required", "", 3, "matKeyboard", "type", "formControl", "focus", "focusout"], [2, "display", "flex", "gap", "11px", "justify-content", "center"], ["mat-raised-button", "", 1, "bg-failed", 3, "click"], [3, "ngClass"], ["src", "../../../assets/images/close.png", 1, "close-icon", "white", 3, "click"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthComponent_Template_img_click_2_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AuthComponent_div_3_Template, 12, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AuthComponent_div_4_Template, 16, 9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.dialogData == null ? null : ctx.dialogData.module) !== "wifi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.dialogData == null ? null : ctx.dialogData.module) == "wifi");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_10__.MatKeyboardDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass], styles: [".header-bg[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #ddd;\r\n    background-color: whitesmoke;\r\n    color: #2565AE;\r\n}\r\n\r\n.button-class[_ngcontent-%COMP%] {\r\n    border-radius: 40px;\r\n    min-width: 100px !important;\r\n}\r\n\r\n.p-10[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n}\r\n\r\n.mat-card-title[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%] {\r\n    font-size: 4rem;\r\n    width: 5rem;\r\n    height: 5rem;\r\n}\r\n\r\n.bg-success[_ngcontent-%COMP%] {\r\n    font-family: Roboto;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    background-color: #0dbd16 !important;\r\n    color: white;\r\n    margin-top: 15px;\r\n}\r\n\r\n.bg-failed[_ngcontent-%COMP%] {\r\n    font-family: Roboto;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    background-color: #ea2d3f !important;\r\n    color: white;\r\n    margin-top: 15px;\r\n}\r\n\r\na.bg-success[_ngcontent-%COMP%]:focus, a.bg-success[_ngcontent-%COMP%]:hover, button.bg-success[_ngcontent-%COMP%]:focus, button.bg-success[_ngcontent-%COMP%]:hover {\r\n    background-color: #0dbd16 !important;\r\n}\r\n\r\n.message[_ngcontent-%COMP%] {\r\n    font-size: larger;\r\n    font-weight: 500;\r\n    margin: 5px;\r\n}\r\n\r\n.close-icon[_ngcontent-%COMP%] {\r\n    width: 2rem;\r\n    height: 2rem;\r\n    z-index: 2;\r\n    cursor: pointer;\r\n    opacity: 1;\r\n}\r\n\r\n.white[_ngcontent-%COMP%] {\r\n    filter: brightness(0) invert(1) drop-shadow(1px 3px 2px black);\r\n    width: 2.5rem;\r\n    height: 2.5rem;\r\n}\r\n\r\n.icon-class[_ngcontent-%COMP%] {\r\n    width: 5rem;\r\n    height: 5rem;\r\n}\r\n\r\n.key-pad-close[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 14.5rem;\r\n    top: 7.5rem;\r\n    transition: all 2.0s;\r\n}\r\n\r\n.hide-key-pad[_ngcontent-%COMP%] {\r\n\r\n    transition: all 2.0s;\r\n    display: none;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBSUE7Ozs7SUFJSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSw4REFBOEQ7SUFDOUQsYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztJQUNYLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxvQkFBb0I7SUFDcEIsYUFBYTs7QUFFakIiLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1iZyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBjb2xvcjogIzI1NjVBRTtcclxufVxyXG5cclxuLmJ1dHRvbi1jbGFzcyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgbWluLXdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucC0xMCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LWNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICB3aWR0aDogNXJlbTtcclxuICAgIGhlaWdodDogNXJlbTtcclxufVxyXG5cclxuLmJnLXN1Y2Nlc3Mge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGRiZDE2ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uYmctZmFpbGVkIHtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhMmQzZiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuXHJcblxyXG5hLmJnLXN1Y2Nlc3M6Zm9jdXMsXHJcbmEuYmctc3VjY2Vzczpob3ZlcixcclxuYnV0dG9uLmJnLXN1Y2Nlc3M6Zm9jdXMsXHJcbmJ1dHRvbi5iZy1zdWNjZXNzOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZGJkMTYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1lc3NhZ2Uge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi5jbG9zZS1pY29uIHtcclxuICAgIHdpZHRoOiAycmVtO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi53aGl0ZSB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgaW52ZXJ0KDEpIGRyb3Atc2hhZG93KDFweCAzcHggMnB4IGJsYWNrKTtcclxuICAgIHdpZHRoOiAyLjVyZW07XHJcbiAgICBoZWlnaHQ6IDIuNXJlbTtcclxufVxyXG5cclxuLmljb24tY2xhc3Mge1xyXG4gICAgd2lkdGg6IDVyZW07XHJcbiAgICBoZWlnaHQ6IDVyZW07XHJcbn1cclxuXHJcblxyXG4ua2V5LXBhZC1jbG9zZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTQuNXJlbTtcclxuICAgIHRvcDogNy41cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIuMHM7XHJcbn1cclxuXHJcbi5oaWRlLWtleS1wYWQge1xyXG5cclxuICAgIHRyYW5zaXRpb246IGFsbCAyLjBzO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuXHJcbn0iXX0= */"] });


/***/ }),

/***/ 2767:
/*!*********************************************************************************!*\
  !*** ./src/shared/component/calibration-dialog/calibration-dialog.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalibrationDialogComponent": () => (/* binding */ CalibrationDialogComponent)
/* harmony export */ });
/* harmony import */ var D_Cropicco_cropicco_pi_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var src_app_keypad_keypad_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/keypad/keypad.component */ 8830);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_shared_model_api_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/model/api.model */ 7860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);














function CalibrationDialogComponent_div_1_div_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CalibrationDialogComponent_div_1_div_1_ng_container_7_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const data_r8 = restoredCtx.$implicit;
      const i_r9 = restoredCtx.index;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return ctx_r10.sendCalibData(data_r8, i_r9);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const data_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r7.isDisable[i_r9] || !data_r8.isShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r8 == null ? null : data_r8.value);
  }
}

function CalibrationDialogComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CalibrationDialogComponent_div_1_div_1_Template_img_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      ctx_r12.dialogRef.close();
      return (ctx_r12.dialogData == null ? null : ctx_r12.dialogData.calibration) == "SENSOR" && ctx_r12.sendProcessCount();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, CalibrationDialogComponent_div_1_div_1_ng_container_7_Template, 3, 2, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((ctx_r6.dialogData == null ? null : ctx_r6.dialogData.solution) == "ph" ? "PH Sensor Calibration" : (ctx_r6.dialogData == null ? null : ctx_r6.dialogData.solution) == "ec" ? "EC Sensor Calibration" : "Flow Sensor Calibration");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r6.calibData);
  }
}

function CalibrationDialogComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CalibrationDialogComponent_div_1_div_1_Template, 8, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.isCalibrating == "false" && !ctx_r0.isCalibrationDone);
  }
}

function CalibrationDialogComponent_div_2_img_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CalibrationDialogComponent_div_2_img_4_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r16.dialogRef.close();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function CalibrationDialogComponent_div_2_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CalibrationDialogComponent_div_2_div_5_div_1_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return ctx_r21.PumpCalibStep = "WARNING";
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Ready to Measure");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (ctx_r18.dialogData == null ? null : ctx_r18.dialogData.solution) == "ec_a_pump" ? "Place the EC A Tube Inside the Container!!" : (ctx_r18.dialogData == null ? null : ctx_r18.dialogData.solution) == "ec_b_pump" ? "Place the EC B Tube Inside the Container!!" : (ctx_r18.dialogData == null ? null : ctx_r18.dialogData.solution) == "flow_sensor" ? "Place the output of Flow sensor Tube Inside the Container!!" : "", " ");
  }
}

function CalibrationDialogComponent_div_2_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Make Sure The tube Is Inside The Container Else Can Result in spillage!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CalibrationDialogComponent_div_2_div_5_div_2_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return ctx_r23.startPumpCalibration();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Proceed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function CalibrationDialogComponent_div_2_div_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "form", null, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Enter Measured Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CalibrationDialogComponent_div_2_div_5_div_3_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return ctx_r26.MeasuredValue = $event;
    })("click", function CalibrationDialogComponent_div_2_div_5_div_3_Template_input_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27);

      const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);

      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return ctx_r28.open(_r25, "pumpCalibration");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CalibrationDialogComponent_div_2_div_5_div_3_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return ctx_r29.sendMeasuredValue();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r20.MeasuredValue);
  }
}

function CalibrationDialogComponent_div_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CalibrationDialogComponent_div_2_div_5_div_1_Template, 10, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CalibrationDialogComponent_div_2_div_5_div_2_Template, 11, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CalibrationDialogComponent_div_2_div_5_div_3_Template, 12, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r15.PumpCalibStep == "INFO");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r15.PumpCalibStep == "WARNING" && !ctx_r15.isPumpLoader);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r15.PumpCalibStep == "ENTER VALUE");
  }
}

function CalibrationDialogComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CalibrationDialogComponent_div_2_img_4_Template, 1, 0, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CalibrationDialogComponent_div_2_div_5_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (ctx_r1.dialogData == null ? null : ctx_r1.dialogData.solution) == "ec_a_pump" ? "EC A Pump Calibration" : (ctx_r1.dialogData == null ? null : ctx_r1.dialogData.solution) == "ec_b_pump" ? "EC B Pump Calibration" : (ctx_r1.dialogData == null ? null : ctx_r1.dialogData.solution) == "flow_sensor" ? "Flow Sensor Calibration" : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.isPumpLoader || !(ctx_r1.isCalibrating == "false"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.dialogData == null ? null : ctx_r1.dialogData.solution);
  }
}

function CalibrationDialogComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Calibrating...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function CalibrationDialogComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "svg", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "circle", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "polyline", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Calibration Done!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CalibrationDialogComponent_div_4_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r30.dialogRef.close();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function CalibrationDialogComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Process Failed :( ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CalibrationDialogComponent_div_5_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r32.dialogRef.close();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function CalibrationDialogComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "Div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (ctx_r5.dialogData == null ? null : ctx_r5.dialogData.solution) == "flow_sensor" ? "Water" : "", " Pump Turned On...");
  }
}

class CalibrationDialogComponent {
  constructor(dialogRef, http, dialogData, modalService) {
    this.dialogRef = dialogRef;
    this.http = http;
    this.dialogData = dialogData;
    this.modalService = modalService;
    this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.api;
    this.isCalibrating = 'false';
    this.isCalibrationDone = false;
    this.isError = false;
    this.PumpCalibStep = 'INFO';
    this.isPumpLoader = false;
    this.MeasuredValue = 0;
    this.isDisable = []; // delay function

    this.delay = delay => new Promise((resolve, reject) => {
      setTimeout(() => resolve(true), delay);
    });
  }

  ngOnInit() {
    this.init();
    console.log('dialogData', this.dialogData);
    this.sendProcessCount();
  }

  init() {
    var _this = this;

    return (0,D_Cropicco_cropicco_pi_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b; // get ph and ec array 


      if (((_a = _this.dialogData) === null || _a === void 0 ? void 0 : _a.calibration) == 'SENSOR') {
        const calibData = yield _this.httpGet(src_shared_model_api_model__WEBPACK_IMPORTED_MODULE_3__.APIS.GET_CALIB_DATA + ((_b = _this.dialogData) === null || _b === void 0 ? void 0 : _b.endPoint));
        _this.calibData = calibData === null || calibData === void 0 ? void 0 : calibData.data;
      }
    })();
  } // send calibration data and solution name


  sendCalibData(data, index) {
    var _this2 = this;

    return (0,D_Cropicco_cropicco_pi_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a;

      const obj = {
        "value": String(data.value),
        "solution": String((_a = _this2.dialogData) === null || _a === void 0 ? void 0 : _a.solution)
      };
      _this2.isCalibrating = 'true'; // await this.delay(3000);
      // this.isCalibrating = 'false';
      // this.isCalibrationDone = true;
      // await this.delay(3000);
      // this.isCalibrationDone = false;

      yield _this2.httpPost(src_shared_model_api_model__WEBPACK_IMPORTED_MODULE_3__.APIS.SETTING_9, obj);

      _this2.startInterval(index);
    })();
  } // start pump function 


  startPumpCalibration() {
    var _this3 = this;

    return (0,D_Cropicco_cropicco_pi_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b;

      _this3.isPumpLoader = true;
      setTimeout( /*#__PURE__*/(0,D_Cropicco_cropicco_pi_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        _this3.isPumpLoader = false; // this.isCalibrationDone = true;
        // await this.delay(1000 * 3);
        // this.isCalibrationDone = false;

        _this3.PumpCalibStep = 'ENTER VALUE';
      }), 1000 * 60);
      let key = ((_a = _this3.dialogData) === null || _a === void 0 ? void 0 : _a.solution) == 'flow_sensor' ? 'water_pump' : (_b = _this3.dialogData) === null || _b === void 0 ? void 0 : _b.solution;
      let pumpObj = {};
      pumpObj[`${key}`] = 1 + ":00";
      yield _this3.httpPost(src_shared_model_api_model__WEBPACK_IMPORTED_MODULE_3__.APIS.START_PUMP, pumpObj); // this.startInterval();
    })();
  } // send measured value function


  sendMeasuredValue() {
    var _this4 = this;

    return (0,D_Cropicco_cropicco_pi_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a;

      _this4.isCalibrating = 'true';
      _this4.PumpCalibStep = 'END'; // await this.delay(3000);
      // this.isCalibrating = 'false';
      // this.PumpCalibStep = 'ENTER '
      // this.isCalibrationDone = true;

      const obj = {
        "value": String(_this4.MeasuredValue),
        "solution": String((_a = _this4.dialogData) === null || _a === void 0 ? void 0 : _a.solution)
      };
      yield _this4.httpPost(src_shared_model_api_model__WEBPACK_IMPORTED_MODULE_3__.APIS.SETTING_9, obj);

      _this4.startInterval();

      console.log('measured Value', String(_this4.MeasuredValue));
    })();
  } // To Send count of precessed values


  sendProcessCount() {
    var _a;

    const count = this.isDisable.filter(Boolean).length;

    if (count) {
      const obj = {
        "solution": String((_a = this.dialogData) === null || _a === void 0 ? void 0 : _a.solution),
        "count": String(count)
      };
      console.log('sendProcessCount', obj);
      this.httpPost(src_shared_model_api_model__WEBPACK_IMPORTED_MODULE_3__.APIS.SEND_COUNT, obj);
    }

    this.stopInterval();
  } // To open keyboard component 


  open(form, inputItem) {
    let tempFormVal = form.value;
    const modalRef = this.modalService.open(src_app_keypad_keypad_component__WEBPACK_IMPORTED_MODULE_1__.KeypadComponent, {
      size: 'sm',
      backdrop: 'static',
      centered: true,
      scrollable: false
    });
    console.log('tempFormVal[inputItem]', tempFormVal[inputItem]);
    modalRef.componentInstance.defVal = tempFormVal[inputItem];
    modalRef.componentInstance.passEntry.subscribe(receivedEntry => {
      console.log("Received Data:", receivedEntry, tempFormVal);
      tempFormVal[inputItem] = receivedEntry;
      form.setValue(tempFormVal);
      modalRef.close();
    });
  } // Get Api Call


  httpGet(endPoint) {
    console.log("Http Get : ", endPoint);
    return new Promise((resolve, reject) => {
      this.http.get(this.url + "/" + endPoint).subscribe({
        next: data => {
          resolve(data);
        },
        error: error => {
          console.log(endPoint + " Api error");
          resolve([]);
        }
      });
    });
  } // Post Api Call


  httpPost(method, body) {
    console.log("Http Post : ", method, body);
    return new Promise((resolve, reject) => {
      this.http.post(this.url + "/" + method, body).subscribe({
        next: data => {
          resolve(data);
        },
        error: error => {
          console.log(method + " Api error");
          resolve([]);
        }
      });
    });
  } // Function to start setInterval call


  startInterval(index) {
    var _this5 = this;

    this.intervalId = setInterval( /*#__PURE__*/(0,D_Cropicco_cropicco_pi_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let res = yield _this5.httpGet(src_shared_model_api_model__WEBPACK_IMPORTED_MODULE_3__.APIS.GET_RESULT);

      if ((res === null || res === void 0 ? void 0 : res.result) == true) {
        _this5.isCalibrating = 'false';
        _this5.isPumpLoader = false;
        _this5.isCalibrationDone = true;
        _this5.PumpCalibStep == 'SEND CALIB VALUE' ? _this5.PumpCalibStep = 'ENTER VALUE' : '';
        _this5.isDisable[index] = true;
        yield _this5.delay(1000 * 3); // this.isCalibrationDone = false;

        _this5.stopInterval();

        _this5.PumpCalibStep == 'END' ? '' : '';
      }

      if ((res === null || res === void 0 ? void 0 : res.result) == 'error') {
        _this5.isCalibrating = '';
        _this5.isPumpLoader = false;
        _this5.isError = true;
        yield _this5.delay(1000 * 3); // this.isError = false;

        _this5.stopInterval(); // this.dialogRef.close();

      }
    }), 1000 * 5);
  } // Function to stop setInterval call


  stopInterval() {
    clearInterval(this.intervalId);
  }

}

CalibrationDialogComponent.ɵfac = function CalibrationDialogComponent_Factory(t) {
  return new (t || CalibrationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal));
};

CalibrationDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: CalibrationDialogComponent,
  selectors: [["app-calibration-dialog"]],
  decls: 7,
  vars: 6,
  consts: [[2, "transition", "all .2s ease-in-out !important"], [4, "ngIf"], ["style", "margin-top: 5px;", "class", "loader", 4, "ngIf"], ["style", "margin-top: 15px;", 4, "ngIf"], ["style", "text-align: center;", 4, "ngIf"], ["style", "height: 10rem;", 4, "ngIf"], [2, "height", "10rem"], [1, "p-10", "header-bg"], ["src", "../../../assets/images/close.png", 1, "close-icon", 3, "click"], [1, "p-10", "align-row"], [4, "ngFor", "ngForOf"], ["mat-fab", "", "color", "primary", 3, "disabled", "click"], ["class", "close-icon", "src", "../../../assets/images/close.png", 3, "click", 4, "ngIf"], ["class", "p-10 t-a-c", 4, "ngIf"], [1, "p-10", "t-a-c"], [1, "pump-layout"], ["src", "../../../assets/images/info.png", 1, "icon-class"], [1, "m-t-10"], [1, "message"], ["mat-raised-button", "", 1, "bg-success", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "31.5", "height", "29.25", "viewBox", "0 0 31.5 29.25", 1, "icon-class"], ["id", "Icon_ionic-md-warning", "data-name", "Icon ionic-md-warning", "d", "M2.25,32.625h31.5L18,3.375Zm17.438-4.5H16.313V24.75h3.375Zm0-5.625H16.313V15.75h3.375Z", "transform", "translate(-2.25 -3.375)", "fill", "#ffc400"], [1, "measured-input"], ["pumpCalib", "ngForm"], [2, "margin-top", "10px"], ["mat-input", "", "type", "number", "name", "pumpCalibration", 3, "ngModel", "ngModelChange", "click"], [1, "align-end"], [1, "loader", 2, "margin-top", "5px"], [1, "clock", "m-t-20"], [1, "cup", "top"], [1, "sand"], [1, "cup"], [1, "sand", "delayed"], [1, "m-t-10", "message"], [2, "margin-top", "15px"], [1, "pump-layout", "p-10"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 130.2 130.2", 1, "svg-green"], ["fill", "none", "stroke", "#73AF55", "stroke-width", "6", "stroke-miterlimit", "10", "cx", "65.1", "cy", "65.1", "r", "62.1", 1, "path", "circle"], ["fill", "none", "stroke", "#73AF55", "stroke-width", "6", "stroke-linecap", "round", "stroke-miterlimit", "10", "points", "100.2,40.2 51.5,88.8 29.8,67.5 ", 1, "path", "check"], [1, "success"], [2, "display", "flex", "justify-content", "center"], ["mat-raised-button", "", 1, "bg-failed", 3, "click"], [2, "text-align", "center"], ["src", "../../../assets/images/cross.png", 1, "icon-class"], [1, "t-a-c", "m-t-20", "p-10"], ["id", "two-gears", 1, "gears"], [1, "gears-container"], [1, "gear-rotate"], [1, "gear-rotate-left"]],
  template: function CalibrationDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CalibrationDialogComponent_div_1_Template, 2, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CalibrationDialogComponent_div_2_Template, 6, 3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CalibrationDialogComponent_div_3_Template, 8, 0, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CalibrationDialogComponent_div_4_Template, 12, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CalibrationDialogComponent_div_5_Template, 10, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, CalibrationDialogComponent_div_6_Template, 8, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.dialogData == null ? null : ctx.dialogData.calibration) == "SENSOR");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.dialogData == null ? null : ctx.dialogData.calibration) == "PUMP");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isCalibrating === "true" && !ctx.isCalibrationDone);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isCalibrationDone);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isError);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isPumpLoader);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel],
  styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 130px;\n}\n\n.pump-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  grid-gap: 10px;\n  gap: 10px;\n}\n\n.measured-input[_ngcontent-%COMP%] {\n  height: 10rem;\n  position: relative;\n  margin-top: 13px;\n}\n\n.align-end[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 4%;\n  right: 39%;\n}\n\n.header-bg[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n  background-color: whitesmoke;\n  display: flex;\n  justify-content: space-between;\n  line-height: 32px;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.p-10[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.mat-card-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.align-row[_ngcontent-%COMP%] {\n  display: flex;\n  grid-gap: 15px;\n  gap: 15px;\n  justify-content: center;\n  margin-top: 25px;\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  width: 5rem;\n  height: 5rem;\n}\n\n.bg-success[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  font-size: 14px;\n  font-weight: 500;\n  background-color: #0dbd16 !important;\n  color: white;\n  margin-top: 15px;\n}\n\n.bg-failed[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  font-size: 14px;\n  font-weight: 500;\n  background-color: #ea2d3f !important;\n  color: white;\n  margin-top: 15px;\n}\n\na.bg-success[_ngcontent-%COMP%]:focus, a.bg-success[_ngcontent-%COMP%]:hover, button.bg-success[_ngcontent-%COMP%]:focus, button.bg-success[_ngcontent-%COMP%]:hover {\n  background-color: #0dbd16 !important;\n}\n\n.message[_ngcontent-%COMP%] {\n  font-size: larger;\n  font-weight: 500;\n  margin: 5px;\n}\n\n.close-icon[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  z-index: 2;\n  cursor: pointer;\n  opacity: 1;\n}\n\n.icon-class[_ngcontent-%COMP%] {\n  width: 5rem;\n  height: 5rem;\n}\n\n\n\n.loader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 10rem;\n  flex-direction: column;\n}\n\n.clock[_ngcontent-%COMP%] {\n  background: white;\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  \n  box-shadow: inset 0 0 0 0.25rem #aaa;\n  flex-direction: column;\n  animation: clock 5s ease-in-out infinite;\n}\n\n.cup[_ngcontent-%COMP%] {\n  background-color: #def;\n  box-shadow: 0 0 1vmin 1vmin #bcd inset;\n  height: 30%;\n  width: 30%;\n  border-radius: 50% 50% 0 0/100% 100% 0 0;\n  overflow: hidden;\n}\n\n.top[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.sand[_ngcontent-%COMP%] {\n  background: #2B65EC;\n  height: 150%;\n  width: 150%;\n  transform-origin: 0% 0%;\n  animation: sand 5s linear infinite -2.5s;\n}\n\n.delayed[_ngcontent-%COMP%] {\n  animation-delay: 0s;\n}\n\n@keyframes clock {\n  0% {\n    transform: rotate(0deg);\n  }\n  25%, 50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(360deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes sand {\n  0%, 100% {\n    border-radius: 5%;\n    transform: translate(35%, 20%) rotate(45deg);\n  }\n  15% {\n    border-radius: 40%;\n    transform: translate(0%, 35%) rotate(-65deg) scale(1.5, 1.5);\n  }\n  25% {\n    border-radius: 20%;\n    transform: translate(-15%, 35%) rotate(-90deg) scale(1.2, 1.2);\n  }\n  50% {\n    border-radius: 5%;\n    transform: translate(0%, 0%) rotate(-90deg) scale(1, 1);\n    opacity: 1;\n  }\n  50.01%, 64.99% {\n    opacity: 0;\n  }\n  65% {\n    border-radius: 35%;\n    transform: translate(20%, 50%) rotate(30deg);\n    opacity: 1;\n  }\n  75% {\n    border-radius: 10%;\n    transform: translate(35%, 40%) rotate(45deg);\n  }\n}\n\n\n\n.svg-green[_ngcontent-%COMP%] {\n  width: 100px;\n  display: block;\n  margin: 5px auto 0;\n}\n\n.path[_ngcontent-%COMP%] {\n  stroke-dasharray: 1000;\n  stroke-dashoffset: 0;\n}\n\n.path.circle[_ngcontent-%COMP%] {\n  animation: dash 0.9s ease-in-out;\n}\n\n.path.line[_ngcontent-%COMP%] {\n  stroke-dashoffset: 1000;\n  animation: dash 0.9s 0.35s ease-in-out forwards;\n}\n\n.path.check[_ngcontent-%COMP%] {\n  stroke-dashoffset: -100;\n  animation: dash-check 0.9s 0.35s ease-in-out forwards;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10px;\n  font-size: 1.25em;\n}\n\np.success[_ngcontent-%COMP%] {\n  color: #73AF55;\n}\n\np.error[_ngcontent-%COMP%] {\n  color: #D06079;\n}\n\n@keyframes dash {\n  0% {\n    stroke-dashoffset: 1000;\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n\n@keyframes dash-check {\n  0% {\n    stroke-dashoffset: -100;\n  }\n  100% {\n    stroke-dashoffset: 900;\n  }\n}\n\n.gears[_ngcontent-%COMP%] {\n  width: 48%;\n  display: inline-block;\n  margin-left: 2rem;\n}\n\n.gears-container[_ngcontent-%COMP%] {\n  height: 130px;\n  font-size: 24px;\n  padding: 9%;\n  position: relative;\n  margin: 0px auto;\n}\n\n.gear-rotate[_ngcontent-%COMP%] {\n  width: 2em;\n  height: 2em;\n  top: 50%;\n  left: 50%;\n  margin-top: -1em;\n  margin-left: -1em;\n  background: #009de1;\n  position: absolute;\n  border-radius: 1em;\n  animation: 1s gear-rotate linear infinite;\n}\n\n.gear-rotate-left[_ngcontent-%COMP%] {\n  margin-top: -2.2em;\n  top: 50%;\n  width: 2em;\n  height: 2em;\n  background: #009de1;\n  position: absolute;\n  border-radius: 1em;\n  animation: 1s gear-rotate-left linear infinite;\n}\n\n.gear-rotate[_ngcontent-%COMP%]::before, .gear-rotate-left[_ngcontent-%COMP%]::before {\n  width: 2.8em;\n  height: 2.8em;\n  background: linear-gradient(0deg, transparent 39%, #009de1 39%, #009de1 61%, transparent 61%), linear-gradient(60deg, transparent 42%, #009de1 42%, #009de1 58%, transparent 58%), linear-gradient(120deg, transparent 42%, #009de1 42%, #009de1 58%, transparent 58%);\n  position: absolute;\n  content: \"\";\n  top: -0.4em;\n  left: -0.4em;\n  border-radius: 1.4em;\n}\n\n.gear-rotate[_ngcontent-%COMP%]::after, .gear-rotate-left[_ngcontent-%COMP%]::after {\n  width: 1em;\n  height: 1em;\n  background: #ffffff;\n  position: absolute;\n  content: \"\";\n  top: 0.5em;\n  left: 0.5em;\n  border-radius: 0.5em;\n}\n\n\n\n@keyframes gear-rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(-180deg);\n  }\n}\n\n@keyframes gear-rotate-left {\n  0% {\n    -webkit-transform: rotate(30deg);\n  }\n  100% {\n    -webkit-transform: rotate(210deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGlicmF0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7QUFDRjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBREY7O0FBSUE7RUFDRSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQURGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRkY7O0FBS0E7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7Ozs7RUFJRSxvQ0FBQTtBQUZGOztBQUtBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUZGOztBQUtBLGlCQUFBOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBSEY7O0FBT0E7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBO29CQUFBO0VBRUEsb0NBQUE7RUFDQSxzQkFBQTtFQUNBLHdDQUFBO0FBSkY7O0FBT0E7RUFDRSxzQkFBQTtFQUNBLHNDQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSx5QkFBQTtBQUpGOztBQU9BO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esd0NBQUE7QUFKRjs7QUFPQTtFQUNFLG1CQUFBO0FBSkY7O0FBUUE7RUFDRTtJQUNFLHVCQUFBO0VBTEY7RUFRQTtJQUVFLHlCQUFBO0VBUEY7RUFVQTtJQUNFLHlCQUFBO0VBUkY7RUFXQTtJQUNFLHlCQUFBO0VBVEY7QUFDRjs7QUFhQTtFQUVFO0lBRUUsaUJBQUE7SUFDQSw0Q0FBQTtFQWJGO0VBZ0JBO0lBQ0Usa0JBQUE7SUFDQSw0REFBQTtFQWRGO0VBaUJBO0lBQ0Usa0JBQUE7SUFDQSw4REFBQTtFQWZGO0VBa0JBO0lBQ0UsaUJBQUE7SUFDQSx1REFBQTtJQUNBLFVBQUE7RUFoQkY7RUFtQkE7SUFFRSxVQUFBO0VBbEJGO0VBcUJBO0lBQ0Usa0JBQUE7SUFDQSw0Q0FBQTtJQUNBLFVBQUE7RUFuQkY7RUFzQkE7SUFDRSxrQkFBQTtJQUNBLDRDQUFBO0VBcEJGO0FBQ0Y7O0FBdUJBLGdCQUFBOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQXJCRjs7QUF3QkE7RUFDRSxzQkFBQTtFQUNBLG9CQUFBO0FBckJGOztBQXVCRTtFQUVFLGdDQUFBO0FBckJKOztBQXdCRTtFQUNFLHVCQUFBO0VBRUEsK0NBQUE7QUF0Qko7O0FBeUJFO0VBQ0UsdUJBQUE7RUFFQSxxREFBQTtBQXZCSjs7QUEyQkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUF4QkY7O0FBMEJFO0VBQ0UsY0FBQTtBQXhCSjs7QUEyQkU7RUFDRSxjQUFBO0FBekJKOztBQXdDQTtFQUNFO0lBQ0UsdUJBQUE7RUE3QkY7RUFnQ0E7SUFDRSxvQkFBQTtFQTlCRjtBQUNGOztBQTJDQTtFQUNFO0lBQ0UsdUJBQUE7RUFqQ0Y7RUFvQ0E7SUFDRSxzQkFBQTtFQWxDRjtBQUNGOztBQXlDQTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBdkNGOztBQTBDQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUF2Q0Y7O0FBMENBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFHQSx5Q0FBQTtBQXZDRjs7QUEwQ0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUdBLDhDQUFBO0FBdkNGOztBQTBDQTs7RUFFRSxZQUFBO0VBQ0EsYUFBQTtFQWNBLHNRQUNFO0VBR0Ysa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQW5ERjs7QUFzREE7O0VBRUUsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFuREY7O0FBc0RBOztJQUFBOztBQXdCQTtFQUNFO0lBQ0UsdUJBQUE7RUF4REY7RUEyREE7SUFDRSwwQkFBQTtFQXpERjtBQUNGOztBQWdGQTtFQUNFO0lBQ0UsZ0NBQUE7RUE5REY7RUFpRUE7SUFDRSxpQ0FBQTtFQS9ERjtBQUNGIiwiZmlsZSI6ImNhbGlicmF0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEzMHB4O1xyXG59XHJcblxyXG4ucHVtcC1sYXlvdXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLm1lYXN1cmVkLWlucHV0IHtcclxuICBoZWlnaHQ6IDEwcmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiAxM3B4O1xyXG59XHJcblxyXG4uYWxpZ24tZW5kIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA0JTtcclxuICByaWdodDogMzklO1xyXG59XHJcblxyXG4uaGVhZGVyLWJnIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG59XHJcblxyXG4ubWF0LWNhcmQge1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLnAtMTAge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcblxyXG4uYWxpZ24tcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTVweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgZm9udC1zaXplOiA0cmVtO1xyXG4gIHdpZHRoOiA1cmVtO1xyXG4gIGhlaWdodDogNXJlbTtcclxufVxyXG5cclxuLmJnLXN1Y2Nlc3Mge1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkYmQxNiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uYmctZmFpbGVkIHtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTJkM2YgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuYS5iZy1zdWNjZXNzOmZvY3VzLFxyXG5hLmJnLXN1Y2Nlc3M6aG92ZXIsXHJcbmJ1dHRvbi5iZy1zdWNjZXNzOmZvY3VzLFxyXG5idXR0b24uYmctc3VjY2Vzczpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkYmQxNiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuLmNsb3NlLWljb24ge1xyXG4gIHdpZHRoOiAycmVtO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uaWNvbi1jbGFzcyB7XHJcbiAgd2lkdGg6IDVyZW07XHJcbiAgaGVpZ2h0OiA1cmVtO1xyXG59XHJcblxyXG4vKiBob3VycyBsb2FkZXIgKi9cclxuXHJcbi5sb2FkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwcmVtO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG59XHJcblxyXG4uY2xvY2sge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLypcclxuICAgICAgbWFyZ2luOiBhdXRvOyovXHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgLjI1cmVtICNhYWE7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbmltYXRpb246IGNsb2NrIDVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG59XHJcblxyXG4uY3VwIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVmO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxdm1pbiAxdm1pbiAjYmNkIGluc2V0O1xyXG4gIGhlaWdodDogMzAlO1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlIDUwJSAwIDAvIDEwMCUgMTAwJSAwIDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG5cclxuLnNhbmQge1xyXG4gIGJhY2tncm91bmQ6ICMyQjY1RUM7XHJcbiAgaGVpZ2h0OiAxNTAlO1xyXG4gIHdpZHRoOiAxNTAlO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xyXG4gIGFuaW1hdGlvbjogc2FuZCA1cyBsaW5lYXIgaW5maW5pdGUgLTIuNXM7XHJcbn1cclxuXHJcbi5kZWxheWVkIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xyXG59XHJcblxyXG5cclxuQGtleWZyYW1lcyBjbG9jayB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZylcclxuICB9XHJcblxyXG4gIDI1JSxcclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKVxyXG4gIH1cclxuXHJcbiAgNzUlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQGtleWZyYW1lcyBzYW5kIHtcclxuXHJcbiAgMCUsXHJcbiAgMTAwJSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDM1JSwgMjAlKSByb3RhdGUoNDVkZWcpO1xyXG4gIH1cclxuXHJcbiAgMTUlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAzNSUpIHJvdGF0ZSgtNjVkZWcpIHNjYWxlKDEuNSwgMS41KTtcclxuICB9XHJcblxyXG4gIDI1JSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUlLCAzNSUpIHJvdGF0ZSgtOTBkZWcpIHNjYWxlKDEuMiwgMS4yKTtcclxuICB9XHJcblxyXG4gIDUwJSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSkgcm90YXRlKC05MGRlZykgc2NhbGUoMSwgMSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgNTAuMDElLFxyXG4gIDY0Ljk5JSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgNjUlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1JTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwJSwgNTAlKSByb3RhdGUoMzBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIDc1JSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzNSUsIDQwJSkgcm90YXRlKDQ1ZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbi8qIGdyZWVuIHRpY2sgICovXHJcbi5zdmctZ3JlZW4ge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDVweCBhdXRvIDA7XHJcbn1cclxuXHJcbi5wYXRoIHtcclxuICBzdHJva2UtZGFzaGFycmF5OiAxMDAwO1xyXG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG5cclxuICAmLmNpcmNsZSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZGFzaCAuOXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb246IGRhc2ggLjlzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgJi5saW5lIHtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMDAwO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGRhc2ggLjlzIC4zNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XHJcbiAgICBhbmltYXRpb246IGRhc2ggLjlzIC4zNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XHJcbiAgfVxyXG5cclxuICAmLmNoZWNrIHtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTAwO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGRhc2gtY2hlY2sgLjlzIC4zNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XHJcbiAgICBhbmltYXRpb246IGRhc2gtY2hlY2sgLjlzIC4zNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XHJcbiAgfVxyXG59XHJcblxyXG5wIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBmb250LXNpemU6IDEuMjVlbTtcclxuXHJcbiAgJi5zdWNjZXNzIHtcclxuICAgIGNvbG9yOiAjNzNBRjU1O1xyXG4gIH1cclxuXHJcbiAgJi5lcnJvciB7XHJcbiAgICBjb2xvcjogI0QwNjA3OTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZGFzaCB7XHJcbiAgMCUge1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDA7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBkYXNoIHtcclxuICAwJSB7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMTAwMDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZGFzaC1jaGVjayB7XHJcbiAgMCUge1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMDA7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiA5MDA7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGRhc2gtY2hlY2sge1xyXG4gIDAlIHtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTAwO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogOTAwO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBnZWFyIGxvYWRlclxyXG5cclxuLmdlYXJzIHtcclxuICB3aWR0aDogNDglO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tbGVmdDogMnJlbTtcclxufVxyXG5cclxuLmdlYXJzLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMzBweDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgcGFkZGluZzogOSU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuXHJcbi5nZWFyLXJvdGF0ZSB7XHJcbiAgd2lkdGg6IDJlbTtcclxuICBoZWlnaHQ6IDJlbTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogLTFlbTtcclxuICBtYXJnaW4tbGVmdDogLTFlbTtcclxuICBiYWNrZ3JvdW5kOiAjMDA5ZGUxO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IDFzIGdlYXItcm90YXRlIGxpbmVhciBpbmZpbml0ZTtcclxuICAtbW96LWFuaW1hdGlvbjogMXMgZ2Vhci1yb3RhdGUgbGluZWFyIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbjogMXMgZ2Vhci1yb3RhdGUgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4uZ2Vhci1yb3RhdGUtbGVmdCB7XHJcbiAgbWFyZ2luLXRvcDogLTIuMmVtO1xyXG4gIHRvcDogNTAlO1xyXG4gIHdpZHRoOiAyZW07XHJcbiAgaGVpZ2h0OiAyZW07XHJcbiAgYmFja2dyb3VuZDogIzAwOWRlMTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiAxcyBnZWFyLXJvdGF0ZS1sZWZ0IGxpbmVhciBpbmZpbml0ZTtcclxuICAtbW96LWFuaW1hdGlvbjogMXMgZ2Vhci1yb3RhdGUtbGVmdCBsaW5lYXIgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uOiAxcyBnZWFyLXJvdGF0ZS1sZWZ0IGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuLmdlYXItcm90YXRlOjpiZWZvcmUsXHJcbi5nZWFyLXJvdGF0ZS1sZWZ0OjpiZWZvcmUge1xyXG4gIHdpZHRoOiAyLjhlbTtcclxuICBoZWlnaHQ6IDIuOGVtO1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgwZGVnLCB0cmFuc3BhcmVudCAzOSUsICMwMDlkZTEgMzklLCAjMDA5ZGUxIDYxJSwgdHJhbnNwYXJlbnQgNjElKSxcclxuICAgIC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDYwZGVnLCB0cmFuc3BhcmVudCA0MiUsICMwMDlkZTEgNDIlLCAjMDA5ZGUxIDU4JSwgdHJhbnNwYXJlbnQgNTglKSxcclxuICAgIC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDEyMGRlZywgdHJhbnNwYXJlbnQgNDIlLCAjMDA5ZGUxIDQyJSwgIzAwOWRlMSA1OCUsIHRyYW5zcGFyZW50IDU4JSk7XHJcbiAgYmFja2dyb3VuZDpcclxuICAgIC1tb3otbGluZWFyLWdyYWRpZW50KDBkZWcsIHRyYW5zcGFyZW50IDM5JSwgIzAwOWRlMSAzOSUsICM0N0VDMTkgNjElLCB0cmFuc3BhcmVudCA2MSUpLFxyXG4gICAgLW1vei1saW5lYXItZ3JhZGllbnQoNjBkZWcsIHRyYW5zcGFyZW50IDQyJSwgIzAwOWRlMSA0MiUsICMwMDlkZTEgNTglLCB0cmFuc3BhcmVudCA1OCUpLFxyXG4gICAgLW1vei1saW5lYXItZ3JhZGllbnQoMTIwZGVnLCB0cmFuc3BhcmVudCA0MiUsICMwMDlkZTEgNDIlLCAjMDA5ZGUxIDU4JSwgdHJhbnNwYXJlbnQgNTglKTtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgLW8tbGluZWFyLWdyYWRpZW50KDBkZWcsIHRyYW5zcGFyZW50IDM5JSwgIzAwOWRlMSAzOSUsICMwMDlkZTEgNjElLCB0cmFuc3BhcmVudCA2MSUpLFxyXG4gICAgLW8tbGluZWFyLWdyYWRpZW50KDYwZGVnLCB0cmFuc3BhcmVudCA0MiUsICMwMDlkZTEgNDIlLCAjMDA5ZGUxIDU4JSwgdHJhbnNwYXJlbnQgNTglKSxcclxuICAgIC1vLWxpbmVhci1ncmFkaWVudCgxMjBkZWcsIHRyYW5zcGFyZW50IDQyJSwgIzQ3RUMxOSA0MiUsICMwMDlkZTEgNTglLCB0cmFuc3BhcmVudCA1OCUpO1xyXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoMGRlZywgdHJhbnNwYXJlbnQgMzklLCAjMDA5ZGUxIDM5JSwgIzAwOWRlMSA2MSUsIHRyYW5zcGFyZW50IDYxJSksIC1tcy1saW5lYXItZ3JhZGllbnQoNjBkZWcsIHRyYW5zcGFyZW50IDQyJSwgIzAwOWRlMSA0MiUsICMwMDlkZTEgNTglLCB0cmFuc3BhcmVudCA1OCUpLCAtbXMtbGluZWFyLWdyYWRpZW50KDEyMGRlZywgdHJhbnNwYXJlbnQgNDIlLCAjMDA5ZGUxIDQyJSwgIzAwOWRlMSA1OCUsIHRyYW5zcGFyZW50IDU4JSk7XHJcbiAgYmFja2dyb3VuZDpcclxuICAgIGxpbmVhci1ncmFkaWVudCgwZGVnLCB0cmFuc3BhcmVudCAzOSUsICMwMDlkZTEgMzklLCAjMDA5ZGUxIDYxJSwgdHJhbnNwYXJlbnQgNjElKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCg2MGRlZywgdHJhbnNwYXJlbnQgNDIlLCAjMDA5ZGUxIDQyJSwgIzAwOWRlMSA1OCUsIHRyYW5zcGFyZW50IDU4JSksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCB0cmFuc3BhcmVudCA0MiUsICMwMDlkZTEgNDIlLCAjMDA5ZGUxIDU4JSwgdHJhbnNwYXJlbnQgNTglKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB0b3A6IC0uNGVtO1xyXG4gIGxlZnQ6IC0uNGVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuNGVtO1xyXG59XHJcblxyXG4uZ2Vhci1yb3RhdGU6OmFmdGVyLFxyXG4uZ2Vhci1yb3RhdGUtbGVmdDo6YWZ0ZXIge1xyXG4gIHdpZHRoOiAxZW07XHJcbiAgaGVpZ2h0OiAxZW07XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB0b3A6IC41ZW07XHJcbiAgbGVmdDogLjVlbTtcclxuICBib3JkZXItcmFkaXVzOiAuNWVtO1xyXG59XHJcblxyXG4vKlxyXG4gICAqIEtleWZyYW1lIEFuaW1hdGlvbnMgXHJcbiAgICovXHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZ2Vhci1yb3RhdGUge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5ALW1vei1rZXlmcmFtZXMgZ2Vhci1yb3RhdGUge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZ2Vhci1yb3RhdGUge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBnZWFyLXJvdGF0ZS1sZWZ0IHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMTBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIGdlYXItcm90YXRlLWxlZnQge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGdlYXItcm90YXRlLWxlZnQge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7XHJcbiAgfVxyXG59Il19 */"]
});

/***/ }),

/***/ 3725:
/*!*********************************************************!*\
  !*** ./src/shared/component/charts/charts.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartsComponent": () => (/* binding */ ChartsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 4664);
/* harmony import */ var src_shared_model_api_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/shared/model/api.model */ 7860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_core_api_service_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/core/api-service/api.service */ 909);







const _c0 = ["chart"];
class ChartsComponent {
    constructor(dialogRef, apiService, dialogData) {
        this.dialogRef = dialogRef;
        this.apiService = apiService;
        this.dialogData = dialogData;
        this.chart = new ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent;
        this.initFn = () => {
            // Get current date in local time zone
            const currentDate = new Date();
            const timeZoneOffset = currentDate.getTimezoneOffset() * 60000; // Offset in milliseconds
            // Set start time to 00:00:00
            currentDate.setHours(0, 0, 0, 0);
            const start_date = new Date(currentDate.getTime() - timeZoneOffset).toISOString().slice(0, 19).replace('T', ' ');
            // Set end time to 23:59:59.999
            currentDate.setHours(23, 59, 59, 999);
            const end_date = new Date(currentDate.getTime() - timeZoneOffset).toISOString().slice(0, 19).replace('T', ' ');
            console.log('Start Date:', start_date);
            console.log('End Date:', end_date);
            this.apiService.httpGet(`${src_shared_model_api_model__WEBPACK_IMPORTED_MODULE_0__.APIS.GET_GRAPH_DATA}/${start_date.toString()}/${end_date.toString()}`).subscribe((res) => {
                var _a;
                if ((_a = res.data) === null || _a === void 0 ? void 0 : _a.length) {
                    const serices_data = [];
                    setTimeout(() => {
                        res.data.map((d) => {
                            const sensor = ['EC', 'PH', 'water_temp', 'ambient_temp'];
                            if (sensor.includes(d.name)) {
                                serices_data.push(d);
                            }
                        });
                        this.chartOptions.series = serices_data;
                    });
                }
            });
        };
        this.chartOptions = {
            series: [],
            chart: {
                height: 330,
                type: "line",
                toolbar: {
                    offsetX: 0,
                    offsetY: 0,
                    show: true,
                    tools: {
                        download: false,
                        pan: false,
                        selection: false,
                        reset: true
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 5,
                curve: "straight",
                dashArray: [0, 0, 0, 0]
            },
            title: {
                text: `${new Date().toDateString()}`,
                align: "left"
            },
            legend: {
                tooltipHoverFormatter: function (val, opts) {
                    return (val +
                        " - <strong>" +
                        opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
                        "</strong>");
                },
            },
            markers: {
                size: 0,
                hover: {
                    sizeOffset: 6
                }
            },
            xaxis: {
                labels: {
                    trim: false
                },
                tickAmount: 20,
            },
            yaxis: {
                tickAmount: 13
            },
            tooltip: {
                y: [
                    {
                        title: {
                            formatter: function (val) {
                                return val;
                            }
                        }
                    },
                    {
                        title: {
                            formatter: function (val) {
                                return val;
                            }
                        }
                    },
                    {
                        title: {
                            formatter: function (val) {
                                return val;
                            }
                        }
                    }
                ]
            },
            grid: {
                borderColor: "#f1f1f1"
            }
        };
    }
    ngOnInit() {
        this.initFn();
    }
    ;
}
ChartsComponent.ɵfac = function ChartsComponent_Factory(t) { return new (t || ChartsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_core_api_service_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA)); };
ChartsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ChartsComponent, selectors: [["app-charts"]], viewQuery: function ChartsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 7, vars: 11, consts: [[2, "transition", "all .2s ease-in-out !important"], [2, "overflow", "hidden"], [1, "header-bg"], ["src", "../../../assets/images/close.png", 1, "close-icon", 2, "height", "25px", "padding-right", "10px", 3, "click"], ["id", "chart", 2, "padding-left", "4px"], [3, "series", "chart", "xaxis", "stroke", "tooltip", "dataLabels", "legend", "markers", "grid", "yaxis", "title"]], template: function ChartsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ChartsComponent_Template_img_click_4_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "apx-chart", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("xaxis", ctx.chartOptions.xaxis)("stroke", ctx.chartOptions.stroke)("tooltip", ctx.chartOptions.tooltip)("dataLabels", ctx.chartOptions.dataLabels)("legend", ctx.chartOptions.legend)("markers", ctx.chartOptions.markers)("grid", ctx.chartOptions.grid)("yaxis", ctx.chartOptions.yaxis)("title", ctx.chartOptions.title);
    } }, directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent], styles: [".header-bg[_ngcontent-%COMP%] {\r\n    \r\n    display: flex;\r\n    justify-content: space-between\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7bUNBQytCO0lBQy9CLGFBQWE7SUFDYjtBQUNKIiwiZmlsZSI6ImNoYXJ0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1iZyB7XHJcbiAgICAvKiBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXHJcbn0iXX0= */"] });


/***/ }),

/***/ 7519:
/*!*********************************************************************!*\
  !*** ./src/shared/component/flush-dialog/flush-dialog.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlushDialogComponent": () => (/* binding */ FlushDialogComponent)
/* harmony export */ });
/* harmony import */ var D_Cropicco_cropicco_pi_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_shared_model_api_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/model/api.model */ 7860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 781);











function FlushDialogComponent_img_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FlushDialogComponent_img_5_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r8.dialogRef.close();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function FlushDialogComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Are you sure want to flush water from the tank!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FlushDialogComponent_div_6_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r10.flush_status = "WARNING";
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function FlushDialogComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "svg", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Make Sure The tube Is Inside The Container!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FlushDialogComponent_div_7_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r12.flushWaterFn("start");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Flush");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function FlushDialogComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Flushing...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FlushDialogComponent_div_8_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r14.flushWaterFn("stop");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Stop");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function FlushDialogComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "svg", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "circle", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "polyline", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Flush success !");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function FlushDialogComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Flush failed ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function FlushDialogComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "svg", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Flush stopped !");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function FlushDialogComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Are you sure want to Reset Error!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FlushDialogComponent_div_12_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r16.userError();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

class FlushDialogComponent {
  constructor(http, dialogData, dialogRef) {
    this.http = http;
    this.dialogData = dialogData;
    this.dialogRef = dialogRef;
    this.flush_status = 'INFO';
    this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api; // delay function

    this.delay = delay => new Promise((resolve, reject) => {
      setTimeout(() => resolve(true), delay);
    });
  }

  ngOnInit() {}

  flushWaterFn(status) {
    var _this = this;

    return (0,D_Cropicco_cropicco_pi_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this.httpPost(src_shared_model_api_model__WEBPACK_IMPORTED_MODULE_2__.APIS.FLUSH, {
        status
      });
      _this.flush_status = 'IN-PROGRESS';

      if (status == 'stop') {
        _this.flush_status = 'STOP';

        _this.stopInterval();

        yield _this.delay(1000 * 3); // this.dialogRef.close();

        return;
      }

      _this.startInterval();
    })();
  }

  startInterval() {
    var _this2 = this;

    this.intervalId = setInterval( /*#__PURE__*/(0,D_Cropicco_cropicco_pi_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let res = yield _this2.httpGet(src_shared_model_api_model__WEBPACK_IMPORTED_MODULE_2__.APIS.FLUSH_RESULT);

      if ((res === null || res === void 0 ? void 0 : res.result) == true) {
        console.log("res?.result", res === null || res === void 0 ? void 0 : res.result);
        _this2.flush_status = 'DONE';

        _this2.stopInterval();

        yield _this2.delay(1000 * 3); // this.dialogRef.close();
      }

      if ((res === null || res === void 0 ? void 0 : res.result) == 'error') {
        _this2.flush_status = 'FAILED';

        _this2.stopInterval();

        yield _this2.delay(1000 * 3);
      }
    }), 1000 * 5);
  } // Get Api Call


  httpGet(endPoint) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + "/" + endPoint).subscribe({
        next: data => {
          resolve(data);
        },
        error: error => {
          console.log(endPoint + " Api error");
          reject([]);
        }
      });
    });
  } // Post Api Call


  httpPost(method, body) {
    console.log("Http Post : ", method, body);
    return new Promise((resolve, reject) => {
      this.http.post(this.url + "/" + method, body).subscribe({
        next: data => {
          resolve(data);
        },
        error: error => {
          console.log(method + " Api error");
          reject([]);
        }
      });
    });
  }

  stopInterval() {
    clearInterval(this.intervalId);
  }

  userError() {
    var _this3 = this;

    return (0,D_Cropicco_cropicco_pi_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this3.httpPost(src_shared_model_api_model__WEBPACK_IMPORTED_MODULE_2__.APIS.USER_ERROR_RESET, {
        reset: true
      });

      _this3.dialogRef.close();
    })();
  }

}

FlushDialogComponent.ɵfac = function FlushDialogComponent_Factory(t) {
  return new (t || FlushDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef));
};

FlushDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: FlushDialogComponent,
  selectors: [["app-flush-dialog"]],
  decls: 13,
  vars: 9,
  consts: [[2, "transition", "all .2s ease-in-out !important"], [1, "p-10", "header-bg"], ["class", "close-icon", "src", "../../../assets/images/close.png", 3, "click", 4, "ngIf"], ["class", "p-10 t-a-c", 4, "ngIf"], ["style", "margin-top: 5px;position: relative;", "class", "loader", 4, "ngIf"], ["style", "margin-top: 15px;", 4, "ngIf"], ["style", "text-align: center;", 4, "ngIf"], ["src", "../../../assets/images/close.png", 1, "close-icon", 3, "click"], [1, "p-10", "t-a-c"], [1, "info-layout"], ["src", "../../../assets/images/info.png", 1, "icon-class"], [1, "m-t-10"], [1, "message", 2, "margin", "0"], ["mat-raised-button", "", 1, "bg-success", 3, "click"], [1, "pump-layout"], ["xmlns", "http://www.w3.org/2000/svg", "width", "31.5", "height", "29.25", "viewBox", "0 0 31.5 29.25", 1, "icon-class"], ["id", "Icon_ionic-md-warning", "data-name", "Icon ionic-md-warning", "d", "M2.25,32.625h31.5L18,3.375Zm17.438-4.5H16.313V24.75h3.375Zm0-5.625H16.313V15.75h3.375Z", "transform", "translate(-2.25 -3.375)", "fill", "#ffc400"], [1, "message"], [1, "loader", 2, "margin-top", "5px", "position", "relative"], [1, "clock", "m-t-20"], [1, "cup", "top"], [1, "sand"], [1, "cup"], [1, "sand", "delayed"], [1, "m-t-10", "message"], [2, "position", "absolute", "bottom", "12px", "right", "18px"], ["mat-raised-button", "", 1, "bg-failed", 2, "line-height", "25px", "margin-top", "0", 3, "click"], [2, "margin-top", "15px"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 130.2 130.2", 1, "svg-green"], ["fill", "none", "stroke", "#73AF55", "stroke-width", "6", "stroke-miterlimit", "10", "cx", "65.1", "cy", "65.1", "r", "62.1", 1, "path", "circle"], ["fill", "none", "stroke", "#73AF55", "stroke-width", "6", "stroke-linecap", "round", "stroke-miterlimit", "10", "points", "100.2,40.2 51.5,88.8 29.8,67.5 ", 1, "path", "check"], [1, "success"], [2, "text-align", "center"], [1, "pump-layout", "p-10"], ["src", "../../../assets/images/cross.png", 1, "icon-class"], [1, "m-t-10", 2, "text-align", "center"]],
  template: function FlushDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, FlushDialogComponent_img_5_Template, 1, 0, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, FlushDialogComponent_div_6_Template, 10, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, FlushDialogComponent_div_7_Template, 12, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, FlushDialogComponent_div_8_Template, 11, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, FlushDialogComponent_div_9_Template, 6, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, FlushDialogComponent_div_10_Template, 7, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, FlushDialogComponent_div_11_Template, 6, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, FlushDialogComponent_div_12_Template, 10, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.dialogData == null ? null : ctx.dialogData.title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.flush_status == "IN-PROGRESS"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.flush_status == "INFO" && ctx.dialogData.title != "user_error");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.flush_status == "WARNING");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.flush_status == "IN-PROGRESS");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.flush_status == "DONE");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.flush_status == "FAILED");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.flush_status == "STOP");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.dialogData.title == "user_error");
    }
  },
  directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton],
  styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 130px;\n}\n\n.info-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  grid-gap: 10px;\n  gap: 10px;\n}\n\n.align-end[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 4%;\n  right: 39%;\n}\n\n.header-bg[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n  background-color: whitesmoke;\n  display: flex;\n  justify-content: space-between;\n  line-height: 32px;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.p-10[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.mat-card-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.align-row[_ngcontent-%COMP%] {\n  display: flex;\n  grid-gap: 15px;\n  gap: 15px;\n  justify-content: center;\n  margin-top: 25px;\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  width: 5rem;\n  height: 5rem;\n}\n\n.bg-success[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  font-size: 14px;\n  font-weight: 500;\n  background-color: #0dbd16 !important;\n  color: white;\n  margin-top: 15px;\n}\n\n.bg-failed[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  font-size: 14px;\n  font-weight: 500;\n  background-color: #ea2d3f !important;\n  color: white;\n  margin-top: 15px;\n}\n\na.bg-success[_ngcontent-%COMP%]:focus, a.bg-success[_ngcontent-%COMP%]:hover, button.bg-success[_ngcontent-%COMP%]:focus, button.bg-success[_ngcontent-%COMP%]:hover {\n  background-color: #0dbd16 !important;\n}\n\n.message[_ngcontent-%COMP%] {\n  font-size: larger;\n  font-weight: 500;\n  margin: 5px;\n}\n\n.close-icon[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  z-index: 2;\n  cursor: pointer;\n  opacity: 1;\n}\n\n.icon-class[_ngcontent-%COMP%] {\n  width: 5rem;\n  height: 5rem;\n}\n\n\n\n.loader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 10rem;\n  flex-direction: column;\n}\n\n.clock[_ngcontent-%COMP%] {\n  background: white;\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  \n  box-shadow: inset 0 0 0 0.25rem #aaa;\n  flex-direction: column;\n  animation: clock 5s ease-in-out infinite;\n}\n\n.cup[_ngcontent-%COMP%] {\n  background-color: #def;\n  box-shadow: 0 0 1vmin 1vmin #bcd inset;\n  height: 30%;\n  width: 30%;\n  border-radius: 50% 50% 0 0/100% 100% 0 0;\n  overflow: hidden;\n}\n\n.top[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.sand[_ngcontent-%COMP%] {\n  background: #2B65EC;\n  height: 150%;\n  width: 150%;\n  transform-origin: 0% 0%;\n  animation: sand 5s linear infinite -2.5s;\n}\n\n.delayed[_ngcontent-%COMP%] {\n  animation-delay: 0s;\n}\n\n@keyframes clock {\n  0% {\n    transform: rotate(0deg);\n  }\n  25%, 50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(360deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes sand {\n  0%, 100% {\n    border-radius: 5%;\n    transform: translate(35%, 20%) rotate(45deg);\n  }\n  15% {\n    border-radius: 40%;\n    transform: translate(0%, 35%) rotate(-65deg) scale(1.5, 1.5);\n  }\n  25% {\n    border-radius: 20%;\n    transform: translate(-15%, 35%) rotate(-90deg) scale(1.2, 1.2);\n  }\n  50% {\n    border-radius: 5%;\n    transform: translate(0%, 0%) rotate(-90deg) scale(1, 1);\n    opacity: 1;\n  }\n  50.01%, 64.99% {\n    opacity: 0;\n  }\n  65% {\n    border-radius: 35%;\n    transform: translate(20%, 50%) rotate(30deg);\n    opacity: 1;\n  }\n  75% {\n    border-radius: 10%;\n    transform: translate(35%, 40%) rotate(45deg);\n  }\n}\n\n\n\n.svg-green[_ngcontent-%COMP%] {\n  width: 100px;\n  display: block;\n  margin: 5px auto 0;\n}\n\n.path[_ngcontent-%COMP%] {\n  stroke-dasharray: 1000;\n  stroke-dashoffset: 0;\n}\n\n.path.circle[_ngcontent-%COMP%] {\n  animation: dash 0.9s ease-in-out;\n}\n\n.path.line[_ngcontent-%COMP%] {\n  stroke-dashoffset: 1000;\n  animation: dash 0.9s 0.35s ease-in-out forwards;\n}\n\n.path.check[_ngcontent-%COMP%] {\n  stroke-dashoffset: -100;\n  animation: dash-check 0.9s 0.35s ease-in-out forwards;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10px;\n  font-size: 1.25em;\n}\n\np.success[_ngcontent-%COMP%] {\n  color: #73AF55;\n}\n\np.error[_ngcontent-%COMP%] {\n  color: #D06079;\n}\n\n@keyframes dash {\n  0% {\n    stroke-dashoffset: 1000;\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n\n@keyframes dash-check {\n  0% {\n    stroke-dashoffset: -100;\n  }\n  100% {\n    stroke-dashoffset: 900;\n  }\n}\n\n.gears[_ngcontent-%COMP%] {\n  width: 48%;\n  display: inline-block;\n  margin-left: 2rem;\n}\n\n.gears-container[_ngcontent-%COMP%] {\n  height: 130px;\n  font-size: 24px;\n  padding: 9%;\n  position: relative;\n  margin: 0px auto;\n}\n\n.gear-rotate[_ngcontent-%COMP%] {\n  width: 2em;\n  height: 2em;\n  top: 50%;\n  left: 50%;\n  margin-top: -1em;\n  margin-left: -1em;\n  background: #009de1;\n  position: absolute;\n  border-radius: 1em;\n  animation: 1s gear-rotate linear infinite;\n}\n\n.gear-rotate-left[_ngcontent-%COMP%] {\n  margin-top: -2.2em;\n  top: 50%;\n  width: 2em;\n  height: 2em;\n  background: #009de1;\n  position: absolute;\n  border-radius: 1em;\n  animation: 1s gear-rotate-left linear infinite;\n}\n\n.gear-rotate[_ngcontent-%COMP%]::before, .gear-rotate-left[_ngcontent-%COMP%]::before {\n  width: 2.8em;\n  height: 2.8em;\n  background: linear-gradient(0deg, transparent 39%, #009de1 39%, #009de1 61%, transparent 61%), linear-gradient(60deg, transparent 42%, #009de1 42%, #009de1 58%, transparent 58%), linear-gradient(120deg, transparent 42%, #009de1 42%, #009de1 58%, transparent 58%);\n  position: absolute;\n  content: \"\";\n  top: -0.4em;\n  left: -0.4em;\n  border-radius: 1.4em;\n}\n\n.gear-rotate[_ngcontent-%COMP%]::after, .gear-rotate-left[_ngcontent-%COMP%]::after {\n  width: 1em;\n  height: 1em;\n  background: #ffffff;\n  position: absolute;\n  content: \"\";\n  top: 0.5em;\n  left: 0.5em;\n  border-radius: 0.5em;\n}\n\n\n\n@keyframes gear-rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(-180deg);\n  }\n}\n\n@keyframes gear-rotate-left {\n  0% {\n    -webkit-transform: rotate(30deg);\n  }\n  100% {\n    -webkit-transform: rotate(210deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsdXNoLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBOzs7O0VBSUUsb0NBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQSxpQkFBQTs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUFGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQTtzQkFBQTtFQUVBLG9DQUFBO0VBQ0Esc0JBQUE7RUFDQSx3Q0FBQTtBQURGOztBQUlBO0VBQ0Usc0JBQUE7RUFDQSxzQ0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UseUJBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHdDQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtBQURGOztBQUlBO0VBQ0U7SUFDRSx1QkFBQTtFQURGO0VBSUE7SUFFRSx5QkFBQTtFQUhGO0VBTUE7SUFDRSx5QkFBQTtFQUpGO0VBT0E7SUFDRSx5QkFBQTtFQUxGO0FBQ0Y7O0FBUUE7RUFFRTtJQUVFLGlCQUFBO0lBQ0EsNENBQUE7RUFSRjtFQVdBO0lBQ0Usa0JBQUE7SUFDQSw0REFBQTtFQVRGO0VBWUE7SUFDRSxrQkFBQTtJQUNBLDhEQUFBO0VBVkY7RUFhQTtJQUNFLGlCQUFBO0lBQ0EsdURBQUE7SUFDQSxVQUFBO0VBWEY7RUFjQTtJQUVFLFVBQUE7RUFiRjtFQWdCQTtJQUNFLGtCQUFBO0lBQ0EsNENBQUE7SUFDQSxVQUFBO0VBZEY7RUFpQkE7SUFDRSxrQkFBQTtJQUNBLDRDQUFBO0VBZkY7QUFDRjs7QUFrQkEsZ0JBQUE7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBaEJGOztBQW1CQTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7QUFoQkY7O0FBa0JFO0VBRUUsZ0NBQUE7QUFoQko7O0FBbUJFO0VBQ0UsdUJBQUE7RUFFQSwrQ0FBQTtBQWpCSjs7QUFvQkU7RUFDRSx1QkFBQTtFQUVBLHFEQUFBO0FBbEJKOztBQXNCQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQW5CRjs7QUFxQkU7RUFDRSxjQUFBO0FBbkJKOztBQXNCRTtFQUNFLGNBQUE7QUFwQko7O0FBa0NBO0VBQ0U7SUFDRSx1QkFBQTtFQXZCRjtFQTBCQTtJQUNFLG9CQUFBO0VBeEJGO0FBQ0Y7O0FBcUNBO0VBQ0U7SUFDRSx1QkFBQTtFQTNCRjtFQThCQTtJQUNFLHNCQUFBO0VBNUJGO0FBQ0Y7O0FBaUNBO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUEvQkY7O0FBa0NBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQS9CRjs7QUFrQ0E7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUdBLHlDQUFBO0FBL0JGOztBQWtDQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBR0EsOENBQUE7QUEvQkY7O0FBa0NBOztFQUVFLFlBQUE7RUFDQSxhQUFBO0VBY0Esc1FBQ0U7RUFHRixrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBM0NGOztBQThDQTs7RUFFRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQTNDRjs7QUE4Q0E7O01BQUE7O0FBd0JBO0VBQ0U7SUFDRSx1QkFBQTtFQWhERjtFQW1EQTtJQUNFLDBCQUFBO0VBakRGO0FBQ0Y7O0FBd0VBO0VBQ0U7SUFDRSxnQ0FBQTtFQXRERjtFQXlEQTtJQUNFLGlDQUFBO0VBdkRGO0FBQ0YiLCJmaWxlIjoiZmx1c2gtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTMwcHg7XHJcbn1cclxuXHJcbi5pbmZvLWxheW91dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4uYWxpZ24tZW5kIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA0JTtcclxuICByaWdodDogMzklO1xyXG59XHJcblxyXG4uaGVhZGVyLWJnIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG59XHJcblxyXG4ubWF0LWNhcmQge1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLnAtMTAge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5hbGlnbi1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxNXB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBmb250LXNpemU6IDRyZW07XHJcbiAgd2lkdGg6IDVyZW07XHJcbiAgaGVpZ2h0OiA1cmVtO1xyXG59XHJcblxyXG4uYmctc3VjY2VzcyB7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGRiZDE2ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5iZy1mYWlsZWQge1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhMmQzZiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG5hLmJnLXN1Y2Nlc3M6Zm9jdXMsXHJcbmEuYmctc3VjY2Vzczpob3ZlcixcclxuYnV0dG9uLmJnLXN1Y2Nlc3M6Zm9jdXMsXHJcbmJ1dHRvbi5iZy1zdWNjZXNzOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGRiZDE2ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tZXNzYWdlIHtcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uY2xvc2UtaWNvbiB7XHJcbiAgd2lkdGg6IDJyZW07XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5pY29uLWNsYXNzIHtcclxuICB3aWR0aDogNXJlbTtcclxuICBoZWlnaHQ6IDVyZW07XHJcbn1cclxuXHJcbi8qIGhvdXJzIGxvYWRlciAqL1xyXG5cclxuLmxvYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTByZW07XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbn1cclxuXHJcbi5jbG9jayB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAvKlxyXG4gICAgICAgIG1hcmdpbjogYXV0bzsqL1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIC4yNXJlbSAjYWFhO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYW5pbWF0aW9uOiBjbG9jayA1cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5cclxuLmN1cCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZjtcclxuICBib3gtc2hhZG93OiAwIDAgMXZtaW4gMXZtaW4gI2JjZCBpbnNldDtcclxuICBoZWlnaHQ6IDMwJTtcclxuICB3aWR0aDogMzAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgMCAwLyAxMDAlIDEwMCUgMCAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi50b3Age1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuXHJcbi5zYW5kIHtcclxuICBiYWNrZ3JvdW5kOiAjMkI2NUVDO1xyXG4gIGhlaWdodDogMTUwJTtcclxuICB3aWR0aDogMTUwJTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcclxuICBhbmltYXRpb246IHNhbmQgNXMgbGluZWFyIGluZmluaXRlIC0yLjVzO1xyXG59XHJcblxyXG4uZGVsYXllZCB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBjbG9jayB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZylcclxuICB9XHJcblxyXG4gIDI1JSxcclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKVxyXG4gIH1cclxuXHJcbiAgNzUlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNhbmQge1xyXG5cclxuICAwJSxcclxuICAxMDAlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzUlLCAyMCUpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgfVxyXG5cclxuICAxNSUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDM1JSkgcm90YXRlKC02NWRlZykgc2NhbGUoMS41LCAxLjUpO1xyXG4gIH1cclxuXHJcbiAgMjUlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNSUsIDM1JSkgcm90YXRlKC05MGRlZykgc2NhbGUoMS4yLCAxLjIpO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKSByb3RhdGUoLTkwZGVnKSBzY2FsZSgxLCAxKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICA1MC4wMSUsXHJcbiAgNjQuOTklIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICA2NSUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzUlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjAlLCA1MCUpIHJvdGF0ZSgzMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgNzUlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDM1JSwgNDAlKSByb3RhdGUoNDVkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLyogZ3JlZW4gdGljayAgKi9cclxuLnN2Zy1ncmVlbiB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogNXB4IGF1dG8gMDtcclxufVxyXG5cclxuLnBhdGgge1xyXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDEwMDA7XHJcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcblxyXG4gICYuY2lyY2xlIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBkYXNoIC45cyBlYXNlLWluLW91dDtcclxuICAgIGFuaW1hdGlvbjogZGFzaCAuOXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAmLmxpbmUge1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDA7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZGFzaCAuOXMgLjM1cyBlYXNlLWluLW91dCBmb3J3YXJkcztcclxuICAgIGFuaW1hdGlvbjogZGFzaCAuOXMgLjM1cyBlYXNlLWluLW91dCBmb3J3YXJkcztcclxuICB9XHJcblxyXG4gICYuY2hlY2sge1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMDA7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZGFzaC1jaGVjayAuOXMgLjM1cyBlYXNlLWluLW91dCBmb3J3YXJkcztcclxuICAgIGFuaW1hdGlvbjogZGFzaC1jaGVjayAuOXMgLjM1cyBlYXNlLWluLW91dCBmb3J3YXJkcztcclxuICB9XHJcbn1cclxuXHJcbnAge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG5cclxuICAmLnN1Y2Nlc3Mge1xyXG4gICAgY29sb3I6ICM3M0FGNTU7XHJcbiAgfVxyXG5cclxuICAmLmVycm9yIHtcclxuICAgIGNvbG9yOiAjRDA2MDc5O1xyXG4gIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGRhc2gge1xyXG4gIDAlIHtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMDAwO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZGFzaCB7XHJcbiAgMCUge1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDA7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGRhc2gtY2hlY2sge1xyXG4gIDAlIHtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTAwO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogOTAwO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBkYXNoLWNoZWNrIHtcclxuICAwJSB7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTEwMDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDkwMDtcclxuICB9XHJcbn1cclxuXHJcbi8vIGdlYXIgbG9hZGVyXHJcblxyXG4uZ2VhcnMge1xyXG4gIHdpZHRoOiA0OCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG59XHJcblxyXG4uZ2VhcnMtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBwYWRkaW5nOiA5JTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAwcHggYXV0bztcclxufVxyXG5cclxuLmdlYXItcm90YXRlIHtcclxuICB3aWR0aDogMmVtO1xyXG4gIGhlaWdodDogMmVtO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tdG9wOiAtMWVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMWVtO1xyXG4gIGJhY2tncm91bmQ6ICMwMDlkZTE7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogMXMgZ2Vhci1yb3RhdGUgbGluZWFyIGluZmluaXRlO1xyXG4gIC1tb3otYW5pbWF0aW9uOiAxcyBnZWFyLXJvdGF0ZSBsaW5lYXIgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uOiAxcyBnZWFyLXJvdGF0ZSBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5nZWFyLXJvdGF0ZS1sZWZ0IHtcclxuICBtYXJnaW4tdG9wOiAtMi4yZW07XHJcbiAgdG9wOiA1MCU7XHJcbiAgd2lkdGg6IDJlbTtcclxuICBoZWlnaHQ6IDJlbTtcclxuICBiYWNrZ3JvdW5kOiAjMDA5ZGUxO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IDFzIGdlYXItcm90YXRlLWxlZnQgbGluZWFyIGluZmluaXRlO1xyXG4gIC1tb3otYW5pbWF0aW9uOiAxcyBnZWFyLXJvdGF0ZS1sZWZ0IGxpbmVhciBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IDFzIGdlYXItcm90YXRlLWxlZnQgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4uZ2Vhci1yb3RhdGU6OmJlZm9yZSxcclxuLmdlYXItcm90YXRlLWxlZnQ6OmJlZm9yZSB7XHJcbiAgd2lkdGg6IDIuOGVtO1xyXG4gIGhlaWdodDogMi44ZW07XHJcbiAgYmFja2dyb3VuZDpcclxuICAgIC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDBkZWcsIHRyYW5zcGFyZW50IDM5JSwgIzAwOWRlMSAzOSUsICMwMDlkZTEgNjElLCB0cmFuc3BhcmVudCA2MSUpLFxyXG4gICAgLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNjBkZWcsIHRyYW5zcGFyZW50IDQyJSwgIzAwOWRlMSA0MiUsICMwMDlkZTEgNTglLCB0cmFuc3BhcmVudCA1OCUpLFxyXG4gICAgLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTIwZGVnLCB0cmFuc3BhcmVudCA0MiUsICMwMDlkZTEgNDIlLCAjMDA5ZGUxIDU4JSwgdHJhbnNwYXJlbnQgNTglKTtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgLW1vei1saW5lYXItZ3JhZGllbnQoMGRlZywgdHJhbnNwYXJlbnQgMzklLCAjMDA5ZGUxIDM5JSwgIzQ3RUMxOSA2MSUsIHRyYW5zcGFyZW50IDYxJSksXHJcbiAgICAtbW96LWxpbmVhci1ncmFkaWVudCg2MGRlZywgdHJhbnNwYXJlbnQgNDIlLCAjMDA5ZGUxIDQyJSwgIzAwOWRlMSA1OCUsIHRyYW5zcGFyZW50IDU4JSksXHJcbiAgICAtbW96LWxpbmVhci1ncmFkaWVudCgxMjBkZWcsIHRyYW5zcGFyZW50IDQyJSwgIzAwOWRlMSA0MiUsICMwMDlkZTEgNTglLCB0cmFuc3BhcmVudCA1OCUpO1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICAtby1saW5lYXItZ3JhZGllbnQoMGRlZywgdHJhbnNwYXJlbnQgMzklLCAjMDA5ZGUxIDM5JSwgIzAwOWRlMSA2MSUsIHRyYW5zcGFyZW50IDYxJSksXHJcbiAgICAtby1saW5lYXItZ3JhZGllbnQoNjBkZWcsIHRyYW5zcGFyZW50IDQyJSwgIzAwOWRlMSA0MiUsICMwMDlkZTEgNTglLCB0cmFuc3BhcmVudCA1OCUpLFxyXG4gICAgLW8tbGluZWFyLWdyYWRpZW50KDEyMGRlZywgdHJhbnNwYXJlbnQgNDIlLCAjNDdFQzE5IDQyJSwgIzAwOWRlMSA1OCUsIHRyYW5zcGFyZW50IDU4JSk7XHJcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgwZGVnLCB0cmFuc3BhcmVudCAzOSUsICMwMDlkZTEgMzklLCAjMDA5ZGUxIDYxJSwgdHJhbnNwYXJlbnQgNjElKSwgLW1zLWxpbmVhci1ncmFkaWVudCg2MGRlZywgdHJhbnNwYXJlbnQgNDIlLCAjMDA5ZGUxIDQyJSwgIzAwOWRlMSA1OCUsIHRyYW5zcGFyZW50IDU4JSksIC1tcy1saW5lYXItZ3JhZGllbnQoMTIwZGVnLCB0cmFuc3BhcmVudCA0MiUsICMwMDlkZTEgNDIlLCAjMDA5ZGUxIDU4JSwgdHJhbnNwYXJlbnQgNTglKTtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgbGluZWFyLWdyYWRpZW50KDBkZWcsIHRyYW5zcGFyZW50IDM5JSwgIzAwOWRlMSAzOSUsICMwMDlkZTEgNjElLCB0cmFuc3BhcmVudCA2MSUpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KDYwZGVnLCB0cmFuc3BhcmVudCA0MiUsICMwMDlkZTEgNDIlLCAjMDA5ZGUxIDU4JSwgdHJhbnNwYXJlbnQgNTglKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCgxMjBkZWcsIHRyYW5zcGFyZW50IDQyJSwgIzAwOWRlMSA0MiUsICMwMDlkZTEgNTglLCB0cmFuc3BhcmVudCA1OCUpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHRvcDogLS40ZW07XHJcbiAgbGVmdDogLS40ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMS40ZW07XHJcbn1cclxuXHJcbi5nZWFyLXJvdGF0ZTo6YWZ0ZXIsXHJcbi5nZWFyLXJvdGF0ZS1sZWZ0OjphZnRlciB7XHJcbiAgd2lkdGg6IDFlbTtcclxuICBoZWlnaHQ6IDFlbTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHRvcDogLjVlbTtcclxuICBsZWZ0OiAuNWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IC41ZW07XHJcbn1cclxuXHJcbi8qXHJcbiAgICAgKiBLZXlmcmFtZSBBbmltYXRpb25zIFxyXG4gICAgICovXHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZ2Vhci1yb3RhdGUge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5ALW1vei1rZXlmcmFtZXMgZ2Vhci1yb3RhdGUge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZ2Vhci1yb3RhdGUge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBnZWFyLXJvdGF0ZS1sZWZ0IHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMTBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIGdlYXItcm90YXRlLWxlZnQge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGdlYXItcm90YXRlLWxlZnQge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7XHJcbiAgfVxyXG59Il19 */"]
});

/***/ }),

/***/ 9626:
/*!*******************************************************!*\
  !*** ./src/shared/component/guide/guide.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafeUrlPipe": () => (/* binding */ SafeUrlPipe),
/* harmony export */   "GuideComponent": () => (/* binding */ GuideComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var src_shared_model_api_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/shared/model/api.model */ 7860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var src_core_api_service_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/core/api-service/api.service */ 909);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ 9348);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 5788);












function GuideComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GuideComponent_ng_container_10_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const video_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.showVideo(video_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "movie");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const video_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", video_r4.name, "");
} }
function GuideComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GuideComponent_ng_container_13_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const pdf_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.showPdf(pdf_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "folder");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const pdf_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", pdf_r7.name, "");
} }
function GuideComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "video", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r2.video_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function GuideComponent_iframe_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "iframe", 19);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r3.pdf_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeResourceUrl"])("frameBorder", 0);
} }
class SafeUrlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafeUrlPipe.ɵfac = function SafeUrlPipe_Factory(t) { return new (t || SafeUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer, 16)); };
SafeUrlPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({ name: "safeUrl", type: SafeUrlPipe, pure: true });
class GuideComponent {
    constructor(dialogRef, dialogData, apiService, http, sanitizer) {
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
        this.apiService = apiService;
        this.http = http;
        this.sanitizer = sanitizer;
        this.video_url = '';
        this.pdf_url = '';
        this.video_list = [];
        this.pdf_list = [];
        this.media_type = "VIDEO";
    }
    ngOnInit() {
        this.apiService.httpGet(src_shared_model_api_model__WEBPACK_IMPORTED_MODULE_0__.APIS.GETGUIDE).subscribe((res) => {
            var _a;
            if (res) {
                this.video_list = res.Video;
                this.video_url = (_a = res.Video[0]) === null || _a === void 0 ? void 0 : _a.url;
                this.pdf_list = res.pdf;
                console.log("RES", res);
            }
        });
    }
    showVideo(video) {
        this.media_type = 'VIDEO';
        this.video_url = video.url;
    }
    showPdf(pdf) {
        this.media_type = 'PDF';
        this.pdf_url = this.sanitizer.bypassSecurityTrustResourceUrl(pdf.url + '#toolbar=0');
        console.log("URL", this.pdf_url);
    }
}
GuideComponent.ɵfac = function GuideComponent_Factory(t) { return new (t || GuideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_core_api_service_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer)); };
GuideComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GuideComponent, selectors: [["app-guide"]], decls: 17, vars: 4, consts: [[2, "transition", "all .2s ease-in-out !important"], [2, "overflow", "hidden"], [1, "header-bg"], ["src", "../../../assets/images/close.png", 1, "close-icon", 2, "height", "25px", "padding-right", "10px", 3, "click"], [2, "display", "flex", "justify-content", "space-between", "width", "100%", "padding", "5px", "column-gap", "5px", "height", "20rem"], [2, "width", "40%"], ["mat-stretch-tabs", "false", "mat-align-tabs", "start"], ["label", "Video"], [2, "display", "flex", "flex-direction", "column", "height", "73%", "overflow-y", "auto"], [4, "ngFor", "ngForOf"], ["label", "Pdf"], [2, "display", "flex", "flex-direction", "column", "height", "95%", "overflow-y", "auto"], [2, "width", "60%"], ["id", "media", 4, "ngIf"], ["style", "height: 100%;width: 100%;", 3, "src", "frameBorder", 4, "ngIf"], ["mat-raised-button", "", 2, "text-align", "left", "width", "98%", "background-color", "whitesmoke", "margin-top", "5px", 3, "click"], ["matSuffix", ""], ["id", "media"], ["controlsList", "nodownload", "disablePictureInPicture", "", "controls", "", "disableRemotePlayback", "", "disableFullScreen", "", "autoplay", "", 2, "width", "100%", "height", "19.999rem", 3, "src"], [2, "height", "100%", "width", "100%", 3, "src", "frameBorder"]], template: function GuideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GuideComponent_Template_img_click_4_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-tab-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-tab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, GuideComponent_ng_container_10_Template, 5, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-tab", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, GuideComponent_ng_container_13_Template, 5, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, GuideComponent_div_15_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, GuideComponent_iframe_16_Template, 1, 2, "iframe", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.video_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.pdf_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.media_type == "VIDEO");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.media_type == "PDF");
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTab, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix], styles: [".header-bg[_ngcontent-%COMP%] {\r\n    \r\n    display: flex;\r\n    justify-content: space-between\r\n}\r\n\r\n#media[_ngcontent-%COMP%] {\r\n    video::-webkit-media-controls-fullscreen-button {\r\n        display: none !important;\r\n    };\r\n\r\n    width: 100%;\r\n    height: 19.999rem;\r\n}\r\n\r\n.video_list[_ngcontent-%COMP%] {\r\n    background: whitesmoke;\r\n    height: 2rem;\r\n    padding: 4px;\r\n    font-weight: 500;\r\n    border: 1px solid;\r\n    border-radius: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1aWRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTttQ0FDK0I7SUFDL0IsYUFBYTtJQUNiO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHdCQUF3QjtJQUM1QixDQUFBOztJQUVBLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJndWlkZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1iZyB7XHJcbiAgICAvKiBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXHJcbn1cclxuXHJcbiNtZWRpYSB7XHJcbiAgICB2aWRlbzo6LXdlYmtpdC1tZWRpYS1jb250cm9scy1mdWxsc2NyZWVuLWJ1dHRvbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfTtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTkuOTk5cmVtO1xyXG59XHJcblxyXG4udmlkZW9fbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 4765:
/*!*********************************************************************!*\
  !*** ./src/shared/component/topup-dialog/topup-dialog.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopupDialogComponent": () => (/* binding */ TopupDialogComponent)
/* harmony export */ });
/* harmony import */ var D_Cropicco_cropicco_pi_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9369);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_shared_model_api_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/model/api.model */ 7860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 781);











function TopupDialogComponent_img_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TopupDialogComponent_img_5_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r9.dialogRef.close();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function TopupDialogComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Are you sure want to topup water from the tank!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TopupDialogComponent_div_6_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r11.topup_status = "WARNING";
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function TopupDialogComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "svg", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Make Sure The tube Is Inside The Container!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TopupDialogComponent_div_7_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r13.topupWaterFn("start");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Topup");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function TopupDialogComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Topuping...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TopupDialogComponent_div_8_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r15.topupWaterFn("stop");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Stop");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function TopupDialogComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "svg", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "circle", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "polyline", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Topup Success!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function TopupDialogComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Please try again after sometime ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function TopupDialogComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "svg", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Topup stopped !");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function TopupDialogComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Please check for any clog in the valve and try again ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function TopupDialogComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Are you sure want to Reset Error!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TopupDialogComponent_div_13_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r17.userError();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

class TopupDialogComponent {
  constructor(http, dialogData, dialogRef) {
    this.http = http;
    this.dialogData = dialogData;
    this.dialogRef = dialogRef;
    this.topup_status = 'INFO';
    this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api; // delay function

    this.delay = delay => new Promise((resolve, reject) => {
      setTimeout(() => resolve(true), delay);
    });
  }

  ngOnInit() {}

  topupWaterFn(status) {
    var _this = this;

    return (0,D_Cropicco_cropicco_pi_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this.httpPost(src_shared_model_api_model__WEBPACK_IMPORTED_MODULE_2__.APIS.TOPUP, {
        status
      });
      _this.topup_status = 'IN-PROGRESS';

      if (status == 'stop') {
        _this.topup_status = 'STOP';

        _this.stopInterval();

        yield _this.delay(1000 * 3);
        return;
      }

      _this.startInterval();
    })();
  }

  startInterval() {
    var _this2 = this;

    this.intervalId = setInterval( /*#__PURE__*/(0,D_Cropicco_cropicco_pi_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let res = yield _this2.httpGet(src_shared_model_api_model__WEBPACK_IMPORTED_MODULE_2__.APIS.TOPUP_RESULT);

      if ((res === null || res === void 0 ? void 0 : res.result) == true) {
        _this2.topup_status = 'DONE';

        _this2.stopInterval();

        yield _this2.delay(1000 * 3); // this.dialogRef.close();
      }

      if ((res === null || res === void 0 ? void 0 : res.result) == 'clog') {
        _this2.topup_status = 'CLOG';

        _this2.stopInterval();

        yield _this2.delay(1000 * 3);
      }

      if ((res === null || res === void 0 ? void 0 : res.result) == 'error') {
        _this2.topup_status = 'FAILED';

        _this2.stopInterval();

        yield _this2.delay(1000 * 3); // this.dialogRef.close();
      }
    }), 1000 * 5);
  } // Get Api Call


  httpGet(endPoint) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + "/" + endPoint).subscribe({
        next: data => {
          resolve(data);
        },
        error: error => {
          console.log(endPoint + " Api error");
          reject([]);
        }
      });
    });
  } // Post Api Call


  httpPost(method, body) {
    console.log("Http Post : ", method, body);
    return new Promise((resolve, reject) => {
      this.http.post(this.url + "/" + method, body).subscribe({
        next: data => {
          resolve(data);
        },
        error: error => {
          console.log(method + " Api error");
          reject([]);
        }
      });
    });
  }

  stopInterval() {
    clearInterval(this.intervalId);
  }

  userError() {
    var _this3 = this;

    return (0,D_Cropicco_cropicco_pi_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this3.httpPost(src_shared_model_api_model__WEBPACK_IMPORTED_MODULE_2__.APIS.USER_ERROR_RESET, {
        reset: true
      });

      _this3.dialogRef.close();
    })();
  }

}

TopupDialogComponent.ɵfac = function TopupDialogComponent_Factory(t) {
  return new (t || TopupDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef));
};

TopupDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: TopupDialogComponent,
  selectors: [["app-topup-dialog"]],
  decls: 14,
  vars: 10,
  consts: [[2, "transition", "all .2s ease-in-out !important"], [1, "p-10", "header-bg"], ["class", "close-icon", "src", "../../../assets/images/close.png", 3, "click", 4, "ngIf"], ["class", "p-10 t-a-c", 4, "ngIf"], ["style", "margin-top: 5px;position: relative;", "class", "loader", 4, "ngIf"], ["style", "margin-top: 15px;", 4, "ngIf"], ["style", "text-align: center;", 4, "ngIf"], ["src", "../../../assets/images/close.png", 1, "close-icon", 3, "click"], [1, "p-10", "t-a-c"], [1, "info-layout"], ["src", "../../../assets/images/info.png", 1, "icon-class"], [1, "m-t-10"], [1, "message", 2, "margin", "0"], ["mat-raised-button", "", 1, "bg-success", 3, "click"], [1, "pump-layout"], ["xmlns", "http://www.w3.org/2000/svg", "width", "31.5", "height", "29.25", "viewBox", "0 0 31.5 29.25", 1, "icon-class"], ["id", "Icon_ionic-md-warning", "data-name", "Icon ionic-md-warning", "d", "M2.25,32.625h31.5L18,3.375Zm17.438-4.5H16.313V24.75h3.375Zm0-5.625H16.313V15.75h3.375Z", "transform", "translate(-2.25 -3.375)", "fill", "#ffc400"], [1, "message"], [1, "loader", 2, "margin-top", "5px", "position", "relative"], [1, "clock", "m-t-20"], [1, "cup", "top"], [1, "sand"], [1, "cup"], [1, "sand", "delayed"], [1, "m-t-10", "message"], [2, "position", "absolute", "bottom", "12px", "right", "18px"], ["mat-raised-button", "", 1, "bg-failed", 2, "line-height", "25px", "margin-top", "0", 3, "click"], [2, "margin-top", "15px"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 130.2 130.2", 1, "svg-green"], ["fill", "none", "stroke", "#73AF55", "stroke-width", "6", "stroke-miterlimit", "10", "cx", "65.1", "cy", "65.1", "r", "62.1", 1, "path", "circle"], ["fill", "none", "stroke", "#73AF55", "stroke-width", "6", "stroke-linecap", "round", "stroke-miterlimit", "10", "points", "100.2,40.2 51.5,88.8 29.8,67.5 ", 1, "path", "check"], [1, "success"], [2, "text-align", "center"], [1, "pump-layout", "p-10"], ["src", "../../../assets/images/cross.png", 1, "icon-class"], [1, "m-t-10", 2, "text-align", "center"]],
  template: function TopupDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, TopupDialogComponent_img_5_Template, 1, 0, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, TopupDialogComponent_div_6_Template, 10, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, TopupDialogComponent_div_7_Template, 12, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, TopupDialogComponent_div_8_Template, 11, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, TopupDialogComponent_div_9_Template, 6, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, TopupDialogComponent_div_10_Template, 7, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, TopupDialogComponent_div_11_Template, 6, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, TopupDialogComponent_div_12_Template, 7, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, TopupDialogComponent_div_13_Template, 10, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.dialogData == null ? null : ctx.dialogData.title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.topup_status == "IN-PROGRESS"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.topup_status == "INFO" && ctx.dialogData.title != "user_error");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.topup_status == "WARNING");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.topup_status == "IN-PROGRESS");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.topup_status == "DONE");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.topup_status == "FAILED");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.topup_status == "STOP");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.topup_status == "CLOG");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.dialogData.title == "user_error");
    }
  },
  directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton],
  styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 130px;\n}\n\n.info-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  grid-gap: 10px;\n  gap: 10px;\n}\n\n.align-end[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 4%;\n  right: 39%;\n}\n\n.header-bg[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n  background-color: whitesmoke;\n  display: flex;\n  justify-content: space-between;\n  line-height: 32px;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.p-10[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.mat-card-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.align-row[_ngcontent-%COMP%] {\n  display: flex;\n  grid-gap: 15px;\n  gap: 15px;\n  justify-content: center;\n  margin-top: 25px;\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  width: 5rem;\n  height: 5rem;\n}\n\n.bg-success[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  font-size: 14px;\n  font-weight: 500;\n  background-color: #0dbd16 !important;\n  color: white;\n  margin-top: 15px;\n}\n\n.bg-failed[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  font-size: 14px;\n  font-weight: 500;\n  background-color: #ea2d3f !important;\n  color: white;\n  margin-top: 15px;\n}\n\na.bg-success[_ngcontent-%COMP%]:focus, a.bg-success[_ngcontent-%COMP%]:hover, button.bg-success[_ngcontent-%COMP%]:focus, button.bg-success[_ngcontent-%COMP%]:hover {\n  background-color: #0dbd16 !important;\n}\n\n.message[_ngcontent-%COMP%] {\n  font-size: larger;\n  font-weight: 500;\n  margin: 5px;\n}\n\n.close-icon[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  z-index: 2;\n  cursor: pointer;\n  opacity: 1;\n}\n\n.icon-class[_ngcontent-%COMP%] {\n  width: 5rem;\n  height: 5rem;\n}\n\n\n\n.loader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 10rem;\n  flex-direction: column;\n}\n\n.clock[_ngcontent-%COMP%] {\n  background: white;\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  \n  box-shadow: inset 0 0 0 0.25rem #aaa;\n  flex-direction: column;\n  animation: clock 5s ease-in-out infinite;\n}\n\n.cup[_ngcontent-%COMP%] {\n  background-color: #def;\n  box-shadow: 0 0 1vmin 1vmin #bcd inset;\n  height: 30%;\n  width: 30%;\n  border-radius: 50% 50% 0 0/100% 100% 0 0;\n  overflow: hidden;\n}\n\n.top[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.sand[_ngcontent-%COMP%] {\n  background: #2B65EC;\n  height: 150%;\n  width: 150%;\n  transform-origin: 0% 0%;\n  animation: sand 5s linear infinite -2.5s;\n}\n\n.delayed[_ngcontent-%COMP%] {\n  animation-delay: 0s;\n}\n\n@keyframes clock {\n  0% {\n    transform: rotate(0deg);\n  }\n  25%, 50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(360deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes sand {\n  0%, 100% {\n    border-radius: 5%;\n    transform: translate(35%, 20%) rotate(45deg);\n  }\n  15% {\n    border-radius: 40%;\n    transform: translate(0%, 35%) rotate(-65deg) scale(1.5, 1.5);\n  }\n  25% {\n    border-radius: 20%;\n    transform: translate(-15%, 35%) rotate(-90deg) scale(1.2, 1.2);\n  }\n  50% {\n    border-radius: 5%;\n    transform: translate(0%, 0%) rotate(-90deg) scale(1, 1);\n    opacity: 1;\n  }\n  50.01%, 64.99% {\n    opacity: 0;\n  }\n  65% {\n    border-radius: 35%;\n    transform: translate(20%, 50%) rotate(30deg);\n    opacity: 1;\n  }\n  75% {\n    border-radius: 10%;\n    transform: translate(35%, 40%) rotate(45deg);\n  }\n}\n\n\n\n.svg-green[_ngcontent-%COMP%] {\n  width: 100px;\n  display: block;\n  margin: 5px auto 0;\n}\n\n.path[_ngcontent-%COMP%] {\n  stroke-dasharray: 1000;\n  stroke-dashoffset: 0;\n}\n\n.path.circle[_ngcontent-%COMP%] {\n  animation: dash 0.9s ease-in-out;\n}\n\n.path.line[_ngcontent-%COMP%] {\n  stroke-dashoffset: 1000;\n  animation: dash 0.9s 0.35s ease-in-out forwards;\n}\n\n.path.check[_ngcontent-%COMP%] {\n  stroke-dashoffset: -100;\n  animation: dash-check 0.9s 0.35s ease-in-out forwards;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10px;\n  font-size: 1.25em;\n}\n\np.success[_ngcontent-%COMP%] {\n  color: #73AF55;\n}\n\np.error[_ngcontent-%COMP%] {\n  color: #D06079;\n}\n\n@keyframes dash {\n  0% {\n    stroke-dashoffset: 1000;\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n\n@keyframes dash-check {\n  0% {\n    stroke-dashoffset: -100;\n  }\n  100% {\n    stroke-dashoffset: 900;\n  }\n}\n\n.gears[_ngcontent-%COMP%] {\n  width: 48%;\n  display: inline-block;\n  margin-left: 2rem;\n}\n\n.gears-container[_ngcontent-%COMP%] {\n  height: 130px;\n  font-size: 24px;\n  padding: 9%;\n  position: relative;\n  margin: 0px auto;\n}\n\n.gear-rotate[_ngcontent-%COMP%] {\n  width: 2em;\n  height: 2em;\n  top: 50%;\n  left: 50%;\n  margin-top: -1em;\n  margin-left: -1em;\n  background: #009de1;\n  position: absolute;\n  border-radius: 1em;\n  animation: 1s gear-rotate linear infinite;\n}\n\n.gear-rotate-left[_ngcontent-%COMP%] {\n  margin-top: -2.2em;\n  top: 50%;\n  width: 2em;\n  height: 2em;\n  background: #009de1;\n  position: absolute;\n  border-radius: 1em;\n  animation: 1s gear-rotate-left linear infinite;\n}\n\n.gear-rotate[_ngcontent-%COMP%]::before, .gear-rotate-left[_ngcontent-%COMP%]::before {\n  width: 2.8em;\n  height: 2.8em;\n  background: linear-gradient(0deg, transparent 39%, #009de1 39%, #009de1 61%, transparent 61%), linear-gradient(60deg, transparent 42%, #009de1 42%, #009de1 58%, transparent 58%), linear-gradient(120deg, transparent 42%, #009de1 42%, #009de1 58%, transparent 58%);\n  position: absolute;\n  content: \"\";\n  top: -0.4em;\n  left: -0.4em;\n  border-radius: 1.4em;\n}\n\n.gear-rotate[_ngcontent-%COMP%]::after, .gear-rotate-left[_ngcontent-%COMP%]::after {\n  width: 1em;\n  height: 1em;\n  background: #ffffff;\n  position: absolute;\n  content: \"\";\n  top: 0.5em;\n  left: 0.5em;\n  border-radius: 0.5em;\n}\n\n\n\n@keyframes gear-rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(-180deg);\n  }\n}\n\n@keyframes gear-rotate-left {\n  0% {\n    -webkit-transform: rotate(30deg);\n  }\n  100% {\n    -webkit-transform: rotate(210deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcHVwLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVFO0VBQ0UsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVFOzs7O0VBSUUsb0NBQUE7QUFDSjs7QUFFRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRSxpQkFBQTs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUFKOztBQUlFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQTtzQkFBQTtFQUVBLG9DQUFBO0VBQ0Esc0JBQUE7RUFDQSx3Q0FBQTtBQURKOztBQUlFO0VBQ0Usc0JBQUE7RUFDQSxzQ0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlFO0VBQ0UseUJBQUE7QUFESjs7QUFJRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHdDQUFBO0FBREo7O0FBSUU7RUFDRSxtQkFBQTtBQURKOztBQUlFO0VBQ0U7SUFDRSx1QkFBQTtFQURKO0VBSUU7SUFFRSx5QkFBQTtFQUhKO0VBTUU7SUFDRSx5QkFBQTtFQUpKO0VBT0U7SUFDRSx5QkFBQTtFQUxKO0FBQ0Y7O0FBUUU7RUFFRTtJQUVFLGlCQUFBO0lBQ0EsNENBQUE7RUFSSjtFQVdFO0lBQ0Usa0JBQUE7SUFDQSw0REFBQTtFQVRKO0VBWUU7SUFDRSxrQkFBQTtJQUNBLDhEQUFBO0VBVko7RUFhRTtJQUNFLGlCQUFBO0lBQ0EsdURBQUE7SUFDQSxVQUFBO0VBWEo7RUFjRTtJQUVFLFVBQUE7RUFiSjtFQWdCRTtJQUNFLGtCQUFBO0lBQ0EsNENBQUE7SUFDQSxVQUFBO0VBZEo7RUFpQkU7SUFDRSxrQkFBQTtJQUNBLDRDQUFBO0VBZko7QUFDRjs7QUFrQkUsZ0JBQUE7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBaEJKOztBQW1CRTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7QUFoQko7O0FBa0JJO0VBRUUsZ0NBQUE7QUFoQk47O0FBbUJJO0VBQ0UsdUJBQUE7RUFFQSwrQ0FBQTtBQWpCTjs7QUFvQkk7RUFDRSx1QkFBQTtFQUVBLHFEQUFBO0FBbEJOOztBQXNCRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQW5CSjs7QUFxQkk7RUFDRSxjQUFBO0FBbkJOOztBQXNCSTtFQUNFLGNBQUE7QUFwQk47O0FBa0NFO0VBQ0U7SUFDRSx1QkFBQTtFQXZCSjtFQTBCRTtJQUNFLG9CQUFBO0VBeEJKO0FBQ0Y7O0FBcUNFO0VBQ0U7SUFDRSx1QkFBQTtFQTNCSjtFQThCRTtJQUNFLHNCQUFBO0VBNUJKO0FBQ0Y7O0FBaUNFO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUEvQko7O0FBa0NFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQS9CSjs7QUFrQ0U7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUdBLHlDQUFBO0FBL0JKOztBQWtDRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBR0EsOENBQUE7QUEvQko7O0FBa0NFOztFQUVFLFlBQUE7RUFDQSxhQUFBO0VBY0Esc1FBQ0U7RUFHRixrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBM0NKOztBQThDRTs7RUFFRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQTNDSjs7QUE4Q0U7O01BQUE7O0FBd0JBO0VBQ0U7SUFDRSx1QkFBQTtFQWhESjtFQW1ERTtJQUNFLDBCQUFBO0VBakRKO0FBQ0Y7O0FBd0VFO0VBQ0U7SUFDRSxnQ0FBQTtFQXRESjtFQXlERTtJQUNFLGlDQUFBO0VBdkRKO0FBQ0YiLCJmaWxlIjoidG9wdXAtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLmluZm8tbGF5b3V0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmFsaWduLWVuZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDQlO1xyXG4gICAgcmlnaHQ6IDM5JTtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlci1iZyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wLTEwIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBcclxuICAuYWxpZ24tcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDE1cHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgaGVpZ2h0OiA1cmVtO1xyXG4gIH1cclxuICBcclxuICAuYmctc3VjY2VzcyB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZGJkMTYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5iZy1mYWlsZWQge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWEyZDNmICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICBhLmJnLXN1Y2Nlc3M6Zm9jdXMsXHJcbiAgYS5iZy1zdWNjZXNzOmhvdmVyLFxyXG4gIGJ1dHRvbi5iZy1zdWNjZXNzOmZvY3VzLFxyXG4gIGJ1dHRvbi5iZy1zdWNjZXNzOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZGJkMTYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLm1lc3NhZ2Uge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jbG9zZS1pY29uIHtcclxuICAgIHdpZHRoOiAycmVtO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5pY29uLWNsYXNzIHtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgaGVpZ2h0OiA1cmVtO1xyXG4gIH1cclxuICBcclxuICAvKiBob3VycyBsb2FkZXIgKi9cclxuICBcclxuICAubG9hZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMHJlbTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5jbG9jayB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLypcclxuICAgICAgICAgIG1hcmdpbjogYXV0bzsqL1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgLjI1cmVtICNhYWE7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYW5pbWF0aW9uOiBjbG9jayA1cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmN1cCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVmO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDF2bWluIDF2bWluICNiY2QgaW5zZXQ7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDAgMC8gMTAwJSAxMDAlIDAgMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIC50b3Age1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICB9XHJcbiAgXHJcbiAgLnNhbmQge1xyXG4gICAgYmFja2dyb3VuZDogIzJCNjVFQztcclxuICAgIGhlaWdodDogMTUwJTtcclxuICAgIHdpZHRoOiAxNTAlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XHJcbiAgICBhbmltYXRpb246IHNhbmQgNXMgbGluZWFyIGluZmluaXRlIC0yLjVzO1xyXG4gIH1cclxuICBcclxuICAuZGVsYXllZCB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGNsb2NrIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZylcclxuICAgIH1cclxuICBcclxuICAgIDI1JSxcclxuICAgIDUwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZylcclxuICAgIH1cclxuICBcclxuICAgIDc1JSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBzYW5kIHtcclxuICBcclxuICAgIDAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzNSUsIDIwJSkgcm90YXRlKDQ1ZGVnKTtcclxuICAgIH1cclxuICBcclxuICAgIDE1JSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDQwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDM1JSkgcm90YXRlKC02NWRlZykgc2NhbGUoMS41LCAxLjUpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgMjUlIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUlLCAzNSUpIHJvdGF0ZSgtOTBkZWcpIHNjYWxlKDEuMiwgMS4yKTtcclxuICAgIH1cclxuICBcclxuICAgIDUwJSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpIHJvdGF0ZSgtOTBkZWcpIHNjYWxlKDEsIDEpO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgNTAuMDElLFxyXG4gICAgNjQuOTklIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICBcclxuICAgIDY1JSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDM1JTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjAlLCA1MCUpIHJvdGF0ZSgzMGRlZyk7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgXHJcbiAgICA3NSUge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDM1JSwgNDAlKSByb3RhdGUoNDVkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKiBncmVlbiB0aWNrICAqL1xyXG4gIC5zdmctZ3JlZW4ge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDVweCBhdXRvIDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYXRoIHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEwMDA7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcclxuICBcclxuICAgICYuY2lyY2xlIHtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IGRhc2ggLjlzIGVhc2UtaW4tb3V0O1xyXG4gICAgICBhbmltYXRpb246IGRhc2ggLjlzIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgJi5saW5lIHtcclxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDA7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBkYXNoIC45cyAuMzVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xyXG4gICAgICBhbmltYXRpb246IGRhc2ggLjlzIC4zNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmLmNoZWNrIHtcclxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMDA7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBkYXNoLWNoZWNrIC45cyAuMzVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xyXG4gICAgICBhbmltYXRpb246IGRhc2gtY2hlY2sgLjlzIC4zNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gIFxyXG4gICAgJi5zdWNjZXNzIHtcclxuICAgICAgY29sb3I6ICM3M0FGNTU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmLmVycm9yIHtcclxuICAgICAgY29sb3I6ICNEMDYwNzk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBkYXNoIHtcclxuICAgIDAlIHtcclxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAxMDAlIHtcclxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgZGFzaCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMDAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgZGFzaC1jaGVjayB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiA5MDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgZGFzaC1jaGVjayB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiA5MDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIGdlYXIgbG9hZGVyXHJcbiAgXHJcbiAgLmdlYXJzIHtcclxuICAgIHdpZHRoOiA0OCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmdlYXJzLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgcGFkZGluZzogOSU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuZ2Vhci1yb3RhdGUge1xyXG4gICAgd2lkdGg6IDJlbTtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMWVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA5ZGUxO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IDFzIGdlYXItcm90YXRlIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIC1tb3otYW5pbWF0aW9uOiAxcyBnZWFyLXJvdGF0ZSBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb246IDFzIGdlYXItcm90YXRlIGxpbmVhciBpbmZpbml0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmdlYXItcm90YXRlLWxlZnQge1xyXG4gICAgbWFyZ2luLXRvcDogLTIuMmVtO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB3aWR0aDogMmVtO1xyXG4gICAgaGVpZ2h0OiAyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA5ZGUxO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IDFzIGdlYXItcm90YXRlLWxlZnQgbGluZWFyIGluZmluaXRlO1xyXG4gICAgLW1vei1hbmltYXRpb246IDFzIGdlYXItcm90YXRlLWxlZnQgbGluZWFyIGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uOiAxcyBnZWFyLXJvdGF0ZS1sZWZ0IGxpbmVhciBpbmZpbml0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmdlYXItcm90YXRlOjpiZWZvcmUsXHJcbiAgLmdlYXItcm90YXRlLWxlZnQ6OmJlZm9yZSB7XHJcbiAgICB3aWR0aDogMi44ZW07XHJcbiAgICBoZWlnaHQ6IDIuOGVtO1xyXG4gICAgYmFja2dyb3VuZDpcclxuICAgICAgLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMGRlZywgdHJhbnNwYXJlbnQgMzklLCAjMDA5ZGUxIDM5JSwgIzAwOWRlMSA2MSUsIHRyYW5zcGFyZW50IDYxJSksXHJcbiAgICAgIC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDYwZGVnLCB0cmFuc3BhcmVudCA0MiUsICMwMDlkZTEgNDIlLCAjMDA5ZGUxIDU4JSwgdHJhbnNwYXJlbnQgNTglKSxcclxuICAgICAgLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTIwZGVnLCB0cmFuc3BhcmVudCA0MiUsICMwMDlkZTEgNDIlLCAjMDA5ZGUxIDU4JSwgdHJhbnNwYXJlbnQgNTglKTtcclxuICAgIGJhY2tncm91bmQ6XHJcbiAgICAgIC1tb3otbGluZWFyLWdyYWRpZW50KDBkZWcsIHRyYW5zcGFyZW50IDM5JSwgIzAwOWRlMSAzOSUsICM0N0VDMTkgNjElLCB0cmFuc3BhcmVudCA2MSUpLFxyXG4gICAgICAtbW96LWxpbmVhci1ncmFkaWVudCg2MGRlZywgdHJhbnNwYXJlbnQgNDIlLCAjMDA5ZGUxIDQyJSwgIzAwOWRlMSA1OCUsIHRyYW5zcGFyZW50IDU4JSksXHJcbiAgICAgIC1tb3otbGluZWFyLWdyYWRpZW50KDEyMGRlZywgdHJhbnNwYXJlbnQgNDIlLCAjMDA5ZGUxIDQyJSwgIzAwOWRlMSA1OCUsIHRyYW5zcGFyZW50IDU4JSk7XHJcbiAgICBiYWNrZ3JvdW5kOlxyXG4gICAgICAtby1saW5lYXItZ3JhZGllbnQoMGRlZywgdHJhbnNwYXJlbnQgMzklLCAjMDA5ZGUxIDM5JSwgIzAwOWRlMSA2MSUsIHRyYW5zcGFyZW50IDYxJSksXHJcbiAgICAgIC1vLWxpbmVhci1ncmFkaWVudCg2MGRlZywgdHJhbnNwYXJlbnQgNDIlLCAjMDA5ZGUxIDQyJSwgIzAwOWRlMSA1OCUsIHRyYW5zcGFyZW50IDU4JSksXHJcbiAgICAgIC1vLWxpbmVhci1ncmFkaWVudCgxMjBkZWcsIHRyYW5zcGFyZW50IDQyJSwgIzQ3RUMxOSA0MiUsICMwMDlkZTEgNTglLCB0cmFuc3BhcmVudCA1OCUpO1xyXG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgwZGVnLCB0cmFuc3BhcmVudCAzOSUsICMwMDlkZTEgMzklLCAjMDA5ZGUxIDYxJSwgdHJhbnNwYXJlbnQgNjElKSwgLW1zLWxpbmVhci1ncmFkaWVudCg2MGRlZywgdHJhbnNwYXJlbnQgNDIlLCAjMDA5ZGUxIDQyJSwgIzAwOWRlMSA1OCUsIHRyYW5zcGFyZW50IDU4JSksIC1tcy1saW5lYXItZ3JhZGllbnQoMTIwZGVnLCB0cmFuc3BhcmVudCA0MiUsICMwMDlkZTEgNDIlLCAjMDA5ZGUxIDU4JSwgdHJhbnNwYXJlbnQgNTglKTtcclxuICAgIGJhY2tncm91bmQ6XHJcbiAgICAgIGxpbmVhci1ncmFkaWVudCgwZGVnLCB0cmFuc3BhcmVudCAzOSUsICMwMDlkZTEgMzklLCAjMDA5ZGUxIDYxJSwgdHJhbnNwYXJlbnQgNjElKSxcclxuICAgICAgbGluZWFyLWdyYWRpZW50KDYwZGVnLCB0cmFuc3BhcmVudCA0MiUsICMwMDlkZTEgNDIlLCAjMDA5ZGUxIDU4JSwgdHJhbnNwYXJlbnQgNTglKSxcclxuICAgICAgbGluZWFyLWdyYWRpZW50KDEyMGRlZywgdHJhbnNwYXJlbnQgNDIlLCAjMDA5ZGUxIDQyJSwgIzAwOWRlMSA1OCUsIHRyYW5zcGFyZW50IDU4JSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgdG9wOiAtLjRlbTtcclxuICAgIGxlZnQ6IC0uNGVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMS40ZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5nZWFyLXJvdGF0ZTo6YWZ0ZXIsXHJcbiAgLmdlYXItcm90YXRlLWxlZnQ6OmFmdGVyIHtcclxuICAgIHdpZHRoOiAxZW07XHJcbiAgICBoZWlnaHQ6IDFlbTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgdG9wOiAuNWVtO1xyXG4gICAgbGVmdDogLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC41ZW07XHJcbiAgfVxyXG4gIFxyXG4gIC8qXHJcbiAgICAgICAqIEtleWZyYW1lIEFuaW1hdGlvbnMgXHJcbiAgICAgICAqL1xyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBnZWFyLXJvdGF0ZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAxMDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQC1tb3ota2V5ZnJhbWVzIGdlYXItcm90YXRlIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgZ2Vhci1yb3RhdGUge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICBcclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGdlYXItcm90YXRlLWxlZnQge1xyXG4gICAgMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcclxuICAgIH1cclxuICBcclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEAtbW96LWtleWZyYW1lcyBnZWFyLXJvdGF0ZS1sZWZ0IHtcclxuICAgIDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAxMDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMTBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGdlYXItcm90YXRlLWxlZnQge1xyXG4gICAgMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcclxuICAgIH1cclxuICBcclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"]
});

/***/ }),

/***/ 7619:
/*!************************************************************!*\
  !*** ./src/shared/directives/disable-one-sec.directive.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisableOneSecDirective": () => (/* binding */ DisableOneSecDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class DisableOneSecDirective {
    constructor(el) {
        this.el = el;
    }
    onClick(event) {
        const button = this.el.nativeElement;
        this.disableButton(button);
        // Perform API call after re-enabling the button
        setTimeout(() => {
            // Replace this with your API call code
            console.log('API call triggered');
        }, 1000); // Adjust the time to match the re-enable time
    }
    disableButton(button) {
        button.disabled = true;
        setTimeout(() => {
            button.disabled = false;
            console.log('Button re-enabled');
        }, 1000); // Re-enable the button after one second
    }
}
DisableOneSecDirective.ɵfac = function DisableOneSecDirective_Factory(t) { return new (t || DisableOneSecDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
DisableOneSecDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DisableOneSecDirective, selectors: [["", "disableOneSec", ""]], hostBindings: function DisableOneSecDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisableOneSecDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } } });


/***/ }),

/***/ 7860:
/*!***************************************!*\
  !*** ./src/shared/model/api.model.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APIS": () => (/* binding */ APIS)
/* harmony export */ });
var APIS;
(function (APIS) {
    APIS["SETTING_9"] = "settings/calibration";
    APIS["GET_CALIB_DATA"] = "settings/9/getsensorcalibration/";
    APIS["SEND_COUNT"] = "settings/9/putnumberofsolutionsdone";
    APIS["GET_RESULT"] = "settings/9/getcalibrationresult";
    APIS["START_PUMP"] = "adhoc/start";
    APIS["UPDATE"] = "settings/9/update";
    APIS["RESET_ALARM"] = "system/reseterror";
    APIS["FLUSH"] = "system/flush";
    APIS["FLUSH_RESULT"] = "system/flush/getflushresult";
    APIS["TOPUP"] = "system/topup";
    APIS["TOPUP_RESULT"] = "system/topup/gettopupresult";
    APIS["USER_ERROR_RESET"] = "system/useracknowledgement";
    APIS["SYSTEM_TYPE"] = "settings/systemsetting";
    APIS["GET_GRAPH_DATA"] = "historicalData";
    APIS["GETGUIDE"] = "getGuideMediaList";
    APIS["SCREEN_SAVER"] = "screensaverdata";
})(APIS || (APIS = {}));


/***/ }),

/***/ 8395:
/*!*************************************!*\
  !*** ./src/shared/shared.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _component_calibration_dialog_calibration_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/calibration-dialog/calibration-dialog.component */ 2767);
/* harmony import */ var _component_auth_auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/auth/auth.component */ 4278);
/* harmony import */ var src_assets_material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/material/material.module */ 1981);
/* harmony import */ var angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-onscreen-material-keyboard */ 4909);
/* harmony import */ var _component_flush_dialog_flush_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/flush-dialog/flush-dialog.component */ 7519);
/* harmony import */ var _component_charts_charts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/charts/charts.component */ 3725);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-apexcharts */ 4664);
/* harmony import */ var _component_guide_guide_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/guide/guide.component */ 9626);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-pdf-viewer */ 9035);
/* harmony import */ var _component_topup_dialog_topup_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/topup-dialog/topup-dialog.component */ 4765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);












class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            src_assets_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
            angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_9__.MatKeyboardModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__.NgApexchartsModule,
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_11__.PdfViewerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_component_calibration_dialog_calibration_dialog_component__WEBPACK_IMPORTED_MODULE_0__.CalibrationDialogComponent,
        _component_auth_auth_component__WEBPACK_IMPORTED_MODULE_1__.AuthComponent,
        _component_flush_dialog_flush_dialog_component__WEBPACK_IMPORTED_MODULE_3__.FlushDialogComponent,
        _component_charts_charts_component__WEBPACK_IMPORTED_MODULE_4__.ChartsComponent,
        _component_guide_guide_component__WEBPACK_IMPORTED_MODULE_5__.GuideComponent,
        _component_topup_dialog_topup_dialog_component__WEBPACK_IMPORTED_MODULE_6__.TopupDialogComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        src_assets_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
        angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_9__.MatKeyboardModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__.NgApexchartsModule,
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_11__.PdfViewerModule] }); })();


/***/ }),

/***/ 2069:
/*!************************!*\
  !*** canvas (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 6599:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 5358:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 1822:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 1127:
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 3074:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map