import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSmurfComponent } from './detail-smurf.component';

describe('DetailSmurfComponent', () => {
  let component: DetailSmurfComponent;
  let fixture: ComponentFixture<DetailSmurfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailSmurfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailSmurfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
