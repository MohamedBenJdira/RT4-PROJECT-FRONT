import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { TokenPayloadDto } from "src/app/dto/auth/token-payload.dto";
import { AuthenticationService } from "src/app/services/authentication.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AdminRoleGuard implements CanActivate {
  constructor(
    private readonly authService: AuthenticationService,
    private readonly router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(["register"]);
      return false;
    }
    const tokenPayload: TokenPayloadDto = this.authService.getTokenPayload() as TokenPayloadDto;
    if (!(tokenPayload.role === "admin")) {
      this.router.navigate(["not-found"]);
      return false;
    }
    return true;
  }
}
