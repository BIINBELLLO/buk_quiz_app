import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.page.html',
  styleUrls: ['./course-list.page.scss'],
})
export class CourseListPage implements OnInit {

  courseDefaultLogo = '../../../assets/img/li-icon.png';
  viewStyle = 'list';
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
  constructor(private router: Router, private activeRoute: ActivatedRoute) { }


  ngOnInit() {
  }

  changeView($event) {
    // console.log($event.detail.value);
    this.viewStyle = $event.detail.value;
  }

  goToCourse(id) {
    console.log(id);
    this.router.navigate([id], {relativeTo: this.activeRoute})
  }

}
