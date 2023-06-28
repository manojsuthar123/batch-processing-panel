import { Injectable } from '@angular/core';
import { Batch } from '../model/batch';

@Injectable({
  providedIn: 'root'
})
export class BatchService {
  batches:Batch[] = [];

  constructor() { }

  getBatchList(){
    this.batches = [
      new Batch(1, "csv-to-db1","file.csv","Database", "CSV", true,"started",new Date().toString(),new Date().toString()),
      new Batch(2, "csv-to-kafka","file.csv","Database", "Database", false,"failed",new Date().toString(),new Date().toString()),
      new Batch(3, "csv-to-mq","file.csv","Database", "CSV", true,"exception",new Date().toString(),new Date().toString()),
      new Batch(4, "csv-to-kafka2","file.csv","Database", "CSV", false,"started",new Date().toString(),new Date().toString())
    ]
    return this.batches;
  }

  getBatchById(id: number){
    return this.batches[id-1];  
  }

  createBatch(batch:Batch){
    if(batch){
      this.batches.push(batch);
    }
  }

}
