import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GuardadminGuard } from "./guards/guardadmin.guard";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";
import { AmaniUserUpdateComponent } from "./views/admin/amani-user-update/amani-user-update.component";
import { AmaniUsersAllComponent } from "./views/admin/amani-users-all/amani-users-all.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/maps/maps.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TablesComponent } from "./views/admin/tables/tables.component";
import { ForgotpasswordComponent } from "./views/auth/forgotpassword/forgotpassword.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";
import { ResetpasswordComponent } from "./views/auth/resetpassword/resetpassword.component";

// no layouts views
import { IndexComponent } from "./views/index/index.component";
import { LandingComponent } from "./views/landing/landing.component";
import { ProfileComponent } from "./views/profile/profile.component";
import { ProfileamaniComponent } from "./views/profileamani/profileamani.component";
import { TestamaniComponent } from "./views/testamani/testamani.component";

const routes: Routes = [
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    canActivate:[GuardadminGuard],
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "settings", component: SettingsComponent },
      { path: "tables", component: TablesComponent },
      { path: "maps", component: MapsComponent },
      { path: "users", component: AmaniUsersAllComponent },
      { path: "userupdate/:id", component: AmaniUserUpdateComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      {path: 'logout', component: LoginComponent},
      {path: 'forgot-password', component: ForgotpasswordComponent},
      {path: 'reset-password/:token', component: ResetpasswordComponent},
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
  // no layout views
  { path: "profile", component: ProfileComponent },
  { path: "profileamani", component: ProfileamaniComponent },
  { path: "landing", component: LandingComponent },
  {path: 'testamani', component: TestamaniComponent},
  { path: "", component: IndexComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
