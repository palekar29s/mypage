import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewwwwComponent } from './newwww.component';

describe('NewwwwComponent', () => {
  let component: NewwwwComponent;
  let fixture: ComponentFixture<NewwwwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewwwwComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewwwwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
