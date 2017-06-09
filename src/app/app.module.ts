import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { VisitingComponent } from './search/visiting.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
  { path: 'search', component: SearchComponent } ,
  { path: 'visiting/:id', component: VisitingComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ AuthGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
