export interface IAppError {
    error: IError;
  }
  
  export class BadRequestError {
  
  }
  
  export interface IError {
    message: string;
    statusCode?: number;
    error: string;
  }
  
  
  
  