import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CardComponent } from '../../../components/card/card.component';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  imports: [CardComponent],
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('networkContainer') networkContainer!: ElementRef<HTMLDivElement>;

  private isDragging = false;
  private startX = 0;
  private scrollLeft = 0;
  private autoScrollInterval: any;

  handleCardClick(data: string) {
    console.log('Data received from CardComponent:', data);
  }

  startDragging(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.pageX - this.networkContainer.nativeElement.offsetLeft;
    this.scrollLeft = this.networkContainer.nativeElement.scrollLeft;
  }

  drag(event: MouseEvent) {
    if (!this.isDragging) return;
    event.preventDefault();
    const x = event.pageX - this.networkContainer.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 2;
    this.networkContainer.nativeElement.scrollLeft = this.scrollLeft - walk;
  }

  stopDragging() {
    this.isDragging = false;
  }

  onWheel(event: WheelEvent) {
    event.preventDefault();
    const scrollSpeed = 100;
    this.networkContainer.nativeElement.scrollLeft += event.deltaY > 0 ? scrollSpeed : -scrollSpeed;
  }

  ngAfterViewInit() {
    // Add your initialization logic here
  }

  ngOnDestroy() {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }
}
