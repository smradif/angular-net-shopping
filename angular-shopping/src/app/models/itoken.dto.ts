import { IAppError, IUser } from ".";

export interface ITokenDto {
  accessToken?: string;
  refreshToken?: string;
  user?: IUser;
  error?: IAppError;
}
