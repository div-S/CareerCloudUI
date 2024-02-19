import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;
  constructor(private fireauth: AngularFireAuth, private router: Router) {}

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(
      () => {
        this.loggedIn = true;
        localStorage.setItem('token', 'true');
        this.router.navigate(['/dashboard']); //Admin
      },
      (err) => {
        alert(err.message);
        this.loggedIn = false;
        this.router.navigate(['/login']);
      }
    );
  }

  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(
      () => {
        alert('Registration successful');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['/register']);
      }
    );
  }

  logout() {
    this.fireauth.signOut().then(
      () => {
        this.loggedIn = false;
        localStorage.removeItem('token');
        this.router.navigate(['/jobs']);
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
