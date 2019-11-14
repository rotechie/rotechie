import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainComponent } from "./PAGES/main/main.component";
import { NavBarHamburgerComponent } from "./COMPONENTS/nav-bar-hamburger/nav-bar-hamburger.component";
import { NavBarComponent } from "./COMPONENTS/nav-bar/nav-bar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatMenuModule } from "@angular/material";
import { MatButtonModule } from "@angular/material/button";
import { ResumeComponent } from "./PAGES/professional-resume/professional-resume.component";
import { ProfessionalProgrammingComponent } from "./PAGES/professional-programming/professional-programming.component";
import { LeisureProgrammingComponent } from "./PAGES/leisure-programming/leisure-programming.component";
import { LeisureGardeningComponent } from "./PAGES/leisure-gardening/leisure-gardening.component";
import { LeisurePhotographyComponent } from "./PAGES/leisure-photography/leisure-photography.component";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavBarComponent,
    NavBarHamburgerComponent,
    ResumeComponent,
    ProfessionalProgrammingComponent,
    LeisureProgrammingComponent,
    LeisureGardeningComponent,
    LeisurePhotographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
