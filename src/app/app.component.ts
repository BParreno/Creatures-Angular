import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Creatures-Angular';
  allModels = [
    { id: 1, title: 'Card1', logo: 'assets/bear.png', description: 'This is a Bear', group: 'Ursids' },
    { id: 2, title: 'Card2', logo: 'assets/hummingbird.png', description: 'This is a Hummingbird', group: 'Birds' },
    { id: 3, title: 'Card3', logo: 'assets/barracuda.png', description: 'This is a Barracuda', group: 'Fishes' },
    { id: 4, title: 'Card4', logo: 'assets/tiger.png', description: 'This is a Tiger', group: 'Panthers' },
    { id: 5, title: 'Card5', logo: 'assets/komodo-dragon.png', description: 'This is a Komodo Dragon', group: 'Reptiles' },
    { id: 6, title: 'Card6', logo: 'assets/butterfly.png', description: 'This is a Butterfly', group: 'Insects' },
    { id: 7, title: 'Card7', logo: 'assets/cat.png', description: 'This is a Cat', group: 'Felines' },
    { id: 8, title: 'Card8', logo: 'assets/dog.png', description: 'This is a Dog', group: 'Canines' },
    { id: 9, title: 'Card9', logo: 'assets/elephant.png', description: 'This is an Elephant', group: 'Pachyderms' },
    { id: 10, title: 'Card10', logo: 'assets/crocodile.png', description: 'This is a Crocodile', group: 'Reptiles' },
    { id: 11, title: 'Card11', logo: 'assets/lynx.png', description: 'This is a Lynx', group: 'Felines' },
    { id: 12, title: 'Card12', logo: 'assets/giraffe.png', description: 'This is a Giraffe', group: 'Ungulates' },
    { id: 13, title: 'Card13', logo: 'assets/horse.png', description: 'This is a Horse', group: 'Ungulates' },
    { id: 14, title: 'Card14', logo: 'assets/eagle.png', description: 'This is an Eagle', group: 'Birds' },
    { id: 15, title: 'Card15', logo: 'assets/shark.png', description: 'This is a Shark', group: 'Fishes' },
    { id: 16, title: 'Card16', logo: 'assets/penguin.png', description: 'This is a Penguin', group: 'Birds' },
    { id: 17, title: 'Card17', logo: 'assets/tortoise.png', description: 'This is a Tortoise', group: 'Reptiles' },
    { id: 18, title: 'Card18', logo: 'assets/frog.png', description: 'This is a Frog', group: 'Amphibians' },
    { id: 19, title: 'Card19', logo: 'assets/narwhal.png', description: 'This is a Narwhal', group: 'Cetaceans' },
    { id: 20, title: 'Card20', logo: 'assets/whale.png', description: 'This is a Whale', group: 'Cetaceans' },
    { id: 21, title: 'Card21', logo: 'assets/dolphin.png', description: 'This is a Dolphin', group: 'Cetaceans' },
    { id: 22, title: 'Card22', logo: 'assets/owl.png', description: 'This is an Owl', group: 'Birds' },
    { id: 23, title: 'Card23', logo: 'assets/falcon.png', description: 'This is a Falcon', group: 'Birds' },
    { id: 24, title: 'Card24', logo: 'assets/snake.png', description: 'This is a Snake', group: 'Reptiles' },
    { id: 25, title: 'Card25', logo: 'assets/polar-bear.png', description: 'This is a Polar Bear', group: 'Ursids' },
    { id: 26, title: 'Card26', logo: 'assets/kangaroo.png', description: 'This is a Kangaroo', group: 'Marsupials' },
    { id: 27, title: 'Card27', logo: 'assets/red-panda.png', description: 'This is a Red Panda', group: 'Ailuridae' },
    { id: 28, title: 'Card28', logo: 'assets/raccoon.png', description: 'This is a Raccoon', group: 'Procyonidae' },
    { id: 29, title: 'Card29', logo: 'assets/otter.png', description: 'This is an Otter', group: 'Mustelidae' },
    { id: 30, title: 'Card30', logo: 'assets/sea-otter.png', description: 'This is a Sea Otter', group: 'Mustelidae' },
    { id: 31, title: 'Card31', logo: 'assets/deer.png', description: 'This is a Deer', group: 'Ungulates' },
    { id: 32, title: 'Card32', logo: 'assets/wolf.png', description: 'This is a Wolf', group: 'Canines' },
    { id: 33, title: 'Card33', logo: 'assets/fox.png', description: 'This is a Fox', group: 'Canines' },
    { id: 34, title: 'Card34', logo: 'assets/zebra.png', description: 'This is a Zebra', group: 'Ungulates' },
    { id: 35, title: 'Card35', logo: 'assets/rhinoceros.png', description: 'This is a Rhinoceros', group: 'Pachyderms' },
    { id: 36, title: 'Card36', logo: 'assets/condor.png', description: 'This is an Andean Condor', group: 'Birds' },
    { id: 37, title: 'Card37', logo: 'assets/blue-jay.png', description: 'This is a Blue Jay', group: 'Birds' },
    { id: 38, title: 'Card38', logo: 'assets/panda.png', description: 'This is a Panda', group: 'Ursids' },
    { id: 39, title: 'Card39', logo: 'assets/snow-leopard.png', description: 'This is a Snow Leopard', group: 'Panthers' },
    { id: 40, title: 'Card40', logo: 'assets/jaguar.png', description: 'This is a Jaguar', group: 'Panthers' },
    { id: 41, title: 'Hydra', logo: 'public\hydra.jpg', description: 'This is a Hydra', group: 'Greek' },
    { id: 42, title: 'Hecatoncheires', logo: 'assets/hecatoncheires.png', description: 'This is a Hecatoncheires', group: 'Greek' },
    { id: 43, title: 'Cetus', logo: 'assets/cetus.png', description: 'This is a Cetus', group: 'Greek' },
    { id: 44, title: 'Gorgon', logo: 'assets/gorgon.png', description: 'This is an Gorgon', group: 'Greek' },
    { id: 45, title: 'Cyclops', logo: 'assets/cyclops.png', description: 'This is an Cyclops', group: 'Greek' },
    { id: 46, title: 'Griffin', logo: 'assets/griffin.png', description: 'This is a Griffin', group: 'Greek' },
    { id: 47, title: 'Card47', logo: 'assets/spectacled-bear.png', description: 'This is a Spectacled Bear', group: 'Ursids' },
    { id: 48, title: 'Card48', logo: 'assets/duck.png', description: 'This is a Duck', group: 'Birds' },
    { id: 49, title: 'Card49', logo: 'assets/goose.png', description: 'This is a Goose', group: 'Birds' },
    { id: 50, title: 'Card50', logo: 'assets/raven.png', description: 'This is a Raven', group: 'Birds' }
  ];
  models: { id: number, title: string, logo: string, description: string, group: string }[] = [];

  filterByGroup() {
    const group = prompt('Enter the group to filter by (e.g., Insects, Fishes, Amphibians, Reptiles, Birds, Cetaceans, Ungulates, Marsupials, Canines, Felines, Panthers, Ursids, Ailuridae, Mustelidae, Procyonidae, Greek):');
    console.log(`Group entered: ${group}`);
    if (group) {
      const filteredModels = this.allModels.filter(item => item.group.toLowerCase() === group.trim().toLowerCase());
      console.log(`Filtered models:`, filteredModels);
      this.models = filteredModels;
    } else {
      this.models = [];
    }
    console.log(`Models to display:`, this.models);
  }
}

