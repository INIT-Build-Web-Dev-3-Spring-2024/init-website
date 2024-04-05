export interface CompanyPosting {
  id: number;
  index: number;
  name: string;
  image: string;
}

export const companyPostings = [
  {
    image: "https://res.cloudinary.com/dh6y8bufo/image/upload/v1700202362/init-dashboard/jobs/google-logo.png",
    name: "Google",
    id: 1,
    index: 1,
  },

  {
    name: "Netflix",
    image: "https://res.cloudinary.com/dh6y8bufo/image/upload/v1700202460/init-dashboard/jobs/netflix-logo.png",
    id: 2,
    index: 2,
  },

  {
    image: "https://res.cloudinary.com/dh6y8bufo/image/upload/v1700202362/init-dashboard/jobs/google-logo.png",
    name: "Amazon",
    id: 3,
    index: 3,
  },

  {
    image: "https://res.cloudinary.com/dh6y8bufo/image/upload/v1700202362/init-dashboard/jobs/google-logo.png",
    name: "Capital One",
    id: 4,
    index: 4,
  },
];
