import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    public api: ApiService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): any {
    return this.api.posts('cardmake/v1/user/refresh', {})
      .then((response: any) => {
        if (response && response.success) {
          this.router.navigate(['/dashboard']);
        } else {
          return true;
        }
      }).catch(error => {
        this.router.navigate(['/setup']);
      });

    return true;
  }
  
}
