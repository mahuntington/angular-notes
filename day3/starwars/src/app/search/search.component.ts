import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Subject } from 'rxjs/Subject'

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    results;
    searchSubject = new Subject();

    constructor(
        private http: Http
    ) { }

    findCharacter(name){
        this.searchSubject.next(name);
    }

    ngOnInit() {
        this.searchSubject.subscribe(name => {
            this.http.get('http://swapi.co/api/people/?search=' + name)
                .subscribe(response => this.results = response.json().results);
        })
    }

}
