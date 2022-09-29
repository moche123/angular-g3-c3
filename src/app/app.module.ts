import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { PipeDirectiveComponent } from './pages/pipe-directive/pipe-directive.component';
import { HeaderComponent } from './shared/header/header.component';
import { ParentComponent } from './pages/parent/parent.component';
import { HttpClientModule } from '@angular/common/http';
import { ChildComponent } from './pages/child/child.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SortAgePipe } from './pipes/sort-age.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    PipeDirectiveComponent,
    HeaderComponent,
    ParentComponent,
    ChildComponent,
    SortAgePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
