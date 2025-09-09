import { BsSpellcheck } from "react-icons/bs";
import { IoMicOutline } from "react-icons/io5";
import { LuLetterText } from "react-icons/lu";
import { PiFilesLight } from "react-icons/pi";
import { RiVoiceprintFill } from "react-icons/ri";

export const sidebarItems = [
  {
    label: "მართლმწერი",
    icon: BsSpellcheck,
    link: "spellchecker",
  },
  {
    label: "ტექსტის შედარება",
    icon: LuLetterText,
    link: "textcompare",
  },
  {
    label: "ხმა -> ტექსტი",
    icon: IoMicOutline,
    link: "speechtotext",
  },
  {
    label: "ტექსტი -> ხმა",
    icon: RiVoiceprintFill,
    link: "texttospeech",
  },
  {
    label: "PDF კონვერტაცია",
    icon: PiFilesLight,
    link: "convertor",
  },
];
