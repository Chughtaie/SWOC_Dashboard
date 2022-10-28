export class LatLng {
    constructor(lat,lng) {
        this.lat= lat;
        this.lng= lng;        
      }
}

export class User {
    constructor(truckLoc,binLocs,dumpLoc) {
        this.truckLoc = truckLoc;
        this.binLocs = binLocs;
        this.dumpLoc = dumpLoc;
        this.routes = [this.truckLoc].concat(this.binLocs).concat(this.dumpLoc);
    }
 
}

