import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginDto } from 'src/app/dto/login.dto';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private _authService: AuthService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      pin: ['', [Validators.required]],
    });
  }

  get username() {
    return this.loginForm.get('username');
  }
  get pin() {
    return this.loginForm.get('pin');
  }

  login(): void {
    const payload: LoginDto = {
      username: this.username?.value,
      pin: this.pin?.value,
    };
    this._authService.login(payload).subscribe({
      next: (res) => {
        if (res.response.resp_code === '000') {
          alert('It worked');
        } else {
          alert(res.response.resp_desc);
        }
      },
      error: (err) => {
        alert(err.toString());
      },
    });
  }
}
