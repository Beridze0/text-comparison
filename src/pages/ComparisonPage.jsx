import React, { useState } from "react";
import { BiPlusCircle } from "react-icons/bi";
import ComparisonForm from "../features/comparison/ComparisonForms";
import Button from "../ui/Button";
import LanguageSelector from "../ui/LanguageSelector";
import FormatCheckbox from "../ui/FormatCheckBox";

export default function ComparisonPage() {
  const [language, setLanguage] = useState("georgian");
  const [keepFormat, setKeepFormat] = useState(false);

  return (
    <div className="p-3 w-full text-sm mt-2">
      <div className="flex flex-col sm:flex-row items-center justify-between pb-4 border-b border-gray-300">
        <div className="flex w-full sm:w-fit flex-col sm:flex-row items-start sm:items-center gap-4">
          <LanguageSelector
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
          <FormatCheckbox
            checked={keepFormat}
            onChange={(e) => setKeepFormat(e.target.checked)}
          />
        </div>

        <Button
          text="ახლის გახსნა"
          icon={BiPlusCircle}
          iconSize={20}
          style="px-4"
        />
      </div>

      <ComparisonForm />
    </div>
  );
}
