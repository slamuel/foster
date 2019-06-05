import { Component, OnInit } from '@angular/core';
import { Pet } from '../../models';
import { PetService } from '../../services';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  pets: Pet[] = [];
  selectedPet: Pet;

  constructor(private readonly petService: PetService) {}

  ngOnInit() {
    console.log(this.petService);
    this.petService.getPets().subscribe(pets => (this.pets = pets));
  }

  onSelect(pet: Pet) {
    console.log('selecting pet', pet);
    // assignment       = (expression)            (if true) : (if false)
    this.selectedPet = this.selectedPet === pet ? null : pet;

    // if (this.selectedBook === book) {
    //   this.selectedBook = null;
    // } else {
    //   this.selectedBook = book;
    // }
  }

  onCreate(pet: Pet) {
    console.log('creating pet', pet);

    this.petService.createPet(pet).subscribe(createdPet => {
      this.pets = [...this.pets, createdPet];
      // this.books.push(createdBook);
      console.log(createdPet);
    });
  }

  onDelete(id: number) {
    console.log('deleting pet', id);
    this.petService.removePet(id).subscribe(deletedPet => {
      this.pets = this.pets.filter(pet => pet._id !== deletedPet._id);
    });
  }

  onEvent(event: Event) {
    event.stopPropagation();
    console.log('event triggered');
  }
}
