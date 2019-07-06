import { MainComponent } from "./PAGES/main/main.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([{ path: "", component: MainComponent }])],
  exports: [RouterModule]
})
export class AppRoutingModule {}
