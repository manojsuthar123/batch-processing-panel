import { Component, Input } from '@angular/core';
import { Batch } from '../model/batch';

@Component({
  selector: 'app-batch-list',
  templateUrl: './batch-list.component.html',
  styleUrls: ['./batch-list.component.css']
})
export class BatchListComponent {
  @Input('batch') batch: Batch;

  constructor() {
    this.batch = new Batch();
    console.log(this.batch)
  }
}
