import './App.css'

export default function App() {
  return (
    <div className="paper">

      {/* ══════════════════════════════════════════════
          MASTHEAD
      ══════════════════════════════════════════════ */}
      <header className="masthead">
        <div className="masthead-eyebrow">
          <span>VOL. XXIV &nbsp;·&nbsp; NO. 47</span>
          <span>EST. MCMXCVII &nbsp;·&nbsp; RAJPURA BUREAU</span>
          <span>FRIDAY, 27 JUNE 2026</span>
        </div>
        <div className="masthead-title">The Daily Prophet</div>
        <div className="masthead-tagline">
          "Sorcery in Silicon — The Realm's Finest Engineering Talent"
        </div>
        <div className="masthead-footer-strip">
          <span>BY OWL POST &amp; ENCHANTED FIRE-MESSAGE</span>
          <span>SPECIAL CAREERS EDITION</span>
          <span>PRICE: 5 KNUTS</span>
        </div>
      </header>

      <div className="rule-thick" />
      <div className="rule-double" />

      {/* ══════════════════════════════════════════════
          LEAD HEADLINE — centred like a real front page
      ══════════════════════════════════════════════ */}
      <section className="lead-section">
        <span className="kicker">Exclusive Dispatch · Software Sorcery · Class of 2022</span>
        <h1 className="lead-headline">
          Local Wizard Disrupts Muggle Procurement —<br />
          Aditya Verma's AI Sorcery Transforms the Industry
        </h1>
        <p className="deck">
          Procol engineer deploys natural language processing charms, RBAC wards,
          and an intelligent search oracle to outmanoeuvre rivals; quote response
          rates surge sixty per cent as buyers hail the new age of enchanted negotiation
        </p>
      </section>

      <div className="rule-double" />

      {/* ══════════════════════════════════════════════
          MAIN BAND — photo sidebar | 2-col Procol article | vertical label
      ══════════════════════════════════════════════ */}
      <div className="band-profile">

        {/* Left: photo + pull quote only (Wire Dispatch removed) */}
        <aside className="col">
          <div className="photo-frame">
            <div className="moving-photo-wrap">
              <video
                src="/Wizard-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="moving-photo-video"
              />
            </div>
            <div className="photo-caption">
              Mr. Aditya Verma · Special Correspondent<br />
              Rajpura Bureau · Procol Division
            </div>
          </div>

          <div className="pull-quote">
            <blockquote>
              "Few engineers his age command both the full-stack and the AI frontier
              with such quiet authority."
            </blockquote>
            <cite>— Goblin Computing Review, 2026</cite>
          </div>

          <div className="rule-thin" />

          <div className="edu-box">
            <div className="edu-school">Chitkara University</div>
            <div className="edu-degree">B.Tech — Computer Science &amp; Engineering</div>
            <div className="edu-grade">CGPA: 9.08 / 10</div>
            <div className="edu-date">2022 – Present · Rajpura, Punjab</div>
          </div>

          <div className="rule-gold" />

          <div className="edu-box">
            <div className="edu-school">BBMB DAV Public School</div>
            <div className="edu-degree">12th — CBSE Board</div>
            <div className="edu-grade">Percentage: 91%</div>
            <div className="edu-date">2021–2022 · Nangal, Punjab</div>
          </div>
        </aside>

        <div className="col-divider" />

        {/* Centre: Procol article in proper 2-column newspaper flow */}
        <article className="col article-prose lead-prose">
          <div className="byline">
            By Our Special Correspondent · April 2025 — Present · Procol, Rajpura
          </div>

          <div className="article-columns">
            <p>
              Aditya Verma — in what goblin economists are calling the most
              consequential development in muggle supply-chain sorcery in living
              memory, this software engineer has dismantled the old ways at technology
              firm Procol. Armed with natural language processing charms and a deep
              mastery of the Model Context Protocol, Verma has conjured a suite of
              AI-powered features that have left procurement departments across the
              realm scrambling to keep pace. Since joining the bureau in April of 2025,
              he has shipped five major enchantments — each more audacious than the last.
            </p>

            <h2 className="inset-head">Email Negotiations Engine Doubles Response Rates</h2>
            <p>
              The crown jewel of Verma's spellwork is an Email Negotiations Engine of
              extraordinary potency. The system reaches into the most chaotic of
              unstructured correspondence — extracting pricing terms, delivery timelines,
              and vendor agreements with uncanny precision. Quote response rates at Procol
              have since climbed a staggering sixty per cent, a figure that has sent
              shockwaves through rival procurement houses throughout the kingdom.
            </p>

            <h2 className="inset-head">Web Search Module Brings Live Market Intelligence</h2>
            <p>
              Operating within Procol's AI procurement repository, Verma's Web Search
              Module bestows buyers with real-time market intelligence previously
              available only to the most seasoned potion suppliers. The system scours
              the open web for pricing signals, surfacing competitive data directly
              within the negotiation workflow — a capability one senior buyer described
              as "like having a goblin banker whispering in your ear during every deal."
            </p>

            <h2 className="inset-head">Permission Wards Erected — RBAC Module Secures the Realm</h2>
            <p>
              Recognising that no enchanted system is safe without proper wards, Verma
              designed and implemented a comprehensive Role-Based Access Control module
              for the AI platform. Fine-grained permission layers now govern every buyer,
              vendor, and administrator — ensuring sensitive negotiation data reaches
              only the eyes for which it was intended. The Ministry has taken note.
            </p>

            <h2 className="inset-head">Benchmark Oracle Exposes Unfair Pricing in Milliseconds</h2>
            <p>
              A Benchmark Feature of Verma's devising automatically compares current
              vendor quotes against historical order data — flagging outliers with
              ruthless efficiency and cutting buyer negotiation time by fifty per cent.
              The Oracle charts price trends across three prior orders, arming buyers
              with historical evidence the moment they sit at the negotiating table.
            </p>

            <h2 className="inset-head">Model Context Protocol — The Great Unifier</h2>
            <p>
              Contributing to Procol's Model Context Protocol implementation, Verma has
              helped architect a framework allowing seamless switching between AI
              providers — ensuring the platform is never beholden to a single oracle.
              Multiple LLMs now serve procurement tasks in parallel, each selected on merit.
            </p>
          </div>
        </article>

        {/* Right edge: vertical rotated label */}
        <div className="vertical-label">Procol Exclusive</div>
      </div>

      {/* ══════════════════════════════════════════════
          ACHIEVEMENTS — flat row under main band
      ══════════════════════════════════════════════ */}
      <div className="rule-double" />

      <div className="achievements-cols">
        <div className="achievement">
          <strong>1st Place — Procol Internal AI Hackathon.</strong> Built
          AI-powered procurement automation that achieved significant market
          traction company-wide, enabling Procol to differentiate from competitors
          and accelerate its product roadmap.
        </div>
        <div className="achievement">
          <strong>Runner-Up — Advitiya × JPD Hub Hackathon, IIT Ropar.</strong> Competed
          among the top engineering teams from institutions across the northern provinces,
          placing among the final contenders in this prestigious national-level conjuring
          competition hosted by the Indian Institute of Technology, Ropar.
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════ */}
      <footer className="paper-footer">
        <div className="footer-wire">
          ✆ +91-7888992617 &nbsp;·&nbsp; ✉ adityakaplish11@gmail.com &nbsp;·&nbsp;
          GitHub &nbsp;·&nbsp; LinkedIn
        </div>
        <div className="footer-credit">
          Transmitted by Enchanted Fire-Message · All Spells Verified · © The Daily Prophet MCMXXVI
        </div>
      </footer>

    </div>
  )
}
