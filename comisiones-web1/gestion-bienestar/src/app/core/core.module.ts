import { NgModule, Optional, SkipSelf } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { AuthGuard } from "./guards/auth.guard";
import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { AuthService } from "./services/auth.service";

@NgModule({
  providers: [
    AuthService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        "CoreModule is already loaded. Import it in the AppModule only."
      );
    }
  }
}
