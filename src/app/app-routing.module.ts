import { MainComponent } from "./PAGES/main/main.component";
import { ResumeComponent } from "./PAGES/resume/resume.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: "", component: MainComponent },
      { path: "resume", component: ResumeComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
