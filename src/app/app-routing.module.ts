import { MainComponent } from "./PAGES/main/main.component";
import { ResumeComponent } from "./PAGES/professional-resume/professional-resume.component";
import { ProfessionalProgrammingComponent } from "./PAGES/professional-programming/professional-programming.component";
import { LeisureProgrammingComponent } from "./PAGES/leisure-programming/leisure-programming.component";
import { LeisureGardeningComponent } from "./PAGES/leisure-gardening/leisure-gardening.component";
import { LeisurePhotographyComponent } from "./PAGES/leisure-photography/leisure-photography.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: "", component: MainComponent },
      { path: "professional-resume", component: ResumeComponent },
      {
        path: "professional-programming",
        component: ProfessionalProgrammingComponent
      },
      {
        path: "leisure-programming",
        component: LeisureProgrammingComponent
      },
      {
        path: "leisure-gardening",
        component: LeisureGardeningComponent
      },
      {
        path: "leisure-photography",
        component: LeisurePhotographyComponent
      },
      { path: "home", component: MainComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
