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

/**
 * Reads the repeated "faqQuestion"/"faqAnswer" fields produced by the
 * FaqRepeater admin component and zips them by position into pairs.
 */
export function formDataToFaqs(formData: FormData): { question: string; answer: string }[] {
  const questions = formData.getAll("faqQuestion").map(String);
  const answers = formData.getAll("faqAnswer").map(String);
  return questions
    .map((question, i) => ({ question: question.trim(), answer: (answers[i] ?? "").trim() }))
    .filter((f) => f.question || f.answer);
}
