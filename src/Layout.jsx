import React from "react";
import companyLogo from "./assets/company-logo3.png";
import { sidebarItems } from "./features/sidebar/sidebarData";
import Sidebar from "./features/sidebar/components/Sidebar";

export default function Layout({ children }) {
  const user = { firstName: "Davit", lastName: "Beridze" };

  return (
    <div className="flex">
      <Sidebar>
        <div className="flex-1 flex flex-col py-4 pl-4 ">
          <Sidebar.Header companyLogo={companyLogo} companyName="Enagram" />

          <div className="flex-1 flex flex-col mt-12 mr">
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
      <div>{children}</div>
    </div>
  );
}
