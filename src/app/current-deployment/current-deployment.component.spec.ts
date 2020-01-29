import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentDeploymentComponent } from './current-deployment.component';

describe('CurrentDeploymentComponent', () => {
  let component: CurrentDeploymentComponent;
  let fixture: ComponentFixture<CurrentDeploymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentDeploymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentDeploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
