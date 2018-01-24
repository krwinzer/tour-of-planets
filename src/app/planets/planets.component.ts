import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planet: Planet = {
    name: 'Mercury',
    diameter: 100,
    distance_from_sun: 100,
    orbit_in_days: 100,
    orbit_speed_mph: 100,
    rotation_speed: 100,
    high_temp_f: 100,
    low_temp_f: 100,
    num_of_moons: 100,

  };

  constructor() { }

  ngOnInit() {
  }

}
