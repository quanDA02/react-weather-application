import { Moon, Sun } from "lucide-react";
import { Switch } from "../ui/switch";
import { useEffect, useState } from "react";

type Props = {};

export default function ThemeSwitch({}: Props) {
  const [isDark, setDark] = useState(false);
  useEffect(() => {
    const root = document.body;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);
  const toggleDark = () => {
    setDark((isDark) => !isDark);
    console.log(isDark);
  };
  return (
    <div className="flex items-center space-x-2">
      <Sun />
      <Switch id="airplane-mode" onCheckedChange={toggleDark} />
      <Moon />
    </div>
  );
}
