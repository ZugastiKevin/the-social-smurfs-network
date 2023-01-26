import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSmurfsComponent } from './list-smurfs.component';

describe('ListSmurfsComponent', () => {
  let component: ListSmurfsComponent;
  let fixture: ComponentFixture<ListSmurfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSmurfsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSmurfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
