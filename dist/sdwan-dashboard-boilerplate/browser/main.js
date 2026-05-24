import {
  ErrorService
} from "./chunk-U6KMYOMK.js";
import {
  AsyncPipe,
  BehaviorSubject,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  bootstrapApplication,
  catchError,
  delayWhen,
  filter,
  finalize,
  inject,
  provideHttpClient,
  provideRouter,
  switchMap,
  throwError,
  timer,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-BSAKWJHE.js";
import "./chunk-4WXVOEFY.js";

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "sdwan-dashboard", redirectTo: "dashboard", pathMatch: "full" },
  {
    path: "dashboard",
    loadChildren: () => import("./chunk-AS3LJ5Q2.js").then((m) => m.dashboardRoutes)
  },
  {
    path: "organization",
    loadChildren: () => import("./chunk-XKKQXNL2.js").then((m) => m.organizationRoutes)
  },
  {
    path: "sites",
    loadChildren: () => import("./chunk-7ZVTQN7D.js").then((m) => m.sitesRoutes)
  },
  {
    path: "edge-devices",
    loadChildren: () => import("./chunk-XZ276WV7.js").then((m) => m.edgeDevicesRoutes)
  },
  {
    path: "**",
    loadComponent: () => import("./chunk-EBX5AUFW.js").then((m) => m.NotFoundComponent)
  }
];

// src/app/shared/loading.service.ts
var LoadingService = class _LoadingService {
  constructor() {
    this.activeRequests = 0;
    this.loading$ = new BehaviorSubject(false);
    this.isLoading$ = this.loading$.asObservable();
  }
  start() {
    if (++this.activeRequests === 1)
      this.loading$.next(true);
  }
  stop() {
    if (--this.activeRequests <= 0) {
      this.activeRequests = 0;
      this.loading$.next(false);
    }
  }
  static {
    this.\u0275fac = function LoadingService_Factory(t) {
      return new (t || _LoadingService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LoadingService, factory: _LoadingService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/loading-bar.component.ts
var LoadingBarComponent = class _LoadingBarComponent {
  constructor() {
    this.loadingService = inject(LoadingService);
  }
  static {
    this.\u0275fac = function LoadingBarComponent_Factory(t) {
      return new (t || _LoadingBarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoadingBarComponent, selectors: [["app-loading-bar"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 4, consts: [[1, "loading-bar"]], template: function LoadingBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "div", 0);
        \u0275\u0275pipe(1, "async");
      }
      if (rf & 2) {
        \u0275\u0275classProp("loading-bar--active", \u0275\u0275pipeBind1(1, 2, ctx.loadingService.isLoading$));
      }
    }, dependencies: [AsyncPipe], styles: ["\n\n.loading-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  z-index: 9999;\n  opacity: 0;\n  transition: opacity 0.2s ease;\n  background:\n    linear-gradient(\n      90deg,\n      #2563eb 0%,\n      #93c5fd 50%,\n      #2563eb 100%);\n  background-size: 200% 100%;\n}\n.loading-bar--active[_ngcontent-%COMP%] {\n  opacity: 1;\n  animation: _ngcontent-%COMP%_loading-sweep 1.4s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_loading-sweep {\n  0% {\n    background-position: 200% center;\n  }\n  100% {\n    background-position: -200% center;\n  }\n}\n/*# sourceMappingURL=loading-bar.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoadingBarComponent, { className: "LoadingBarComponent" });
})();

// src/app/shared/toast.component.ts
function ToastComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
    \u0275\u0275text(2, "!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 2);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 3);
    \u0275\u0275listener("click", function ToastComponent_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.errorService.clear());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.message);
  }
}
var ToastComponent = class _ToastComponent {
  constructor() {
    this.errorService = inject(ErrorService);
  }
  ngOnInit() {
    this.autoDismiss$ = this.errorService.currentError$.pipe(filter((err) => err !== null), switchMap(() => timer(3e3))).subscribe(() => this.errorService.clear());
  }
  ngOnDestroy() {
    this.autoDismiss$?.unsubscribe();
  }
  static {
    this.\u0275fac = function ToastComponent_Factory(t) {
      return new (t || _ToastComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastComponent, selectors: [["app-toast"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 3, consts: [["role", "alert", "aria-live", "assertive", 1, "toast", "toast--error"], [1, "toast__icon"], [1, "toast__message"], ["aria-label", "Dismiss", 1, "toast__close", 3, "click"]], template: function ToastComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ToastComponent_Conditional_0_Template, 7, 1, "div", 0);
        \u0275\u0275pipe(1, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional(0, (tmp_0_0 = \u0275\u0275pipeBind1(1, 1, ctx.errorService.currentError$)) ? 0 : -1, tmp_0_0);
      }
    }, dependencies: [AsyncPipe], styles: ["\n\n.toast[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 10000;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-width: 320px;\n  max-width: 520px;\n  padding: 14px 16px;\n  border-radius: 10px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n  animation: _ngcontent-%COMP%_toast-in 0.25s ease;\n}\n@keyframes _ngcontent-%COMP%_toast-in {\n  from {\n    opacity: 0;\n    transform: translateX(-50%) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(-50%) translateY(0);\n  }\n}\n.toast--error[_ngcontent-%COMP%] {\n  background: #fff;\n  border-top: 4px solid #ef4444;\n}\n.toast__icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: #ef4444;\n  color: #fff;\n  font-weight: 700;\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.toast__message[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 13px;\n  color: #1a2035;\n  line-height: 1.4;\n}\n.toast__close[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #94a3b8;\n  font-size: 14px;\n  padding: 0;\n  line-height: 1;\n}\n.toast__close[_ngcontent-%COMP%]:hover {\n  color: #1a2035;\n}\n/*# sourceMappingURL=toast.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastComponent, { className: "ToastComponent" });
})();

// src/app/app.component.ts
var _c0 = () => ({ exact: true });
var AppComponent = class _AppComponent {
  static {
    this.\u0275fac = function AppComponent_Factory(t) {
      return new (t || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 8, consts: [[1, "app-shell"], [1, "sidebar"], ["routerLink", "/dashboard", "routerLinkActive", "sidebar__brand--active", 1, "sidebar__brand"], [1, "sidebar__nav"], ["routerLink", "/dashboard", "routerLinkActive", "nav-item--active", 1, "nav-item", 3, "routerLinkActiveOptions"], ["routerLink", "/organization", "routerLinkActive", "nav-item--active", 1, "nav-item", 3, "routerLinkActiveOptions"], ["routerLink", "/sites", "routerLinkActive", "nav-item--active", 1, "nav-item", 3, "routerLinkActiveOptions"], ["routerLink", "/edge-devices", "routerLinkActive", "nav-item--active", 1, "nav-item", 3, "routerLinkActiveOptions"], [1, "sidebar__flow"], [1, "flow__label"], [1, "flow__text"], [1, "main-content"], [1, "topbar"], [1, "topbar__title"], [1, "topbar__updated"], [1, "page-content"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-loading-bar")(1, "app-toast");
        \u0275\u0275elementStart(2, "div", 0)(3, "aside", 1)(4, "a", 2);
        \u0275\u0275text(5, " SD-WAN Dashboard ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "nav", 3)(7, "a", 4);
        \u0275\u0275text(8, " Dashboard ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "a", 5);
        \u0275\u0275text(10, " Organization ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "a", 6);
        \u0275\u0275text(12, " Sites ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "a", 7);
        \u0275\u0275text(14, " Edge Devices ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 8)(16, "span", 9);
        \u0275\u0275text(17, "FLOW");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 10);
        \u0275\u0275text(19, "Organization \u2192 Site \u2192 Device");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 11)(21, "header", 12)(22, "span", 13);
        \u0275\u0275text(23, "Operations Summary");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span", 14);
        \u0275\u0275text(25, "Last updated: Just now");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "main", 15);
        \u0275\u0275element(27, "router-outlet");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(4, _c0));
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(5, _c0));
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(6, _c0));
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(7, _c0));
      }
    }, dependencies: [RouterOutlet, RouterLink, RouterLinkActive, LoadingBarComponent, ToastComponent], styles: ["\n\n.app-shell[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 180px 1fr;\n  min-height: 100vh;\n}\n.sidebar[_ngcontent-%COMP%] {\n  background: #1b2d52;\n  display: flex;\n  flex-direction: column;\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  overflow-y: auto;\n}\n.sidebar__brand[_ngcontent-%COMP%] {\n  display: block;\n  padding: 20px 16px;\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 15px;\n  line-height: 1.3;\n  text-decoration: none;\n  transition: background 0.15s;\n}\n.sidebar__brand--active[_ngcontent-%COMP%] {\n  background: #2a4070;\n}\n.sidebar__nav[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  padding: 4px 0;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: block;\n  padding: 10px 16px;\n  color: #b8c7e0;\n  font-size: 14px;\n  text-decoration: none;\n  transition: background 0.15s, color 0.15s;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: #243659;\n  color: #ffffff;\n}\n.nav-item--active[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #ffffff;\n}\n.sidebar__flow[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: #162444;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.flow__label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: #7a93b8;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.flow__text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #c8d8ef;\n  line-height: 1.4;\n}\n.main-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background: #f0f4f8;\n  min-height: 100vh;\n}\n.topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 28px;\n  background: #ffffff;\n  border-bottom: 1px solid #e2e8f0;\n}\n.topbar__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a2035;\n}\n.topbar__updated[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.page-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 28px;\n}\n/*# sourceMappingURL=app.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent" });
})();

// src/app/shared/loading.interceptor.ts
var MIN_DISPLAY_MS = 800;
var loadingInterceptor = (req, next) => {
  const loadingService = inject(LoadingService);
  loadingService.start();
  const startTime = Date.now();
  return next(req).pipe(delayWhen(() => timer(Math.max(0, MIN_DISPLAY_MS - (Date.now() - startTime)))), finalize(() => loadingService.stop()));
};

// src/app/shared/error.interceptor.ts
var errorInterceptor = (req, next) => {
  const errorService = inject(ErrorService);
  return next(req).pipe(catchError((err) => {
    errorService.handle(err);
    return throwError(() => err);
  }));
};

// src/main.ts
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([loadingInterceptor, errorInterceptor])),
    provideRouter(routes)
  ]
}).catch((error) => console.error(error));
//# sourceMappingURL=main.js.map
