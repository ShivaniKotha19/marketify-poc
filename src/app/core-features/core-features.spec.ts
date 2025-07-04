import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreFeatures } from './core-features';

describe('CoreFeatures', () => {
  let component: CoreFeatures;
  let fixture: ComponentFixture<CoreFeatures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreFeatures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreFeatures);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
