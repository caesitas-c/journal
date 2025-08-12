// @ts-nocheck
import React, { useState } from "react";

export default function OutermostTownSite() {
  const [currentPage, setCurrentPage] = useState("home");
  const [theme, setTheme] = useState("ink");

  const themeVars = {
    ink: {
      "--bg": "#000000",
      "--bg-muted": "#050505",
      "--text": "#ECECEC",
      "--text-muted": "#9B9B9B",
      "--accent": "#9CCFD8",
      "--line": "#1A1A1A",
      "--card": "#0B0B0B",
    },
    sand: {
      "--bg": "#F8F6F0",
      "--bg-muted": "#EFEAE2",
      "--text": "#171614",
      "--text-muted": "#4B463F",
      "--accent": "#9A7B4F",
      "--line": "#D9D2C6",
      "--card": "#FCFBF8",
    },
    oxide: {
      "--bg": "#0F1412",
      "--bg-muted": "#0B100E",
      "--text": "#EAE7E1",
      "--text-muted": "#A7A39A",
      "--accent": "#7DA7A1",
      "--line": "#2B3834",
      "--card": "#131917",
    }
  };

  return (
    <div style={themeVars[theme]} className="min-h-screen w-full">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Source+Serif+Pro:wght@400;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');
        
        :root { 
          --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          --font-serif: 'Source Serif Pro', Georgia, serif;
          --font-display: 'Playfair Display', Georgia, serif;
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

        .display-title {
          font-family: var(--font-display);
          font-weight: 500;
          letter-spacing: -0.01em;
        }

        .hero-title {
          font-family: var(--font-display);
          font-weight: 500;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }
        
        .paper {
          background: var(--bg);
          background-image:
            radial-gradient(1000px 500px at 10% -10%, rgba(255,255,255,0.06), transparent),
            radial-gradient(800px 600px at 120% 20%, rgba(255,255,255,0.04), transparent);
        }
        
        .btn { 
          border: 1px solid var(--line); 
          padding: .3rem .6rem; 
          border-radius: .4rem; 
          background: transparent; 
          color: var(--text); 
          font-size: .75rem;
          cursor: pointer;
          transition: border-color 0.2s ease;
        }
        
        .btn:hover { 
          border-color: var(--text-muted); 
        }

        .btn-primary {
          background: var(--accent);
          color: var(--bg);
          border-color: var(--accent);
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
          border-radius: 1rem; 
        }
        
        .muted { 
          color: var(--text-muted); 
        }

        .nav-link {
          color: var(--text-muted);
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: var(--accent);
        }

        .nav-link[data-active="true"] {
          color: var(--text);
        }
      `}</style>

      {/* Header */}
      <header className="paper sticky top-0 z-30 border-b" style={{borderColor: "var(--line)"}}>
        <div className="mx-auto max-w-6xl px-4 py-3">
          {/* Top row */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-baseline gap-4">
              <button 
                onClick={() => setCurrentPage("home")}
                className="tracking-wide" 
                style={{color: "var(--text)", fontWeight: 600, background: "none", border: "none", cursor: "pointer"}}
              >
                The Outermost Town
              </button>
              <span className="chip muted">journal</span>
            </div>
            
            <div className="flex items-center gap-1">
              {["ink","sand","oxide"].map(k => (
                <button 
                  key={k} 
                  className="tab" 
                  data-active={theme===k} 
                  onClick={()=>setTheme(k)}
                >
                  {k}
                </button>
              ))}
            </div>
          </div>
          
          {/* Navigation row */}
          <nav className="flex items-center gap-4 text-sm">
            <button 
              className="nav-link" 
              data-active={currentPage === "home"}
              onClick={() => setCurrentPage("home")}
            >
              Home
            </button>
            <button 
              className="nav-link" 
              data-active={currentPage === "issues"}
              onClick={() => setCurrentPage("issues")}
            >
              Issues
            </button>
            <button 
              className="nav-link" 
              data-active={currentPage === "submit"}
              onClick={() => setCurrentPage("submit")}
            >
              Submit
            </button>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <main className="paper min-h-screen">
        {currentPage === "home" && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === "issues" && <IssuesPage />}
        {currentPage === "submit" && <SubmitPage />}
      </main>

      {/* Debug Info */}
      <div className="fixed bottom-4 right-4 text-xs p-2 rounded" style={{background: "var(--card)", color: "var(--text)"}}>
        Current page: {currentPage}
      </div>
    </div>
  );
}

function HomePage({ setCurrentPage }) {
  return (
    <div>
      {/* Announcement */}
      <section className="border-b" style={{borderColor: "var(--line)"}}>
        <div className="mx-auto max-w-6xl px-4 py-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm muted">
            Call for work: <em>evidence</em> — fragments that prove something about how we live now.
          </p>
          <button onClick={() => setCurrentPage("submit")} className="btn">Send evidence</button>
        </div>
      </section>

      {/* Hero with Visual Element */}
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-6xl hero-title mb-2" style={{color: "var(--text)"}}>
              Extended Translation
            </h1>
            <p className="text-xl mb-12 display-title" style={{color: "var(--text)", fontStyle: "italic", fontWeight: 300, letterSpacing: "0.05em"}}>
              Issue No. 01
            </p>
            <div className="flex gap-4">
              <button onClick={() => setCurrentPage("issues")} className="btn">Read issue</button>
              <button onClick={() => {setCurrentPage("submit"); setSubmitType && setSubmitType("full");}} className="btn btn-primary">Submit work</button>
            </div>
          </div>
          
          {/* Conceptual Visual Element */}
          <div className="card p-8" style={{background: "transparent", border: "none"}}>
            <svg width="100%" height="400" viewBox="0 0 400 400" className="overflow-visible">
              <defs>
                <linearGradient id="fadeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor: "var(--text-muted)", stopOpacity: 0.1}} />
                  <stop offset="50%" style={{stopColor: "var(--accent)", stopOpacity: 0.6}} />
                  <stop offset="100%" style={{stopColor: "var(--text-muted)", stopOpacity: 0.1}} />
                </linearGradient>
                
                <filter id="blur1">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
                </filter>
                
                <filter id="blur2">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
                </filter>
              </defs>
              
              {/* Original forms - representing source material */}
              <g opacity="0.4">
                <rect x="50" y="150" width="80" height="2" fill="var(--text-muted)" rx="1">
                  <animate attributeName="width" values="80;85;80" dur="6s" repeatCount="indefinite" />
                </rect>
                <rect x="50" y="170" width="60" height="2" fill="var(--text-muted)" rx="1">
                  <animate attributeName="width" values="60;70;60" dur="7s" repeatCount="indefinite" />
                </rect>
                <rect x="50" y="190" width="90" height="2" fill="var(--text-muted)" rx="1">
                  <animate attributeName="width" values="90;95;90" dur="8s" repeatCount="indefinite" />
                </rect>
                <rect x="50" y="210" width="45" height="2" fill="var(--text-muted)" rx="1">
                  <animate attributeName="width" values="45;55;45" dur="5s" repeatCount="indefinite" />
                </rect>
              </g>
              
              {/* Translation bridge - the critical moment of transformation */}
              <g>
                <path d="M 160 180 Q 200 160 240 180" stroke="url(#fadeGrad)" strokeWidth="3" fill="none" opacity="0.8">
                  <animate attributeName="d" values="M 160 180 Q 200 160 240 180;M 160 180 Q 200 200 240 180;M 160 180 Q 200 160 240 180" dur="4s" repeatCount="indefinite" />
                </path>
                
                {/* Floating translation particles */}
                <circle cx="180" cy="170" r="1.5" fill="var(--accent)" opacity="0.7">
                  <animate attributeName="cy" values="170;160;170" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="220" cy="190" r="1" fill="var(--accent)" opacity="0.5">
                  <animate attributeName="cy" values="190;180;190" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.5;0.9;0.5" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="200" cy="175" r="0.8" fill="var(--text)" opacity="0.6">
                  <animate attributeName="cy" values="175;185;175" dur="5s" repeatCount="indefinite" />
                </circle>
              </g>
              
              {/* Extended forms - the translated results */}
              <g opacity="0.7">
                <rect x="270" y="140" width="100" height="2" fill="var(--accent)" rx="1" filter="url(#blur1)">
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="4s" repeatCount="indefinite" />
                </rect>
                <rect x="270" y="165" width="85" height="2" fill="var(--accent)" rx="1">
                  <animate attributeName="opacity" values="0.6;0.9;0.6" dur="5s" repeatCount="indefinite" />
                </rect>
                <rect x="270" y="190" width="110" height="2" fill="var(--accent)" rx="1" filter="url(#blur2)">
                  <animate attributeName="opacity" values="0.5;0.8;0.5" dur="6s" repeatCount="indefinite" />
                </rect>
                <rect x="270" y="215" width="75" height="2" fill="var(--accent)" rx="1">
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
                </rect>
                <rect x="270" y="240" width="95" height="2" fill="var(--accent)" rx="1" filter="url(#blur1)">
                  <animate attributeName="opacity" values="0.4;0.7;0.4" dur="7s" repeatCount="indefinite" />
                </rect>
              </g>
              
              {/* Extension lines - representing the "extended" nature */}
              <g opacity="0.3">
                <line x1="30" y1="300" x2="380" y2="300" stroke="var(--line)" strokeWidth="1" strokeDasharray="3,6">
                  <animate attributeName="stroke-dashoffset" values="0;9" dur="3s" repeatCount="indefinite" />
                </line>
                <line x1="30" y1="320" x2="380" y2="320" stroke="var(--line)" strokeWidth="1" strokeDasharray="2,8">
                  <animate attributeName="stroke-dashoffset" values="10;0" dur="4s" repeatCount="indefinite" />
                </line>
              </g>
              
              {/* Geometric frame - subtle containment */}
              <rect x="40" y="130" width="330" height="200" fill="none" stroke="var(--line)" strokeWidth="0.5" opacity="0.2" rx="4" />
              
              {/* Conceptual nodes - intersection points */}
              <circle cx="160" cy="180" r="3" fill="none" stroke="var(--text-muted)" strokeWidth="1" opacity="0.4">
                <animate attributeName="r" values="3;4;3" dur="6s" repeatCount="indefinite" />
              </circle>
              <circle cx="240" cy="180" r="3" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.6">
                <animate attributeName="r" values="3;5;3" dur="4s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" style={{background: "linear-gradient(90deg, transparent, var(--line), transparent)"}} />
      </div>

      {/* About Section */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl display-title mb-8" style={{color: "var(--text)"}}>About</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="card p-8">
              <div className="prose" style={{color: "var(--text)"}}>
                <p className="mb-4 text-base leading-relaxed">
                  <em>Boccaccio's villa, set against the plague, presents a question about the conditions for speaking.</em> The work of <strong>The Outermost Town</strong> is to inhabit that question in our own time, an age saturated with a crisis at once human-made and profoundly inhuman.
                </p>
                <p className="mb-4 text-base leading-relaxed">
                  We find our shelter within a particular quality of attention. It is an attention directed toward the world's tangible reality, and to the lives that share it: the animal, the vegetative, the geological, the algorithmic—those beings whose claims to voice or consciousness we are still learning to read.
                </p>
                <p className="mb-4 text-base leading-relaxed">
                  This attention has a dual character. It possesses a radical intimacy, an acknowledgment of a thing in its specific gravity—the crooked finger of an old mechanic, the faint odor of motor oil in a quiet workshop, the unspoken quirk in a neighbor's glance.
                </p>
                <p className="text-base leading-relaxed">
                  Our entire interest is in the evidence. The fragment. The sensory report from a life lived or yet to be lived. The journal is a space for this evidence.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg mb-4" style={{color: "var(--text)"}}>Masthead</h3>
              <div className="space-y-2 text-sm" style={{color: "var(--text)"}}>
                <div><span className="muted">Editor-in-Chief</span> · Name Here</div>
                <div><span className="muted">Managing Editor</span> · Name Here</div>
                <div><span className="muted">Poetry Editor</span> · Name Here</div>
                <div><span className="muted">Fiction Editor</span> · Name Here</div>
              </div>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg mb-4" style={{color: "var(--text)"}}>Contact</h3>
              <p className="text-sm" style={{color: "var(--text)"}}>
                queries [at] outermost.town
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function IssuesPage() {
  const [expandedPiece, setExpandedPiece] = useState(null);
  
  const pieces = [
    {
      slug: "manual",
      kind: "Slash Fiction",
      title: "Manual",
      author: "Anonymous",
      excerpt: "This morning I saw my wife reading an instruction manual. She said, \"Press the button for five seconds.\" Not to me, I think, because she didn't know I was in the room...",
      fullContent: (
        <div style={{color: "var(--text)"}}>
          <p className="mb-4">This morning I saw my wife reading an instruction manual. She said, "Press the button for five seconds." Not to me, I think, because she didn't know I was in the room. She was speaking to herself, the way she sometimes announces "They think he's guilty" while we're watching court documentaries. She needed to repeat a fact to fully comprehend it.</p>
          
          <p className="mb-4"><em>Press the button for five seconds</em> means:</p>
          
          <ol className="pl-6 mb-4 space-y-2">
            <li>When you press it for less than five seconds, it responds differently;</li>
            <li>The object has at least one button (does it distinguish this from that? She didn't specify);</li>
            <li>Press it longer than five seconds and nothing more happens—it won't learn to sing from your extra, obsessive effort;</li>
            <li>This might be the most important, most difficult sentence on that page.</li>
          </ol>
          
          <p>Then it suddenly occurred to me: if I remembered my wife reading an instruction manual, but later both the manual and my wife had vanished, the experience would become utterly terrifying, because because memory without proof is nothing but madness.</p>
        </div>
      )
    },
    {
      slug: "minor-animisms",
      kind: "Evidence",
      title: "Minor Animisms: Eight Indices",
      author: "Anonymous",
      excerpt: "This suite proposes a modest animism: the world answers attention. Each frame isolates a use or a trace—how matter hosts, resists, or remembers touch...",
      fullContent: (
        <div style={{color: "var(--text)"}}>
          <p className="mb-4 italic">Series note:</p>
          <p className="mb-6">This suite proposes a modest animism: the world answers attention. Each frame isolates a use or a trace—how matter hosts, resists, or remembers touch. What we call "life" becomes legible in indices of action: landing, watching, inferring, playing, eating, cooling, resting, eroding. The pictures are thus records of work done between bodies and things, where perception completes the signifying chain.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="card p-4">
                <div className="aspect-square bg-gray-200 mb-3 rounded overflow-hidden" style={{backgroundColor: "var(--bg-muted)"}}>
                  <div className="w-full h-full flex items-center justify-center text-xs muted">
                    [img src="/images/minor-animisms/minor-animisms-1.jpg" alt="Lacewing on Poster" className="w-full h-full object-cover" />]
                  </div>
                </div>
                <h4 className="font-medium mb-2">1. Lacewing on Poster</h4>
                <p className="text-sm muted">A living insect lands on a printed forehead; paper briefly behaves like skin, an image repurposed as habitat.</p>
              </div>
              
              <div className="card p-4">
                <div className="aspect-square bg-gray-200 mb-3 rounded overflow-hidden" style={{backgroundColor: "var(--bg-muted)"}}>
                  <div className="w-full h-full flex items-center justify-center text-xs muted">
                    [Image 2: Beam-Eye]
                  </div>
                </div>
                <h4 className="font-medium mb-2">2. Beam-Eye</h4>
                <p className="text-sm muted">A security camera socketed into a timber turns architecture into a watcher; the room acquires the affordance of being seen.</p>
              </div>
              
              <div className="card p-4">
                <div className="aspect-square bg-gray-200 mb-3 rounded overflow-hidden" style={{backgroundColor: "var(--bg-muted)"}}>
                  <div className="w-full h-full flex items-center justify-center text-xs muted">
                    [Image 3: Banana, Face-Like]
                  </div>
                </div>
                <h4 className="font-medium mb-2">3. Banana, Face-Like</h4>
                <p className="text-sm muted">Two specks and a bruise recruit our pareidolia; the fruit models agency with the smallest marks.</p>
              </div>
              
              <div className="card p-4">
                <div className="aspect-square bg-gray-200 mb-3 rounded overflow-hidden" style={{backgroundColor: "var(--bg-muted)"}}>
                  <div className="w-full h-full flex items-center justify-center text-xs muted">
                    [Image 4: Swing at Dusk]
                  </div>
                </div>
                <h4 className="font-medium mb-2">4. Swing at Dusk</h4>
                <p className="text-sm muted">Chains hold their arc without a body; absence reads as recent use, a negative of weight.</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="card p-4">
                <div className="aspect-square bg-gray-200 mb-3 rounded overflow-hidden" style={{backgroundColor: "var(--bg-muted)"}}>
                  <div className="w-full h-full flex items-center justify-center text-xs muted">
                    [Image 5: Market Tank, Detached Claw]
                  </div>
                </div>
                <h4 className="font-medium mb-2">5. Market Tank, Detached Claw</h4>
                <p className="text-sm muted">A single pincer floats under price placards—appetite, commerce, and disassembly indexed in one domestic tide pool.</p>
              </div>
              
              <div className="card p-4">
                <div className="aspect-square bg-gray-200 mb-3 rounded overflow-hidden" style={{backgroundColor: "var(--bg-muted)"}}>
                  <div className="w-full h-full flex items-center justify-center text-xs muted">
                    [Image 6: Bottle in Frost-Throat]
                  </div>
                </div>
                <h4 className="font-medium mb-2">6. Bottle in Frost-Throat</h4>
                <p className="text-sm muted">Cold becomes a tool for delay; condensation turns a tube into time, holding ripeness in abeyance.</p>
              </div>
              
              <div className="card p-4">
                <div className="aspect-square bg-gray-200 mb-3 rounded overflow-hidden" style={{backgroundColor: "var(--bg-muted)"}}>
                  <div className="w-full h-full flex items-center justify-center text-xs muted">
                    [Image 7: Sideline Seats]
                  </div>
                </div>
                <h4 className="font-medium mb-2">7. Sideline Seats</h4>
                <p className="text-sm muted">Three scuffed chairs diagram sitting and rising; dents and grime plot the choreography of breaks.</p>
              </div>
              
              <div className="card p-4">
                <div className="aspect-square bg-gray-200 mb-3 rounded overflow-hidden" style={{backgroundColor: "var(--bg-muted)"}}>
                  <div className="w-full h-full flex items-center justify-center text-xs muted">
                    [Image 8: Rust Aperture]
                  </div>
                </div>
                <h4 className="font-medium mb-2">8. Rust Aperture</h4>
                <p className="text-sm muted">Oxidation chews a hole through metal, opening a wound where air has worked for years.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      slug: "thinging",
      kind: "Poetry",
      title: "Thinging",
      author: "Anonymous",
      excerpt: "a series of small, locked rooms (and the night one of us never left, or never arrived). Some nights, the objects begin. They lean closer...",
      fullContent: (
        <div style={{color: "var(--text)"}} className="prose max-w-none">
          <p className="mb-4 italic">a series of small, locked rooms<br/>(and the night one of us never left, or never arrived)</p>
          
          <div className="space-y-8">
            <div>
              <h4 className="font-medium mb-4">Preface</h4>
              <div className="space-y-3">
                <p>Some nights, the objects begin.<br/>
                They lean closer.<br/>
                Learn the groove behind your molars.<br/>
                Practice tucking your name between their hinges.<br/>
                Not alive.<br/>
                Not gone.<br/>
                Just thinging.<br/>
                Turn the crank.<br/>
                Begin again.</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">Box</h4>
              <div className="space-y-3">
                <p>The music lurches awake.<br/>
                Inside the lacquered box, they revolve—<br/>
                tin effigies, varnish cracking like sunburnt skin, smiling because the alternative is choking.<br/>
                Floodwater gatecrashes, scrawling salt paths to a lake brimming with truths,<br/>
                formed from the tears no one noticed falling, submerging the cotton fields, the persimmon groves,<br/>
                the hour we misplaced,<br/>
                the sonogram folded twice in the drawer.</p>
                
                <p>The crank seizes. The brass gnashes.<br/>
                Beneath the lid, something half-tamed waits,<br/>
                stropping nails against the undersides of old refrains. It drags its keeper<br/>
                through the warped lid,<br/>
                into the belly of noon, where light bruises,<br/>
                struggles with its discipline,<br/>
                and leaks along the seams of everything. Somewhere below, the lake watches, offering back their<br/>
                reflections,<br/>
                arms raised, as if asking to be pulled through. Youth, hoarded in the sock drawer,<br/>
                gets bartered tipping phantoms in thrifted shoes, buying postcards from someone else's childhood.<br/>
                Still, the key, steady as thaw,<br/>
                winds, mumbles, scratches at the lapse, and finding none,<br/>
                starts over like it means it.</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">Glass</h4>
              <div className="space-y-3">
                <p>The window forgets itself.<br/>
                Stirs like a tendon. Loosens like a joint. Outside, the squall rehearses its appetite, biting the<br/>
                corners off rooftops,<br/>
                lapping the gutters to guarantee they never quite close.<br/>
                Inside, someone is chanting too sharply for the benediction,<br/>
                spilling gin down yesterday's sin. The chandelier sputters,<br/>
                ill at ease against the plaster. And under the table,<br/>
                Rilke's imprisoned angel—<br/>
                the girl with the latch in her cheek gnaws until copper snaps,<br/>
                gums lacquered with rust and omen. There's always something to splinter. A sigh. A silence. The<br/>
                second between the wager and its consequence.<br/>
                The baby blanket still slumped on the chair. When the gale finally muscles through, glass becomes<br/>
                sleet,<br/>
                and the house exhales a filament split in thirds into the hollow throat of morning.</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">Mirror</h4>
              <div className="space-y-3">
                <p>The mirror waits. Not pane.<br/>
                Not alloy.<br/>
                Just a surface mouthing my blink. It hangs in the hallway,<br/>
                between the door we never lock and the one we never dare, burnishing its craving<br/>
                against the parts I thought I'd mislaid.<br/>
                Behind the plate:<br/>
                someone nearly me, or nearly you, picking the schemes<br/>
                of a shadow neither of us remembers lending, undoing the clasp<br/>
                of the dusk you left, coaxing the hem apart until the marrow thins where the skin concludes.<br/>
                The leftover grin sluices into the sink. We flatten it,<br/>
                tuck the edges,<br/>
                feed it to the dark slit where the drain hums, faithful as ash.<br/>
                By now, even the listening has sprouted mouths.<br/>
                They bloom along the frame, tilt to catch the words<br/>
                I hadn't meant to uncage.<br/>
                And when the night finally noses in,<br/>
                the mirror gulps its own callback, retches back a room,<br/>
                empty except for me, watching from somewhere just within the glaze.</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">Inventory</h4>
              <div className="space-y-3">
                <p className="italic">(The night it happened.)</p>
                <p>One chair flipped.<br/>
                Two mugs.<br/>
                A smear on the faucet. The letter, unsigned.<br/>
                Her scarf still looped on the hook, his keys left on the counter,<br/>
                alarm buzzing through the dark, receipt crumpled under the table leg. The hallway lost its grip.<br/>
                The clock skipped seven. No one left,<br/>
                but someone was missing.</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">Microwave</h4>
              <div className="space-y-3">
                <p>3 a.m.<br/>
                He reheats stew in a plastic tub. Ding—<br/>
                The broth orbits in lethargic spirals. Tomato paste puckers along the rim, like a scab caught<br/>
                mid-yawn.<br/>
                Outside, drizzle scribbles the curbs. Inside, only the microwave persists. He checks the warmth<br/>
                with his wrist, sips it,<br/>
                decides it tastes of nothing in particular.<br/>
                Could've been Monday.<br/>
                Could've been another year entirely.<br/>
                The TV drones news from twenty years ago. The mayor says something irreversible.<br/>
                The avenues start collapsing. He shuts the microwave,<br/>
                doesn't eat,<br/>
                reclasps the lid,<br/>
                and slides it to the fridge's far corner, behind another container,<br/>
                that one's labeled Mother.</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">Voice Memo</h4>
              <div className="space-y-3">
                <p>The waveform trembles, perfumed with a familiar smell, one pixel at a time.<br/>
                We paste the walls with scurf, palms flat to glass,<br/>
                the whirrs of forfeited truths pulsing through the speaker. Someone whispers,<br/>
                "Don't delete it."<br/>
                But the file corrupts itself, gnawing through the archive<br/>
                like an app looping at 3% battery. On the screen, old recordings shiver. Birthdays. Confessions.<br/>
                The last blip before the windshield cracked. 4/19, Grafton Clinic, embedded in metadata. Shopping<br/>
                lists.<br/>
                Final notices.<br/>
                A name we rehearsed erasing from the cloud. We drag the slider back with shaking thumbs, press<br/>
                play,<br/>
                and listen as the ghosts glitch between syllables.<br/>
                When dawn pries its way in, the whole house cached<br/>
                like a draft never sent.<br/>
                The memo stays, still syncing, warm, haloed in the glow waiting for a hand,<br/>
                any hand,<br/>
                to press erase.</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">Envelope</h4>
              <div className="space-y-3">
                <p>It arrives unclaimed,<br/>
                creased like a secret that's forgotten how to kneel. The paper reeks of attic dusk,<br/>
                of wrists cinched in twine,<br/>
                of sentences deserted mid-phrase. We pass it around the table—<br/>
                no one first, please. Fingers skirt the wax seal, feeling for a petal, a gristle,<br/>
                the snare tucked beneath the fold. Inside:<br/>
                a feather veined with ink, a ticket stub torn in half,<br/>
                a map of cities scheduled for erasure, the word yours crystallized<br/>
                in someone else's script,<br/>
                and a customs form curling at the edges. Someone laughs, jagged, too loud.<br/>
                The kitchen bulb flares yellow, unlearning how to die. Night draws the envelope shut again.<br/>
                We nod, pretend it never arrived. But even asleep,<br/>
                something in the drywall is licking the glue, sealing us in,<br/>
                letter by letter,<br/>
                until we're flat enough to post.</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">Hollow</h4>
              <div className="space-y-3">
                <p>We reached the mill quarter at dusk. The chain-link was cut and folded back.<br/>
                Wind pushed the gate in a shallow arc. Inside, the floor was powdered with glass and meal from a job that ended long ago.<br/>
                The break room calendar marked April 1964, all Fridays circled in red.<br/>
                The vending machine lit when we passed. Coins waited in the tray.<br/>
                In the lab, jars sat under a film the color of tea. Someone had dated the labels for next week.<br/>
                In the control room, monitors woke in order. Temperature. Belt speed. Tank levels.<br/>
                Zeros, then numbers that matched our birthdays.<br/>
                A badge printer chattered and slid out cards with our names. None of us had worked here.<br/>
                Outside, the rail spur ended in weeds. Kudzu climbed the catwalks and swallowed the safety signs.<br/>
                An engine rolled by with no logos and no lights. The loading arm lowered and rose, testing air.<br/>
                Across the street, the church doors were wedged open. The organ held one note with the power cut at the pole.<br/>
                At midnight an announcement played from the horn on the tallest stack: shelter in place, do not approach the river, do not answer if the phone rings.<br/>
                No one in town admitted hearing it.<br/>
                In the laundromat, the televisions showed a ceremony. Ours, perhaps. A year we did not share.</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">Draft</h4>
              <div className="space-y-3">
                <p>We said we'd meet<br/>
                where the highway unspools,<br/>
                where the hush<br/>
                of leaves swept into drifting piles almost sounds like yes.<br/>
                But the reckoning came early. Or maybe you did.<br/>
                The note stayed in my pocket. Still does.<br/>
                The words never made it past my thumb.<br/>
                Somewhere,<br/>
                the stars that sank are still trying to send you back.</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">Loop</h4>
              <div className="space-y-3">
                <p>The yard is walled now.<br/>
                Wires hum where grass used to grow. We assemble in the light,<br/>
                boots worn,<br/>
                faces erased to digits. Names.<br/>
                Ranks. Numbers. Orders.<br/>
                Once more. Once more. Once more.<br/>
                The loudspeaker stirs. A list begins.<br/>
                We listen for the fragments of us we no longer answer to.<br/>
                The gate flickers. One enters.<br/>
                One leaves. One of us stays.<br/>
                One of us disappears. They won't say who. Inside, the walls pulse<br/>
                with mechanical hunger.<br/>
                We scan the ground<br/>
                for the invitation of a feast,<br/>
                but the cornucopia<br/>
                has been erased. And so we wait, molding ourselves<br/>
                into the shape of what was once human,<br/>
                becoming the void<br/>
                between command<br/>
                and a dead channel.<br/>
                When the spring returns,<br/>
                it finds nothing left to lift.<br/>
                Just you,<br/>
                still warm. Just me,<br/>
                still recorded.<br/>
                Just a loop tightening its grip around the last name spoken aloud—<br/>
                and the ones they made us forget.</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];
  
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl display-title mb-8" style={{color: "var(--text)"}}>
        Issues
      </h1>
      
      <div className="mb-8">
        <h2 className="text-xl mb-4" style={{color: "var(--text)"}}>
          No. 01 — "Extended Translation"
        </h2>
        
        <div className="space-y-6">
          {pieces.map((piece) => (
            <article key={piece.slug} className="card p-6">
              <div className="text-xs uppercase tracking-wide muted mb-2">{piece.kind}</div>
              <h3 className="text-xl mb-4" style={{color: "var(--text)"}}>{piece.title}</h3>
              
              {expandedPiece === piece.slug ? (
                piece.fullContent
              ) : (
                <p className="muted">{piece.excerpt}</p>
              )}
              
              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm muted">{piece.author}</div>
                <button 
                  className="btn" 
                  onClick={() => setExpandedPiece(expandedPiece === piece.slug ? null : piece.slug)}
                >
                  {expandedPiece === piece.slug ? "Collapse" : "Read"}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function SubmitPage() {
  const [submitType, setSubmitType] = useState("quick");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    category: "",
    content: "",
    bio: "",
    coverLetter: ""
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const categories = [
    "Slash Fiction (100–1,000 words)",
    "Short Story (2,000–7,500 words)", 
    "Poetry (up to 5 poems, complete series considered)",
    "Nonfiction (800–2,000 words)",
    "Critical Essays (up to 3,000 words)",
    "Comics (max 5 pages)",
    "New Genre (max 5 pages)"
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl display-title mb-8" style={{color: "var(--text)"}}>
        Submit
      </h1>

      {/* Submit Type Selector */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div 
          className={`card p-6 cursor-pointer transition-all ${submitType === "quick" ? "border-2" : ""}`}
          style={{borderColor: submitType === "quick" ? "var(--accent)" : "var(--line)"}}
          onClick={() => setSubmitType("quick")}
        >
          <h3 className="text-lg mb-3" style={{color: "var(--text)"}}>Send Evidence</h3>
          <p className="text-sm muted">Quick submission for our current call: fragments that prove something about how we live now.</p>
        </div>
        
        <div 
          className={`card p-6 cursor-pointer transition-all ${submitType === "full" ? "border-2" : ""}`}
          style={{borderColor: submitType === "full" ? "var(--accent)" : "var(--line)"}}
          onClick={() => setSubmitType("full")}
        >
          <h3 className="text-lg mb-3" style={{color: "var(--text)"}}>Full Submission</h3>
          <p className="text-sm muted">Complete submission process for all categories including fiction, poetry, essays, comics, and experimental forms.</p>
        </div>
      </div>

      {/* Form */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="card p-8">
            <h2 className="text-xl mb-6" style={{color: "var(--text)"}}>
              {submitType === "quick" ? "Send Evidence" : "Full Submission"}
            </h2>
        
        <div className="space-y-4">
          {submitType === "full" && (
            <div>
              <label className="block text-sm font-medium mb-2" style={{color: "var(--text)"}}>Category</label>
              <select 
                className="w-full p-3 border rounded-lg"
                style={{borderColor: "var(--line)", background: "var(--card)", color: "var(--text)"}}
                value={formData.category}
                onChange={(e) => handleInputChange("category", e.target.value)}
              >
                <option value="">Select a category</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          )}
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2" style={{color: "var(--text)"}}>Name</label>
              <input 
                type="text" 
                className="w-full p-3 border rounded-lg"
                style={{borderColor: "var(--line)", background: "var(--card)", color: "var(--text)"}}
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" style={{color: "var(--text)"}}>Email</label>
              <input 
                type="email" 
                className="w-full p-3 border rounded-lg"
                style={{borderColor: "var(--line)", background: "var(--card)", color: "var(--text)"}}
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2" style={{color: "var(--text)"}}>Title</label>
            <input 
              type="text" 
              className="w-full p-3 border rounded-lg"
              style={{borderColor: "var(--line)", background: "var(--card)", color: "var(--text)"}}
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2" style={{color: "var(--text)"}}>
              {submitType === "quick" ? "Your Evidence" : "Content"}
            </label>
            <textarea 
              className="w-full p-3 border rounded-lg h-48"
              style={{borderColor: "var(--line)", background: "var(--card)", color: "var(--text)"}}
              value={formData.content}
              onChange={(e) => handleInputChange("content", e.target.value)}
              placeholder={submitType === "quick" ? "What does this fragment prove about how we live?" : "Paste your complete work here."}
            />
            {submitType === "full" && (
              <div className="text-xs muted mt-1">
                For works with special visual elements: describe your submission here and attach files below.
              </div>
            )}
          </div>
          
          {submitType === "full" && (
            <div>
              <label className="block text-sm font-medium mb-2" style={{color: "var(--text)"}}>File Attachments (Optional)</label>
              <div className="card p-6" style={{backgroundColor: "var(--bg-muted)", borderStyle: "dashed"}}>
                <div className="text-center">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="mx-auto mb-4" style={{color: "var(--text-muted)"}}>
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-sm muted mb-2">Drag and drop files here, or click to browse</p>
                  <p className="text-xs muted mb-4">Supports: .pdf, .doc, .docx, .jpg, .png, .gif (max 10MB each)</p>
                  <button type="button" className="btn">
                    Choose Files
                  </button>
                </div>
              </div>
              <div className="text-xs muted mt-2">
                <strong>Required for:</strong> Comics, New Genre works, and Poetry/Slash Fiction with unique layout.
              </div>
            </div>
          )}

          {submitType === "quick" && (
            <div>
              <label className="block text-sm font-medium mb-2" style={{color: "var(--text)"}}>File Attachment (Optional)</label>
              <div className="card p-4" style={{backgroundColor: "var(--bg-muted)", borderStyle: "dashed"}}>
                <div className="text-center py-2">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="mx-auto mb-2" style={{color: "var(--text-muted)"}}>
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-xs muted mb-2">Attach file if needed</p>
                  <button type="button" className="btn">Choose File</button>
                </div>
              </div>
              <div className="text-xs muted mt-1">
                For works requiring special formatting or visual elements.
              </div>
            </div>
          )}
          
          {submitType === "full" && (
            <div>
              <label className="block text-sm font-medium mb-2" style={{color: "var(--text)"}}>Bio</label>
              <textarea 
                className="w-full p-3 border rounded-lg h-20"
                style={{borderColor: "var(--line)", background: "var(--card)", color: "var(--text)"}}
                value={formData.bio}
                onChange={(e) => handleInputChange("bio", e.target.value)}
                placeholder="Brief biographical information..."
              />
            </div>
          )}

          {submitType === "full" && (
            <div>
              <label className="block text-sm font-medium mb-2" style={{color: "var(--text)"}}>Cover Letter (Optional)</label>
              <textarea 
                className="w-full p-3 border rounded-lg h-24"
                style={{borderColor: "var(--line)", background: "var(--card)", color: "var(--text)"}}
                value={formData.coverLetter || ""}
                onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                placeholder="Brief note about your work, inspiration, or anything else you'd like us to know..."
              />
            </div>
          )}
          
            <button className="btn btn-primary w-full">
              {submitType === "quick" ? "Send Evidence" : "Submit Work"}
            </button>
          </div>
        </div>
        </div>

        {/* Guidelines Sidebar */}
        <div className="space-y-6">
          <div className="card p-6">
            <h3 className="text-lg mb-4" style={{color: "var(--text)"}}>What we look for</h3>
            <p className="text-sm muted mb-4">Stories with plot presented in their own unique ways of making sense.</p>
            <div className="space-y-3 text-sm" style={{color: "var(--text)"}}>
              <div>✔ Modest scale, high fidelity to the world, or to "me"</div>
              <div>✔ Language that discloses rather than declares</div>
            </div>
          </div>

          {submitType === "full" && (
            <div className="card p-6">
              <h3 className="text-lg mb-4" style={{color: "var(--text)"}}>Categories</h3>
              <div className="space-y-2 text-xs" style={{color: "var(--text)"}}>
                <div><span className="chip">Slash Fiction</span> 100–1,000 words · brief narrative pieces</div>
                <div><span className="chip">Short Story</span> 2,000–7,500 words · complete narrative forms</div>
                <div><span className="chip">Poetry</span> up to 5 poems, complete series considered · verse and experimental forms</div>
                <div><span className="chip">Nonfiction</span> 800–2,000 words · journalism, documentary writing</div>
                <div><span className="chip">Critical Essays</span> up to 3,000 words · cultural, philosophical, political reflection</div>
                <div><span className="chip">Comics</span> max 5 pages · visual narrative</div>
                <div><span className="chip">New Genre</span> max 5 pages · formats we haven't named yet</div>
              </div>
            </div>
          )}

          <div className="card p-6">
            <h3 className="text-lg mb-4" style={{color: "var(--text)"}}>Response Time</h3>
            <p className="text-sm muted">
              {submitType === "quick" 
                ? "We'll review evidence submissions within 2-3 weeks." 
                : "We'll review full submissions within 4-6 weeks."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl display-title mb-8" style={{color: "var(--text)"}}>
        About
      </h1>
      
      <div className="card p-8 mb-8">
        <div className="prose" style={{color: "var(--text)"}}>
          <p className="mb-4">
            <em>Boccaccio's villa, set against the plague, presents a question about the conditions for speaking.</em> The work of <strong>The Outermost Town</strong> is to inhabit that question in our own time, an age saturated with a crisis at once human-made and profoundly inhuman.
          </p>
          <p className="mb-4">
            We find our shelter within a particular quality of attention. It is an attention directed toward the world's tangible reality, and to the lives that share it: the animal, the vegetative, the geological, the algorithmic—those beings whose claims to voice or consciousness we are still learning to read.
          </p>
          <p className="mb-4">
            This attention has a dual character. It possesses a radical intimacy, an acknowledgment of a thing in its specific gravity—the crooked finger of an old mechanic, the faint odor of motor oil in a quiet workshop, the unspoken quirk in a neighbor's glance.
          </p>
          <p>
            Our entire interest is in the evidence. The fragment. The sensory report from a life lived or yet to be lived. The journal is a space for this evidence.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="text-lg mb-4" style={{color: "var(--text)"}}>Masthead</h3>
          <div className="space-y-2 text-sm">
            <div><span className="muted">Editor-in-Chief</span> · Name Here</div>
            <div><span className="muted">Managing Editor</span> · Name Here</div>
            <div><span className="muted">Poetry Editor</span> · Name Here</div>
            <div><span className="muted">Fiction Editor</span> · Name Here</div>
          </div>
        </div>
        
        <div className="card p-6">
          <h3 className="text-lg mb-4" style={{color: "var(--text)"}}>Contact</h3>
          <p className="text-sm" style={{color: "var(--text)"}}>
            queries [at] outermost.town
          </p>
        </div>
      </div>
    </div>
  );
}
