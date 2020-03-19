import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from '@angular/fire/database';
import { ScoreDetail } from '../_models/score-detail';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  scoreListRef: AngularFireList<any>;
  scoreBoardRef: AngularFireObject<any>;

constructor(private db: AngularFireDatabase) { }

// Create
createScore(score: ScoreDetail) {
  return this.scoreListRef.push({
    name: score.name,
    course: score.courseId,
    score: score.score,
    date: score.date
  })
}

// Retrieve

getScoreList() {
  this.scoreListRef = this.db.list('/scoreBoard');
  return this.scoreListRef;
}

}
