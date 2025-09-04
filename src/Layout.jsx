import React from "react";
import companyLogo from "./assets/company-logo3.png";
import { sidebarItems } from "./features/sidebar/sidebarData";
import Sidebar from "./features/sidebar/components/Sidebar";

export default function Layout() {
  const user = { firstName: "Davit", lastName: "Beridze" };

  return (
    <Sidebar>
      <div className="flex-1 flex flex-col p-4 ">
        <Sidebar.Header companyLogo={companyLogo} companyName="Enagram" />

        <div className="flex-1 flex flex-col mt-12 mr gap-4">
          {sidebarItems.map((item) => (
            <Sidebar.Item
              key={item.label}
              link={item.link}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
      <Sidebar.Footer user={user} />
    </Sidebar>
  );
}
