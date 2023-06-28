import { Component } from '@angular/core';
import { Batch } from '../model/batch';
import { BatchService } from '../service/batch-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  batchName = 'Spring Batch';
  runningCount = 3;
  completedCount = 3;
  batches:any = [];

  constructor(batchService: BatchService) {
    this.batches = batchService.getBatchList();
  }

}
