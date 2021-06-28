export class Satellite {

    name: string;
    type: string;
    orbitType: string;
    operational: boolean;
    launchDate: string;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }

    shouldShowWarning(): boolean {
        if (this.type === 'Space Debris' || this.type.toLowerCase() === 'space debris') {
            return true;
        } else {
            return false;
        }
    }

}
