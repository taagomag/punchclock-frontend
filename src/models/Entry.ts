export default class Entry {
    public checkIn: Date;
    public checkOut: Date;
 
    constructor(checkIn: Date, checkOut: Date) {
        this.checkIn = checkIn;
        this.checkOut = checkOut;
    }

    public static emptyEntry(): Entry {
        //@ts-ignore
        return new Entry;
    }
}