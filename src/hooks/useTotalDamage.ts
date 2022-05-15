import type { ComponentProps } from "react";
import { useEffect, useState } from "react";
import { getTotalDamage } from "utiles/getTotalDamage";
import { data } from "utiles/data";

export const useTotalDamage = () => {
  const [name, setName] = useState("");
  const [melee, setMelee] = useState<number | null>(null);
  const [totalDamage, setTotalDamage] = useState(0);

  useEffect(() => {
    const baseDamage = data.find((v) => v.dinosaur === name)?.baseDamage;
    if (baseDamage && melee) {
      setTotalDamage(getTotalDamage(baseDamage, melee));
    }
  }, [name, melee]);

  const handleMelee: ComponentProps<"input">["onChange"] = (e) => {
    setMelee(Number(e.target.value));
  };

  return {
    name,
    setName,
    melee,
    handleMelee,
    totalDamage,
  };
};
