import { useEffect, useState } from "react";

export interface SheetRow {
  price?: string;
  status?: "ready" | "curing";
  cureUntil?: string;
  stockNote?: string;
}

// ── Setup instructions ────────────────────────────────────────────────────
// 1. Create a Google Sheet with columns: id, price, status, cureUntil, stockNote
//    Example row: 2, 480 грн / 100г, curing, серпня 2026,
// 2. File → Share → Publish to web → select your sheet → CSV → Publish
// 3. Paste the generated URL below.
// ─────────────────────────────────────────────────────────────────────────
const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTjpnnUXyuGuunlJkeLHH9oJDxRXlp6tRg9kRmjnnKeN7VPnsWx1iWtfVSI18RyuEhe7UY8K30Cg7nO/pub?gid=0&single=true&output=csv";

export function useSheetData(): Record<number, SheetRow> {
  const [data, setData] = useState<Record<number, SheetRow>>({});

  useEffect(() => {
    if (!SHEET_CSV_URL) return;

    fetch(SHEET_CSV_URL)
      .then((r) => r.text())
      .then((csv) => {
        const rows = csv.trim().split("\n");
        const headers = rows[0]
          .split(",")
          .map((h) => h.trim().replace(/^"|"$/g, "").toLowerCase());
        const result: Record<number, SheetRow> = {};

        for (let i = 1; i < rows.length; i++) {
          const cols = rows[i]
            .split(",")
            .map((c) => c.trim().replace(/^"|"$/g, ""));
          const row: Record<string, string> = {};
          headers.forEach((h, j) => {
            row[h] = cols[j] ?? "";
          });

          const id = parseInt(row["id"] ?? "", 10);
          if (!id) continue;

          result[id] = {
            ...(row["price"] ? { price: row["price"] } : {}),
            ...(row["status"] === "ready" || row["status"] === "curing"
              ? { status: row["status"] as "ready" | "curing" }
              : {}),
            ...(row["cureuntil"] ? { cureUntil: row["cureuntil"] } : {}),
            ...(row["stocknote"] ? { stockNote: row["stocknote"] } : {}),
          };
        }

        setData(result);
      })
      .catch(() => {
        // silently fall back to static data
      });
  }, []);

  return data;
}
