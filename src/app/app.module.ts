import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchjobsComponent } from './searchjobs/searchjobs.component';
import { JobsfoundComponent } from './jobsfound/jobsfound.component';
import { WebapiService } from './shared/service/webapi.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchjobsComponent,
    JobsfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [WebapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
