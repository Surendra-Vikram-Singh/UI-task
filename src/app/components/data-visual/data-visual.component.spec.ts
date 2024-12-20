import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataVisualComponent } from './data-visual.component';

describe('DataVisualComponent', () => {
  let component: DataVisualComponent;
  let fixture: ComponentFixture<DataVisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataVisualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
