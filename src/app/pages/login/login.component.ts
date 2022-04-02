/* BytesCrafter */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  email: any = '';
  password: any = '';
  processing: boolean = false;
  languageId: any;

  constructor(
    public api: ApiService,
    public util: UtilService,
    private router: Router
  ) {
    setTimeout(() => {
      this.languageId = parseInt(localStorage.getItem('translateKey'));
    }, 1000);
  }

  onLogin() {

    if (this.email == null || this.password == null || this.email == '' || this.password == '') {
      this.util.error(this.util.translate('All Fields are required'));
      return false;
    }

    // const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
    // if (!emailfilter.test(this.email)) {
    //   this.util.error(this.util.translate('Please enter valid email'));
    //   return false;
    // }

    this.util.show();

    this.api.post('cardmake/v1/user/signin', {
      uname: this.email,
      pword: this.password
    }).then((response: any) => {
      this.util.hide();
      if (response && response.success) {
        localStorage.setItem('token', response.data)
        this.router.navigate(['']);
      } else {
        this.util.error(this.util.translate('Something went wrong'));
      }
    }, error => {
      this.util.hide();
      this.util.apiErrorHandler(error);
    }).catch(error => {
      this.util.hide();
      this.util.apiErrorHandler(error);
    });
  }

  forgot() {
    this.router.navigate(['forgot']);
  }

  updateLanguage() {
    localStorage.setItem('translateKey', this.languageId);
    window.location.reload();
  }
}
