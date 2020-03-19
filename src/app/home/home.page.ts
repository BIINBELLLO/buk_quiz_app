import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  // @ViewChild('slider', {static: false}) slider: ElementRef<IonSlides>
  slideOptions = {
    initialSlide: 0,
    speed: 1000,
    autoplay: {
      delay: 3000,
    },
  }

  imageArray: Array<any> = [
    {
    imgUrl: '../../assets/img/1.jpg',
    },
    {
    imgUrl: '../../assets/img/2.jpg',
    },
    {
    imgUrl: '../../assets/img/3.jpg',
    },
    {
    imgUrl: '../../assets/img/4.jpg',
    },
    {
    imgUrl: '../../assets/img/5.jpg',
    },
    {
    imgUrl: '../../assets/img/6.jpg',
    },
    {
    imgUrl: '../../assets/img/7.jpg',
    },
    {
    imgUrl: '../../assets/img/8.jpg',
    },
    {
    imgUrl: '../../assets/img/9.jpg',
    },
    {
    imgUrl: '../../assets/img/10.jpg',
    },
    {
    imgUrl: '../../assets/img/11.jpg',
    },
    {
    imgUrl: '../../assets/img/12.jpg',
    },
    {
    imgUrl: '../../assets/img/13.jpg',
    },
    {
    imgUrl: '../../assets/img/14.jpg',
    },
    {
    imgUrl: '../../assets/img/15.jpg',
    },
    {
    imgUrl: '../../assets/img/16.jpg',
    },
    {
    imgUrl: '../../assets/img/17.jpg',
    },
    {
    imgUrl: '../../assets/img/18.jpg',
    }
  ];
  constructor(private router: Router, private activeRoute: ActivatedRoute) {}
  ngOnInit(): void {

  }

  gotToCourseList() {
    this.router.navigate(['courses'], {relativeTo: this.activeRoute})
  }

  

}
