export function linesToArray(value: FormDataEntryValue | null): string[] {
  if (typeof value !== "string") return [];
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

/**
 * Parses a textarea where each line is "Step Name :: Detail text" into
 * { step, detail } pairs, used for the Service.process field.
 */
export function linesToProcessSteps(value: FormDataEntryValue | null): { step: string; detail: string }[] {
  if (typeof value !== "string") return [];
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [step, ...rest] = line.split("::");
      return { step: step.trim(), detail: rest.join("::").trim() };
    });
}

export function processStepsToLines(steps: { step: string; detail: string }[]): string {
  return steps.map((s) => `${s.step} :: ${s.detail}`).join("\n");
}
