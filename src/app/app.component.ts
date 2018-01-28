import { Component } from '@angular/core';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a = 0.122;
  b = 500;
  name1 = "foad rastegar shariatpanahi";
  name2 = "Taghi";
  d = new Date(10, 12, 17);

  coffee = {
    name: 'coffee',
    condition: 'good'
  };

  username = new Promise((resolve, reject)=>{
    setTimeout(() => {
        return resolve("Foad");
      }
      , 5000);
  });

  grocery = [
    {
      name: 'milk',
      condition: 'expired'
    },
    {
      name: 'cheese',
      condition: 'expired'
    },
    {
      name: 'cheese',
      condition: 'expired'
    },
    {
      name: 'juice',
      condition: 'expired'
    },
    {
      name: 'jam',
      condition: 'good'
    },
    {
      name: 'honey',
      condition: 'good'
    }
  ];
  filterString = '';

addCoffee(){
  this.grocery.push(this.coffee);
}

}
