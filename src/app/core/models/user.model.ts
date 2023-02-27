export interface IUserVm {
  userName: string;
  password: string;
  role: UserRole;
}

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}
