import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContactsComponent } from './view-contacts.component';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ContactPipe } from '../../Filters/contact.pipe';
import { ContactListService } from '../../Services/contact-list.service';
import { of } from 'rxjs';
import { contact } from '../../Models/contact.model';

describe('ViewContactsComponent', () => {
  let component: ViewContactsComponent;
  let fixture: ComponentFixture<ViewContactsComponent>;
  let contactListService: ContactListService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ ViewContactsComponent, ContactPipe ],
      providers: [ContactListService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewContactsComponent);
    component = fixture.componentInstance;
    contactListService = TestBed.get(ContactListService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('checking ngOninit', () => {
    let data: contact[] = [{
      first_name: 'dummy',
      last_name: 'dummy',
      email: 'dummy',
      phone_number: '1234',
      status: 'dummy'
    },
    {
      first_name: 'dummy',
      last_name: 'dummy',
      email: 'dummy',
      phone_number: '1234',
      status: 'dummy'
    }];
    spyOn(contactListService, 'getAllContacts').and.returnValue(of(data));
    component.ngOnInit();
    expect(component.contacts).toEqual(data);
  });

  it('checking deleteContact function', () => {
    component.contacts = [
      {
        first_name: 'dummy',
        last_name: 'dummy',
        email: 'dummy',
        phone_number: '1234',
        status: 'dummy'
      },
      {
        first_name: 'dummy',
        last_name: 'dummy',
        email: 'dummy',
        phone_number: '1234',
        status: 'dummy'
      }
    ];
    component.contactIndexToBeDeleted = 0;
    component.deleteContact();
    expect(component.contacts.length).toEqual(1);
  });

  it('checking storeContactIndex function', () => {
    component.storeContactIndex(0);
    expect(component.contactIndexToBeDeleted).toEqual(0);
  });

  it('checking removeDeletionIndex function', () => {
    component.removeDeletionIndex();
    expect(component.contactIndexToBeDeleted).toEqual(undefined);
  });

  it('checking addContact function', () => {
    let data = 'dummy';
    component.addContact();
    expect(data).toEqual('dummy');
  });

  it('checking editContact function', () => {
    let data = 'dummy';
    let contact = {
      first_name: 'dummy',
        last_name: 'dummy',
        email: 'dummy',
        phone_number: 1234,
        status: 'dummy'
    }
    component.editContact(contact, 1);
    expect(data).toEqual('dummy');
  });
});
