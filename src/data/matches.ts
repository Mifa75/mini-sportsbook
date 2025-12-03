import { Match } from "../types/match";

export const matches: Match[] = [
  {
    id: "1",
    homeTeam: "New York Knights",
    awayTeam: "Boston Hawks",
    startTime: "2025-12-10 20:00",
    market: "Moneyline",
    homeOdds: 1.9,
    awayOdds: 1.95,
  },
  {
    id: "2",
    homeTeam: "LA Stars",
    awayTeam: "Chicago Bears",
    startTime: "2025-12-10 21:30",
    market: "Spread",
    homeOdds: 1.85,
    awayOdds: 2.05,
  },
  {
    id: "3",
    homeTeam: "Miami Waves",
    awayTeam: "Dallas Bulls",
    startTime: "2025-12-11 19:00",
    market: "Over/Under",
    homeOdds: 1.8,
    awayOdds: 2.1,
  },
];
