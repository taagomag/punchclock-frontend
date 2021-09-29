import Entry from './Entry'

export default class Category {
    public categoryName: string;
    public entries: Array<Entry>;

    constructor(categoryName: string, entries: Array<Entry>) {
        this.categoryName = categoryName;
        this.entries = entries;

    }
    public static emptyCategory(): Category {
        //@ts-ignore
        return new Category;
    }
    
}