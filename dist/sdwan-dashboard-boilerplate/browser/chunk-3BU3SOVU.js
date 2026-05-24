import {
  OrganizationService
} from "./chunk-PESH3LZN.js";
import "./chunk-MBURBPDE.js";
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-RMTPF5DE.js";
import "./chunk-4WXVOEFY.js";

// src/app/pages/organization/organization.component.ts
var _forTrack0 = ($index, $item) => $item.orgId;
var _c0 = (a0) => ["/organization", a0];
function OrganizationComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1, "Loading organizations\u2026");
    \u0275\u0275elementEnd();
  }
}
function OrganizationComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
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
function OrganizationComponent_Conditional_0_Conditional_2_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 11)(1, "td")(2, "a", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 13);
    \u0275\u0275element(6, "span", 14);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 15);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 16);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 17);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const org_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, org_r2.orgId));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c0, org_r2.orgId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(org_r2.orgName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "badge--" + org_r2.status.toLowerCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", org_r2.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(org_r2.totalEdgeDevices);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(org_r2.healthy);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(org_r2.degraded);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(org_r2.down);
  }
}
function OrganizationComponent_Conditional_0_Conditional_2_ForEmpty_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 18);
    \u0275\u0275text(2, "No organizations found.");
    \u0275\u0275elementEnd()();
  }
}
function OrganizationComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275text(2, "Organizations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1", 4);
    \u0275\u0275text(4, "Organizations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 5);
    \u0275\u0275text(6, "Select an organization to view its sites and edge devices.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "h3", 8);
    \u0275\u0275text(10, "All Organizations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 9);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "table", 10)(14, "thead")(15, "tr")(16, "th");
    \u0275\u0275text(17, "Organization Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Total Edge Devices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, "Healthy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th");
    \u0275\u0275text(25, "Degraded");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th");
    \u0275\u0275text(27, "Down");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "tbody");
    \u0275\u0275repeaterCreate(29, OrganizationComponent_Conditional_0_Conditional_2_For_30_Template, 16, 13, "tr", 11, _forTrack0, false, OrganizationComponent_Conditional_0_Conditional_2_ForEmpty_31_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const vm_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate2("", vm_r1.data.length, " organization", vm_r1.data.length === 1 ? "" : "s", "");
    \u0275\u0275advance(17);
    \u0275\u0275repeater(vm_r1.data);
  }
}
function OrganizationComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, OrganizationComponent_Conditional_0_Conditional_0_Template, 2, 0, "div", 0)(1, OrganizationComponent_Conditional_0_Conditional_1_Template, 2, 1)(2, OrganizationComponent_Conditional_0_Conditional_2_Template, 32, 3);
  }
  if (rf & 2) {
    const vm_r1 = ctx;
    \u0275\u0275conditional(0, vm_r1.loading ? 0 : vm_r1.error ? 1 : vm_r1.data ? 2 : -1);
  }
}
var OrganizationComponent = class _OrganizationComponent {
  constructor() {
    this.api = inject(OrganizationService);
    this.vm$ = this.api.getOrganizations().pipe(map((data) => ({ loading: false, error: null, data })), startWith({ loading: true, error: null, data: null }), catchError(() => of({ loading: false, error: "Failed to load organizations. Ensure the backend is running on port 8080.", data: null })));
  }
  static {
    this.\u0275fac = function OrganizationComponent_Factory(t) {
      return new (t || _OrganizationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrganizationComponent, selectors: [["app-organization"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 3, consts: [[1, "state-box", "state-box--loading"], [1, "state-box", "state-box--error"], [1, "page"], [1, "breadcrumb"], [1, "page-title"], [1, "page-subtitle"], [1, "table-card"], [1, "table-card__header"], [1, "table-card__title"], [1, "org-count"], [1, "data-table"], [1, "clickable-row", 3, "routerLink"], [1, "org-link", 3, "routerLink"], [1, "badge", 3, "ngClass"], [1, "badge__dot"], [1, "count--healthy"], [1, "count--degraded"], [1, "count--down"], ["colspan", "6", 1, "empty-row"]], template: function OrganizationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, OrganizationComponent_Conditional_0_Template, 3, 1);
        \u0275\u0275pipe(1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional(0, (tmp_0_0 = \u0275\u0275pipeBind1(1, 1, ctx.vm$)) ? 0 : -1, tmp_0_0);
      }
    }, dependencies: [CommonModule, NgClass, AsyncPipe, RouterLink], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 960px;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  margin-bottom: 4px;\n}\n.page-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a2035;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin: 6px 0 20px;\n  font-size: 13px;\n  color: #64748b;\n}\n.table-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.table-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.table-card__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a2035;\n}\n.org-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 13px 20px;\n  color: #374151;\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.clickable-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.clickable-row[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.org-link[_ngcontent-%COMP%] {\n  color: #2563eb;\n  text-decoration: none;\n  font-weight: 500;\n}\n.org-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.count--healthy[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-weight: 600;\n}\n.count--degraded[_ngcontent-%COMP%] {\n  color: #d97706;\n  font-weight: 600;\n}\n.count--down[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-weight: 600;\n}\n.empty-row[_ngcontent-%COMP%] {\n  padding: 24px;\n  text-align: center;\n  color: #94a3b8;\n  font-size: 13px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 3px 10px;\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n}\n.badge__dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n}\n.badge--healthy[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge--healthy[_ngcontent-%COMP%]   .badge__dot[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.badge--degraded[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.badge--degraded[_ngcontent-%COMP%]   .badge__dot[_ngcontent-%COMP%] {\n  background: #d97706;\n}\n.badge--down[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.badge--down[_ngcontent-%COMP%]   .badge__dot[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.state-box[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 10px;\n  font-size: 14px;\n}\n.state-box--loading[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n}\n.state-box--error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fecaca;\n}\n/*# sourceMappingURL=organization.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrganizationComponent, { className: "OrganizationComponent" });
})();
export {
  OrganizationComponent
};
//# sourceMappingURL=chunk-3BU3SOVU.js.map
