import { Injectable } from '@angular/core';
import { LoginDto } from '../dto/login.dto';
import { AuthRepository } from '../repository/auth.repository';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _authRepo: AuthRepository) { }

  login = (payload: LoginDto) => {
    return this._authRepo.login(payload)
  }
}
