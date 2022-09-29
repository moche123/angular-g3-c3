import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeDirectiveComponent } from './pipe-directive.component';

describe('PipeDirectiveComponent', () => {
  let component: PipeDirectiveComponent;
  let fixture: ComponentFixture<PipeDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
