export class User
{
  
    id : string;
  
    username : string;
    email : string;
    userRole: string;
   

constructor(id:string="",username:string="",email:string="",userRole:string=""){
    this.id=id;
  
    this.username=username;
    this.email=email;
    this.userRole=userRole;

}

}