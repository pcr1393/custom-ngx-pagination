import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { contact } from '../Models/contact.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactListService {

  public contactList: contact[] = [];
  public actionSelected: string = 'Add';
  public selectedContactDetails: contact = {};
  public editContactIndex: number;
  private _url: string = '/assets/contacts-250.json'

  constructor(private httpService: HttpClient) { }

  getAllContacts(): Observable<contact[]>{
    if(this.contactList.length > 0){
      return of(this.contactList);
    }
    else{
      return this.httpService.get<contact[]>(this._url);
    }
  }

  setAllContacts(list){
    this.contactList = list;
  }

  actionChosen(param){
    this.actionSelected = param;
  }

  getActionSelected(){
    return this.actionSelected;
  }

  setContactDetails(param){
    this.selectedContactDetails = param;
  }

  getContactDetails(){
    return this.selectedContactDetails;
  }

  addContact(payload){
    this.contactList.push(payload);
  }

  editContact(payload){
    this.contactList[this.editContactIndex] = payload;
  }

  setContactIndexForEditing(index){
    this.editContactIndex = index;
  }
}
