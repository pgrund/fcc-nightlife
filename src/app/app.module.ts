import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { VisitingComponent } from './search/visiting.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './login/logout.component';

import { AuthGuard } from './auth.guard';
import { AuthenticationService } from './authentication.service';
import { UserResolve } from './user.resolve';
import { UserService } from './user.service';

const appRoutes: Routes = [
  { path: 'search', component: SearchComponent,
    resolve: {
      user: UserResolve
    }
  },
  { path: 'visiting/:id', component: VisitingComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    VisitingComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthGuard,
    UserResolve,
    UserService,
    AuthenticationService
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
