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
                    +this.emailId+ "\n";
        }    
}

//UC3:Add a contact into array
console.log("To add a contact : ")
let contacts = new Array();
function AddContact(firstName,lastName,address,city,state,zip,mobileNumber,emailId) {
    //to check for duplicate contact in the addressbook
    if(contacts.some(x=> x.firstName == firstName)){
        console.log("Person exists !!!!!");
        return;
    }
    let contact = new ContactDetails(firstName,lastName,address,city,state,zip,mobileNumber,emailId);
    //contact added into array
    contacts.push(contact);
}
AddContact('Jack','Rao','Block','Bangalore','Karnataka','123456','91 9876543211','jack_1234@gmail.com');
AddContact('Mac','Rao','Block','Chennai','Tamilnadu','123457','91 9876543222','mac_1234@gmail.com');
AddContact('Sam','Rao','Block','Mumbai','Maharashta','123458','91 9876543233','sam_1234@gmail.com');
AddContact('Rock','Rao','Block','Gandhinagar','Gujarat','123459','91 9876543244','rock_1234@gmail.com');

console.log(contacts.toString());

//UC7:Find a contact and update it using first name
function obtainingContactWithName(firstName){
    for(let i = 0; i < contacts.length; i++){
        if(contacts[i].firstName == firstName){
            return i;
        }
    }
    return -1;
}

//UC4:editing a contact using first name
let contactindex=obtainingContactWithName('Mac');
if(contactindex != -1){
    console.log("Before Updation : ");
    console.log(contacts.toString());
    contacts[contactindex].firstName='Macson';
    contacts[contactindex].mobileNumber='91 9983333335';
    contacts[contactindex].zip='456789'
    console.log("Contacts after updation");
    console.log(contacts.toString());
}else{
    console.log("Sorry....contact not foud");
}

//UC5:deleting a contact from array using name
function deleteContactByName(firstName){
    for(let i =0; i < contacts.length; i++){
        if(contacts[i].firstName == firstName){
            //removes the contact from array
            contacts.pop(i);
            console.log(contacts.toString());
        }
    }
}
deleteContactByName('Sam');
console.log("Contact deleted successfully");

//UC6:count people
//using reduce method
let count = contacts.reduce(((count) => {count +=1;return count;}),0);
console.log("Number of persons in adressBook is : " +count);

//UC8:to search by city or state
function SearchCityOrState(cityOrState){
    //using filter method
    if(contacts.filter((obj => obj.city == cityOrState)||(obj => obj.state == cityOrState))){
        console.log(contacts.toString());
    }
}
//search for city
console.log("Searching with city");
SearchCityOrState('Mumbai');
//search for state...
console.log("Searching with state ");
SearchCityOrState('Karnataka');

// get No.of persons by city or state
function getCountByCity(city) {
    return contacts.filter(x => x.city == city).reduce((countOfContact, x) => countOfContact += 1, 0);
}
function getCountByState(state) {
    return contacts.filter(x => x.state == state).reduce((countOfContact, x) => countOfContact += 1, 0);
}
console.log("Number of contacts present in the city:  " + getCountByCity("Hubli"));
console.log("Number of contacts present in the state: " + getCountByState("Maharashtra"));

//Sort the contacts by name
console.log("Sorting array by names");
let sortedArray = new Array();
contacts.forEach(contact => sortedArray.push(contact.toString()));
sortedArray.sort();
console.log(sortedArray);