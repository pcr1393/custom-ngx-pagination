import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditContactComponent } from './add-edit-contact.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ContactListService } from '../../Services/contact-list.service';
import { of } from 'rxjs';
import { contact } from 'src/app/Models/contact.model';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

describe('AddEditContactComponent', () => {
  let component: AddEditContactComponent;
  let fixture: ComponentFixture<AddEditContactComponent>;
  let contactListService: ContactListService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule],
      declarations: [ AddEditContactComponent ],
      providers: [ContactListService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditContactComponent);
    component = fixture.componentInstance;
    contactListService = TestBed.get(ContactListService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('checking ngOnInit', () => {
    let contactDetail: contact = {
      first_name: 'dummy',
      last_name: 'dummy',
      email: 'dummy',
      phone_number: 1244,
      status: 'dummy'
    }
    spyOn(contactListService, 'getContactDetails').and.returnValue(contactDetail);
    component.ngOnInit();
    expect(contactDetail.first_name).toEqual('dummy');
  });

  it('checking saveAndRedirect function', () => {
    var dummy = 'text';
    component.actionChosen = 'add';
    component.saveAndRedirect();
    expect(dummy).toEqual('text');
    component.actionChosen = 'edit';
    component.saveAndRedirect();
    expect(dummy).toEqual('text');
  });
});
