import { ChristmasCardGalleryService } from "./SERVICES/photo-christmas-gallery/christmas-card-gallery.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainComponent } from "./PAGES/main/main.component";
import { NavBarHamburgerComponent } from "./COMPONENTS/STRUCTURAL/nav-bar-hamburger/nav-bar-hamburger.component";
import { NavBarComponent } from "./COMPONENTS/STRUCTURAL/nav-bar/nav-bar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatMenuModule } from "@angular/material";
import { MatButtonModule } from "@angular/material/button";
import { ResumeComponent } from "./PAGES/professional-resume/professional-resume.component";
import { ProfessionalProgrammingComponent } from "./PAGES/professional-programming/professional-programming.component";
import { LeisureProgrammingComponent } from "./PAGES/leisure-programming/leisure-programming.component";
import { LeisureGardeningComponent } from "./PAGES/leisure-gardening/leisure-gardening.component";
import { LeisurePhotographyComponent } from "./PAGES/leisure-photography/leisure-photography.component";
import { ImageSliderComponent } from "./COMPONENTS/STRUCTURAL/image-slider/image-slider.component";
import { PropertyBindingComponent } from "./COMPONENTS/PROGRAMMING-LIBRARY/data-binding/property-binding/property-binding.component";

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
    LeisurePhotographyComponent,
    ImageSliderComponent,
    PropertyBindingComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [ChristmasCardGalleryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
