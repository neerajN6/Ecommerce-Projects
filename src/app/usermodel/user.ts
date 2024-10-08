export class User {
  id!: number;
  username!: string;
  role!: string;
  email!: string;
  password!: string;


  constructor() {
    this.email = "@gmail.com";
    this.username = "";
    this.password = "";
    this.role = "USER";
  }
}
