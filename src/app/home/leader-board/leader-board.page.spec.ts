import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeaderBoardPage } from './leader-board.page';

describe('LeaderBoardPage', () => {
  let component: LeaderBoardPage;
  let fixture: ComponentFixture<LeaderBoardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderBoardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeaderBoardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
