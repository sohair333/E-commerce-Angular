import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { FormGroup ,FormBuilder , Validators } from '@angular/forms';
import { AngularFirestore , AngularFirestoreCollection } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm !:FormGroup;
  isSubmit=true;
  SubmitMsg='';
  private Form!:AngularFirestoreCollection<any>;

  constructor(private formBuilder:FormBuilder,
    private fireStore:AngularFirestore) { }

  ngOnInit(): void {
    this.Form = this.fireStore.collection('enquiry');
    this.contactForm = this.formBuilder.group({

      name:[null,Validators.required],
      email:[null,[Validators.required,Validators.email]],
      msg:[null,Validators.required],
      subject:[null,Validators.required]

    });
  }
  submitData(value:any){
    console.log(value);
    this.Form.add(value).then(res =>{
      this.SubmitMsg='submit  Successfully!';
    }).catch(
      err =>{
        console.log(err);
      }
    )
    this.isSubmit=true;
    
    setTimeout(() => {
        this.isSubmit=false;
    }, 4000);
  }

}
