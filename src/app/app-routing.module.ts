import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './views/overview/overview.component';
import { OverviewSummaryComponent } from './views/overview/overview-summary/overview-summary.component';
import { PagesComponent } from './views/pages/pages.component';
import { PagesHomeComponent } from './views/pages/pages-home/pages-home.component';
import { PageDetailsComponent } from './views/pages/page-details/page-details.component';
import { PageDetailsSummaryComponent } from './views/pages/page-details/page-details-summary/page-details-summary.component';
import { PageDetailsSearchAnalyticsComponent } from './views/pages/page-details/page-details-search-analytics/page-details-search-analytics.component';
import { PageDetailsWebtrafficComponent } from './views/pages/page-details/page-details-webtraffic/page-details-webtraffic.component';
import { PageDetailsFeedbackComponent } from './views/pages/page-details/page-details-feedback/page-details-feedback.component';

const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  {
    path: 'overview',
    component: OverviewComponent,
    children: [
      { path: '', redirectTo: 'summary', pathMatch: 'full' },
      { path: 'summary', component: OverviewSummaryComponent },
      // todo: add the rest of the overview paths & generate components
    ],
  },
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: '', component: PagesHomeComponent, pathMatch: 'full' },
      {
        path: 'details',
        component: PageDetailsComponent,
        children: [
          { path: '', redirectTo: 'summary', pathMatch: 'full' },
          { path: 'summary', component: PageDetailsSummaryComponent },
          { path: 'webtraffic', component: PageDetailsWebtrafficComponent },
          { path: 'search_analytics', component: PageDetailsSearchAnalyticsComponent },
          { path: 'feedback', component: PageDetailsFeedbackComponent },
        ],
      }
    ],
  },

  // todo: add rest of views

  { path: '**', redirectTo: 'overview' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
