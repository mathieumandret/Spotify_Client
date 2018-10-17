import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeChanteursComponent } from './liste-chanteurs.component';

describe('ListeChanteursComponent', () => {
  let component: ListeChanteursComponent;
  let fixture: ComponentFixture<ListeChanteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeChanteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeChanteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
