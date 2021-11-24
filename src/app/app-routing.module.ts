import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './views/overview/overview.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: '', redirectTo: '/overview', pathMatch: 'full' },

  // todo: add rest of views

  { path: '**', redirectTo: '/overview' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
