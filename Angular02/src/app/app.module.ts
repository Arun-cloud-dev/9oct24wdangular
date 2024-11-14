import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ServicesComponent } from "./services/services.component";
import { ContactComponent } from "./contact/contact.component";
import { AppRoutingModule } from "./app-routing.module"; // Corrected import path
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule ,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
