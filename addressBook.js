console.log("Welcome to the addressbook problem !!!! ");
class ContactDetails {
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.mobileNumber = params[6];
        this.emailId = params[7];
    }

    get firstName(){return this._firstName;}
    set firstName(firstName){
        let firstNameRegex=RegExp("^[A-Z]{1}[a-z]{2,}");
        if(firstNameRegex.test(firstName)){
            this._firstName=firstName;
        }else{
            throw 'First name is invalid';
        }
    }

    get lastName(){return this._lastName;}
    set lastName(lastName){
        let lastNameRegex=RegExp("^[A-Z]{1}[a-z]{2,}");
        if(lastNameRegex.test(lastName)){
            this._lastName=lastName;
        }else{
            throw 'Last name is invalid';
        }
    }
    
    get address(){return this._address;}
    set address(address){
        let addressRegex=RegExp("^[A-Za-z0-9]{4,}$");
        if(addressRegex.test(address)){
            this._address=address;
        }
        else{
            throw 'Address is invalid';
        }
    }

    get city(){return this._city;}
    set city(city){
        let cityRegex=RegExp("^[A-Za-z]{4,}$");
        if(cityRegex.test(city)){
            this._city=city;
        }else{
            throw 'City is invalid';
        }
    }

    get state(){return this._state;}
    set state(state){
        let stateRegex=RegExp("^[A-Za-z]{4,}$");
        if(stateRegex.test(state)){
            this._state=state;
        }else{
            throw 'State is invalid'
        }
    }

    get zip(){return this._zip;}
    set zip(zip){
        let zipRegex=RegExp("^[1-9]{1}[0-9]{5}$");
        if(zipRegex.test(zip)){
            this._zip=zip;
        }
        else{
            throw 'Zip is invalid';
        }
    }
    get mobileNumber(){return this._mobileNumber;}
    set mobileNumber(mobileNumber){
        let mobileRegex=RegExp("^[0-9]{2}[ ][6-9]{1}[0-9]{9}$");
        if(mobileRegex.test(mobileNumber)){
            this._mobileNumber=mobileNumber;
        }
        else{
            throw 'Mobile number is invalid';
        }
    }

    get emailId(){return this._emailId;}
    set emailId(emailId){
        let emailRegex=RegExp("^[0-9a-z]+[+_.-]?[0-9a-z]+[@][0-9a-z]+[.][a-z]{2,}[.]?[a-z]+$");
        if(emailRegex.test(emailId)){
            this._emailId=emailId;
        }else{
            throw 'Email id is invalid';
        }
    }

        toString(){
            return "FirstName: "+this.firstName+",LastName: "+this.lastName+",Address: "+this.address+",City: "
                    +this.city+",State: "+this.state+",Zip: "+this.zip+",MobileNumber: "+this.mobileNumber+",EmailId: "
                    +this.emailId;
        }    
    }
console.log("To add a contact : ")
let contacts = new Array();
function AddContact(firstName,lastName,address,city,state,zip,mobileNumber,emailId) {
    let contact = new ContactDetails(firstName,lastName,address,city,state,zip,mobileNumber,emailId);
    //contact added into array
    contacts.push(contact);
}
AddContact('Jack','Rao','Block','Manglore','Karnataka','123456','91 9876543211','jack_1234@gmail.com');
console.log(contacts.toString());
