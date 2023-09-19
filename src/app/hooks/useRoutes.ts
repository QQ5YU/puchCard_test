import { usePathname } from "next/navigation";
import { useMemo } from "react";

const useRoutes = () => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        label: "GPS 定位打卡",
        href: "/gpsLocation",
        active: pathname!.startsWith("/gpsLocation"),
      },
      {
        label: "打卡紀錄修改/查詢",
        href: "/recordsSearch",
        active: pathname!.startsWith("/recordsSearch"),
      },
    ],
    [pathname]
  );
  return routes;
};

export default useRoutes;
