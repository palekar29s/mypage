import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkgitComponent } from './linkgit.component';

describe('LinkgitComponent', () => {
  let component: LinkgitComponent;
  let fixture: ComponentFixture<LinkgitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkgitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkgitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
