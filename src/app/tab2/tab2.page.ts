
import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
	selector: 'app-tab2',
	templateUrl: 'tab2.page.html',
	styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
	private fecha_hora: string;
	private foto: string;
	private data: string;

	constructor(public photoService: PhotoService, private camera: Camera, private geolocation: Geolocation) { this.calcTime(); this.getLoc(); }

	getLoc(){
		this.geolocation.getCurrentPosition().then((resp) => {
			this.data = resp.coords.latitude + ', ' + resp.coords.longitude;
		}).catch((error) => {
			this.data = 'Error getting location';
		});
	}
	
	calcTime() {
		// create Date object for current location
		const d = new Date();

		// convert to msec
		// subtract local time zone offset
		// get UTC time in msec
		const utc = d.getTime() + (d.getTimezoneOffset() * 60000);

		// create new Date object for different city
		// using supplied offset
		const nd = new Date(utc + (3600000*-6));
	
		// return time as a string
		this.fecha_hora = nd.toLocaleString();
	}

	takePicture(){
		const options: CameraOptions = {
			quality: 70,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE
		}
	
		this.camera.getPicture(options).then((imageData) => {
		// imageData is either a base64 encoded string or a file URI
		// If it's base64 (DATA_URL):
		this.foto = 'data:image/jpeg;base64,' + imageData;
		}, (err) => {
			console.log(err);
		});
	}


}

