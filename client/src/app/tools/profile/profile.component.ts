import {Component, Input, OnInit} from '@angular/core';

import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  @Input() show!: boolean

  firestore: FirebaseTSFirestore
  auth: FirebaseTSAuth

  constructor() {
    this.firestore = new FirebaseTSFirestore()
    this.auth = new FirebaseTSAuth()

  }

  ngOnInit(): void {
  }

  onContinueClick(
    firstNameInput: HTMLInputElement,
    lastNameInput: HTMLInputElement
  ){
    let firstName = firstNameInput.value
    let lastName = lastNameInput.value
    let name = firstName + lastName

    this.firestore.create({
      path: [
        "Users",
        this.auth.getAuth().currentUser!.uid
      ],
      data: {
        publicName: name,
      },
      onComplete: (docId) => {
        alert("Profile Created")
        firstNameInput.value = ""
        lastNameInput.value = ""
      },
      onFail: (err) => {
        alert(err)
      }
      })
  }

}
