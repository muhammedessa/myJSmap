import { Component ,ViewChild,ElementRef} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


declare let google;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

@ViewChild('map') mapElement : ElementRef;
map:any;
  constructor(public navCtrl: NavController,
  public geolocation:Geolocation) {

  }

  ionViewDidLoad(){

this.loadmap();
  }


loadmap(){
  this.geolocation.getCurrentPosition().then((position)=>{

    let latlong = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);


    let options = {
      center:latlong,
      zoom:15,
     mapTypeId: google.maps.MapTypeId.ROADMAP
     //mapTypeId: google.maps.MapTypeId.TERRAIN
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement,options);

    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

    var marker = new google.maps.Marker({
      position: latlong,
      map: this.map,
      title:"Hello World!",
      label: 'Muhammed',
      icon: {
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
        scale: 4
      },
      draggable:true,
    });
var mydiscriptions = "THis is my application with Ionic 3 my name is muhammed essa"
var infowindow = new google.maps.InfoWindow({
  content: mydiscriptions
});
marker.addListener('click', function() {
  infowindow.open(this.map, marker);
});

 },(error)=>{
      console.log(error);
   });




}






}







