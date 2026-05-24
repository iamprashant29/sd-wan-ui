import {
  EdgeDeviceService
} from "./chunk-FM5GH7UL.js";
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
  ɵɵtextInterpolate1
} from "./chunk-RMTPF5DE.js";
import "./chunk-4WXVOEFY.js";

// src/app/pages/edge-devices/edge-devices-page/edge-devices-page.component.ts
var _forTrack0 = ($index, $item) => $item.name;
var _c0 = (a0) => ["/edge-devices", a0];
var _c1 = (a0) => ["/sites", a0];
function EdgeDevicesPageComponent_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, "Loading edge devices\u2026");
    \u0275\u0275elementEnd();
  }
}
function EdgeDevicesPageComponent_Conditional_7_Conditional_1_Template(rf, ctx) {
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
function EdgeDevicesPageComponent_Conditional_7_Conditional_2_For_25_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const device_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c1, device_r2.siteId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", device_r2.siteId, " ");
  }
}
function EdgeDevicesPageComponent_Conditional_7_Conditional_2_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span", 12);
    \u0275\u0275element(8, "span", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 14);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275template(17, EdgeDevicesPageComponent_Conditional_7_Conditional_2_For_25_Conditional_17_Template, 2, 4, "a", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const device_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, device_r2.name));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", device_r2.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(device_r2.role);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "badge--" + device_r2.status.toLowerCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", device_r2.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(device_r2.uptime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(device_r2.systemIp);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(device_r2.model);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(17, device_r2.siteId ? 17 : -1);
  }
}
function EdgeDevicesPageComponent_Conditional_7_Conditional_2_ForEmpty_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 16);
    \u0275\u0275text(2, "No edge devices found.");
    \u0275\u0275elementEnd()();
  }
}
function EdgeDevicesPageComponent_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "h3", 8);
    \u0275\u0275text(3, "All Devices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "table", 10)(7, "thead")(8, "tr")(9, "th");
    \u0275\u0275text(10, "Device Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Uptime");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "System IP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Model");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Site");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "tbody");
    \u0275\u0275repeaterCreate(24, EdgeDevicesPageComponent_Conditional_7_Conditional_2_For_25_Template, 18, 11, "tr", null, _forTrack0, false, EdgeDevicesPageComponent_Conditional_7_Conditional_2_ForEmpty_26_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const vm_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", vm_r1.devices.length, " devices");
    \u0275\u0275advance(19);
    \u0275\u0275repeater(vm_r1.devices);
  }
}
function EdgeDevicesPageComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EdgeDevicesPageComponent_Conditional_7_Conditional_0_Template, 2, 0, "div", 4)(1, EdgeDevicesPageComponent_Conditional_7_Conditional_1_Template, 2, 1)(2, EdgeDevicesPageComponent_Conditional_7_Conditional_2_Template, 27, 2);
  }
  if (rf & 2) {
    const vm_r1 = ctx;
    \u0275\u0275conditional(0, vm_r1.loading ? 0 : vm_r1.error ? 1 : 2);
  }
}
var EdgeDevicesPageComponent = class _EdgeDevicesPageComponent {
  constructor() {
    this.api = inject(EdgeDeviceService);
    this.vm$ = this.api.getEdgeDevices().pipe(map((devices) => ({ loading: false, error: null, devices })), startWith({ loading: true, error: null, devices: [] }), catchError(() => of({ loading: false, error: "Failed to load edge devices. Ensure the backend is running on port 8080.", devices: [] })));
  }
  static {
    this.\u0275fac = function EdgeDevicesPageComponent_Factory(t) {
      return new (t || _EdgeDevicesPageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EdgeDevicesPageComponent, selectors: [["app-edge-devices-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 3, consts: [[1, "page"], [1, "breadcrumb"], [1, "page-title"], [1, "page-subtitle"], [1, "state-box", "state-box--loading"], [1, "state-box", "state-box--error"], [1, "table-card"], [1, "table-card__header"], [1, "table-card__title"], [1, "device-count"], [1, "data-table"], [1, "device-link", 3, "routerLink"], [1, "badge", 3, "ngClass"], [1, "badge__dot"], [1, "mono"], [1, "site-link", 3, "routerLink"], ["colspan", "7", 1, "empty-row"]], template: function EdgeDevicesPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275text(2, "Edge Devices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "h1", 2);
        \u0275\u0275text(4, "Edge Devices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "All edge devices across the network.");
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, EdgeDevicesPageComponent_Conditional_7_Template, 3, 1);
        \u0275\u0275pipe(8, "async");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(7);
        \u0275\u0275conditional(7, (tmp_0_0 = \u0275\u0275pipeBind1(8, 1, ctx.vm$)) ? 7 : -1, tmp_0_0);
      }
    }, dependencies: [CommonModule, NgClass, AsyncPipe, RouterLink], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  max-width: 960px;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  margin-bottom: 4px;\n}\n.page-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a2035;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  margin: 6px 0 20px;\n  font-size: 13px;\n  color: #64748b;\n}\n.table-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.table-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.table-card__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a2035;\n}\n.device-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 13px 20px;\n  color: #374151;\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.device-link[_ngcontent-%COMP%] {\n  color: #2563eb;\n  text-decoration: none;\n  font-weight: 500;\n}\n.device-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.site-link[_ngcontent-%COMP%] {\n  color: #2563eb;\n  text-decoration: none;\n}\n.site-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family:\n    "SFMono-Regular",\n    "Menlo",\n    monospace;\n  font-size: 12px;\n  color: #64748b;\n}\n.empty-row[_ngcontent-%COMP%] {\n  padding: 24px;\n  text-align: center;\n  color: #94a3b8;\n  font-size: 13px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 3px 10px;\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n}\n.badge__dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n}\n.badge--online[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.badge--online[_ngcontent-%COMP%]   .badge__dot[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.badge--offline[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.badge--offline[_ngcontent-%COMP%]   .badge__dot[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.state-box[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 10px;\n  font-size: 14px;\n}\n.state-box--loading[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n}\n.state-box--error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fecaca;\n}\n/*# sourceMappingURL=edge-devices-page.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EdgeDevicesPageComponent, { className: "EdgeDevicesPageComponent" });
})();
export {
  EdgeDevicesPageComponent
};
//# sourceMappingURL=chunk-WHXSC3PX.js.map
