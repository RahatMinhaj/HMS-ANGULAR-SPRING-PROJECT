import { Injectable } from '@angular/core';

const userKey = 'auth-user';

@Injectable({
  providedIn: 'root',
})


export class SessionstorageService {
  constructor() {}

  clean(): void {
    window.sessionStorage.clear();
  }

  saveSession(userData: any) {
    window.localStorage.removeItem(userKey);
    window.localStorage.setItem(userKey, JSON.stringify(userData));
    // window.location.reload();
  }

  getData() {
    const user = window.localStorage.getItem(userKey);
    return JSON.parse(user!);
  }

  getRole() {
    let role = this.getData().user.role[0].roleName;
    return role;
  }

  getToken(): string | null {
    const user = window.localStorage.getItem(userKey);
    if (user) {
      const userData = JSON.parse(user);
      return userData.jwtToken;
    } else {
      return null;
    }
  }

  // getToken(){
  //   const userToken = this.getData().jwtToken;

  //   if (userToken) {
  //     const userData = JSON.parse(user);
  //     return userData.jwtToken;
  //   } else {
  //     return null;
  //   }

  //   return userToken
  // }

  isLoggedIn() {
    if (localStorage.getItem(userKey)) {
      return true;
    } else {
      return false;
    }
  }

  logOut() {
    // window.localStorage.removeItem(userKey);
    window.localStorage.clear();
    window.location.reload();
  }
}
