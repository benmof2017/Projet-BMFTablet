import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppcontentComponent } from './appcontent.component';

describe('AppcontentComponent', () => {
  let component: AppcontentComponent;
  let fixture: ComponentFixture<AppcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
