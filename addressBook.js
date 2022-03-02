console.log("Welcome to the addressbook problem !!!! ");
class ContactDetails {
    constructor(...params) {
        this.firstName=params[0];
        this.lastName=params[1];
        this.address=params[2];
        this.city=params[3];
        this.state=params[4];
        this.zip=params[5];
        this.mobileNumber=params[6];
        this.email=params[7];
    }
}