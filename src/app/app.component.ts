import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    sourceList:Satellite[];

    displayList: Satellite[];

    constructor() {

        this.sourceList = [];

        this.displayList = [];

        let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
     
        window.fetch(satellitesUrl).then((response) => {
            response.json().then((data) => {
        
                let fetchedSatellites = data.satellites;
                // TODO: loop over satellites
                for (let i = 0; i < fetchedSatellites.length; i++) {
                    let currentSatellite = fetchedSatellites[i];
                    // TODO: create a Satellite object using new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
                    let newSatellite:Satellite = new Satellite(currentSatellite.name, currentSatellite.type, currentSatellite.launchDate, currentSatellite.orbitType, currentSatellite.operational);
                    // TODO: add the new Satellite object to sourceList using: this.sourceList.push(satellite);
                    this.sourceList.push(newSatellite);
                    this.displayList = this.sourceList.slice(0);
                }
                
        
            });
        });

        
     
    }

    search(searchTerm: string): void {
        let matchingSatellites: Satellite[] = [];
        searchTerm = searchTerm.toLowerCase();
        // console.log(`Search Term: ${searchTerm}`);
        for (let i = 0; i < this.sourceList.length; i++) {
            let name = this.sourceList[i].name.toLowerCase();
            if (name.indexOf(searchTerm) !== -1) {
                matchingSatellites.push(this.sourceList[i]);
            }
        }
        // console.log(`Matching satellites: ${matchingSatellites}`);
        this.displayList = matchingSatellites;
    }

}
