"use client";

import { useRef, useState } from "react";

interface Props {
  name: string;
  label: string;
  defaultValue?: string[];
  placeholder?: string;
  hint?: string;
}

let nextId = 0;

export default function ListInput({ name, label, defaultValue = [], placeholder, hint }: Props) {
  const initial = defaultValue.length > 0 ? defaultValue : [""];
  const [rows, setRows] = useState<{ id: number; value: string }[]>(() =>
    initial.map((value) => ({ id: nextId++, value }))
  );

  function splitCommaSeparated(raw: string): string[] {
    return raw
      .split(",")
      .map((part) => part.trim())
      .filter(Boolean);
  }

  function updateRow(index: number, raw: string) {
    setRows((prev) => {
      if (raw.includes(",")) {
        const parts = splitCommaSeparated(raw);
        const next = [...prev];
        if (parts.length === 0) {
          next[index] = { ...next[index], value: "" };
          return next;
        }
        next[index] = { ...next[index], value: parts[0] };
        const inserted = parts.slice(1).map((value) => ({ id: nextId++, value }));
        next.splice(index + 1, 0, ...inserted);
        return next;
      }
      const next = [...prev];
      next[index] = { ...next[index], value: raw };
      return next;
    });
  }

  function addRow() {
    setRows((prev) => [...prev, { id: nextId++, value: "" }]);
  }

  function removeRow(index: number) {
    setRows((prev) => (prev.length === 1 ? [{ id: nextId++, value: "" }] : prev.filter((_, i) => i !== index)));
  }

  return (
    <div>
      <label className="block text-sm font-medium text-text mb-1.5">
        {label} {hint && <span className="text-muted font-normal">({hint})</span>}
      </label>
      <div className="space-y-2">
        {rows.map((row, index) => (
          <div key={row.id} className="flex items-center gap-2">
            <input
              name={name}
              value={row.value}
              onChange={(e) => updateRow(index, e.target.value)}
              placeholder={placeholder}
              className="w-full px-3 py-2.5 bg-surface border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"
            />
            <button
              type="button"
              onClick={() => removeRow(index)}
              aria-label="Remove"
              className="shrink-0 w-9 h-9 flex items-center justify-center text-muted hover:text-red-500 border border-border rounded-lg transition-colors"
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={addRow}
        className="mt-2 px-3 py-2 text-sm font-medium text-accent border border-accent/30 rounded-lg hover:bg-accent/10 transition-colors"
      >
        + Add
      </button>
    </div>
  );
}
