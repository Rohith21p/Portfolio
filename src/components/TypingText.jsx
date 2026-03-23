import { useEffect, useState } from 'react';

export default function TypingText({ texts = [] }) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [phase, setPhase] = useState('typing');

  useEffect(() => {
    if (!texts.length) {
      return undefined;
    }

    const currentText = texts[textIndex % texts.length];
    let timeout;

    if (phase === 'typing') {
      timeout = setTimeout(() => {
        const next = currentText.slice(0, displayText.length + 1);
        setDisplayText(next);
        if (next === currentText) {
          setPhase('pausing');
        }
      }, 68);
    }

    if (phase === 'pausing') {
      timeout = setTimeout(() => {
        setPhase('deleting');
      }, 1500);
    }

    if (phase === 'deleting') {
      timeout = setTimeout(() => {
        const next = currentText.slice(0, Math.max(displayText.length - 1, 0));
        setDisplayText(next);
        if (!next.length) {
          setPhase('typing');
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }, 36);
    }

    return () => clearTimeout(timeout);
  }, [displayText, phase, textIndex, texts]);

  return (
    <span className="inline-flex items-center gap-2 font-medium text-blue-100/95">
      <span>{displayText}</span>
      <span className="h-6 w-[2px] animate-pulse bg-blue-300" />
    </span>
  );
}
