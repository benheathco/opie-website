// Swap these for real product imagery: replace <Placeholder/> with
// <img src="..." alt="..." className="..." /> wherever a shot appears.
export default function Placeholder({ label, variant = 'light', className = '', style }) {
  return (
    <div className={`ph ph-${variant} ${className}`} style={style}>
      <span className="ph-label">{label}</span>
    </div>
  );
}
