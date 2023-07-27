export interface UsersAtomType {
  usersList: UserType[];
}

export interface UserType {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
