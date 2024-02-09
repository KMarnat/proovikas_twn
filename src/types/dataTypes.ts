export interface Person {
  id: string;
  boolean: boolean;
  phone: string;
  date: number;
  tags: string[];
  sex: string;
  firstname: string;
  surname: string;
  email: string;
  title: string;
  intro: string;
  body: string;
  personal_code: number;
  image: {
    large: string;
    medium: string;
    small: string;
    alt: string;
    title: string;
  };
  images: {
    large: string;
    medium: string;
    small: string;
    alt: string;
    title: string;
  }[];
}

export interface PersonDetails {
  id: string;
  boolean: boolean;
  phone: string;
  date: number;
  tags: string[];
  sex: string;
  firstname: string;
  surname: string;
  email: string;
  title: string;
  intro: string;
  body: string;
  personal_code: number;
  image: {
    large: string;
    medium: string;
    small: string;
    alt: string;
    title: string;
  };
  images: {
    large: string;
    medium: string;
    small: string;
    alt: string;
    title: string;
  }[];
}
