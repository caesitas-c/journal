import React, { useMemo, useState } from "react";

export default function OutermostTownSite() {
  const [theme, setTheme] = useState("ink");
  const [layout, setLayout] = useState("folio");
  const [expandedPiece, setExpandedPiece] = useState(null);

  const themeVars = useMemo(() => {
    switch (theme) {
      case "sand":
        return {
          "--bg": "#F8F6F0",
          "--bg-muted": "#EFEAE2",
          "--text": "#171614",
          "--text-muted": "#4B463F",
          "--accent": "#9A7B4F",
          "--line": "#D9D2C6",
          "--card": "#FCFBF8",
        };
      case "oxide":
        return {
          "--bg": "#0F1412",
          "--bg-muted": "#0B100E",
          "--text": "#EAE7E1",
          "--text-muted": "#A7A39A",
          "--accent": "#7DA7A1",
          "--line": "#2B3834",
          "--card": "#131917",
        };
      default:
        return {
          "--bg": "#000000",
          "--bg-muted": "#050505",
          "--text": "#ECECEC",
          "--text-muted": "#9B9B9B",
          "--accent": "#9CCFD8",
          "--line": "#1A1A1A",
          "--card": "#0B0B0B",
        };
    }
  }, [theme]);

  return (
    <div style={themeVars} className="min-h-screen w-full" data-theme={theme}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Source+Serif+Pro:wght@400;600&display=swap');
        
        :root { 
          --radius: 1.25rem; 
          --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          --font-serif: 'Source Serif Pro', Georgia, serif;
        }
        
        * {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          letter-spacing: -0.01em;
          line-height: 1.4;
        }
        
        h1, h2, h3 {
          font-family: var(--font-serif);
          letter-spacing: -0.02em;
        }
        
        .paper {
          background: var(--bg);
          background-image:
            radial-gradient(1000px 500px at 10% -10%, rgba(255,255,255,0.06), transparent),
            radial-gradient(800px 600px at 120% 20%, rgba(255,255,255,0.04), transparent),
            radial-gradient(500px 500px at 50% 120%, rgba(0,0,0,0.15), transparent);
        }
        
        .hum { 
          height: 1px; 
          position: relative; 
          overflow: hidden; 
          background: linear-gradient(90deg, transparent, var(--accent), transparent); 
        }
        
        .hum::after { 
          content: ""; 
          position: absolute; 
          inset: 0; 
          transform: translateX(-100%); 
          background: linear-gradient(90deg, transparent, var(--accent), transparent); 
          animation: sweep 4.5s linear infinite; 
        }
        
        @keyframes sweep { 
          to { transform: translateX(100%); } 
        }
        
        .grain { 
          position: fixed; 
          inset: 0; 
          pointer-events: none; 
          opacity: .05; 
          mix-blend-mode: overlay; 
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch"/></filter><rect width="100" height="100" filter="url(%23n)" opacity="0.8"/></svg>'); 
        }
        
        .prose p { 
          margin: 0.8rem 0; 
          line-height: 1.5; 
          font-size: 0.85rem;
        }
        
        .prose p + p { 
          text-indent: 0; 
        }
        
        .btn { 
          border: 1px solid var(--line); 
          padding: .3rem .6rem; 
          border-radius: .4rem; 
          background: transparent; 
          color: var(--text); 
          font-family: var(--font-sans); 
          font-size: .75rem;
          cursor: pointer;
          transition: border-color 0.2s ease;
        }
        
        .btn:hover { 
          border-color: var(--text-muted); 
        }
        
        .tab { 
          padding: .25rem .5rem; 
          border-radius: .4rem; 
          border: 1px solid transparent;
          background: transparent;
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: .7rem;
        }
        
        .tab[data-active="true"] { 
          border-color: var(--line); 
          background: var(--card); 
        }
        
        .chip { 
          display: inline-flex; 
          align-items: center; 
          gap: .4rem; 
          padding: .25rem .55rem; 
          border-radius: 999px; 
          border: 1px solid var(--line); 
          font-size: .8rem; 
        }
        
        .card { 
          background: var(--card); 
          border: 1px solid var(--line); 
          border-radius: var(--radius); 
        }
        
        .muted { 
          color: var(--text-muted); 
        }
        
        .divider { 
          height: 1px; 
          background: linear-gradient(90deg, transparent, var(--line), transparent); 
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        a:hover {
          color: var(--accent);
        }

        .hover\\:underline:hover {
          text-decoration: underline;
        }
      `}</style>

      {/* Noise layer */}
      <div className="grain" />

      {/* Top bar */}
      <header className="paper sticky top-0 z-30 border-b" style={{borderColor: "var(--line)"}}>
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-baseline gap-4">
            <a href="#home" className="tracking-wide" style={{color: "var(--text)", fontVariantLigatures: "common-ligatures", fontWeight: 600}}>The Outermost Town</a>
            <span className="chip muted" title="A small editorial imprint">journal</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm" style={{color: "var(--text-muted)"}}>
            <a href="#issues" className="hover:underline">Issues</a>
            <a href="#dispatches" className="hover:underline">Dispatches</a>
            <a href="#submit" className="hover:underline">Submit</a>
            <a href="#about" className="hover:underline">About</a>
          </nav>
          <div className="flex items-center gap-2">
            <div role="group" aria-label="Theme" className="hidden sm:flex items-center gap-1" style={{color: "var(--text-muted)"}}>
              {(["ink","sand","oxide"]).map(k => (
                <button key={k} className="tab" data-active={theme===k} onClick={()=>setTheme(k)} aria-pressed={theme===k} title={`Theme: ${k}`}>{k}</button>
              ))}
            </div>
            <div className="hidden sm:block">|</div>
            <div role="group" aria-label="Layout" className="hidden sm:flex items-center gap-1" style={{color: "var(--text-muted)"}}>
              {(["folio","scroll"]).map(k => (
                <button key={k} className="tab" data-active={layout===k} onClick={()=>setLayout(k)} aria-pressed={layout===k} title={`Layout: ${k}`}>{k}</button>
              ))}
            </div>
          </div>
        </div>
        <div className="hum" />
      </header>

      {/* Announcement */}
      <section className="paper border-b" style={{borderColor: "var(--line)"}}>
        <div className="mx-auto max-w-6xl px-4 py-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm" style={{color: "var(--text-muted)"}}>
            Call for work: <em>evidence</em> — not only the reality, but unverifiable memories and phantasia.
          </p>
          <a href="#submit" className="btn">Send a report</a>
        </div>
      </section>

      {/* Hero / Manifesto */}
      <main id="home" className="paper">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-7">
              <h1 className="text-3xl sm:text-4xl leading-tight tracking-tight" style={{color: "var(--text)", letterSpacing: "-0.02em"}}>
                Extended Translation
              </h1>
              <p className="mt-4 text-base muted max-w-prose">Issue No. 01</p>
            </div>
            <div className="md:col-span-5 md:pl-6">
              <div className="card p-6" style={{color: "var(--text)", maxHeight: "60vh", overflow: "hidden", position: "relative"}}>
                {/* Meaningful abstract representation */}
                <svg width="100%" height="300" viewBox="0 0 400 300" style={{opacity: 0.7}}>
                  {/* Translation layers - representing the process of translation/transformation */}
                  <g opacity="0.6">
                    {/* Original text layer */}
                    <rect x="20" y="50" width="120" height="3" fill="var(--text-muted)" rx="1.5"/>
                    <rect x="20" y="65" width="100" height="3" fill="var(--text-muted)" rx="1.5"/>
                    <rect x="20" y="80" width="80" height="3" fill="var(--text-muted)" rx="1.5"/>
                    
                    {/* Arrow/transformation indicator */}
                    <path d="M 160 65 L 180 65" stroke="var(--accent)" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                    
                    {/* Translated/transformed layer */}
                    <rect x="200" y="45" width="140" height="3" fill="var(--accent)" rx="1.5">
                      <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" repeatCount="indefinite"/>
                    </rect>
                    <rect x="200" y="60" width="110" height="3" fill="var(--accent)" rx="1.5">
                      <animate attributeName="opacity" values="0.5;1;0.5" dur="5s" repeatCount="indefinite"/>
                    </rect>
                    <rect x="200" y="75" width="90" height="3" fill="var(--accent)" rx="1.5">
                      <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite"/>
                    </rect>
                  </g>
                  
                  {/* Extension lines - representing the "extended" nature */}
                  <g opacity="0.4">
                    <line x1="50" y1="120" x2="350" y2="120" stroke="var(--line)" strokeWidth="1" strokeDasharray="2,3">
                      <animate attributeName="stroke-dashoffset" values="0;5" dur="2s" repeatCount="indefinite"/>
                    </line>
                    <line x1="50" y1="180" x2="350" y2="180" stroke="var(--line)" strokeWidth="1" strokeDasharray="2,3">
                      <animate attributeName="stroke-dashoffset" values="5;0" dur="3s" repeatCount="indefinite"/>
                    </line>
                  </g>
                  
                  {/* Fragments floating between layers */}
                  <g opacity="0.5">
                    <circle cx="120" cy="140" r="2" fill="var(--accent)">
                      <animate attributeName="cy" values="140;160;140" dur="6s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="280" cy="150" r="1.5" fill="var(--text-muted)">
                      <animate attributeName="cy" values="150;130;150" dur="8s" repeatCount="indefinite"/>
                    </circle>
                    <rect x="180" y="200" width="8" height="2" fill="var(--accent)" rx="1">
                      <animate attributeName="y" values="200;220;200" dur="7s" repeatCount="indefinite"/>
                    </rect>
                  </g>
                  
                  {/* Bridge/connection at bottom */}
                  <path d="M 80 250 Q 200 230 320 250" stroke="var(--accent)" strokeWidth="1.5" fill="none" opacity="0.6">
                    <animate attributeName="d" values="M 80 250 Q 200 230 320 250;M 80 250 Q 200 270 320 250;M 80 250 Q 200 230 320 250" dur="8s" repeatCount="indefinite"/>
                  </path>
                  
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="var(--accent)" />
                    </marker>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider" />

        {/* Latest Issue */}
        <section id="issues" className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-2xl" style={{color: "var(--text)"}}>Latest Issue · <span className="muted">No. 01 — "Extended Translation"</span></h2>
            <a className="text-sm hover:underline" style={{color: "var(--text-muted)"}} href="#">Browse all</a>
          </div>
          <div className="grid sm:grid-cols-1 lg:grid-cols-1 gap-6">
            {samplePieces.map((p) => (
              <article key={p.slug} className="card p-6 flex flex-col gap-4" aria-labelledby={`t-${p.slug}`}>
                <div className="text-xs uppercase tracking-wide muted">{p.kind}</div>
                <h3 id={`t-${p.slug}`} className="text-xl" style={{color: "var(--text)"}}>{p.title}</h3>
                
                {expandedPiece === p.slug ? (
                  <div className="prose" style={{color: "var(--text)"}}>
                    <p>This morning I saw my wife reading an instruction manual. She said, "Press the button for five seconds." Not to me, I think, because she didn't know I was in the room. She was speaking to herself, the way she sometimes announces "They think he's guilty" while we're watching court documentaries. She needed to repeat a fact to fully comprehend it.</p>
                    
                    <p><em>Press the button for five seconds</em> means:</p>
                    
                    <ol style={{paddingLeft: "1.5rem", margin: "1rem 0"}}>
                      <li style={{marginBottom: "0.5rem"}}>When you press it for less than five seconds, it responds differently;</li>
                      <li style={{marginBottom: "0.5rem"}}>The object has at least one button (does it distinguish this from that? She didn't specify);</li>
                      <li style={{marginBottom: "0.5rem"}}>Press it longer than five seconds and nothing more happens—it won't learn to sing from your extra, obsessive effort;</li>
                      <li style={{marginBottom: "0.5rem"}}>This might be the most important, most difficult sentence on that page.</li>
                    </ol>
                    
                    <p>Then it suddenly occurred to me: if I remembered my wife reading an instruction manual, but later both the manual and my wife had vanished, the experience would become utterly terrifying, because I'd have no evidence to confirm it as real.</p>
                  </div>
                ) : (
                  <p className="muted leading-relaxed">{p.excerpt}</p>
                )}
                
                <div className="mt-auto pt-3 flex items-center justify-between">
                  <div className="text-sm muted">{p.author}</div>
                  <button 
                    className="btn" 
                    onClick={() => setExpandedPiece(expandedPiece === p.slug ? null : p.slug)}
                  >
                    {expandedPiece === p.slug ? "Collapse" : "Read"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Dispatches - removed */}

        {/* Submit */}
        <section id="submit" className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7">
              <h2 className="text-2xl" style={{color: "var(--text)"}}>Submit · <span className="muted">Send a sensory report</span></h2>
              <p className="mt-3 leading-relaxed" style={{color: "var(--text)"}}>
                We welcome traces: brief documents, testimonies, and meticulously observed scenes across fiction, poetry, and essay. Think of a precise sensation that carries its own time‑lag: rope fibers on a pier; tin on the tongue after kettle tea; bark ridges showing through late frost; the cursor's half‑second stall at 02:14.
              </p>
              <ul className="mt-4 space-y-2 text-sm" style={{color: "var(--text)"}}>
                <li><span className="chip">Fiction</span> 800–7,500 words · narrative forms</li>
                <li><span className="chip">Poetry</span> up to 5 poems · verse and experimental forms</li>
                <li><span className="chip">Nonfiction</span> 800–2,000 words · journalism, documentary writing</li>
                <li><span className="chip">Literary Reportage</span> up to 3,000 words · investigative narrative</li>
                <li><span className="chip">New Genre</span> experimental · formats we haven't named yet</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="btn">Read full guidelines</button>
                <button className="btn" style={{borderColor: "var(--accent)", color: "var(--accent)"}}>Start submission</button>
              </div>
            </div>
            <aside className="md:col-span-5 card p-6">
              <h3 className="text-lg" style={{color: "var(--text)"}}>What we look for</h3>
              <p className="mt-2 text-sm muted">Stories with plot presented in their own unique ways of making sense.</p>
              <div className="mt-4 space-y-3 text-sm" style={{color: "var(--text)"}}>
                <div>✔ Modest scale, high fidelity to the world, or to "me"</div>
                <div>✔ Language that discloses rather than declares</div>
              </div>
            </aside>
          </div>
        </section>

        {/* About / Masthead */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-7">
              <h2 className="text-2xl" style={{color: "var(--text)"}}>About</h2>
              <div className="mt-4 card p-6 prose" style={{color: "var(--text)"}}>
                <p><em>Boccaccio's villa, set against the plague, presents a question about the conditions for speaking.</em> The work of <strong>The Outermost Town</strong> is to inhabit that question in our own time, an age saturated with a crisis at once human-made and profoundly inhuman.</p>
                <p>We find our shelter within a particular quality of attention. It is an attention directed toward the world's tangible reality, and to the lives that share it: the animal, the vegetative, the geological, the algorithmic—those beings whose claims to voice or consciousness we are still learning to read.</p>
                <p>This attention has a dual character. It possesses a radical intimacy, an acknowledgment of a thing in its specific gravity—the crooked finger of an old mechanic, the faint odor of motor oil in a quiet workshop, the unspoken quirk in a neighbor's glance. This same intimacy arrives from a temporal distance. It is the seeing of a scene as if it were already an artifact, a fossil memory. It is a world disclosed before the settling of significance, or after its final passing.</p>
                <p>Our entire interest is in the evidence. The fragment. The sensory report from a life lived or yet to be lived. The journal is a space for this evidence.</p>
                <p><strong>The Outermost Town</strong>, then, is the conversation held in that suspended room, while the world hums with a strange, new frequency.</p>
              </div>
            </div>
            <aside className="md:col-span-5">
              <div className="card p-6">
                <h3 className="text-lg" style={{color: "var(--text)"}}>Masthead</h3>
                <ul className="mt-3 space-y-2 text-sm" style={{color: "var(--text)"}}>
                  <li><span className="muted">Editor-in-Chief</span> · Name Here</li>
                  <li><span className="muted">Managing Editor</span> · Name Here</li>
                  <li><span className="muted">Poetry Editor</span> · Name Here</li>
                  <li><span className="muted">Fiction Editor</span> · Name Here</li>
                  <li><span className="muted">Nonfiction Editor</span> · Name Here</li>
                </ul>
              </div>
              <div className="mt-4 card p-6">
                <h3 className="text-lg" style={{color: "var(--text)"}}>Contact</h3>
                <p className="mt-2 text-sm" style={{color: "var(--text)"}}>queries [at] outermost.town</p>
              </div>
            </aside>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="paper border-t" style={{borderColor: "var(--line)"}}>
        <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
          <p className="text-sm" style={{color: "var(--text-muted)"}}>© {new Date().getFullYear()} The Outermost Town · a small journal of attention</p>
          <div className="flex items-center gap-3 text-sm" style={{color: "var(--text-muted)"}}>
            <a href="#" className="hover:underline">Subscribe</a>
            <a href="#" className="hover:underline">RSS</a>
            <a href="#" className="hover:underline">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FolioManifesto() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <p>We collect what remains visible when the noise stops.</p>
        <p>Small-scale evidence: the weight of an object in hand, the pause before thunder, light through workshop dust.</p>
      </div>
      <div>
        <p>Each piece carries its own temporal signature—scenes that feel both immediate and already past.</p>
        <p>Submit fragments. Send traces. No manifestos required.</p>
      </div>
    </div>
  );
}

function ScrollManifesto() {
  return (
    <div>
      <p>A space for what can't be summarized.</p>
      <p>We want the texture of actual moments: rain on concrete, the cursor's hesitation, motor oil cooling in a cup.</p>
      <p>Send the specific. Skip the explanation.</p>
    </div>
  );
}

const samplePieces = [
  {
    slug: "manual",
    kind: "Nonfiction",
    title: "Manual",
    author: "Anonymous",
    excerpt:
      "This morning I saw my wife reading an instruction manual. She said, \"Press the button for five seconds.\" Not to me, I think, because she didn't know I was in the room.",
  },
];

const dispatches = [
  {
    slug: "canid",
    title: "After the night siren: a canid on the bypass",
    when: "Aug 2025",
    excerpt: "Field note on seeing without naming. Headlights, a shoulder, a pause before the hedge swallows the shape.",
  },
  {
    slug: "workshop",
    title: "Motor oil at room temperature",
    when: "Jul 2025",
    excerpt: "On minor odors and the returns of memory in a quiet workshop.",
  },
  {
    slug: "algorithm",
    title: "The algorithm that never speaks",
    when: "Jun 2025",
    excerpt: "Tactile errors and moods of the interface: when computation flickers into felt presence.",
  },
];
