import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsShowComponent } from './contracts-show.component';

describe('ContractsShowComponent', () => {
  let component: ContractsShowComponent;
  let fixture: ComponentFixture<ContractsShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractsShowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContractsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
