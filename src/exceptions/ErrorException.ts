class ErrorException {
  public msg: string;
  public status: number;
  constructor(msg: string, status: number) {
    this.msg = msg;
    this.status = status;
  }
}

export { ErrorException };
