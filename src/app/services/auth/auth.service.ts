import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { User } from './../../models/model';
import { trigger } from '@angular/animations';

const GoogleAuthProvider = firebase.auth.GoogleAuthProvider;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // tslint:disable-next-line: max-line-length
  private static DEFAULT_PROFILE_PIC = 'https://firebasestorage.googleapis.com/v0/b/angular-events-d24fd.appspot.com/o/assets%2Fprofile.jpeg?alt=media&token=42e64e8d-ded6-44f7-b1d5-993dec021466';

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

  private nickName(displayName: string, email: string) {

    if (displayName) {
      return displayName.split(' ')[0]
    }

    if (email) {
      return email.split(/['\\.-_']/)[0]
    }

    return '';
  }
  private async updateUserData(user: User) {
    // Sets user data to firestore on login
    const userDoc = this.afs.doc<User>(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      nickName: this.nickName(user.displayName, user.email),
      photoURL: user.photoURL || AuthService.DEFAULT_PROFILE_PIC
    };

    await userDoc.set(data, { merge: true });

    return data;
  }

  async logout(): Promise<void> {
    await this.afAuth.signOut();
    this.router.navigate(['/']);
  }

  async loginWithEmailAndPass(email: string, password: string): Promise<User> {
    const userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);
    return this.updateUserData(userCredential.user);
  }

  async loginWithGoogle(): Promise<User> {
    console.log('antes')
    const userCredential = await this.afAuth.signInWithPopup(new GoogleAuthProvider());
    console.log('depois')

    return this.updateUserData(userCredential.user);
  }

  isAuthenticated(): Observable<boolean> {
    return this.user$.pipe(map(user => {
      return !!user;
    }));
  }
}
