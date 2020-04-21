import { Map } from './UI/map';

class LoadPlace {
    constructor(coordinates, address){
        new Map(coordinates);
        const headerTitleElement = document.querySelector('header h11');
        headerTitleElement.textContent = address;

    }
}

const url = new URL(location.href);
const queryPramas = url.searchParams;

const coords={
    lat: +queryPramas.get('lat'),
    lng: +queryPramas.get('lng')
}
const address = queryPramas.get('address');

new LoadPlace(coords, address);