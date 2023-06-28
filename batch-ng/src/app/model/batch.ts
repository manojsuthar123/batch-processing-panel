export class Batch {

  constructor(
    public id: number = 0,
    public name: string = 'batch-name',
    public file: string = 'batch-file-path',
    public dataSource: string = 'batch-db',
    public dataDestination: string = 'batch-db',
    public isRunning: boolean = false,
    public status: string = 'Created',
    public createdAt: string = new Date().toString(),
    public startDateTime: string = new Date().toString()
  ) {}
}
