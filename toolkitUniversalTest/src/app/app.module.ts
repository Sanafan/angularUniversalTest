import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

import {RouterModule, Routes} from '@angular/router'

const appRoutes: Routes = [
  {path: '', component: UserProfileComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent
  ],
  imports:[
 CommonModule,
NgtUniversalModule,
RouterModule.forRoot(appRoutes),
 
 TransferHttpCacheModule,
HttpClientModule,
 
    
    AppRoutingModule
  ],
  providers: [],
})
export class AppModule { }
