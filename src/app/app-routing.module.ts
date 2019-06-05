import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetListComponent } from './pets/pet-list/pet-list.component';
import { PetNewComponent } from './pets/pet-new/pet-new.component';
import { PetUpdateComponent } from './pets/pet-update/pet-update.component';
import { PetDetailComponent} from './pets/pet-detail/pet-detail.component';
import { AboutComponent } from './pets/about/about.component';

const routes: Routes = [
  {path: '', redirectTo: 'pets', pathMatch: 'full'},
//   {path: 'pet', component: PetComponent},
//   {path: 'pet/new', component: NewPetComponent},
//   {path: 'pet/:id/edit', component: UpdatePetComponent},
//   {path: 'pet/:id', component: PetDetailComponent}
// ];
{
  path: 'pets',
  children: [
      {
        path: '',
        component: PetListComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'new',
        component: PetNewComponent
      },
      {
        path: ':pet_id',
        component: PetDetailComponent
      },
      {
        path: ':pet_id/edit',
        component: PetUpdateComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'pets',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
