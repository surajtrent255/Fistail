import { AfterViewInit, Component, OnInit } from '@angular/core';
import { JqueryService } from './jquery.service';
declare function backToTopFunc():void
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'frontfishtail';

  constructor(private jqueryService: JqueryService) {}

  ngOnInit() {
    this.jqueryService.init();
  }

  ngAfterViewInit(): void {
    
  }
}
