import { Component, OnInit } from '@angular/core';
import { Developer} from '../common/developer.model';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {
  public skills : Skill[] = [ 
    new Skill('Angular','http://monLogoAngular.com','http://monsiteAngular.com'),
    new Skill ('Java','http://monLogoJava.com','http://monsiteJava.com'),
  ]

  constructor() { }

  public developer: Developer [] =[
    {
      lastName: 'Pontheau',
      firstName: 'Hugues',
      age :  35,
      sexe: 'Masculin',
      bio: 'Jeune développeur de Haut Vol',
      skills: this.skills
    },
  ]

  ngOnInit() {
  }

}
