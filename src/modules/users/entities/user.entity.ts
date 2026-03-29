export enum UserRole {
  SUPERADMIN = 'SUPERADMIN',
  ADMIN = 'ADMIN',
  INSTRUCTOR = 'INSTRUCTOR',
  STUDENT = 'STUDENT',
}

export class User {
  constructor(
    public id: string,
    public email: string,
    public password: string,
    public role: UserRole,
    public createdAt?: Date,
  ) {}
}
