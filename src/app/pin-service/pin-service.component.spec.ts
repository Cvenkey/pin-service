import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinServiceComponent } from './pin-service.component';

describe('PinServiceComponent', () => {
  let component: PinServiceComponent;
  let fixture: ComponentFixture<PinServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PinServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PinServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
