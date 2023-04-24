import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicCardDetailComponent } from './graphic-card-detail.component';

describe('GraphicCardDetailComponent', () => {
  let component: GraphicCardDetailComponent;
  let fixture: ComponentFixture<GraphicCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicCardDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
