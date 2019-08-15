import { Injectable } from '@angular/core';
import { Crop } from 'src/app/models/crop.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { WebsocketService } from 'src/app/services/websocket.service';

@Injectable({
  providedIn: 'root'
})
export class CropsService {

  public myCrops: Crop[] = [];
  public watchList: Crop[] = [];

  public userCrops: BehaviorSubject<object> = new BehaviorSubject({});

  constructor(private api: ApiService, private user: UserService, private router: Router, private ws: WebsocketService) { 
    this.watchCrops();
    this.ws.emit('user-crops', { id: this.user.id })
  }

  watchCrops(){
    this.ws.on('user-crops').subscribe(data => {
      this.userCrops.next(data);
    })
  }

  getCropsById(id){
    return this.api.get('user-crops/'+id);
  }

  getDetails(id: string): Observable<any>{
    return this.api.get('crop-by-id/'+id);
  }

  addCrop(crop: Crop){
    crop = new Crop(
      crop.id,
      crop.userId,
      crop.cropName,
      crop.cropType,
      crop.catagory,
      crop.variety,
      crop.imgSrc,
      crop.harvested,
      crop.harvestDate,
      crop.harvestQuantity,
      crop.details
    )
    this.ws.emit('add-crop', crop);
    this.router.navigate(['dashboard','crop-manager']);
  }
}
