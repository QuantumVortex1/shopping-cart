import { Component } from '@angular/core';
import { Chip } from '../../shared-components/chip/chip';
import { version } from '../../../../package.json';

@Component({
  imports: [Chip],
  selector: 'app-header',
  templateUrl: './header.html',
  host: {
    class: 'shrink-0 h-12'
  }
})
export class Header {
  public version = version;
}
