import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import courses from '../../../../data/quiz_table.json';
import { ScoreService } from 'src/app/_services/score.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  courseQuestions = [];
  selectedCourse = null;
  loading = false;
  leaderBoard = [];
  safeToProceed = false;
  coursesList = [
    {
    course_id: 1,
    course_code: 'GSP 2203',
    course_title: 'Science, Technology and Society'
    },
    {
    course_id: 2,
    course_code: 'GSP 1202/2201',
    course_title: 'Use of library, Study skills and ICT'
    },
    {
    course_id: 3,
    course_code: 'GSP 2205',
    course_title: 'Philosophy and Logic'
    },
    {
    course_id: 4,
    course_code: 'GSP 1201',
    course_title: 'Use of English'
    },
    {
    course_id: 5,
    course_code: 'GSP 2206',
    course_title: 'Peace Studies and Conflict Resolution'
    },
    {
    course_id: 6,
    course_code: 'GSP 2204',
    course_title: 'Foundation of Nigerian Culture, Government and Economy'
    },
    {
    course_id: 7,
    course_code: 'EEP 3201',
    course_title: 'Entrepreneurship and Innovation'
    },
    {
    course_id: 8,
    course_code: 'EEP 4201',
    course_title: 'Venture, Creation and Growth'
    },
  ];
  humanIcon = '../../../../assets/img/graduated.svg';
  selectedCourseLeaderBoard = [];

  constructor(private activeRoute: ActivatedRoute, private router: Router, private _score: ScoreService) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(paramMap => {
      if (paramMap.has('id')) {
        let id = paramMap.get('id');
        console.log(id)
        this.courseQuestions = courses.filter(el => {
          return el.course_id == +id;
        });
        this.selectedCourse = this.coursesList.find(el => {
          return el.course_id == +id;
        });
      } else {
        console.log('No ID Found');
      }
    })
    this.fetchScores();
    this.checkCourseQuestionAvailability();
  }

  fetchScores() {
    this.loading = true;
    this._score.getScoreList().valueChanges().subscribe(res => {
      console.log(res);
      this.loading = false;
      this.leaderBoard = res;
      this.fetchThisCourseLeaders();
    })
  }

  fetchThisCourseLeaders() {
    this.selectedCourseLeaderBoard = this.leaderBoard.filter(el => {
      return el.course == this.selectedCourse.course_id;
    })
    this.selectedCourseLeaderBoard.sort((a, b) => b.score - a.score);
  }

  commenceQuiz() {
    this.router.navigate(['commence', this.selectedCourse.course_id], {relativeTo: this.activeRoute})
  }

  checkCourseQuestionAvailability() {
    let cid = this.selectedCourse.course_id;
    let rez = courses.filter(el => {
      return el.course_id == cid;
    })

    if(rez.length > 20) {
      this.safeToProceed = true;
    }
  }

}
