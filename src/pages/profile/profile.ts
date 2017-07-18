import { Component } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { IonicPage, NavController, NavParams, PopoverController, ModalController, AlertController } from 'ionic-angular';
import { PopoverPage } from '../../pages/popover/popover';
import { RegisterPage } from '../register/register';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { user } from '../../userInfo';
import { ExtractCountryNamePipe } from '../../pipes/extract-country-name/extract-country-name';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers: [NativeStorage, ExtractCountryNamePipe]
})

export class ProfilePage {
  UserName: any
  Email: any
  UserAddress: any
  Gender: any
  countryName: any
  userData: any = {

  }
  userId: any
  updateData: any;
  constructor
    (public navCtrl: NavController, public navParams: NavParams, public nativeStorage: NativeStorage,
    public modalCtrl: ModalController, public popoverCtrl: PopoverController, public alertCtrl: AlertController,
    public userService: UserServiceProvider, public extractCountryName: ExtractCountryNamePipe) {
    //this.getUserInfo()
    this.userId = 1
    this.userData = user
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    console.log(this.userData)

    // this.name = this.navParams.get('name');
    // console.log(this.name);

    // this.email = this.navParams.get('email');
    // console.log(this.email);

    // this.address = this.navParams.get('address');
    // console.log(this.address);

    // this.gender = this.navParams.get('gender');
    // console.log(this.gender);

    // this.country = this.navParams.get('country');
    // console.log(this.country);
  }

  // getUserInfo() {
  //   let self = this
  //   this.nativeStorage.getItem('localUserData').then(function (localUserData) {
  //     // console.log({
  //     //   n: localUserData.name,
  //     //   g: localUserData.gender,
  //     //   p: localUserData.picture
  //     // })

  //     let userData = {
  //       "name": localUserData.name,
  //       "gender": localUserData.gender,
  //       "picture": localUserData.picture,
  //       "country": localUserData.country
  //     }

  //     console.log(userData)
  //   })
  // }

  showPrompt(userData) {
    //get user data using the providers
    //userInfo ={}
    let env = this
    let countryN = this.extractCountryName.transform(userData.Countries, 'pipeFilter')

    //console.log(userData)
    let prompt = this.alertCtrl.create({
      title: 'Update',
      message: "Update and save the fields",
      inputs: [
        {
          name: 'Name',
          value: userData.UserName
        },
        {
          name: 'Address',
          value: userData.UserAddress
        },
        {
          name: 'Gender',
          value: userData.Gender
        },
        {
          name: 'Country',
          value: this.extractCountryName.transform(userData.Countries, 'pipeFilter')
        },

      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            {

              env.userData = {
                UserName: data.Name,
                UserAddress: data.Address,
                Gender: data.Gender,
                Countries: userData.Countries
              }
              console.log(" hihi")
              console.log(env.userData)

              console.log("hu3")
              console.log(data)

            }

            // console.log(data); //to see the object
            // console.log(data.Name);
            // console.log(data.Address);
            // console.log(data.Gender);
            // console.log(data.Country);
            console.log('Saved clicked');
            console.log(userData)

          }

        }



      ]

    });
    prompt.present();
  }
  openPopover(myEvent) { //executes when the fabButton is tapped
    let popover = this.popoverCtrl.create(PopoverPage)

    popover.present({
      ev: myEvent
    });

    popover.onDidDismiss((popoverData) => {
      console.log(popoverData)
    })
  }
}
