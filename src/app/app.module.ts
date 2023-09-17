/* --------------------------------- Module --------------------------------- */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgxColorsModule } from 'ngx-colors';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* -------------------------------- Component ------------------------------- */
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LogoShrinkingComponent } from './components/logo-shrinking/logo-shrinking.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { TitleComponent } from './components/title/title.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { RemoveAccentsPipe } from './pipes/remove-accents.pipe';
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { TopicComponent } from './components/topic/topic.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { ButtonIconComponent } from './components/button-icon/button-icon.component';
import { PlayPageComponent } from './pages/play-page/play-page.component';
import { SlidebarComponent } from './components/slidebar/slidebar.component';
import { EditTopicPageComponent } from './pages/edit-topic-page/edit-topic-page.component';
import { SlidebarRenameTopicComponent } from './components/slidebar-rename-topic/slidebar-rename-topic.component';
import { SlidebarFooterComponent } from './components/slidebar-footer/slidebar-footer.component';
import { SlidebarDeleteTopicComponent } from './components/slidebar-delete-topic/slidebar-delete-topic.component';
import { EditCardComponent } from './components/edit-card/edit-card.component';
import { EditCardListComponent } from './components/edit-card-list/edit-card-list.component';

/* ------------------------------------ - ----------------------------------- */
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LogoShrinkingComponent,
    HomePageComponent,
    ErrorPageComponent,
    TitleComponent,
    SearchBarComponent,
    RemoveAccentsPipe,
    TopicListComponent,
    TopicComponent,
    ColorPickerComponent,
    ButtonIconComponent,
    PlayPageComponent,
    SlidebarComponent,
    EditTopicPageComponent,
    SlidebarRenameTopicComponent,
    SlidebarFooterComponent,
    SlidebarDeleteTopicComponent,
    EditCardComponent,
    EditCardListComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, FormsModule, HttpClientModule, NgxColorsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
