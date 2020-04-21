export function addressFromCoords(){
    return 'Al sufiaan school, in front of radhanagar thana, udhwa,sahibganj,jharkhand'
}


export  function addressToCoordinate(){
    const promise = new Promise((resolve, reject)=>{
        if(!navigator.geolocation){
            reject('Please use modern browser');
        }
        navigator.geolocation.getCurrentPosition(success =>{
            const data ={
                lat:success.coords.latitude,
                lng:success.coords.longitude
            }
            resolve(data);
        },error=>{
            reject('We could not fetch your location please try again');
        })
    })
    return promise;
}