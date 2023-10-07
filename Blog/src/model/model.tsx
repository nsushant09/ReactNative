class User {
  username!: string;
  name!: string;
  email!: string;
  phone!: string;
  dateOfBirth!: string;
  profilePicture!: string;
  bio!: string;
  dateJoined!: string;
  isVerified!: boolean;
}

class Blog {
  id!: Int32Array;
  date!: string;
  user!: User;
  intro!: string;
  body!: string;
  tags!: [string];
  image! : string;
  categories!: [string];
}

export { User, Blog };
