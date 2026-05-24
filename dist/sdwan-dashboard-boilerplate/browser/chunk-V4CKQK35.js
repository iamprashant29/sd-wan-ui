import {
  OrganizationService
} from "./chunk-PESH3LZN.js";
import "./chunk-MBURBPDE.js";
import {
  ActivatedRoute,
  AsyncPipe,
  CommonModule,
  NgClass,
  RouterLink,
  catchError,
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
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-RMTPF5DE.js";
import "./chunk-4WXVOEFY.js";

// src/app/pages/organization/organization-detail/organization-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/sites", a0];
var _c1 = (a0, a1) => ({ orgId: a0, orgName: a1 });
function OrganizationDetailComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1, "Loading organization details\u2026");
    \u0275\u0275elementEnd();
  }
}
function OrganizationDetailComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
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
function OrganizationDetailComponent_Conditional_0_Conditional_2_For_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 21);
    \u0275\u0275element(6, "span", 22);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 23);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 24);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const site_r2 = ctx.$implicit;
    const vm_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, site_r2.id))("queryParams", \u0275\u0275pureFunction2(10, _c1, vm_r1.data.orgId, vm_r1.data.orgName));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(site_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "badge--" + site_r2.status.toLowerCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", site_r2.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(site_r2.totalEdgeDevices);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(site_r2.healthy);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(site_r2.down);
  }
}
function OrganizationDetailComponent_Conditional_0_Conditional_2_ForEmpty_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 25);
    \u0275\u0275text(2, "No sites found for this organization.");
    \u0275\u0275elementEnd()();
  }
}
function OrganizationDetailComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "a", 4);
    \u0275\u0275text(3, "Organizations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 5);
    \u0275\u0275text(5, " / ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h1", 6);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 7);
    \u0275\u0275text(10, "Aggregated site health based on edge-device availability.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 8)(12, "div", 9)(13, "span", 10);
    \u0275\u0275text(14, "Total Sites");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 11);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 9)(18, "span", 10);
    \u0275\u0275text(19, "Healthy Sites");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 12);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 9)(23, "span", 10);
    \u0275\u0275text(24, "Degraded Sites");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 13);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 9)(28, "span", 10);
    \u0275\u0275text(29, "Down Sites");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 14);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 9)(33, "span", 10);
    \u0275\u0275text(34, "Total Edge Devices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 11);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 15)(38, "div", 16)(39, "h3", 17);
    \u0275\u0275text(40, "Sites");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 18);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "table", 19)(44, "thead")(45, "tr")(46, "th");
    \u0275\u0275text(47, "Site Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th");
    \u0275\u0275text(49, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "th");
    \u0275\u0275text(51, "Total Edge Devices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "th");
    \u0275\u0275text(53, "Online");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "th");
    \u0275\u0275text(55, "Offline");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "tbody");
    \u0275\u0275repeaterCreate(57, OrganizationDetailComponent_Conditional_0_Conditional_2_For_58_Template, 14, 13, "tr", null, _forTrack0, false, OrganizationDetailComponent_Conditional_0_Conditional_2_ForEmpty_59_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const vm_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", vm_r1.data.orgName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.data.orgName);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(vm_r1.data.sites.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(vm_r1.data.healthy);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(vm_r1.data.degraded);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(vm_r1.data.down);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(vm_r1.data.totalEdgeDevices);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", vm_r1.data.sites.length, " site", vm_r1.data.sites.length === 1 ? "" : "s", "");
    \u0275\u0275advance(15);
    \u0275\u0275repeater(vm_r1.data.sites);
  }
}
function OrganizationDetailComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, OrganizationDetailComponent_Conditional_0_Conditional_0_Template, 2, 0, "div", 0)(1, OrganizationDetailComponent_Conditional_0_Conditional_1_Template, 2, 1)(2, OrganizationDetailComponent_Conditional_0_Conditional_2_Template, 60, 10);
  }
  if (rf & 2) {
    const vm_r1 = ctx;
    \u0275\u0275conditional(0, vm_r1.loading ? 0 : vm_r1.error ? 1 : vm_r1.data ? 2 : -1);
  }
}
var OrganizationDetailComponent = class _OrganizationDetailComponent {
  constructor() {
    this.api = inject(OrganizationService);
    this.route = inject(ActivatedRoute);
    this.vm$ = this.route.paramMap.pipe(switchMap((params) => {
      const orgId = params.get("orgId") ?? "";
      return this.api.getOrganizationDetail(orgId).pipe(map((data) => ({ loading: false, error: null, data })), startWith({ loading: true, error: null, data: null }), catchError(() => of({ loading: false, error: "Failed to load organization details. Ensure the backend is running on port 8080.", data: null })));
    }));
  }
  static {
    this.\u0275fac = function OrganizationDetailComponent_Factory(t) {
      return new (t || _OrganizationDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrganizationDetailComponent, selectors: [["app-organization-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 3, consts: [[1, "state-box", "state-box--loading"], [1, "state-box", "state-box--error"], [1, "page"], [1, "breadcrumb"], ["routerLink", "/organization", 1, "breadcrumb__link"], [1, "breadcrumb__sep"], [1, "page-title"], [1, "page-subtitle"], [1, "summary-cards"], [1, "card"], [1, "card__label"], [1, "card__value"], [1, "card__value", "card__value--healthy"], [1, "card__value", "card__value--degraded"], [1, "card__value", "card__value--down"], [1, "table-card"], [1, "table-card__header"], [1, "table-card__title"], [1, "site-count"], [1, "data-table"], [1, "site-link", 3, "routerLink", "queryParams"], [1, "badge", 3, "ngClass"], [1, "badge__dot"], [1, "count--healthy"], [1, "count--down"], ["colspan", "5", 1, "empty-row"]], template: function OrganizationDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, OrganizationDetailComponent_Conditional_0_Template, 3, 1);
        \u0275\u0275pipe(1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional(0, (tmp_0_0 = \u0275\u0275pipeBind1(1, 1, ctx.vm$)) ? 0 : -1, tmp_0_0);
      }
    }, dependencies: [CommonModule, NgClass, AsyncPipe, RouterLink], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 960px;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  margin-bottom: 4px;\n}\n.breadcrumb__link[_ngcontent-%COMP%] {\n  color: #2563eb;\n  text-decoration: none;\n}\n.breadcrumb__link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.breadcrumb__sep[_ngcontent-%COMP%] {\n  margin: 0 4px;\n}\n.page-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a2035;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin: 6px 0 20px;\n  font-size: 13px;\n  color: #64748b;\n}\n.summary-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.card__label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #64748b;\n  font-weight: 500;\n}\n.card__value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1a2035;\n  line-height: 1;\n}\n.card__value--healthy[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.card__value--degraded[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.card__value--down[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.table-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.table-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.table-card__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a2035;\n}\n.site-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 13px 20px;\n  color: #374151;\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.site-link[_ngcontent-%COMP%] {\n  color: #2563eb;\n  text-decoration: none;\n  font-weight: 500;\n}\n.site-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.count--healthy[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-weight: 600;\n}\n.count--down[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-weight: 600;\n}\n.empty-row[_ngcontent-%COMP%] {\n  padding: 24px;\n  text-align: center;\n  color: #94a3b8;\n  font-size: 13px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 3px 10px;\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n}\n.badge__dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n}\n.badge--healthy[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge--healthy[_ngcontent-%COMP%]   .badge__dot[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.badge--degraded[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.badge--degraded[_ngcontent-%COMP%]   .badge__dot[_ngcontent-%COMP%] {\n  background: #d97706;\n}\n.badge--down[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.badge--down[_ngcontent-%COMP%]   .badge__dot[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.state-box[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 10px;\n  font-size: 14px;\n}\n.state-box--loading[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n}\n.state-box--error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fecaca;\n}\n/*# sourceMappingURL=organization-detail.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrganizationDetailComponent, { className: "OrganizationDetailComponent" });
})();
export {
  OrganizationDetailComponent
};
//# sourceMappingURL=chunk-V4CKQK35.js.map
