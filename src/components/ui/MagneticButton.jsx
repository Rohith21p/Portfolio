import { useState } from 'react';

export default function MagneticButton({ children, href, variant = 'primary', className = '' }) {
  const [ripples, setRipples] = useState([]);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const addRipple = (x, y) => {
    const id = `${Date.now()}-${Math.random()}`;
    setRipples((prev) => [...prev, { id, x, y }]);
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((item) => item.id !== id));
    }, 700);
  };

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setSpotlight({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100
    });

    setOffset({
      x: (x - rect.width / 2) * 0.08,
      y: (y - rect.height / 2) * 0.1
    });
  };

  const handleLeave = () => {
    setSpotlight({ x: 50, y: 50 });
    setOffset({ x: 0, y: 0 });
  };

  const handleClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    addRipple(event.clientX - rect.left, event.clientY - rect.top);
  };

  const baseClass = variant === 'primary' ? 'mag-btn mag-btn-primary' : 'mag-btn mag-btn-ghost';
  const Element = href ? 'a' : 'button';

  const sharedProps = {
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    onClick: handleClick,
    className: `${baseClass} ${className}`.trim(),
    style: { transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` },
    'data-cursor': 'interactive'
  };

  return (
    <Element
      {...sharedProps}
      {...(href ? { href } : { type: 'button' })}
      {...(href && href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      <span className="relative z-[2]">{children}</span>
      <span className="button-shimmer" style={{ '--btn-x': `${spotlight.x}%`, '--btn-y': `${spotlight.y}%` }} />
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="magnetic-ripple"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}
    </Element>
  );
}
