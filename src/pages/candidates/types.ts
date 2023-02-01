export interface Candidate {
    name: string;
    email: string;
    phoneNumber: string;
    coverLetter: string;
  }

export interface candidatesProps {
    candidates: Candidate[];
    jobTitle: string;
  }
  