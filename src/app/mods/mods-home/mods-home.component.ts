import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  modalOpen = false;
  items = [
    { title: 'Why is the sky blue?', content: 'Sky is blue because it is!'},
    { title: 'What does the fox say?', content: 'AHI AHI AHI'},
    { title: 'What is the color of orange?', content: 'Uhh.. orange?!'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.modalOpen = !this.modalOpen;
  }

}
