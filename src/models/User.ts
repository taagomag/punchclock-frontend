export default class User {
    private username: string;
    private password: string;

    constructor(username: string, password: string) {
      this.username = username;
      this.password = password;
    }

    
    public static emptyUser(): User {
        //@ts-ignore
        return new User;
    }
}