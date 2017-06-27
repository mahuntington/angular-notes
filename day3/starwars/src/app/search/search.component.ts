import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Subject } from 'rxjs/Subject'
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { SearchService } from './search.service'

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    results;
    searchSubject = new Subject();

    constructor(
        private http: Http,
        private searchService: SearchService
    ) { }

    findCharacter(name){
        this.searchSubject.next(name);
    }

    ngOnInit() {
        this.searchSubject
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(name => {
                this.searchService.createAPIObservable(name)
                    .subscribe(response => this.results = response.json().results);
            })
    }

}
