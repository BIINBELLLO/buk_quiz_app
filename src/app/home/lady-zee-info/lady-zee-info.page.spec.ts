import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LadyZeeInfoPage } from './lady-zee-info.page';

describe('LadyZeeInfoPage', () => {
  let component: LadyZeeInfoPage;
  let fixture: ComponentFixture<LadyZeeInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LadyZeeInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LadyZeeInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
