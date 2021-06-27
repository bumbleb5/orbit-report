import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    sourceList:Satellite[] = [];

    constructor() {

        this.sourceList = [];
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
                }
                
        
            });
        });
     
     }

}
