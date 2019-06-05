import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Pet } from '../../models';
import { PetService } from '../../services';

@Component({
  selector: 'app-pet-new',
  templateUrl: './pet-new.component.html',
  styleUrls: ['./pet-new.component.css']
})
export class PetNewComponent implements OnInit {
  pet = new Pet();
  errors: string[] = [];

  @Output()
  createPet = new EventEmitter<Pet>();

  constructor(
    private readonly router: Router,
    private readonly petService: PetService,
  ) {}

  ngOnInit() {}

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form', this.pet);

    // this.bikes.push(this.bike);
    // this.createBike.emit(this.bike);
    this.petService.createPet(this.pet).subscribe(pet => {
      console.log('pet new ', pet);
      // this.router.navigate(['/'])
      this.router.navigateByUrl('/');
    },
    (errorResponse) => {
      this.handleErrors(errorResponse.error);
      console.log(errorResponse);
    }
    );

    this.pet = new Pet();

    // console.log('this bikes', this.bikes);

    // form.reset();
  }
  private handleErrors(error: string | string[]) {
    this.errors = Array.isArray(error) ? error : [error];
  }
}

