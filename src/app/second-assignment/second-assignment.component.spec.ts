import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondAssignmentComponent } from './second-assignment.component';

describe('SecondAssignmentComponent', () => {
  let component: SecondAssignmentComponent;
  let fixture: ComponentFixture<SecondAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondAssignmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
