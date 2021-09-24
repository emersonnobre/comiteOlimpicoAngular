import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtletaComponentComponent } from './atleta-component.component';

describe('AtletaComponentComponent', () => {
  let component: AtletaComponentComponent;
  let fixture: ComponentFixture<AtletaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtletaComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtletaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
