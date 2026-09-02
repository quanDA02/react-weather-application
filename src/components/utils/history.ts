import {
  locationListSchema,
  type locationHistory,
} from "@/schemas/locationSearchSchema";

export function getHistory() {
  const data = localStorage.getItem("searchHistory");
  if (!data) return [];
  const history = locationListSchema.parse(JSON.parse(data));
  return history;
}

export function addHistory(h: locationHistory) {
  const history: locationHistory[] = JSON.parse(
    localStorage.getItem("searchHistory") || "[]",
  );
  const newHistory = [...history, h];
  localStorage.setItem("searchHistory", JSON.stringify(newHistory));
}

export function deleteHistory(history: locationHistory[]) {
  localStorage.setItem("searchHistory", JSON.stringify(history));
}
