import search from "@/assets/icons/search.png";

export const musicians = [
  {
    id: "1",
    name: "Julian Reed",
    image: require("@/assets/images/musician.jpeg"),
  },
  {
    id: "2",
    name: "Ava Harper",
    image: require("@/assets/images/musician2.jpeg"),
  },
  {
    id: "3",
    name: "Owen Blake",
    image: require("@/assets/images/musician3.jpeg"),
  },
  {
    id: "4",
    name: "Alex Mbogo",
    image: require("@/assets/images/musician4.jpeg"),
  },
];
export const gigs = [
  {
    id: "1",
    title: "Live at The Roxy",
    subtitle: "The Roxy, 8 PM",
    image: require("@/assets/images/gig1.jpeg"),
  },
  {
    id: "2",
    title: "Acoustic Night",
    subtitle: "The Local Pub, 7 PM",
    image: require("@/assets/images/gig2.jpeg"),
  },
  {
    id: "3",
    title: "Acoustic Night",
    subtitle: "The Local Pub, 7 PM",
    image: require("@/assets/images/gig3.jpeg"),
  },
];
export const images = {
  search,
};
export const categories = ["All", "Musicians", "Gigs", "Videos", "Venues"];
