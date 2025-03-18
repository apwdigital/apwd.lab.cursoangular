import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApwAdminComponent } from './apw-admin.component';

describe('ApwAdminComponent', () => {
  let component: ApwAdminComponent;
  let fixture: ComponentFixture<ApwAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApwAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApwAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
