import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactListService } from '../../Services/contact-list.service';

@Component({
  selector: 'app-add-edit-contact',
  templateUrl: './add-edit-contact.component.html',
  styleUrls: ['./add-edit-contact.component.css']
})
export class AddEditContactComponent implements OnInit {

  actionChosen: string;
  contactForm = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone_number: new FormControl(undefined, Validators.required),
    status: new FormControl(false, Validators.required)

  });
  constructor(private contactListService: ContactListService, private router: Router) { }

  ngOnInit() {
    this.actionChosen = this.contactListService.getActionSelected();
    if(this.actionChosen.toLowerCase() === 'edit'){
      let contactDetail = this.contactListService.getContactDetails();
      this.contactForm.patchValue({
        first_name: contactDetail.first_name,
        last_name: contactDetail.last_name,
        email: contactDetail.email,
        phone_number: contactDetail.phone_number,
        status: contactDetail.status === 'Active' ? true: false
      });
    }
  }

  saveAndRedirect(){
    if(this.actionChosen.toLowerCase() === 'add'){
      this.contactForm.value.status = this.contactForm.value.status ? 'Active' : 'Inactive';
      this.contactListService.addContact(this.contactForm.value);
    }
    else{
      this.contactForm.value.status = this.contactForm.value.status ? 'Active' : 'Inactive';
      this.contactListService.editContact(this.contactForm.value);
    }
    this.cancelAndRedirect();
  }

  cancelAndRedirect(){
    this.router.navigate(['']);
  }

}
