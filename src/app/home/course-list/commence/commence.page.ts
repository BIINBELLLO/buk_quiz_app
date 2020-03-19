import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import courses from '../../../../data/quiz_table.json';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-commence',
  templateUrl: './commence.page.html',
  styleUrls: ['./commence.page.scss'],
})
export class CommencePage implements OnInit {

  selectedCourse = null;
  randomCourseList = [];
  entireCourseList = [];
  accumulatedResult = 0;
  finalResult = 0;
  resultsPageObject = {

  }
  selectedAnswers: Array<{choice: '', qstn: null, qstnVal: '', answer: ''}> = [];
  slideOptions = {
    initialSlide: 0,
    speed: 1000,
    autoplay: {
      delay: 30000,
    },
  }
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
  currentQn: any;
  currentQnIndex = 0

  startIndex = 0;
  endIndex = 0;

  quizFinished = false;

  clientTimeLeft = 60;
  serverTimeLeft = 60;

  timeToDisplay = '';

  constructor(private activeRoute: ActivatedRoute, private router: Router, public alertCtrl: AlertController) { }

  setTimeLeft() {
    this.setTimeState();
    let serverTimeLeft: number = Math.floor(this.serverTimeLeft);
    let minutes, seconds;
    let x = setInterval(() => {
      minutes = parseInt((serverTimeLeft / 60).toString(), 10);
      seconds = parseInt((serverTimeLeft % 60).toString(), 10);
      let paddedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
      let paddedSeconds = seconds < 10 ? `0${seconds}` : seconds.toString();
      this.timeToDisplay = `${paddedMinutes} : ${paddedSeconds}`
      if (--serverTimeLeft < 0) {
        clearInterval(x);
        this.quizFinished = true;
        setTimeout(() => {
          this.forceSubmit();
        }, 2000);
      }
    }, 1000); 
  }

  setTimeState() {
    this.clientTimeLeft = this.serverTimeLeft;
  }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(paramMap => {
      if(paramMap.has('id')) {
        let id = paramMap.get('id');
        this.selectedCourse = this.coursesList.find(el => {
          return el.course_id == +id;
        });
        this.entireCourseList = courses.filter( el => {
          return el.course_id == +id;
        });
        this.randomCourseList = this.getRandomCourses(this.entireCourseList, 20);
        console.log(this.randomCourseList);
      }
    });
    this.setTimeLeft();
  }

  getRandomCourses(arr, n) {
    let result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        let x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  getSelectedOption($event) {
    let val = $event.detail.value;
    let found = this.selectedAnswers.find(el => {
      return el.qstn == val.qstn;
    });
    if( found ) {
      this.selectedAnswers = this.selectedAnswers.filter(el => {
        return el.qstn != val.qstn;
      });
      this.selectedAnswers.push(val);
    } else {
      this.selectedAnswers.push(val);
    }
    console.log(this.selectedAnswers);
  }

  checkQuestionStatus(quiz_no) {
    let found = this.selectedAnswers.find(el => {
      return el.qstn == quiz_no;
    });
    if(found) {
      return true;
    } else {
      return false;
    }
  }

  calculateResult() {
    for (let index = 0; index < this.selectedAnswers.length; index++) {
      const element = this.selectedAnswers[index];
      if(element.choice == element.answer) {
            this.accumulatedResult++;
          }
    }
    this.finalResult = (this.accumulatedResult/20)*100;
    console.log(this.finalResult);
  }

  forceSubmit() {
    console.log('Submitted');
    this.calculateResult();
    let dataToSend = {
      result: this.finalResult,
      choices: this.selectedAnswers,
      course: this.selectedCourse.course_id
    }
    this.router.navigate(['result'], {
      relativeTo: this.activeRoute,
      state: {
        data: dataToSend
      }
    })
  }

    
  async presentCancelAlertConfirm() {
    const alert2 = await this.alertCtrl.create({
      header: 'Confirm!',
      message: 'Sure you want to go back without submitting?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.router.navigate(['home']);
          }
        }
      ]
    });

    await alert2.present();
  }

  
  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm!',
      message: 'Sure you want to submit the test now?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.forceSubmit();
          }
        }
      ]
    });

    await alert.present();
  }

}
