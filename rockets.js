let roketsArray = [
    {
    "name": "FalconSat",
    "date_utc": "2006-03-24T22:30:00.000Z",
    "success": false,
    "details": "Engine failure at 33 seconds and loss of vehicle",
    "rocket": "5e9d0d95eda69955f709d1eb",
    "failures": [{
            "time": 33,
            "altitude": null,
            "reason": "merlin engine failure"
        }
    ]
}, {
    "name": "DemoSat",
    "date_utc": "2007-03-21T01:10:00.000Z",
    "success": false,
    "details": "Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage",
    "rocket": "5e9d0d95eda69955f709d1eb",
    "failures": [{
            "time": 301,
            "altitude": 289,
            "reason": "harmonic oscillation leading to premature engine shutdown"
        }
    ]
}, {
    "name": "Trailblazer",
    "date_utc": "2008-08-03T03:34:00.000Z",
    "success": false,
    "details": "Residual stage 1 thrust led to collision between stage 1 and stage 2",
    "rocket": "5e9d0d95eda69955f709d1eb",
    "failures": [{
            "time": 140,
            "altitude": 35,
            "reason": "residual stage-1 thrust led to collision between stage 1 and stage 2"
        }
    ]
}, {
    "name": "RatSat",
    "date_utc": "2008-09-28T23:15:00.000Z",
    "success": true,
    "details": "Ratsat was carried to orbit on the first successful orbital launch of any privately funded and developed, liquid-propelled carrier rocket, the SpaceX Falcon 1",
    "rocket": "5e9d0d95eda69955f709d1eb",
    "failures": []
}, {
    "name": "CRS-6",
    "date_utc": "2015-04-14T20:10:00.000Z",
    "success": true,
    "details": "Following the first-stage boost, SpaceX attempted a controlled-descent test of the first stage. The first stage contacted the ship, but soon tipped over due to excess lateral velocity caused by a stuck throttle valve resulting in a later-than-intended downthrottle.",
    "rocket": "5e9d0d95eda69973a809d1ec",
    "failures": []
}, {
    "name": "TürkmenÄlem 52°E / MonacoSAT",
    "date_utc": "2015-04-27T23:03:00.000Z",
    "success": true,
    "details": null,
    "rocket": "5e9d0d95eda69973a809d1ec",
    "failures": []
}, {
    "name": "CRS-7",
    "date_utc": "2015-06-28T14:21:00.000Z",
    "success": false,
    "details": "Launch performance was nominal until an overpressure incident in the second-stage LOX tank, leading to vehicle breakup at T+150 seconds. The Dragon capsule survived the explosion but was lost upon splashdown because its software did not contain provisions for parachute deployment on launch vehicle failure.",
    "rocket": "5e9d0d95eda69973a809d1ec",
    "failures": [{
            "time": 139,
            "altitude": 40,
            "reason": "helium tank overpressure lead to the second stage LOX tank explosion"
        }
    ]
}, {
    "name": "OG-2 Mission 2",
    "date_utc": "2015-12-22T01:29:00.000Z",
    "success": true,
    "details": "Total payload mass was 2,034 kg (4,484 lb) : 11 satellites weighing 172 kg each, plus a 142-kg mass simulator. This was the first launch of the upgraded v1.1 variant (later called Falcon 9 Full Thrust), with a 30 percent power increase. Orbcomm had originally agreed to be the third flight of the enhanced-thrust rocket, but the change to the maiden flight position was announced in October 2015. SpaceX received a permit from the FAA to land the booster on solid ground at Cape Canaveral, and succeeded.",
    "rocket": "5e9d0d95eda69973a809d1ec",
    "failures": []
}, {
    "name": "Jason 3",
    "date_utc": "2016-01-17T15:42:00.000Z",
    "success": true,
    "details": "First launch of NASA and NOAA joint science mission under the NLS II launch contract (not related to NASA CRS or USAF OSP3 contracts). Last launch of the original Falcon 9 v1.1 launch vehicle. The Jason-3 satellite was successfully deployed to target orbit. SpaceX again attempted a recovery of the first stage booster by landing on an autonomous drone ship; this time located in the Pacific Ocean. The first stage did achieve a soft-landing on the ship, but a lockout on one of the landing legs failed to latch, so that the booster fell over and exploded.",
    "rocket": "5e9d0d95eda69973a809d1ec",
    "failures": []
}, {
    "name": "SES-9",
    "date_utc": "2016-03-04T23:35:00.000Z",
    "success": true,
    "details": "Second launch of the enhanced Falcon 9 Full Thrust launch vehicle. Following the launch, SpaceX attempted an experimental landing test to a drone ship, although a successful landing was not expected because launch mass exceeded previously indicated limit for a GTO there was little fuel left. As predicted, booster recovery failed: the spent first stage landed hard, but the controlled-descent, atmospheric re-entry and navigation to the drone ship were successful and returned significant test data on bringing back high-energy Falcon 9s.",
    "rocket": "5e9d0d95eda69973a809d1ec",
    "failures": []
}, {
    "name": "CRS-8",
    "date_utc": "2016-04-08T20:43:00.000Z",
    "success": true,
    "details": "Dragon carried over 1500 kg of supplies and delivered (stowed in its trunk) the inflatable Bigelow Expandable Activity Module (BEAM) to the ISS for two years of in-orbit tests. The rocket's first stage landed smoothly on SpaceX's autonomous spaceport drone ship 9 minutes after liftoff, making this the first ever successful landing of a rocket booster on a ship at sea as part of an orbital launch. The first stage B1021 was later also the first orbital booster to be used again, when launching SES-10 on March 30, 2017.",
    "rocket": "5e9d0d95eda69973a809d1ec",
    "failures": []
}, {
    "name": "JCSAT-2B",
    "date_utc": "2016-05-06T05:21:00.000Z",
    "success": true,
    "details": "Launched the JCSAT 14 communications satellite for Tokyo-based SKY Perfect JSAT Corp. JCSAT 14 will support data networks, television broadcasters and mobile communications users in Japan, East Asia, Russia, Oceania, Hawaii and other Pacific islands. This was the first time a booster successfully landed after a GTO mission.",
    "rocket": "5e9d0d95eda69973a809d1ec",
    "failures": []
}, {
    "name": "Thaicom 8",
    "date_utc": "2016-05-27T21:39:00.000Z",
    "success": true,
    "details": "Manufactured by Orbital ATK, the 3,100-kilogram (6,800 lb) Thaicom 8 communications satellite will serve Thailand, India and Africa from the 78.5° East geostationary location. It is equipped with 24 active Ku-band transponders.",
    "rocket": "5e9d0d95eda69973a809d1ec",
    "failures": []
}, {
    "name": "ABS-2A / Eutelsat 117W B",
    "date_utc": "2016-06-15T14:29:00.000Z",
    "success": true,
    "details": "One year after pioneering this technique on flight 16, Falcon again launched two Boeing 702SP gridded ion thruster satellites in a dual-stack configuration, with the two customers sharing the rocket and mission costs. First stage landing attempt on drone ship failed on landing due to low thrust on one of the three landing engines.",
    "rocket": "5e9d0d95eda69973a809d1ec",
    "failures": []
}, {
    "name": "CRS-9",
    "date_utc": "2016-07-18T04:45:00.000Z",
    "success": true,
    "details": "Among other cargo, an International Docking Adapter (IDA-2) was carried to the ISS. This mission had a successful first-stage landing at Cape Canaveral.*Including the reusable Dragon Capsule, total payload to orbit was 6457 kg.",
    "rocket": "5e9d0d95eda69973a809d1ec",
    "failures": []
}, {
    "name": "JCSAT-16",
    "date_utc": "2016-08-14T05:26:00.000Z",
    "success": true,
    "details": "First attempt to touch down from a ballistic trajectory using a single-engine landing burn. All previous landings from a ballistic trajectory had fired three engines on the landing-burn, which provided more braking force, but subjected the vehicle to greater structural stresses. The single-engine landing burn takes more time and fuel, but puts less stress on the vehicle.",
    "rocket": "5e9d0d95eda69973a809d1ec",
    "failures": []
}, {
    "name": "Amos-6",
    "date_utc": "2016-09-01T13:07:00.000Z",
    "success": false,
    "details": "The rocket and Amos-6 payload were lost in a launch pad explosion on September 1, 2016 during propellant fill prior to a static fire test. The pad was clear of personnel and there were no injuries.",
    "rocket": "5e9d0d95eda69973a809d1ec",
    "failures": [{
            "time": -165180,
            "altitude": 0,
            "reason": "buckled liner in several of the COPV tanks, causing perforations that allowed liquid and/or solid oxygen to accumulate underneath the lining, which was ignited by friction."
        }
    ]
}
];


function getMostLaunchedRocket(array){

    /* Crear un objeto que tenga las repeticiones de cada elemento */
    let conteo = {};
    /*creamos una variable inicializada en 0 para guardar la repeticion maxima*/
    let rep_max=0;
    /*creamos una variable que contendrá el elemento con repeticion maxima*/
    let elem_max;

    /*recorres el array con forEach para cada elemento y realizas un conteo por elemento repetido */
    array.forEach((elem) => {
        if(conteo[elem.rocket]){
            conteo[elem.rocket] += 1;
        } else {
            conteo[elem.rocket] = 1;
        }
        //Aqui comparas los conteos, se almacenará el mayor y tambien obtendrás el elemento
        if(rep_max<conteo[elem.rocket]){
            rep_max=conteo[elem.rocket];       
            elem_max=elem.rocket;
        }
    });

    /*console.log("Objeto con repeticiones");
    console.log(conteo);
    console.log("repeticion maxima: "+rep_max);
    console.log("elemento: "+elem_max);*/
    return elem_max
}

function getFailsByRange(array, minHeight, maxHeight){

    let arrayFallidos = []
    let intentoFallido = {}
    let fallido = false
    
    array.forEach((elem) => {
        elem.failures.forEach((elem2) =>{
          if( elem2.altitude != null && elem2.altitude >= minHeight && elem2.altitude <= maxHeight)
            fallido = true
        })
        if(fallido){
            arrayFallidos.push(elem.name)
            fallido = false
        }
    })

    return arrayFallidos
}

console.log(getFailsByRange(roketsArray, 0, 10))

function getLaunchingSuccessRate(array){

    let contSuccess = 0
    let porc = 0.0

    array.forEach((elem) => {

        if(elem.success)
            contSuccess++
    })
    console.log("Cont success: ", contSuccess)
    porc = contSuccess/array.length
    return Math.round(porc*100)
}

console.log(getLaunchingSuccessRate(roketsArray))
