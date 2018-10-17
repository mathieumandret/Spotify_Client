import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAlbumComponent } from './liste-album.component';

describe('ListeAlbumComponent', () => {
  let component: ListeAlbumComponent;
  let fixture: ComponentFixture<ListeAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
