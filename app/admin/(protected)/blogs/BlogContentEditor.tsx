"use client";

import { useState } from "react";
import RichTextEditor from "./RichTextEditor";

interface Props {
  defaultValue?: string;
}

export default function BlogContentEditor({ defaultValue = "" }: Props) {
  const [html, setHtml] = useState(defaultValue);

  return (
    <div>
      <label className="block text-sm font-medium text-text mb-1.5">
        Content{" "}
        <span className="text-muted font-normal">
          (type or insert <code className="text-xs bg-surface-2 px-1 py-0.5 rounded">[[cta-card]]</code> on its own line to drop in a &quot;Need help?&quot; card)
        </span>
      </label>

      <RichTextEditor value={html} onChange={setHtml} />

      <input type="hidden" name="content" value={html} />
    </div>
  );
}
