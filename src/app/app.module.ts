import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainComponent } from "./PAGES/main/main.component";
import { NavBarComponent } from "./COMPONENTS/nav-bar/nav-bar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ExpandableMenuComponent } from "./COMPONENTS/expandable-menu/expandable-menu.component";
import { MatMenuModule } from "@angular/material";
import { MatButtonModule } from "@angular/material/button";
import { ResumeComponent } from './PAGES/resume/resume.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavBarComponent,
    ExpandableMenuComponent,
    ResumeComponent
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
