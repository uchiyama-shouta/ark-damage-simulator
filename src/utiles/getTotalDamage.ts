export const getTotalDamage = (baseDamage: number, Melee: number) => {
  return baseDamage * (Melee / 100);
};
