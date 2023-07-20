import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';

const routes: Routes = [
  {path:"footer", component : FooterComponent},
  {path:"header", component : HeaderComponent},
  {path:"home-page", component : HomePageComponent},
  {path:"post-page", component : PostPageComponent},
  {path:"profile", component : ProfileComponent},
  {path:"", component : RegistrationPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
