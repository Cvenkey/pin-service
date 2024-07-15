import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersistResultsComponent } from './persist-results.component';

describe('PersistResultsComponent', () => {
  let component: PersistResultsComponent;
  let fixture: ComponentFixture<PersistResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersistResultsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersistResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
