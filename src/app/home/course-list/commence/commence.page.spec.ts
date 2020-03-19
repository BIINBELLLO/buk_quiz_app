import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommencePage } from './commence.page';

describe('CommencePage', () => {
  let component: CommencePage;
  let fixture: ComponentFixture<CommencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
