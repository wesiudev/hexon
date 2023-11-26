"use client";
const levelThresholds = [
  ...Array(11).fill(25), // Levels 0-10: 25 points per level
  ...Array(10).fill(35), // Levels 11-20: 35 points per level
  ...Array(10).fill(45), // Levels 21-30: 45 points per level
  ...Array(10).fill(55), // Levels 31-40: 55 points per level
  ...Array(10).fill(65), // Levels 41-50: 65 points per level
  ...Array(10).fill(75), // Levels 51-60: 75 points per level
  ...Array(10).fill(85), // Levels 61-70: 85 points per level
  ...Array(10).fill(95), // Levels 71-80: 95 points per level
  ...Array(10).fill(105), // Levels 81-90: 105 points per level
  ...Array(11).fill(115), // Levels 91-100: 115 points per level
];
export const calculateLevel = (level, accountExperience, pointsToAdd) => {
  let pointsNeeded = levelThresholds[level];
  const percentageExperience = (accountExperience / pointsNeeded) * 100;
  const remainingPercentageExperience = 100 - percentageExperience;
  const percentageToAdd = (pointsToAdd / pointsNeeded) * 100;
  return {
    level,
    remainingExperience: pointsNeeded - accountExperience,
    percentageExperience,
    remainingPercentageExperience,
    percentageToAdd,
    pointsNeeded,
  };
};
