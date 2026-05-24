import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  bootstrapApplication,
  provideHttpClient,
  provideRouter,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-RMTPF5DE.js";
import "./chunk-4WXVOEFY.js";

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "sdwan-dashboard", redirectTo: "dashboard", pathMatch: "full" },
  {
    path: "dashboard",
    loadChildren: () => import("./chunk-7PEGLUNQ.js").then((m) => m.dashboardRoutes)
  },
  {
    path: "organization",
    loadChildren: () => import("./chunk-JVVFQKTR.js").then((m) => m.organizationRoutes)
  },
  {
    path: "sites",
    loadChildren: () => import("./chunk-GHKIQT2O.js").then((m) => m.sitesRoutes)
  },
  {
    path: "edge-devices",
    loadChildren: () => import("./chunk-ZEAAP4MB.js").then((m) => m.edgeDevicesRoutes)
  },
  { path: "**", redirectTo: "dashboard" }
];

// src/app/app.component.ts
var _c0 = () => ({ exact: true });
var AppComponent = class _AppComponent {
  static {
    this.\u0275fac = function AppComponent_Factory(t) {
      return new (t || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 26, vars: 8, consts: [[1, "app-shell"], [1, "sidebar"], ["routerLink", "/dashboard", "routerLinkActive", "sidebar__brand--active", 1, "sidebar__brand"], [1, "sidebar__nav"], ["routerLink", "/dashboard", "routerLinkActive", "nav-item--active", 1, "nav-item", 3, "routerLinkActiveOptions"], ["routerLink", "/organization", "routerLinkActive", "nav-item--active", 1, "nav-item", 3, "routerLinkActiveOptions"], ["routerLink", "/sites", "routerLinkActive", "nav-item--active", 1, "nav-item", 3, "routerLinkActiveOptions"], ["routerLink", "/edge-devices", "routerLinkActive", "nav-item--active", 1, "nav-item", 3, "routerLinkActiveOptions"], [1, "sidebar__flow"], [1, "flow__label"], [1, "flow__text"], [1, "main-content"], [1, "topbar"], [1, "topbar__title"], [1, "topbar__updated"], [1, "page-content"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "a", 2);
        \u0275\u0275text(3, " SD-WAN Dashboard ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "nav", 3)(5, "a", 4);
        \u0275\u0275text(6, " Dashboard ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "a", 5);
        \u0275\u0275text(8, " Organization ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "a", 6);
        \u0275\u0275text(10, " Sites ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "a", 7);
        \u0275\u0275text(12, " Edge Devices ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 8)(14, "span", 9);
        \u0275\u0275text(15, "FLOW");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span", 10);
        \u0275\u0275text(17, "Organization \u2192 Site \u2192 Device");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "div", 11)(19, "header", 12)(20, "span", 13);
        \u0275\u0275text(21, "Operations Summary");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "span", 14);
        \u0275\u0275text(23, "Last updated: Just now");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "main", 15);
        \u0275\u0275element(25, "router-outlet");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(4, _c0));
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(5, _c0));
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(6, _c0));
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(7, _c0));
      }
    }, dependencies: [RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n\n.app-shell[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 180px 1fr;\n  min-height: 100vh;\n}\n.sidebar[_ngcontent-%COMP%] {\n  background: #1b2d52;\n  display: flex;\n  flex-direction: column;\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  overflow-y: auto;\n}\n.sidebar__brand[_ngcontent-%COMP%] {\n  display: block;\n  padding: 20px 16px;\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 15px;\n  line-height: 1.3;\n  text-decoration: none;\n  transition: background 0.15s;\n}\n.sidebar__brand--active[_ngcontent-%COMP%] {\n  background: #2a4070;\n}\n.sidebar__nav[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  padding: 4px 0;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: block;\n  padding: 10px 16px;\n  color: #b8c7e0;\n  font-size: 14px;\n  text-decoration: none;\n  transition: background 0.15s, color 0.15s;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: #243659;\n  color: #ffffff;\n}\n.nav-item--active[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #ffffff;\n}\n.sidebar__flow[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: #162444;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.flow__label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: #7a93b8;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.flow__text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #c8d8ef;\n  line-height: 1.4;\n}\n.main-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background: #f0f4f8;\n  min-height: 100vh;\n}\n.topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 28px;\n  background: #ffffff;\n  border-bottom: 1px solid #e2e8f0;\n}\n.topbar__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a2035;\n}\n.topbar__updated[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.page-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 28px;\n}\n/*# sourceMappingURL=app.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent" });
})();

// src/main.ts
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes)
  ]
}).catch((error) => console.error(error));
//# sourceMappingURL=main.js.map
