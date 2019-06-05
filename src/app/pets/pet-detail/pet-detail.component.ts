import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { PetService } from '../../services';
import { Pet } from 'src/app/models';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})

export class PetDetailComponent implements OnInit {
  @Input()
  pet: Pet;
  pets: Pet[] = [];

  constructor(
    private readonly router: Router,
    private readonly petService: PetService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get('pet_id')),
        switchMap(id => this.petService.getPet(id))
      )
      .subscribe(pet => (this.pet = pet));
  }
  onDelete(id: number) {
    console.log('deleting pet', id);
    this.petService.removePet(id).subscribe(deletedPet => {
      this.pets = this.pets.filter(pet => pet._id !== deletedPet._id);
      this.router.navigateByUrl('/');
    });
  }
}
