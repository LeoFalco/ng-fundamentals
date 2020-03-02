import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { User } from './../../models/model';

const GoogleAuthProvider = firebase.auth.GoogleAuthProvider;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    // Get the auth state, then fetch the Firestore user document or return null
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    );
  }

  private async updateUserData(user: User) {
    // Sets user data to firestore on login
    const userRef = this.afs.doc<User>(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };

    return userRef.set(data, { merge: true });
  }

  async logout(): Promise<void> {
    await this.afAuth.signOut();
    this.router.navigate(['/']);
  }

  async loginWithEmailAndPass(email: string, password: string): Promise<void> {
    const userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);
    this.updateUserData(userCredential.user);

  }

  async loginWithGoogle(): Promise<void> {
    const userCredential = await this.afAuth.signInWithPopup(new GoogleAuthProvider());
    this.updateUserData(userCredential.user);
    console.log(userCredential);
  }

  isAuthenticated(): Observable<boolean> {
    return this.user$.pipe(map(user => {
      return !!user;
    }));
  }
}
