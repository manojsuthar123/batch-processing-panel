import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { Batch } from '../model/batch';
import { BatchService } from '../service/batch-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-batch',
  templateUrl: './create-batch.component.html',
  styleUrls: ['./create-batch.component.css']
})
export class CreateBatchComponent implements OnInit {
  dataSource = ['Database', 'CSV', 'Kafka']
  batch: Batch;
  batchId: any;

  constructor(private batchService: BatchService, private activatedRoute: ActivatedRoute,private _snackBar: MatSnackBar) {
    this.batch = new Batch();
  }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.paramMap.get('id')) {
      this.batchId = this.activatedRoute.snapshot.paramMap.get('id');
      this.batch = this.batchService.getBatchById(parseInt(this.batchId));
    }
  }

  onSubmit() {
    this.batchService.createBatch(this.batch);
    this._snackBar.open('Batch Created!', 'OK');
  }

}
