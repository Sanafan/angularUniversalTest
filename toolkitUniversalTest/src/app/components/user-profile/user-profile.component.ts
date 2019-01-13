import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userAvatarSrc: String;

  constructor() { }

  ngOnInit() {

    this.verifyAvatar('../../../../assets/images/userGraphics/userId1Avatar.png')

  }

  verifyAvatar(imageSrc) {
    let img = new Image;
    img.src = imageSrc;

    if(img.complete){
        this.userAvatarSrc = imageSrc
    } else {
        this.userAvatarSrc = '../../assets/images/userGraphics/noAvatar.png';
    }
}

}
