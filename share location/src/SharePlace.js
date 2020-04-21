import { Modal } from './UI/modal'
import { Map } from './UI/map'
import { addressToCoordinate, addressFromCoords } from './Utility/location'

class PlaceFinder {
    constructor() {
        const addressForm = document.querySelector('form');
        const locateUserBtn = document.getElementById('locate-btn');
        this.shareBtn = document.getElementById('share-btn');
        this.shareBtn.addEventListener('click',this.shareBtnHandler);
        locateUserBtn.addEventListener('click',this.locateUserBtnHandler.bind(this));
        addressForm.addEventListener('submit',this.findAddressHandler.bind(this));
    }
    shareBtnHandler(){
        const shareLinkElement = document.getElementById('share-link');
        if(!navigator.clipboard)
        {
            shareLinkElement.select();
            return;
        } 
        navigator.clipboard.writeText(shareLinkElement.value).then(()=>{alert('copied into clipboard')}).catch(err=>{
        })
    }
    selectPlace(coordinates, address)
    {
        this.map = new Map(coordinates);
        if(this.map){
           // this.map.render(coordinates);
        }
        else{
            this.map = new Map(coordinates)
        }
        this.shareBtn.disabled = false;
        const shareLinkElement = document.getElementById('share-link');
        shareLinkElement.value = `${location.origin}/my-place?address=${encodeURI(address)}&lat=${coordinates.lat}&lng=${coordinates.lng}`;
    }

    locateUserBtnHandler(){
        if(!navigator.geolocation)
        {
            alert('Location service is not available in your current browser. Please use modern browser or manually enter address');
            return;
        }
        const modal = new Modal('loading-modal-content', 'Location is loading - Please wait...');
        modal.show();
        navigator.geolocation.getCurrentPosition(successResult =>{
            const coordinates={
                lat: successResult.coords.latitude,
                lng: successResult.coords.longitude
            };
            const address = addressFromCoords(coordinates);
            modal.hide();
            this.selectPlace(coordinates, address);
        }, error =>{
            modal.hide();
            alert('Unfortunately we could not locate you, please enter address manually');
        })
    }

    findAddressHandler(event) {
        event.preventDefault();
        const address = event.target.querySelector('input').value;
        console.log(address)
        if(!address || address.trim().length === 0)
        { 
            alert('Invalid address entered - please try again!');
            return;
        }
        
            const modal = new Modal('loading-modal-content', 'Location is loading - Please wait...');
            modal.show();
        
        addressToCoordinate(address).then(coordinates=>{this.selectPlace(coordinates, address)}).catch(error=>{alert(error)});
        modal.hide();
    }
}

const p = new PlaceFinder();
console.log(p)