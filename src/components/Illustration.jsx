// Branded product illustrations. Each scene is an inline SVG drawn with the
// site's palette (via CSS custom properties set on .ph-light/.ph-deep/.ph-dark
// in index.css) so it sits naturally in light and dark sections. Scenes are
// picked from a free-text `shot` label by keyword (see pickScene below).
//
// The recurring teal "source pin" is the visual signature: every scene shows
// where a figure, answer or decision came from.

const W = 400;
const H = 280;

/* ---------- primitives ---------- */

function Frame({ children, title }) {
  return (
    <svg
      className="il"
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={title}
      preserveAspectRatio="xMidYMid meet"
    >
      <rect x="0.5" y="0.5" width={W - 1} height={H - 1} rx="14" className="il-panel" />
      <g className="il-topbar">
        <circle cx="18" cy="16" r="3.5" />
        <circle cx="30" cy="16" r="3.5" />
        <circle cx="42" cy="16" r="3.5" />
        <rect x={W - 130} y="11" width="112" height="10" rx="5" className="il-fill" />
        <line x1="0.5" y1="32" x2={W - 0.5} y2="32" className="il-line" />
      </g>
      {children}
    </svg>
  );
}

function Pin({ x, y, r = 5 }) {
  return (
    <g className="il-pin" transform={`translate(${x} ${y})`}>
      <circle r={r + 6} className="il-pin-ring" />
      <circle r={r} className="il-accent-fill" />
      <circle r={r - 3} fill="#fff" />
    </g>
  );
}

function Bar({ x, y, w, h = 8, cls = 'il-fill', rx }) {
  return <rect x={x} y={y} width={w} height={h} rx={rx ?? h / 2} className={cls} />;
}

function Card({ x, y, w, h, rx = 10, cls = 'il-card', children }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={w} height={h} rx={rx} className={cls} />
      {children}
    </g>
  );
}

function Check({ x, y, s = 1 }) {
  return (
    <path
      d="M-4 0.5 L-1 3.5 L4.5 -3"
      transform={`translate(${x} ${y}) scale(${s})`}
      className="il-accent-stroke"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

function Avatar({ x, y, r = 9, tone = 0 }) {
  return (
    <g transform={`translate(${x} ${y})`} className={`il-avatar il-avatar-${tone}`}>
      <circle r={r} />
      <circle cy={-r * 0.25} r={r * 0.34} fill="#fff" />
      <path d={`M${-r * 0.62} ${r * 0.72} a${r * 0.62} ${r * 0.62} 0 0 1 ${r * 1.24} 0`} fill="#fff" />
    </g>
  );
}

function Doc({ x, y, w = 54, h = 68, lines = 4 }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path
        d={`M0 8 a8 8 0 0 1 8 -8 h${w - 22} l14 14 v${h - 22} a8 8 0 0 1 -8 8 h${-(w - 16)} a8 8 0 0 1 -8 -8 z`}
        className="il-card"
      />
      <path d={`M${w - 14} 0 v10 a4 4 0 0 0 4 4 h10`} className="il-line" fill="none" />
      {Array.from({ length: lines }).map((_, i) => (
        <Bar key={i} x={11} y={22 + i * 11} w={i === lines - 1 ? w * 0.45 : w - 22} h={5} />
      ))}
    </g>
  );
}

/* ---------- scenes ---------- */

function ReviewTable() {
  const rows = [0.62, 0.48, 0.7, 0.55, 0.66];
  return (
    <Frame title="Review table with source-linked findings">
      <Bar x={22} y={48} w={92} h={9} cls="il-ink-fill" />
      <Bar x={W - 96} y={46} w={74} h={14} cls="il-accent-soft" rx={7} />
      {/* header */}
      <g transform="translate(22 72)">
        <Bar x={0} y={0} w={64} h={6} />
        <Bar x={96} y={0} w={72} h={6} />
        <Bar x={196} y={0} w={60} h={6} />
        <Bar x={296} y={0} w={40} h={6} />
        <line x1="0" y1="16" x2={W - 44} y2="16" className="il-line" />
      </g>
      {rows.map((f, i) => {
        const y = 100 + i * 32;
        return (
          <g key={i} transform={`translate(22 ${y})`}>
            <Doc x={0} y={-6} w={18} h={22} lines={0} />
            <Bar x={26} y={2} w={54 * f + 10} h={6} />
            <Bar x={96} y={2} w={72 * f} h={6} cls="il-ink-soft" />
            <Bar x={196} y={2} w={60 * (1.2 - f)} h={6} />
            {i === 2 ? (
              <rect x={296} y={-4} width={44} height={16} rx={8} className="il-amber-soft" />
            ) : (
              <g>
                <circle cx={306} cy={4} r={7} className="il-accent-soft" />
                <Check x={306} y={4} s={0.8} />
              </g>
            )}
            <line x1="-4" y1="20" x2={W - 44} y2="20" className="il-line-soft" />
          </g>
        );
      })}
      <Pin x={22 + 96 + 30} y={100 + 2 * 32 + 5} />
    </Frame>
  );
}

function TrafficLight() {
  return (
    <Frame title="Disclosure review with risk flags and sign-off">
      <Doc x={30} y={56} w={130} h={180} lines={9} />
      {/* highlight bands on the document */}
      <rect x={38} y={99} width={112} height="12" rx="4" className="il-red-soft" />
      <rect x={38} y={143} width={112} height="12" rx="4" className="il-amber-soft" />
      <rect x={38} y={187} width={112} height="12" rx="4" className="il-green-soft" />
      {/* connectors */}
      {[105, 149, 193].map((y, i) => (
        <path
          key={y}
          d={`M152 ${y} C 190 ${y}, 190 ${86 + i * 58}, 218 ${86 + i * 58}`}
          className="il-line"
          fill="none"
        />
      ))}
      {[
        { y: 66, cls: 'il-red', label: 0.5 },
        { y: 124, cls: 'il-amber', label: 0.7 },
        { y: 182, cls: 'il-green', label: 0.42 },
      ].map((f, i) => (
        <Card key={f.y} x={218} y={f.y} w={156} h={40}>
          <circle cx="20" cy="20" r="7" className={f.cls} />
          <Bar x={36} y={12} w={90 * f.label} h={6} />
          <Bar x={36} y={24} w={60} h={5} cls="il-fill-soft" />
          {i < 2 ? <Avatar x={138} y={20} r={8} tone={i} /> : <Check x={138} y={20} />}
        </Card>
      ))}
      <Pin x={38 + 4} y={149} r={4} />
    </Frame>
  );
}

function Citation() {
  return (
    <Frame title="Answer grounded in a cited source section">
      {/* question bubble */}
      <Card x={24} y={48} w={220} h={44} rx={14}>
        <Avatar x={22} y={22} r={9} tone={1} />
        <Bar x={40} y={14} w={130} h={6} cls="il-ink-soft" />
        <Bar x={40} y={26} w={84} h={5} />
      </Card>
      {/* answer */}
      <Card x={24} y={104} w={236} h={124} rx={14} cls="il-card-strong">
        <Bar x={18} y={20} w={190} h={6} />
        <Bar x={18} y={34} w={200} h={6} />
        <Bar x={18} y={48} w={150} h={6} />
        <Bar x={18} y={62} w={196} h={6} />
        <Bar x={18} y={76} w={110} h={6} />
        <rect x={130} y={71} width={64} height={16} rx={8} className="il-accent-soft" />
        <Bar x={139} y={76} w={44} h={6} cls="il-accent-fill" />
        <Bar x={18} y={98} w={140} h={6} />
      </Card>
      {/* source doc */}
      <Doc x={292} y={70} w={84} h={150} lines={8} />
      <rect x={302} y={139} width={64} height="12" rx="4" className="il-accent-soft" />
      <path d="M194 79 C 240 79, 250 145, 302 145" className="il-accent-stroke" fill="none" strokeDasharray="3 4" />
      <Pin x={302} y={145} r={4} />
    </Frame>
  );
}

function EntityTree() {
  const kids = [70, 150, 230, 310];
  return (
    <Frame title="Playbooks running across multiple entities">
      <Card x={140} y={48} w={120} h={38} rx={12} cls="il-card-strong">
        <Bar x={14} y={12} w={60} h={7} cls="il-ink-fill" />
        <Bar x={14} y={24} w={40} h={5} />
        <circle cx={100} cy={19} r={8} className="il-accent-soft" />
        <Check x={100} y={19} s={0.8} />
      </Card>
      <line x1="200" y1="86" x2="200" y2="112" className="il-line" />
      <line x1={kids[0]} y1="112" x2={kids[3]} y2="112" className="il-line" />
      {kids.map((x, i) => (
        <g key={x}>
          <line x1={x} y1="112" x2={x} y2="130" className="il-line" />
          <Card x={x - 34} y={130} w={68} h={34} rx={10}>
            <Bar x={10} y={11} w={30 + (i % 2) * 12} h={6} cls="il-ink-soft" />
            <Bar x={10} y={22} w={22} h={4} />
          </Card>
          {/* playbook run rows */}
          {[0, 1, 2].map((r) => (
            <g key={r} transform={`translate(${x - 34} ${176 + r * 24})`}>
              <rect width={68} height={16} rx={6} className="il-fill-soft" />
              <circle cx={10} cy={8} r={4} className={r === 1 && i === 2 ? 'il-amber' : 'il-accent-fill'} />
              <Bar x={20} y={5.5} w={30 + ((r + i) % 3) * 6} h={5} />
            </g>
          ))}
        </g>
      ))}
      <Pin x={kids[2] - 34 + 10} y={176 + 24 + 8} r={4} />
    </Frame>
  );
}

function Integrations() {
  const nodes = [
    [70, 80], [70, 200], [200, 56], [200, 226], [330, 80], [330, 200],
  ];
  return (
    <Frame title="Connected systems feeding one workspace">
      {nodes.map(([x, y], i) => (
        <path key={i} d={`M${x} ${y} Q ${(x + 200) / 2} ${(y + 141) / 2 + (i % 2 ? 18 : -18)} 200 141`} className="il-line" fill="none" />
      ))}
      <circle cx="200" cy="141" r="26" className="il-accent-soft" />
      <circle cx="200" cy="141" r="26" className="il-accent-stroke" fill="none" strokeWidth="1.5" />
      <text x="200" y="146" textAnchor="middle" className="il-mark">O</text>
      {nodes.map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <rect x="-24" y="-18" width="48" height="36" rx="10" className="il-card" />
          <rect x="-12" y="-7" width="24" height="14" rx="4" className={i % 3 === 0 ? 'il-ink-soft' : i % 3 === 1 ? 'il-accent-soft' : 'il-fill'} />
        </g>
      ))}
      {/* moving packet */}
      <circle cx="135" cy="110" r="4" className="il-accent-fill il-packet" />
      <Pin x={330 + 20} y={80 - 14} r={4} />
    </Frame>
  );
}

function Vault() {
  return (
    <Frame title="Permissioned knowledge vault">
      {/* folder */}
      <path d="M40 78 h62 l14 12 h100 a10 10 0 0 1 10 10 v96 a10 10 0 0 1 -10 10 h-176 a10 10 0 0 1 -10 -10 v-108 a10 10 0 0 1 10 -10 z" className="il-card" />
      <rect x="30" y="102" width="196" height="104" rx="10" className="il-card-strong" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(46 ${120 + i * 26})`}>
          <Doc x={0} y={-4} w={16} h={20} lines={0} />
          <Bar x={24} y={3} w={70 + i * 14} h={6} />
          <rect x={132} y={-1} width={34} height={14} rx={7} className={i === 1 ? 'il-accent-soft' : 'il-fill-soft'} />
        </g>
      ))}
      {/* lock */}
      <g transform="translate(300 118)">
        <circle r="44" className="il-accent-soft" />
        <rect x="-20" y="-6" width="40" height="32" rx="8" className="il-ink-fill" />
        <path d="M-12 -6 v-8 a12 12 0 0 1 24 0 v8" className="il-ink-stroke" fill="none" strokeWidth="4" />
        <circle cy="10" r="4" fill="#fff" />
      </g>
      {/* role chips */}
      {['il-accent-soft', 'il-fill', 'il-fill'].map((cls, i) => (
        <g key={i} transform={`translate(${256 + i * 46} 186)`}>
          <rect width="40" height="18" rx="9" className={cls} />
          <Bar x={8} y={6.5} w={24} h={5} cls="il-ink-soft" />
        </g>
      ))}
      <Pin x={46 + 24 + 6} y={120 + 26 + 6} r={4} />
    </Frame>
  );
}

function Agents() {
  const agents = [
    { x: 300, y: 70, tone: 0 },
    { x: 330, y: 141, tone: 1 },
    { x: 300, y: 212, tone: 2 },
  ];
  return (
    <Frame title="Specialist agents orchestrated across a task">
      <Card x={30} y={110} w={110} h={62} rx={14} cls="il-card-strong">
        <Bar x={14} y={16} w={70} h={7} cls="il-ink-fill" />
        <Bar x={14} y={30} w={50} h={5} />
        <Bar x={14} y={42} w={64} h={5} />
      </Card>
      {/* router */}
      <circle cx="200" cy="141" r="20" className="il-accent-soft" />
      <path d="M192 133 l8 8 l-8 8 M200 133 l8 8 l-8 8" className="il-accent-stroke" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M140 141 h40" className="il-line" />
      {agents.map((a) => (
        <g key={a.y}>
          <path d={`M220 141 C 250 141, 250 ${a.y}, ${a.x - 30} ${a.y}`} className="il-line" fill="none" />
          <rect x={a.x - 30} y={a.y - 18} width="80" height="36" rx="12" className="il-card" />
          <Avatar x={a.x - 12} y={a.y} r={9} tone={a.tone} />
          <Bar x={a.x + 4} y={a.y - 8} w={36} h={5} cls="il-ink-soft" />
          <Bar x={a.x + 4} y={a.y + 3} w={26} h={4} />
        </g>
      ))}
      <Pin x={30 + 14 + 64} y={110 + 44} r={4} />
    </Frame>
  );
}

function Calendar() {
  const cols = 7;
  const rows = 4;
  const marks = { 3: 'il-accent-fill', 9: 'il-amber', 12: 'il-accent-fill', 17: 'il-accent-fill', 24: 'il-red' };
  return (
    <Frame title="Obligation calendar with owners and due dates">
      <Bar x={22} y={48} w={80} h={9} cls="il-ink-fill" />
      {Array.from({ length: cols }).map((_, c) => (
        <Bar key={c} x={22 + c * 34} y={68} w={18} h={5} />
      ))}
      {Array.from({ length: rows * cols }).map((_, i) => {
        const c = i % cols;
        const r = Math.floor(i / cols);
        const x = 22 + c * 34;
        const y = 82 + r * 34;
        return (
          <g key={i}>
            <rect x={x} y={y} width="30" height="30" rx="6" className={i === 12 ? 'il-accent-soft' : 'il-fill-soft'} />
            {marks[i] && <circle cx={x + 22} cy={y + 8} r="3" className={marks[i]} />}
          </g>
        );
      })}
      {/* task list */}
      <Card x={276} y={48} w={104} h={190} rx={12}>
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i} transform={`translate(12 ${16 + i * 34})`}>
            <Avatar x={8} y={8} r={7} tone={i % 3} />
            <Bar x={22} y={2} w={40 + (i % 2) * 14} h={5} cls="il-ink-soft" />
            <Bar x={22} y={11} w={30} h={4} />
            {i === 1 && <rect x={22} y={18} width={44} height={6} rx={3} className="il-accent-soft" />}
          </g>
        ))}
      </Card>
      <Pin x={22 + 5 * 34 + 15} y={82 + 34 + 15} r={4} />
    </Frame>
  );
}

function Dashboard() {
  const bars = [30, 52, 40, 66, 48, 74, 60];
  return (
    <Frame title="Compliance dashboard with obligations, approvals and evidence">
      {[0, 1, 2].map((i) => (
        <Card key={i} x={22 + i * 120} y={46} w={108} h={54} rx={12}>
          <Bar x={12} y={12} w={44} h={5} />
          <Bar x={12} y={26} w={30 + i * 10} h={12} cls="il-ink-fill" rx={3} />
          <circle cx={92} cy={38} r={6} className={i === 1 ? 'il-amber' : 'il-accent-fill'} />
        </Card>
      ))}
      <Card x={22} y={112} w={228} h={126} rx={12}>
        <Bar x={14} y={14} w={70} h={6} cls="il-ink-soft" />
        {bars.map((h, i) => (
          <rect key={i} x={16 + i * 30} y={112 - h} width="18" height={h} rx="4" className={i === 5 ? 'il-accent-fill' : 'il-accent-soft'} />
        ))}
        <line x1="14" y1="112" x2="214" y2="112" className="il-line" />
      </Card>
      <Card x={262} y={112} w={116} h={126} rx={12}>
        <Bar x={12} y={14} w={60} h={6} cls="il-ink-soft" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i} transform={`translate(12 ${32 + i * 24})`}>
            <circle cx={6} cy={6} r={5} className={i < 3 ? 'il-accent-soft' : 'il-fill'} />
            {i < 3 && <Check x={6} y={6} s={0.6} />}
            <Bar x={18} y={3.5} w={50 + (i % 2) * 20} h={5} />
          </g>
        ))}
      </Card>
      <Pin x={22 + 16 + 5 * 30 + 9} y={112 + 112 - 74 - 8} r={4} />
    </Frame>
  );
}

function Kyc() {
  return (
    <Frame title="Client onboarding with verified identity checks">
      <Card x={36} y={64} w={190} h={128} rx={16} cls="il-card-strong">
        <rect x={16} y={20} width={56} height={56} rx={12} className="il-fill" />
        <Avatar x={44} y={48} r={16} tone={1} />
        <Bar x={86} y={26} w={90} h={7} cls="il-ink-fill" />
        <Bar x={86} y={42} w={64} h={5} />
        <Bar x={86} y={54} w={78} h={5} />
        <Bar x={86} y={66} w={50} h={5} />
        <Bar x={16} y={96} w={158} h={5} cls="il-fill-soft" />
        <Bar x={16} y={108} w={120} h={5} cls="il-fill-soft" />
      </Card>
      {/* checks */}
      {[
        ['il-accent-soft', true], ['il-accent-soft', true], ['il-amber-soft', false],
      ].map(([cls, ok], i) => (
        <g key={i} transform={`translate(252 ${70 + i * 46})`}>
          <rect width="124" height="36" rx="10" className="il-card" />
          <circle cx="18" cy="18" r="8" className={cls} />
          {ok ? <Check x={18} y={18} s={0.8} /> : <rect x="15" y="12" width="6" height="12" rx="1.5" className="il-amber" />}
          <Bar x={34} y={11} w={60} h={5} cls="il-ink-soft" />
          <Bar x={34} y={22} w={44} h={4} />
        </g>
      ))}
      <path d="M226 128 C 240 128, 240 134, 252 134" className="il-line" fill="none" />
      <circle cx="210" cy="176" r="14" className="il-accent-fill" />
      <Check x={210} y={176} s={1.2} />
      <Pin x={252 + 18} y={70 + 92 + 40} r={4} />
    </Frame>
  );
}

function Shield() {
  return (
    <Frame title="Encryption at rest and in transit">
      <path d="M200 52 l84 26 v58 c0 48 -36 82 -84 98 c-48 -16 -84 -50 -84 -98 v-58 z" className="il-accent-soft" />
      <path d="M200 52 l84 26 v58 c0 48 -36 82 -84 98 c-48 -16 -84 -50 -84 -98 v-58 z" className="il-accent-stroke" fill="none" strokeWidth="1.5" />
      <g transform="translate(200 142)">
        <rect x="-24" y="-8" width="48" height="38" rx="10" className="il-ink-fill" />
        <path d="M-14 -8 v-10 a14 14 0 0 1 28 0 v10" className="il-ink-stroke" fill="none" strokeWidth="5" />
        <circle cy="10" r="4.5" fill="#fff" />
      </g>
      {/* data streams */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <path d={`M30 ${100 + i * 40} h60`} className="il-line" strokeDasharray="4 5" />
          <path d={`M310 ${100 + i * 40} h60`} className="il-line" strokeDasharray="4 5" />
        </g>
      ))}
      <Card x={24} y={196} w={92} h={30} rx={9}>
        <Bar x={10} y={12} w={54} h={6} cls="il-ink-soft" />
        <circle cx={78} cy={15} r={5} className="il-accent-fill" />
      </Card>
      <Card x={284} y={196} w={92} h={30} rx={9}>
        <Bar x={10} y={12} w={54} h={6} cls="il-ink-soft" />
        <circle cx={78} cy={15} r={5} className="il-accent-fill" />
      </Card>
    </Frame>
  );
}

function Teams() {
  const people = [
    [90, 96, 0], [200, 78, 1], [310, 96, 2], [140, 190, 2], [260, 190, 0],
  ];
  return (
    <Frame title="Teams working from shared notes and playbooks">
      <Card x={150} y={112} w={100} h={62} rx={14} cls="il-card-strong">
        <Bar x={14} y={14} w={60} h={6} cls="il-ink-fill" />
        <Bar x={14} y={28} w={72} h={5} />
        <Bar x={14} y={40} w={48} h={5} />
      </Card>
      {people.map(([x, y, t], i) => (
        <g key={i}>
          <path d={`M${x} ${y} L200 143`} className="il-line-soft" />
          <circle cx={x} cy={y} r="22" className="il-card" />
          <Avatar x={x} y={y} r={13} tone={t} />
        </g>
      ))}
      <Pin x={150 + 14 + 60} y={112 + 17} r={4} />
    </Frame>
  );
}

function Models() {
  const items = ['il-ink-fill', 'il-accent-fill', 'il-ink-soft', 'il-amber'];
  return (
    <Frame title="Choose the AI model for each task">
      <Card x={30} y={56} w={200} h={166} rx={14} cls="il-card-strong">
        <Bar x={16} y={16} w={90} h={7} cls="il-ink-fill" />
        {items.map((cls, i) => (
          <g key={i} transform={`translate(16 ${40 + i * 30})`}>
            <rect width="168" height="24" rx="8" className={i === 1 ? 'il-accent-soft' : 'il-fill-soft'} />
            <circle cx="14" cy="12" r="6" className={cls} />
            <Bar x={28} y={9} w={70 + (i % 2) * 20} h={6} cls="il-ink-soft" />
            {i === 1 && <Check x={154} y={12} s={0.8} />}
          </g>
        ))}
      </Card>
      <Card x={250} y={92} w={126} h={94} rx={14}>
        <Bar x={14} y={16} w={80} h={6} />
        <Bar x={14} y={30} w={96} h={6} />
        <Bar x={14} y={44} w={60} h={6} />
        <rect x={14} y={62} width={54} height={16} rx={8} className="il-accent-soft" />
        <Bar x={22} y={67} w={38} h={6} cls="il-accent-fill" />
      </Card>
      <path d="M230 111 h20" className="il-line" />
      <Pin x={250 + 14 + 6} y={92 + 70} r={4} />
    </Frame>
  );
}

/* ---------- registry ---------- */

const SCENES = [
  { test: /kyc|onboarding|risk profile|identity/, scene: Kyc },
  { test: /traffic|disclosure(?! review table)|verification|escalation|sign-off/, scene: TrafficLight },
  { test: /citation|search|legislation|legal research|assistant|chat/, scene: Citation },
  { test: /entity|playbook|fund compliance/, scene: EntityTree },
  { test: /integration|connected|trigger/, scene: Integrations },
  { test: /vault|permission|isolated|storage/, scene: Vault },
  { test: /agent|orchestration|enterprise/, scene: Agents },
  { test: /calendar|task|obligation/, scene: Calendar },
  { test: /dashboard|overview|report|risk workspace|financial institution/, scene: Dashboard },
  { test: /encryption|security/, scene: Shield },
  { test: /team|collaboration/, scene: Teams },
  { test: /model/, scene: Models },
  { test: /table|review|extraction|reconciliation|contract|doc|processing|statement/, scene: ReviewTable },
];

export function pickScene(label = '') {
  const key = label.toLowerCase();
  const hit = SCENES.find((s) => s.test.test(key));
  return hit ? hit.scene : null;
}

export default function Illustration({ label }) {
  const Scene = pickScene(label);
  if (!Scene) return null;
  return <Scene />;
}
