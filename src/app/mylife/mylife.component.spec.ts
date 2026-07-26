import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MylifeComponent } from './mylife.component';

describe('MylifeComponent', () => {
  let component: MylifeComponent;
  let fixture: ComponentFixture<MylifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MylifeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MylifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
