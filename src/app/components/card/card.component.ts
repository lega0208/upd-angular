import { Component, Input, OnInit } from '@angular/core';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <div class="card-body card-pad pt-2">
        <span *ngIf="title != ''">
          <h3 class="card-title h6"><span [ngbPopover]="tooltip">{{ title }}</span></h3>
        </span>
        <div class="row">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  providers: [NgbPopoverConfig],
})
export class CardComponent implements OnInit {
  @Input('card-title') title: string = '';
  @Input('title-tooltip') tooltip: string = '';

  constructor(config: NgbPopoverConfig) {
    config.disablePopover = this.tooltip !== '';
    config.placement = 'right';
    config.triggers = 'hover focus';
  }

  ngOnInit(): void {
  }

}
