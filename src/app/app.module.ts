import { ChristmasCardGalleryService } from "./SERVICES/christmas-card-gallery.service";
import { ThailandGalleryService } from "./SERVICES/thailand-gallery.service";
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
import { PropertyBindingComponent } from "./COMPONENTS/PROGRAMMING-LIBRARY/data-binding/property-binding/property-binding.component";
import { GitBashComponent } from "./COMPONENTS/PROGRAMMING-LIBRARY/git-bash/git-bash.component";
import { DataBindingComponent } from "./COMPONENTS/PROGRAMMING-LIBRARY/data-binding/data-binding.component";
import { InterpolationComponent } from "./COMPONENTS/PROGRAMMING-LIBRARY/data-binding/interpolation/interpolation.component";
import { AttributeBindingComponent } from "./COMPONENTS/PROGRAMMING-LIBRARY/data-binding/attribute-binding/attribute-binding.component";
import { ClassBindingComponent } from "./COMPONENTS/PROGRAMMING-LIBRARY/data-binding/class-binding/class-binding.component";
import { StyleBindingComponent } from "./COMPONENTS/PROGRAMMING-LIBRARY/data-binding/style-binding/style-binding.component";
import { EventBindingComponent } from "./COMPONENTS/PROGRAMMING-LIBRARY/data-binding/event-binding/event-binding.component";
import { TwoWayBindingComponent } from "./COMPONENTS/PROGRAMMING-LIBRARY/data-binding/two-way-binding/two-way-binding.component";
import { ImageGalleryComponent } from "./COMPONENTS/STRUCTURAL/image-gallery/image-gallery.component";
import { SideBarComponent } from "./COMPONENTS/STRUCTURAL/side-bar/side-bar.component";
import { GardenTableComponent } from "./COMPONENTS/STRUCTURAL/garden-table/garden-table.component";
import { TableModule } from "ngx-easy-table";
import { ServiceNowComponent } from "./COMPONENTS/PROGRAMMING-LIBRARY/service-now/service-now.component";
import { InterviewQuestionsComponent } from "./COMPONENTS/PROGRAMMING-LIBRARY/service-now/interview-questions/interview-questions.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SshComponent } from "./COMPONENTS/PROGRAMMING-LIBRARY/git-bash/ssh/ssh.component";
import { PlantingScheduleComponent } from "./COMPONENTS/GARDENING/planting-schedule/planting-schedule.component";

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
    PropertyBindingComponent,
    GitBashComponent,
    DataBindingComponent,
    InterpolationComponent,
    AttributeBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    ImageGalleryComponent,
    SideBarComponent,
    GardenTableComponent,
    ServiceNowComponent,
    InterviewQuestionsComponent,
    SshComponent,
    PlantingScheduleComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    TableModule,
    NgbModule
  ],
  providers: [ChristmasCardGalleryService, ThailandGalleryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
