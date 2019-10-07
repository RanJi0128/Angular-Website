import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CONCERTSComponent } from './concerts.component';

describe('CONCERTSComponent', () => {
  let component: CONCERTSComponent;
  let fixture: ComponentFixture<CONCERTSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CONCERTSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CONCERTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
