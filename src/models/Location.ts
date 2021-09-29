import Entry from './Entry'

export default class Location {
    public locationName: string;
    public entries: Array<Entry>
 
    constructor(locationName: string, entries: Array<Entry>) {
        this.locationName = locationName;
        this.entries = entries;
    }

    public static emptyLocation(): Location {
        //@ts-ignore
        return new Location;
    }
}