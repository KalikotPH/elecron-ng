/* BytesCrafter */
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class SetupAuthGuard implements CanActivate {

  constructor(
    public api: ApiService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): any {
    return this.api.get_public('cardmake/v1/plugin/init')
      .then((response: any) => {
        if (response && response.success) {
          this.router.navigate(['/login']);
        } else {
          return true;
        }
      }).catch(error => {
        this.router.navigate(['/500']);
      });

    return true;
  }
}
