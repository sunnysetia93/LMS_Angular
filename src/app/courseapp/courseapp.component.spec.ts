import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseappComponent } from './courseapp.component';

describe('CourseappComponent', () => {
  let component: CourseappComponent;
  let fixture: ComponentFixture<CourseappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
