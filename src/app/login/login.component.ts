import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEnvelope, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { LoginControllerService } from '../controllers/login-controller.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  host: {
    class: 'h-100'
  }
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = this.formBuilder.group({
    email: new FormControl<null | string>(null, Validators.required),
    password: new FormControl<null | string>(null, Validators.required)
  });


  constructor(private formBuilder: FormBuilder, private loginController: LoginControllerService, private router: Router) { }
   
  ngOnInit(): void {
  }

  public login() {
    this.loginAsync()
  }

  private async loginAsync() {
    try {
      const response = await this.loginController.login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value);
      this.router.navigate(['/users']);
    } catch (error) {
      console.log(error);
    }
  }


}
export class AppComponent {
  faEnvelope = faCoffee;
}

