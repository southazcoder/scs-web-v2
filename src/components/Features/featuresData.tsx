import { Feature } from "@/types/feature";
import {
  Boxes,
  CopyBoxes,
  DocRecycle,
  Dots,
  GearReset,
  Layers,
} from "../Svg/index";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <Boxes />,
    title: "Core Values",
    paragraph:
      "Ownership, Genuine, Simplicity, Innovative, Collaboration, and Involved",
  },
  {
    id: 1,
    icon: <Layers />,
    title: "Customer focus",
    paragraph:
      "Our commitment to our customers is at the heart of everything we do. Our ability to genuinely listen, understand and meet our customers’ needs is a key differentiator and a critical success factor for our business.",
  },
  {
    id: 1,
    icon: <Dots />,
    title: "Integrity",
    paragraph:
      "We run our operation with integrity. We always act ethically, treating everyone with honesty and respect, and we follow through on commitments we make.",
  },
  {
    id: 1,
    icon: <GearReset />,
    title: "Innovation",
    paragraph:
      "StarCom Systems is built on a foundation of innovation. It is at the heart of who we are and what we do.",
  },
  {
    id: 1,
    icon: <CopyBoxes />,
    title: "Collaboration",
    paragraph:
      "Teamwork, respect, and open, honest communications define the way we work with our colleagues, customers and partners.",
  },
  {
    id: 1,
    icon: <DocRecycle />,
    title: "Accountability",
    paragraph:
      "Take ownership. Create understanding and develop solutions by communicating with data and transparency.",
  },
];
export default featuresData;
