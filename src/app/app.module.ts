import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FlightsLayoutComponent } from './flights-layout/flights-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePickerComponent } from './datePicker/datePicker.component';
import { EnddateComponent } from './enddate/enddate.component';
import { PlaceselectComponent } from './placeselect/placeselect.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    FlightsLayoutComponent,
    DatePickerComponent,
    EnddateComponent,
    PlaceselectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
