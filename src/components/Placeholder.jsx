// Swap these for real product imagery: replace <Placeholder/> with
// <img src="..." alt="..." className="..." /> wherever a shot appears.
export default function Placeholder({ label, variant = 'light', className = '', style }) {
  const displayLabel = label || 'product workspace';
  const words = displayLabel.split(/\s+/).filter(Boolean).slice(0, 2);

  return (
    <div className={`ph ph-${variant} ${className}`} style={style}>
      <div className="ph-window" aria-hidden="true">
        <div className="ph-topbar">
          <span />
          <span />
          <span />
          <div />
        </div>
        <div className="ph-layout">
          <div className="ph-sidebar">
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="ph-main">
            <div className="ph-header">
              <strong>{words.join(' ') || 'Opie'}</strong>
              <em />
            </div>
            <div className="ph-gridline">
              <b />
              <b />
              <b />
            </div>
            <div className="ph-table">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
      <span className="ph-label">{displayLabel}</span>
    </div>
  );
}
