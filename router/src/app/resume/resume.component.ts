import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

    jobIndex: Number; //set up public class member

    constructor(
        private route: ActivatedRoute //make URL routes available to class
    ) { }

    ngOnInit() {
        this.route.params.forEach( param => this.jobIndex = param.id )
    }

}
