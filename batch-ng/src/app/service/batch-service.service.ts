import { Injectable } from '@angular/core';
import { Batch } from '../model/batch';
import { Datasource } from '../model/datasource';

@Injectable({
  providedIn: 'root'
})
export class BatchService {
  batches: Batch[] = [];

  constructor() { }

  getBatchList() {
    this.batches = [
      new Batch(1, "test1"),
      new Batch(2, "test2")
    ]
    return this.batches;
  }

  getBatchById(id: number) {
    return this.batches[id - 1];
  }

  createBatch(batch: Batch) {
    if (batch) {
      this.batches.push(batch);
    }
  }

  deleteBatch() {

  }

}
