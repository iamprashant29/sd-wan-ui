import {
  SiteService
} from "./chunk-FBJ6AQ6P.js";
import {
  API_ENDPOINTS,
  BaseService,
  siteStatus
} from "./chunk-MBURBPDE.js";
import {
  AsyncPipe,
  CommonModule,
  NgClass,
  RouterLink,
  catchError,
  inject,
  map,
  of,
  startWith,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-RMTPF5DE.js";
import "./chunk-4WXVOEFY.js";

// src/app/pages/dashboard/dashboard.service.ts
var DashboardService = class _DashboardService extends BaseService {
  getHealth() {
    return this.get(API_ENDPOINTS.HEALTH);
  }
  getOverview() {
    return this.get(API_ENDPOINTS.DASHBOARD).pipe(map((d) => {
      const snapshot = d.siteHealthSnapshot ?? [];
      return {
        totalSites: d.totalSites,
        totalEdgeDevices: d.totalEdgeDevices,
        healthySites: d.healthySites,
        degradedSites: d.degradedSites,
        downSites: d.downSites,
        onlineDevices: snapshot.reduce((sum, s) => sum + s.onlineDevicesCount, 0),
        offlineDevices: snapshot.reduce((sum, s) => sum + s.offlineDevicesCount, 0),
        sites: snapshot.map((s) => ({
          id: s.siteName,
          name: s.siteName,
          status: siteStatus(s.onlineDevicesCount, s.offlineDevicesCount),
          totalDevices: s.totalDevices,
          online: s.onlineDevicesCount,
          offline: s.offlineDevicesCount
        })),
        lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
      };
    }));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275DashboardService_BaseFactory;
      return function DashboardService_Factory(t) {
        return (\u0275DashboardService_BaseFactory || (\u0275DashboardService_BaseFactory = \u0275\u0275getInheritedFactory(_DashboardService)))(t || _DashboardService);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DashboardService, factory: _DashboardService.\u0275fac, providedIn: "root" });
  }
};

// src/app/pages/sites/site-list/site-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/sites", a0];
function SiteListComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, "Loading sites\u2026");
    \u0275\u0275elementEnd();
  }
}
function SiteListComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(vm_r1.error);
  }
}
function SiteListComponent_Conditional_0_Conditional_8_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 8);
    \u0275\u0275element(6, "span", 9);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const site_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, site_r2.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(site_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "badge--" + site_r2.status.toLowerCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", site_r2.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(site_r2.totalDevices);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(site_r2.online);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(site_r2.offline);
  }
}
function SiteListComponent_Conditional_0_Conditional_8_ForEmpty_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 10);
    \u0275\u0275text(2, "No sites found.");
    \u0275\u0275elementEnd()();
  }
}
function SiteListComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 6)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Site Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Total Devices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Online");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Offline");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, SiteListComponent_Conditional_0_Conditional_8_For_15_Template, 14, 9, "tr", null, _forTrack0, false, SiteListComponent_Conditional_0_Conditional_8_ForEmpty_16_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const vm_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275repeater(vm_r1.sites);
  }
}
function SiteListComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
    \u0275\u0275text(3, "Site Health Snapshot");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 3);
    \u0275\u0275text(5, "Open organization view");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, SiteListComponent_Conditional_0_Conditional_6_Template, 2, 0, "div", 4)(7, SiteListComponent_Conditional_0_Conditional_7_Template, 2, 1)(8, SiteListComponent_Conditional_0_Conditional_8_Template, 17, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r1 = ctx;
    \u0275\u0275advance(6);
    \u0275\u0275conditional(6, vm_r1.loading ? 6 : vm_r1.error ? 7 : 8);
  }
}
var SiteListComponent = class _SiteListComponent {
  constructor() {
    this.api = inject(SiteService);
    this.vm$ = this.api.getSites().pipe(map((sites) => ({ loading: false, error: null, sites })), startWith({ loading: true, error: null, sites: [] }), catchError(() => of({ loading: false, error: "Failed to load sites.", sites: [] })));
  }
  static {
    this.\u0275fac = function SiteListComponent_Factory(t) {
      return new (t || _SiteListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SiteListComponent, selectors: [["app-site-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 3, consts: [[1, "table-card"], [1, "table-card__header"], [1, "table-card__title"], ["routerLink", "/organization", 1, "link"], [1, "state-box", "state-box--loading"], [1, "state-box", "state-box--error"], [1, "data-table"], [1, "site-link", 3, "routerLink"], [1, "badge", 3, "ngClass"], [1, "badge__dot"], ["colspan", "5", 1, "empty-row"]], template: function SiteListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SiteListComponent_Conditional_0_Template, 9, 1, "div", 0);
        \u0275\u0275pipe(1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional(0, (tmp_0_0 = \u0275\u0275pipeBind1(1, 1, ctx.vm$)) ? 0 : -1, tmp_0_0);
      }
    }, dependencies: [CommonModule, NgClass, AsyncPipe, RouterLink], styles: ["\n\n.table-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.table-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.table-card__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a2035;\n}\n.link[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #2563eb;\n  text-decoration: none;\n  font-weight: 500;\n}\n.link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  color: #374151;\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.site-link[_ngcontent-%COMP%] {\n  color: #2563eb;\n  text-decoration: none;\n  font-weight: 500;\n}\n.site-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 3px 8px;\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n}\n.badge__dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n}\n.badge--healthy[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge--healthy[_ngcontent-%COMP%]   .badge__dot[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.badge--degraded[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.badge--degraded[_ngcontent-%COMP%]   .badge__dot[_ngcontent-%COMP%] {\n  background: #d97706;\n}\n.badge--down[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.badge--down[_ngcontent-%COMP%]   .badge__dot[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.empty-row[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  color: #94a3b8;\n  font-size: 13px;\n}\n.state-box[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  font-size: 13px;\n}\n.state-box--loading[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.state-box--error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n/*# sourceMappingURL=site-list.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SiteListComponent, { className: "SiteListComponent" });
})();

// src/app/pages/dashboard/dashboard.component.ts
function DashboardComponent_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, "Loading overview\u2026");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(vm_r1.error);
  }
}
function DashboardComponent_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "span", 8);
    \u0275\u0275text(3, "Total Sites");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 7)(7, "span", 8);
    \u0275\u0275text(8, "Total Edge Devices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 9);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 7)(12, "span", 8);
    \u0275\u0275text(13, "Healthy Sites");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 10);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 7)(17, "span", 8);
    \u0275\u0275text(18, "Degraded Sites");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 11);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 7)(22, "span", 8);
    \u0275\u0275text(23, "Down Sites");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 12);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 13)(27, "div", 14)(28, "h3", 15);
    \u0275\u0275text(29, "Sites by Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 16)(31, "div", 17)(32, "div", 18)(33, "div", 19)(34, "span", 20);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 21);
    \u0275\u0275text(37, "Total Sites");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 22)(39, "div", 23);
    \u0275\u0275element(40, "span", 24);
    \u0275\u0275elementStart(41, "span", 25);
    \u0275\u0275text(42, "Healthy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 26);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 23);
    \u0275\u0275element(46, "span", 27);
    \u0275\u0275elementStart(47, "span", 25);
    \u0275\u0275text(48, "Degraded");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 26);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 23);
    \u0275\u0275element(52, "span", 28);
    \u0275\u0275elementStart(53, "span", 25);
    \u0275\u0275text(54, "Down");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span", 26);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(57, "div", 14)(58, "h3", 15);
    \u0275\u0275text(59, "Edge Devices by Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 16)(61, "div", 17)(62, "div", 18)(63, "div", 19)(64, "span", 20);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "span", 21);
    \u0275\u0275text(67, "Total Devices");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(68, "div", 22)(69, "div", 23);
    \u0275\u0275element(70, "span", 24);
    \u0275\u0275elementStart(71, "span", 25);
    \u0275\u0275text(72, "Online");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "span", 26);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 23);
    \u0275\u0275element(76, "span", 28);
    \u0275\u0275elementStart(77, "span", 25);
    \u0275\u0275text(78, "Offline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "span", 26);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275element(81, "app-site-list");
  }
  if (rf & 2) {
    const vm_r1 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(vm_r1.data.totalSites);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(vm_r1.data.totalEdgeDevices);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(vm_r1.data.healthySites);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(vm_r1.data.degradedSites);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(vm_r1.data.downSites);
    \u0275\u0275advance(7);
    \u0275\u0275styleProp("background", ctx_r1.sitesGradient(vm_r1.data));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(vm_r1.data.totalSites);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate2("", vm_r1.data.healthySites, " (", ctx_r1.sitesPct(vm_r1.data).healthy, "%)");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", vm_r1.data.degradedSites, " (", ctx_r1.sitesPct(vm_r1.data).degraded, "%)");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", vm_r1.data.downSites, " (", ctx_r1.sitesPct(vm_r1.data).down, "%)");
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("background", ctx_r1.devicesGradient(vm_r1.data));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(vm_r1.data.totalEdgeDevices);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate2("", vm_r1.data.onlineDevices, " (", ctx_r1.devicesPct(vm_r1.data).online, "%)");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", vm_r1.data.offlineDevices, " (", ctx_r1.devicesPct(vm_r1.data).offline, "%)");
  }
}
function DashboardComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DashboardComponent_Conditional_7_Conditional_0_Template, 2, 0, "div", 4)(1, DashboardComponent_Conditional_7_Conditional_1_Template, 2, 1)(2, DashboardComponent_Conditional_7_Conditional_2_Template, 82, 21);
  }
  if (rf & 2) {
    const vm_r1 = ctx;
    \u0275\u0275conditional(0, vm_r1.loading ? 0 : vm_r1.error ? 1 : vm_r1.data ? 2 : -1);
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor() {
    this.api = inject(DashboardService);
    this.vm$ = this.api.getOverview().pipe(map((data) => ({ loading: false, error: null, data })), startWith({ loading: true, error: null, data: null }), catchError(() => of({ loading: false, error: "Failed to load overview. Ensure the backend is running on port 8080.", data: null })));
  }
  sitesGradient(data) {
    const total = data.totalSites || 1;
    const h = data.healthySites / total * 100;
    const d = data.degradedSites / total * 100;
    return `conic-gradient(#16a34a 0% ${h}%, #d97706 ${h}% ${h + d}%, #dc2626 ${h + d}% 100%)`;
  }
  devicesGradient(data) {
    const total = data.totalEdgeDevices || 1;
    const onlinePct = data.onlineDevices / total * 100;
    return `conic-gradient(#16a34a 0% ${onlinePct}%, #dc2626 ${onlinePct}% 100%)`;
  }
  sitesPct(data) {
    const t = data.totalSites || 1;
    return {
      healthy: Math.round(data.healthySites / t * 100),
      degraded: Math.round(data.degradedSites / t * 100),
      down: Math.round(data.downSites / t * 100)
    };
  }
  devicesPct(data) {
    const t = data.totalEdgeDevices || 1;
    return {
      online: Math.round(data.onlineDevices / t * 100),
      offline: Math.round(data.offlineDevices / t * 100)
    };
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(t) {
      return new (t || _DashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 3, consts: [[1, "page"], [1, "breadcrumb"], [1, "page-title"], [1, "page-subtitle"], [1, "state-box", "state-box--loading"], [1, "state-box", "state-box--error"], [1, "summary-cards"], [1, "card"], [1, "card__label"], [1, "card__value"], [1, "card__value", "card__value--healthy"], [1, "card__value", "card__value--degraded"], [1, "card__value", "card__value--down"], [1, "charts-row"], [1, "chart-card"], [1, "chart-card__title"], [1, "chart-card__body"], [1, "donut-wrap"], [1, "donut"], [1, "donut__hole"], [1, "donut__value"], [1, "donut__label"], [1, "legend"], [1, "legend__item"], [1, "legend__dot", "legend__dot--healthy"], [1, "legend__name"], [1, "legend__stat"], [1, "legend__dot", "legend__dot--degraded"], [1, "legend__dot", "legend__dot--down"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275text(2, "Overview");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "h1", 2);
        \u0275\u0275text(4, "SD-WAN Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "High-level health summary across the tenant, sites, and edge devices.");
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, DashboardComponent_Conditional_7_Template, 3, 1);
        \u0275\u0275pipe(8, "async");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(7);
        \u0275\u0275conditional(7, (tmp_0_0 = \u0275\u0275pipeBind1(8, 1, ctx.vm$)) ? 7 : -1, tmp_0_0);
      }
    }, dependencies: [CommonModule, AsyncPipe, SiteListComponent], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 960px;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  margin-bottom: 4px;\n}\n.page-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a2035;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin: 6px 0 20px;\n  font-size: 13px;\n  color: #64748b;\n}\n.summary-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.card__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #64748b;\n  font-weight: 500;\n}\n.card__value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1a2035;\n  line-height: 1;\n}\n.card__value--healthy[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.card__value--degraded[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.card__value--down[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.chart-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 20px;\n}\n.chart-card__title[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a2035;\n}\n.chart-card__body[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 28px;\n}\n.donut-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.donut[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.donut__hole[_ngcontent-%COMP%] {\n  width: 88px;\n  height: 88px;\n  border-radius: 50%;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n}\n.donut__value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a2035;\n  line-height: 1;\n}\n.donut__label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #64748b;\n  text-align: center;\n}\n.legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.legend__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n}\n.legend__dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.legend__dot--healthy[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.legend__dot--degraded[_ngcontent-%COMP%] {\n  background: #d97706;\n}\n.legend__dot--down[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.legend__name[_ngcontent-%COMP%] {\n  color: #374151;\n  min-width: 60px;\n}\n.legend__stat[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 12px;\n}\n.state-box[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 10px;\n  font-size: 14px;\n}\n.state-box--loading[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n}\n.state-box--error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fecaca;\n}\n/*# sourceMappingURL=dashboard.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent" });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-XRYEXJ72.js.map
