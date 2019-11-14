import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  private foto : string;

  constructor(public photoService: PhotoService, private camera: Camera) {  }

  

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