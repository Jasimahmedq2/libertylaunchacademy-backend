export type IAdmission = {
  student: {
    name: {
      firstName: string;
      lastName: string;
    };
    birthday: string;
    currentGrade: number;
    gender: "male" | "female" | "other";
    disabilities: boolean;
  };
  guardian: {
    name: {
      firstName: string;
      lastName: string;
    };
    email: string;
    confirmEmail: string;
    phoneNo?: number;
    address?: string;
    streetAddress?: string;
    addressLine2?: string;
    city?: string;
    region?: string;
    postalCode?: string;
    country?: string;
    opinion: string;
  };
};
