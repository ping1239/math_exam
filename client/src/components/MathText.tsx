// MathText: 수식 텍스트를 JSX로 렌더링하는 컴포넌트
// Design: Modern EduTech — 수식 가독성 최우선

import React from 'react';

interface MathTextProps {
  text: string;
  className?: string;
  block?: boolean;
}

/**
 * 수식 표기를 HTML로 변환합니다.
 * 지원 패턴:
 * - [frac:num/den] → 분수
 * - [sup:text] → 위첨자
 * - [sub:text] → 아래첨자
 */
export function MathText({ text, className = '', block = false }: MathTextProps) {
  const rendered = renderMath(text);
  if (block) {
    return <div className={className}>{rendered}</div>;
  }
  return <span className={className}>{rendered}</span>;
}

function renderMath(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // [frac:numerator/denominator]
    const fracMatch = remaining.match(/^\[frac:([^/\]]+)\/([^\]]+)\]/);
    if (fracMatch) {
      parts.push(
        <span key={key++} className="math-frac">
          <span className="numerator">{fracMatch[1]}</span>
          <span className="denominator">{fracMatch[2]}</span>
        </span>
      );
      remaining = remaining.slice(fracMatch[0].length);
      continue;
    }

    // [sup:text]
    const supMatch = remaining.match(/^\[sup:([^\]]+)\]/);
    if (supMatch) {
      parts.push(
        <sup key={key++} className="math-sup">{supMatch[1]}</sup>
      );
      remaining = remaining.slice(supMatch[0].length);
      continue;
    }

    // [sub:text]
    const subMatch = remaining.match(/^\[sub:([^\]]+)\]/);
    if (subMatch) {
      parts.push(
        <sub key={key++} className="math-sub">{subMatch[1]}</sub>
      );
      remaining = remaining.slice(subMatch[0].length);
      continue;
    }

    // Regular character
    parts.push(remaining[0]);
    remaining = remaining.slice(1);
  }

  return parts;
}

export default MathText;
