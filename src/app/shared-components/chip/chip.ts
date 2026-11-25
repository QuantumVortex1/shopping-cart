import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-chip',
  template: `
    <ng-container>
      {{ label() }}
    </ng-container>
  `,
  host: {
    class:
      'rounded-md h-5 min-w-10 text-sm font-semibold flex items-center justify-center',
  },
})
export class Chip {
  public label = input.required<string>();
}
