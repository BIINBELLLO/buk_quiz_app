import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoreDetail } from 'src/app/_models/score-detail';
import { ScoreService } from 'src/app/_services/score.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

  testResult;
  totalCorrect: 0;
  showFullResult = false;
  showSave = false;
  name: string = '';
  score: ScoreDetail = new ScoreDetail();
  error = false;

  constructor(private router: Router, private _scoreService: ScoreService, public alertController: AlertController) { }

  ngOnInit() {
    this.testResult = window.history.state.data;
    console.log(this.testResult);
    this.totalCorrect = this.getTotalCorrect();
    if(!this.testResult) {
      this.router.navigate(['/home']);
    }
  }

  getTotalCorrect() {
    let choices = this.testResult.choices;
    let correct = choices.filter(element => {
      return element.choice == element.answer
    });
    return correct.length;
  }

  toggleShowResult() {
    this.showFullResult = !this.showFullResult;
  }

  toggleShowSave() {
    this.showSave = !this.showSave;
  }

  returnToHome() {
    this.presentAlertConfirm();
  }

  saveToLeaderBoard() {
    if (this.name == '') {
      this.presentNameErrorAlert();
      return;
    }
    this.score.date = new Date();
    this.score.score = this.testResult.result;
    this.score.name = this.name;
    this.score.courseId = this.testResult.course;
    console.log(this.score);
    this._scoreService.createScore(this.score).then(res => {
      console.log(res);
      this.presentSuccessAlert();
    })
    .catch(err => {
      console.log(err);
      this.presentErrorAlert();
    })
  }

  async presentNameErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Name Error',
      message: 'No name entered, please enter the name!',
      buttons: [{
        text: 'Okay',
          role: 'cancel',
          cssClass: 'secondary'
      }]
    });

    await alert.present();
  }

  async presentErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Network Error',
      message: 'Error in network connection, please try again',
      buttons: [{
        text: 'Okay',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
      }]
    });

    await alert.present();
  }

  async presentSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      subHeader: 'Operation Successful',
      message: 'Your result has been saved successfully',
      buttons: [{
        text: 'Okay',
          role: 'cancel',
          cssClass: 'success',
          handler: (blah) => {
            this.router.navigate(['/home']);
          }
      }]
    });

    await alert.present();
  }


  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Return to homepage without saving result?',
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
            this.router.navigate(['/home']);
          }
        }
      ]
    });

    await alert.present();
  }

}
