import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { PlayPageComponent } from './pages/play-page/play-page.component';
import { EditTopicPageComponent } from './pages/edit-topic-page/edit-topic-page.component';
import { EditCardPageComponent } from './pages/edit-card-page/edit-card-page.component';
import { TopicsPageComponent } from './pages/topics-page/topics-page.component';
import { ResultPageComponent } from './pages/result-page/result-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/landing' },
  { path: 'landing', component: LandingPageComponent },
  { path: 'topics', component: TopicsPageComponent },
  { path: 'edit-topic', component: EditTopicPageComponent },
  { path: 'edit-card', component: EditCardPageComponent },
  { path: 'play', component: PlayPageComponent },
  { path: 'result', component: ResultPageComponent },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: '/landing' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
