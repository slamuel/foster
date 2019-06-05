import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PetListComponent } from './pets/pet-list/pet-list.component';
import { PetNewComponent } from './pets/pet-new/pet-new.component';
import { PetUpdateComponent } from './pets/pet-update/pet-update.component';
import { PetDetailComponent} from './pets/pet-detail/pet-detail.component';
import { PetService } from './services';
import { AboutComponent } from './pets/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    PetDetailComponent,
    PetListComponent,
    PetNewComponent,
    PetUpdateComponent,
    AboutComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
