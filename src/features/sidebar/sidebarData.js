import { BsSpellcheck } from "react-icons/bs";
import { IoMicOutline } from "react-icons/io5";
import { LuLetterText } from "react-icons/lu";
import { PiFilesLight } from "react-icons/pi";
import { RiVoiceprintFill } from "react-icons/ri";

export const sidebarItems = [
  {
    label: "მართლმწერი",
    icon: BsSpellcheck,
  },
  {
    label: "ტექსტის შედარება",
    icon: LuLetterText,
  },
  {
    label: "ხმა -> ტექსტი",
    icon: IoMicOutline,
  },
  {
    label: "ტექსტი -> ხმა",
    icon: RiVoiceprintFill,
  },
  {
    label: "PDF კონვერტაცია",
    icon: PiFilesLight,
  },
];
