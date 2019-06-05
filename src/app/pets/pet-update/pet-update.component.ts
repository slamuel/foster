import { Component, OnInit, Input } from '@angular/core';
import { PetService } from './../../services';
import { map, switchMap } from 'rxjs/operators';
import { Pet } from 'src/app/models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pet-update',
  templateUrl: './pet-update.component.html',
  styleUrls: ['./pet-update.component.css']
})
export class PetUpdateComponent implements OnInit {
  @Input()
  pet: Pet;
  errors: string[] = []; // may not be needed


  constructor(
    private readonly petService: PetService,
    private readonly route: ActivatedRoute,
    private readonly router: Router) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get('pet_id')),
        switchMap(id => this.petService.getPet(id))
      )
      .subscribe(pet => (this.pet = pet));
  }
  onUpdate(event: Event) {
    event.preventDefault(); // why is this not halting the error?
    this.petService.updatePet(this.pet)
    .subscribe(
      (data) => {
        console.log('pet updated', data);
        this.router.navigateByUrl('/');
      },
      (errorResponse) => {
        this.handleErrors(errorResponse.error);
        console.log(errorResponse);
      }
      );
  }
  private handleErrors(error: string | string[]) {
    this.errors = Array.isArray(error) ? error : [error];
  }
}
