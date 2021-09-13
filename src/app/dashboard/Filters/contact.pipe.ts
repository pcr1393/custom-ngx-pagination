import { Pipe, PipeTransform } from '@angular/core';
import { contact } from '../Models/contact.model';

@Pipe({
  name: 'contact'
})
export class ContactPipe implements PipeTransform {

  transform(items: contact[], value: string): unknown {
    if (!items) return [];
    // add
    if (!value) return  items;
    if (value == '' || value == null) return [];
    return items.filter(e =>

      e['first_name'].toLowerCase().indexOf(value.toLowerCase()) > -1 ||
      e['last_name'].toLowerCase().indexOf(value.toLowerCase()) > -1 ||
      e['email'].toLowerCase().indexOf(value.toLowerCase()) > -1 ||
      e['phone_number'].toString().toLowerCase().indexOf(value.toLowerCase()) > -1 ||
      e['status'].toLowerCase().indexOf(value.toLowerCase()) > -1


      );
  }

}
