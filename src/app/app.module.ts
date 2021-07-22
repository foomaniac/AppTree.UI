import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ApplicationsListComponent } from './applications-list/applications-list.component';
import { DataViewModule } from 'primeng/dataview';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MenuModule } from 'primeng/menu';
import { HomeComponent } from './home/home.component';
import { TableModule } from 'primeng/table';
import { ApplicationDetailsComponent } from './application-details/application-details.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationsListComponent,
    NavMenuComponent,
    HomeComponent,
    ApplicationDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DataViewModule,
    MenuModule,
    TableModule,
    CardModule,
    InputTextModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
