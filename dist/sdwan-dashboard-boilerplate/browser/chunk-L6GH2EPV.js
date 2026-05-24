import {
  SiteService
} from "./chunk-FBJ6AQ6P.js";
import "./chunk-MBURBPDE.js";
import {
  ActivatedRoute,
  AsyncPipe,
  CommonModule,
  NgClass,
  RouterLink,
  catchError,
  combineLatest,
  inject,
  map,
  of,
  startWith,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RMTPF5DE.js";
import "./chunk-4WXVOEFY.js";

// src/app/pages/edge-devices/edge-device-list/edge-device-list.component.ts
var _forTrack0 = ($index, $item) => $item.name;
var _c0 = (a0) => ["/edge-devices", a0];
function EdgeDeviceListComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 5);
    \u0275\u0275element(10, "span", 6);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const device_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, device_r1.name));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", device_r1.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(device_r1.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(device_r1.uptime);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "badge--" + device_r1.status.toLowerCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", device_r1.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(device_r1.systemIp);
  }
}
var EdgeDeviceListComponent = class _EdgeDeviceListComponent {
  constructor() {
    this.devices = [];
  }
  static {
    this.\u0275fac = function EdgeDeviceListComponent_Factory(t) {
      return new (t || _EdgeDeviceListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EdgeDeviceListComponent, selectors: [["app-edge-device-list"]], inputs: { devices: "devices" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 0, consts: [[1, "table-card"], [1, "table-card__header"], [1, "table-card__title"], [1, "data-table"], [1, "device-link", 3, "routerLink"], [1, "badge", 3, "ngClass"], [1, "badge__dot"]], template: function EdgeDeviceListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
        \u0275\u0275text(3, "Edge Devices");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "table", 3)(5, "thead")(6, "tr")(7, "th");
        \u0275\u0275text(8, "Device Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "th");
        \u0275\u0275text(10, "Role");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "th");
        \u0275\u0275text(12, "Uptime");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "th");
        \u0275\u0275text(14, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "th");
        \u0275\u0275text(16, "System IP");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "tbody");
        \u0275\u0275repeaterCreate(18, EdgeDeviceListComponent_For_19_Template, 14, 9, "tr", null, _forTrack0);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(18);
        \u0275\u0275repeater(ctx.devices);
      }
    }, dependencies: [CommonModule, NgClass, RouterLink], styles: ["\n\n.table-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.table-card__header[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.table-card__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a2035;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  color: #374151;\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.device-link[_ngcontent-%COMP%] {\n  color: #2563eb;\n  text-decoration: none;\n  font-weight: 500;\n}\n.device-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 3px 10px;\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n}\n.badge__dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n}\n.badge--online[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge--online[_ngcontent-%COMP%]   .badge__dot[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.badge--offline[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.badge--offline[_ngcontent-%COMP%]   .badge__dot[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n/*# sourceMappingURL=edge-device-list.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EdgeDeviceListComponent, { className: "EdgeDeviceListComponent" });
})();

// src/app/pages/sites/site-detail/site-detail.component.ts
var _c02 = (a0) => ["/organization", a0];
function SiteDetailComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1, "Loading site details\u2026");
    \u0275\u0275elementEnd();
  }
}
function SiteDetailComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(vm_r1.error);
  }
}
function SiteDetailComponent_Conditional_0_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 18);
    \u0275\u0275text(1, "Organizations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 4);
    \u0275\u0275text(3, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c02, vm_r1.orgId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(vm_r1.orgName);
  }
}
function SiteDetailComponent_Conditional_0_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 20);
    \u0275\u0275text(1, "Sites");
    \u0275\u0275elementEnd();
  }
}
function SiteDetailComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "nav", 3);
    \u0275\u0275template(2, SiteDetailComponent_Conditional_0_Conditional_2_Conditional_2_Template, 6, 4)(3, SiteDetailComponent_Conditional_0_Conditional_2_Conditional_3_Template, 2, 0);
    \u0275\u0275elementStart(4, "span", 4);
    \u0275\u0275text(5, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 6)(9, "h1", 7);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 8);
    \u0275\u0275element(12, "span", 9);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "p", 10);
    \u0275\u0275text(15, "Edge-device inventory and current availability for this site.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 11)(17, "div", 12)(18, "span", 13);
    \u0275\u0275text(19, "Total Edge Devices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 14);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 12)(23, "span", 13);
    \u0275\u0275text(24, "Online");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 15);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 12)(28, "span", 13);
    \u0275\u0275text(29, "Offline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 16);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(32, "app-edge-device-list", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, vm_r1.orgId ? 2 : 3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(vm_r1.data.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(vm_r1.data.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "badge--" + vm_r1.data.status.toLowerCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", vm_r1.data.status, " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(vm_r1.data.totalEdgeDevices);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(vm_r1.data.online);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(vm_r1.data.offline);
    \u0275\u0275advance();
    \u0275\u0275property("devices", vm_r1.data.edgeDevices);
  }
}
function SiteDetailComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SiteDetailComponent_Conditional_0_Conditional_0_Template, 2, 0, "div", 0)(1, SiteDetailComponent_Conditional_0_Conditional_1_Template, 2, 1)(2, SiteDetailComponent_Conditional_0_Conditional_2_Template, 33, 9);
  }
  if (rf & 2) {
    const vm_r1 = ctx;
    \u0275\u0275conditional(0, vm_r1.loading ? 0 : vm_r1.error ? 1 : vm_r1.data ? 2 : -1);
  }
}
var SiteDetailComponent = class _SiteDetailComponent {
  constructor() {
    this.api = inject(SiteService);
    this.route = inject(ActivatedRoute);
    this.vm$ = combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).pipe(switchMap(([params, queryParams]) => {
      const siteId = params.get("siteId") ?? "";
      const orgId = queryParams.get("orgId");
      const orgName = queryParams.get("orgName");
      return this.api.getSiteDetail(siteId).pipe(map((data) => ({ loading: false, error: null, data, orgId, orgName })), startWith({ loading: true, error: null, data: null, orgId, orgName }), catchError(() => of({ loading: false, error: "Failed to load site details. Ensure the backend is running on port 8080.", data: null, orgId, orgName })));
    }));
  }
  static {
    this.\u0275fac = function SiteDetailComponent_Factory(t) {
      return new (t || _SiteDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SiteDetailComponent, selectors: [["app-site-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 3, consts: [[1, "state-box", "state-box--loading"], [1, "state-box", "state-box--error"], [1, "page"], [1, "breadcrumb"], [1, "breadcrumb__sep"], [1, "breadcrumb__current"], [1, "page-header"], [1, "page-title"], [1, "badge", 3, "ngClass"], [1, "badge__dot"], [1, "page-subtitle"], [1, "summary-cards"], [1, "card"], [1, "card__label"], [1, "card__value"], [1, "card__value", "card__value--online"], [1, "card__value", "card__value--offline"], [3, "devices"], ["routerLink", "/organization", 1, "breadcrumb__link"], [1, "breadcrumb__link", 3, "routerLink"], ["routerLink", "/sites", 1, "breadcrumb__link"]], template: function SiteDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SiteDetailComponent_Conditional_0_Template, 3, 1);
        \u0275\u0275pipe(1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional(0, (tmp_0_0 = \u0275\u0275pipeBind1(1, 1, ctx.vm$)) ? 0 : -1, tmp_0_0);
      }
    }, dependencies: [CommonModule, NgClass, AsyncPipe, RouterLink, EdgeDeviceListComponent], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 900px;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  margin-bottom: 10px;\n}\n.breadcrumb__link[_ngcontent-%COMP%] {\n  color: #2563eb;\n  text-decoration: none;\n}\n.breadcrumb__link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.breadcrumb__sep[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.breadcrumb__current[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 4px;\n}\n.page-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a2035;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin: 4px 0 20px;\n  font-size: 13px;\n  color: #64748b;\n}\n.summary-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 220px));\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 16px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.card__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #64748b;\n  font-weight: 500;\n}\n.card__value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1a2035;\n  line-height: 1;\n}\n.card__value--online[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.card__value--offline[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n}\n.badge__dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n}\n.badge--healthy[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge--healthy[_ngcontent-%COMP%]   .badge__dot[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.badge--degraded[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.badge--degraded[_ngcontent-%COMP%]   .badge__dot[_ngcontent-%COMP%] {\n  background: #d97706;\n}\n.badge--down[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.badge--down[_ngcontent-%COMP%]   .badge__dot[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.state-box[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 10px;\n  font-size: 14px;\n}\n.state-box--loading[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n}\n.state-box--error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fecaca;\n}\n/*# sourceMappingURL=site-detail.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SiteDetailComponent, { className: "SiteDetailComponent" });
})();
export {
  SiteDetailComponent
};
//# sourceMappingURL=chunk-L6GH2EPV.js.map
