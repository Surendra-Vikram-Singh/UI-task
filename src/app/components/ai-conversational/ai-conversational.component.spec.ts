import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiConversationalComponent } from './ai-conversational.component';

describe('AiConversationalComponent', () => {
  let component: AiConversationalComponent;
  let fixture: ComponentFixture<AiConversationalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiConversationalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiConversationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
