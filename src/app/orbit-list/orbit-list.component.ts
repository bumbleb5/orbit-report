import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
    selector: 'app-orbit-list',
    templateUrl: './orbit-list.component.html',
    styleUrls: ['./orbit-list.component.css']
})
export class OrbitListComponent implements OnInit {

    nameSorted: boolean;
    typeSorted: boolean;

    @Input()
    satellites: Satellite[] = [];

    constructor() { 
        this.nameSorted = false;
        this.typeSorted = false;
    }

    ngOnInit(): void {
    }

    sort(column: keyof Satellite): void {

        if (column === "name") {
            if (this.nameSorted) {
                this.satellites.reverse();
            } else {
                this.satellites.sort((a: Satellite, b: Satellite): number => {
                    if (a[column] < b[column]) {
                        return -1;
                    } else if (a[column] > b[column]) {
                        return 1;
                    }
                    return 0;
                });
                this.nameSorted = true;
                this.typeSorted = false;
            }
        } else if (column === "type") {
            if (this.typeSorted) {
                this.satellites.reverse();
            } else {
                this.satellites.sort((a: Satellite, b: Satellite): number => {
                    if (a[column] < b[column]) {
                        return -1;
                    } else if (a[column] > b[column]) {
                        return 1;
                    }
                    return 0;
                });
                this.typeSorted = true;
                this.nameSorted = false;
            }
        }
    }

}
