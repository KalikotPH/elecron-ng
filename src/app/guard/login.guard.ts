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
    return this.api.get_public('cardmake/v1/plugin/init')
      .then((response: any) => {
        if (response && response.success) {
          return true;
        } else {
          this.router.navigate(['/setup']);
        }
      }).catch(error => {
        this.router.navigate(['/500']);
      });

    return true;
  }
  
}
