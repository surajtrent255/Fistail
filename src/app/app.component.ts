import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
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

  @ViewChild("nextCarousel") viewCarousel !: ElementRef;
  constructor(private jqueryService: JqueryService, private renderer: Renderer2) {}

  ngOnInit() {
    this.jqueryService.init();
  }

  ngAfterViewInit(): void {
    setInterval(() => {
      this.viewCarousel.nativeElement.click();
    }, 3000);
  }


}
