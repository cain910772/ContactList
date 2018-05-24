


//make new contact generator
const contactGenerator = function*(startFrom =0) {
    let newContact=1

    while (true) {
    yield startFrom + newContact
    newContact++
    }
}
const contactMaker = contactGenerator()
//make contact factory 

const contactFactory = (name,phone_number, address) =>{
    const newContact = Object.create(null,{
        "id":{value:contactMaker.next().value
        },
        "name":{
            value:name,
            enumerable:true
        },
        "phone_number":{
            value:phone_number,
            enumerable:true
        },
        "address":{
            address:address,
            enumerable:true
        }
    })
    return newContact
}
module.export = contactFactory;

