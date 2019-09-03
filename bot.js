
var fetch = require('./impl-node-fetch.js');
var stop = false;
var count = 0;
var log = require('./conpino');

const killpromiseengine = async ()=>{

    let request = {
        data: {
            "channel": "b2c",
            "commerce": "falabella",
            "country": "cl",
            "dayscount": 7,
            "source": "shippingoptions",
            "enteredlocation": "",
            "ordercapturesystem": "atg",
            "requestedstartdate": "",
            "shippingaddress": {
                "shiptocity": 159,
                "shiptopostalcode": "337",
                "shiptocounty": "337",
                "shiptostate": 13,
                "shiptocountry": "cl"
            },
            "capturesysseqnumber": "100025",
            "cartitems": [
                {
                    "backendcategoryid": "null",
                    "brandid": "null",
                    "cartqty": 1,
                    "isboomproduct": false,
                    "ishd": true,
                    "issts": false,
                    "isrt": false,
                    "islm": true,
                    "preshipassembly": false,
                    "shippackagesize": "s",
                    "sku": "3871462",
                    "skucost": 399990,
                    "skutype": "normal",
                    "stsindicator": "inactivo"
                }
            ],
            "groupid": "",
            "storedata": [],
            "zoneids": [],
            "userdetails":
            {
                "email": "rajesh@gmail.com",
                "rut": "123456789",
                "subscriptiontype": ""
            }
        },
        uri: 'http://f1s00391.falabella.cl:8080/api/v2/scheduleOrderStoresByComuna/',
        headers: {}
    };

    let fakeRequest = {
        //uri: 'https://jsonplaceholder.typicode.com/posts',
        uri:'https://reqres.in/api/users',
        data: {
            name: 'dummy ',
            job: 'tonto del pueblo'
        },
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    //return fetch.restClient.postFetch(request.uri, request.data, undefined);
    return fetch.restClient.postFetch(fakeRequest.uri, fakeRequest.data, fakeRequest.headers);
    
} 

const trigger  = async () =>{

    while (!stop) {
        let result = await killpromiseengine();

        if(result.status !== 200){
            log.error({
                status: result.status,
                log: result.statusText
            });
            stop = true;
            console.error('Error status = ' + result.status);

        }else{
            console.info('We are OK bitches!!')
        }

        console.log(count);
        count++;
    }
};

trigger();

console.log('count', count);


