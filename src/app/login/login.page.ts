import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Platform } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import {AuthCredential} from '@firebase/auth-types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
	loading: any;
  user: Observable<firebase.User>;

  constructor(
  	private router: Router,
    private fb: Facebook,
    public loadingController: LoadingController,
    public afAuth: AngularFireAuth,
    public platform: Platform,
    private gplus: GooglePlus
  ) {

      this.user = this.afAuth.authState;

   }

   doFacebookLogin(){
   return new Promise<void>((resolve, reject) => {
     if (this.platform.is('cordova')) {
       //["public_profile"] is the array of permissions, you can add more if you need
       this.fb.login(["public_profile"]).then((response) => {
         const facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
         firebase.auth().signInWithCredential(facebookCredential)
         .then((user) => {
           resolve()
         });
       },(err) => {
         reject(err);
       });
     }
     else{
       this.afAuth.auth
       .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((user) => {
         resolve()
      })
    }
  })
}


  nativeGoogleLogin(){
  return new Promise<void>((resolve, reject) => {
    if (this.platform.is('cordova')){
      this.gplus.login({
        'scopes': 'profile email',
        'webClientId': '527922942990-8m1787cddu0i1f79sf0rjt56728bu20a.apps.googleusercontent.com',
        'offline': true
      }).then((response) => {
        const gplusUser = firebase.auth.GoogleAuthProvider.credential(response.idToken);
        firebase.auth().signInWithCredential(gplusUser).then((user) => {
             resolve()
           });
         },(err) => {
           reject(err);
         });
       }
       else{
         this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
         .then((user) => {
            resolve()
         })
      }
    })
}

signOut() {
  this.afAuth.auth.signOut();
}

doLogout(){
   return new Promise((resolve, reject) => {
     if(firebase.auth().currentUser){
       this.afAuth.auth.signOut()
       resolve();
     }
     else{
       reject();
     }
   });
}

}
