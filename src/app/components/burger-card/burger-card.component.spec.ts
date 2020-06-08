import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerCardComponent } from './burger-card.component';

describe('BurgerCardComponent', () => {
  let component: BurgerCardComponent;
  let fixture: ComponentFixture<BurgerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
