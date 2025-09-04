import { BsSpellcheck } from "react-icons/bs";
import { IoMicOutline } from "react-icons/io5";
import { LuLetterText } from "react-icons/lu";
import { PiFilesLight } from "react-icons/pi";
import { RiVoiceprintFill } from "react-icons/ri";

export const sidebarItems = [
  {
    label: "მართლმწერი",
    icon: BsSpellcheck,
    link: "MM",
  },
  {
    label: "ტექსტის შედარება",
    icon: LuLetterText,
    link: "comparison",
  },
  {
    label: "ხმა -> ტექსტი",
    icon: IoMicOutline,
    link: "12313",
  },
  {
    label: "ტექსტი -> ხმა",
    icon: RiVoiceprintFill,
    link: "3123",
  },
  {
    label: "PDF კონვერტაცია",
    icon: PiFilesLight,
    link: "5124",
  },
];
