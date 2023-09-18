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
import { LogoShrinkingComponent } from './components/page/logo-shrinking/logo-shrinking.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { TitleComponent } from './components/page/title/title.component';
import { SearchBarComponent } from './components/input/search-bar/search-bar.component';
import { RemoveAccentsPipe } from './pipes/remove-accents.pipe';
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { TopicComponent } from './components/topic/topic.component';
import { ColorPickerComponent } from './components/input/color-picker/color-picker.component';
import { PlayPageComponent } from './pages/play-page/play-page.component';
import { EditTopicPageComponent } from './pages/edit-topic-page/edit-topic-page.component';
import { EditCardComponent } from './components/edit-card/edit-card.component';
import { EditCardListComponent } from './components/edit-card-list/edit-card-list.component';
import { EditCardPageComponent } from './pages/edit-card-page/edit-card-page.component';
import { SlidebarTitleComponent } from './components/slidebar/slidebar-title/slidebar-title.component';
import { SlidebarComponent } from './components/slidebar/slidebar/slidebar.component';
import { SlidebarFooterComponent } from './components/slidebar/slidebar-footer/slidebar-footer.component';
import { SlidebarDeleteComponent } from './components/slidebar/slidebar-delete/slidebar-delete.component';
import { FooterButtonIconComponent } from './components/page/footer-button-icon/footer-button-icon.component';

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
    PlayPageComponent,
    SlidebarComponent,
    EditTopicPageComponent,
    SlidebarFooterComponent,
    EditCardComponent,
    EditCardListComponent,
    EditCardPageComponent,
    SlidebarTitleComponent,
    SlidebarDeleteComponent,
    FooterButtonIconComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, FormsModule, HttpClientModule, NgxColorsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
