import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { PlayPageComponent } from './pages/play-page/play-page.component';
import { EditTopicPageComponent } from './pages/edit-topic-page/edit-topic-page.component';
import { EditCardPageComponent } from './pages/edit-card-page/edit-card-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/landing' },
  { path: 'landing', component: LandingPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'edit-topic', component: EditTopicPageComponent },
  { path: 'edit-card', component: EditCardPageComponent },
  { path: 'play', component: PlayPageComponent },
  { path: 'error', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
