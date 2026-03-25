export default function CosmicBackdrop() {
  return (
    <div className="cosmic-root" aria-hidden>
      <div className="cosmic-base" data-depth-speed="0.04" data-pointer-depth="0.2" />
      <div className="cosmic-noise" data-depth-speed="0.03" data-pointer-depth="0.12" />
      <div className="cosmic-stars" data-depth-speed="0.08" data-pointer-depth="0.32" />

      <div className="cosmic-nebula cosmic-nebula-a" data-depth-speed="0.13" data-depth-x="-0.08" data-pointer-depth="0.46" />
      <div className="cosmic-nebula cosmic-nebula-b" data-depth-speed="0.17" data-depth-x="0.06" data-pointer-depth="0.64" />
      <div className="cosmic-nebula cosmic-nebula-c" data-depth-speed="0.2" data-depth-x="-0.04" data-pointer-depth="0.72" />

      <div className="cosmic-ring cosmic-ring-a" data-depth-speed="0.11" data-depth-x="0.04" data-pointer-depth="0.55" />
      <div className="cosmic-ring cosmic-ring-b" data-depth-speed="0.16" data-depth-x="-0.05" data-pointer-depth="0.74" />

      <div className="cosmic-streak cosmic-streak-a" data-depth-speed="0.1" data-depth-x="0.08" data-pointer-depth="0.44" />
      <div className="cosmic-streak cosmic-streak-b" data-depth-speed="0.14" data-depth-x="-0.07" data-pointer-depth="0.58" />
      <div className="cosmic-streak cosmic-streak-c" data-depth-speed="0.18" data-depth-x="0.06" data-pointer-depth="0.7" />

      <div className="cosmic-orb cosmic-orb-a" data-depth-speed="0.2" data-depth-x="0.06" data-pointer-depth="0.86" />
      <div className="cosmic-orb cosmic-orb-b" data-depth-speed="0.22" data-depth-x="-0.09" data-pointer-depth="0.95" />

      <div className="cosmic-haze" data-depth-speed="0.06" data-pointer-depth="0.24" />
    </div>
  );
}
