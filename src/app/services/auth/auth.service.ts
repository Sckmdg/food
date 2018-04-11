import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  checkAuth(): boolean {
    return false;
  }
}
