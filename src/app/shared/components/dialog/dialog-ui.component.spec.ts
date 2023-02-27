import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUiComponent } from './dialog-ui.component';

describe('DialogUiComponent', () => {
  let component: DialogUiComponent;
  let fixture: ComponentFixture<DialogUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogUiComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
