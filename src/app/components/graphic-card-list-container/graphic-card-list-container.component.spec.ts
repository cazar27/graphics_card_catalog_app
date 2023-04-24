import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicCardListContainerComponent } from './graphic-card-list-container.component';

describe('GraphicCardListContainerComponent', () => {
  let component: GraphicCardListContainerComponent;
  let fixture: ComponentFixture<GraphicCardListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicCardListContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicCardListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
