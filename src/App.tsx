import { ArrowDown, Bell, Check, Download, Flame, LifeBuoy, Mail, ShieldCheck } from 'lucide-react'

const appStoreUrl = '#app-store'

function Logo() {
  return (
    <a className="brand" href="/" aria-label="Anchrd home">
      <img src="/app-icon.png" alt="" />
      <span>Anchrd</span>
    </a>
  )
}

function Header() {
  return (
    <header className="site-header">
      <Logo />
      <nav aria-label="Main navigation">
        <a href="/privacy/">Privacy</a>
        <a href="/support/">Support</a>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <Logo />
      <p>One puzzle. Your route. Every day.</p>
      <div className="footer-links">
        <a href="/privacy/">Privacy</a>
        <a href="/support/">Support</a>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Anchrd</p>
    </footer>
  )
}

function GamePreview() {
  return (
    <figure className="game-preview">
      <img
        src="/anchrd-gameplay.png"
        alt="Anchrd gameplay showing a word chain from CASCADED towards ILLNESS"
      />
    </figure>
  )
}

function StoreButton() {
  return (
    <a className="store-button" href={appStoreUrl} aria-label="Anchrd on the App Store, coming soon">
      <Download className="store-icon" aria-hidden="true" />
      <span><small>Coming soon on the</small><strong>App Store</strong></span>
    </a>
  )
}

function HomePage() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">A DAILY WORD-CHAIN PUZZLE</p>
            <h1>Find the words.<br /><span>Choose your path.</span></h1>
            <p className="intro">Carry the last three letters into every new word. Follow the shortest path or find a route of your own to reach the target.</p>
            <StoreButton />
            <p className="availability">Made for iPhone and iPad</p>
          </div>
          <GamePreview />
          <a className="scroll-cue" href="#how-it-works" aria-label="See how Anchrd works"><ArrowDown /></a>
        </section>

        <section className="how" id="how-it-works">
          <div className="section-heading">
            <p className="eyebrow">HOW IT WORKS</p>
            <h2>A new puzzle every day.</h2>
          </div>
          <div className="steps">
            <article><span>01</span><h3>Carry three</h3><p>Your next word must begin with the final three letters of the word before it.</p></article>
            <article><span>02</span><h3>Read the route</h3><p>See whether each move takes you closer, sideways, or towards a dead end.</p></article>
            <article><span>03</span><h3>Reach the target</h3><p>Finish a word with the target's opening three letters to complete the chain.</p></article>
          </div>
        </section>

        <section className="feature-band">
          <div>
            <p className="eyebrow">BUILT FOR A DAILY RITUAL</p>
            <h2>Small puzzle.<br />Plenty to think about.</h2>
          </div>
          <div className="feature-list">
            <p><Check /> One fresh daily puzzle</p>
            <p><Flame /> Local streaks that stay on your device</p>
            <p><Bell /> Optional lunchtime reminders</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function LegalLayout({ title, eyebrow, children }: { title: string; eyebrow: string; children: React.ReactNode }) {
  return (
    <>
      <main className="document-shell">
        <div className="document-intro"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1></div>
        <article className="document">{children}</article>
      </main>
      <Footer />
    </>
  )
}

function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" eyebrow="LAST UPDATED · 6 JULY 2026">
      <p className="lede">Anchrd is designed to work without an account and to keep your game activity on your device. This policy explains the limited information used to provide and improve the Anchrd app and website.</p>

      <h2>Who is responsible for your information</h2>
      <p>Anchrd is developed and operated in the United Kingdom by James Pawson, who is the data controller for the information described in this policy. Privacy questions can be sent to <a href="mailto:support@anchrdgame.com">support@anchrdgame.com</a>.</p>

      <h2>Information Anchrd uses</h2>
      <h3>Game information stored on your device</h3>
      <p>Your puzzle progress, completed games, hints, streaks, reminder preferences, and a randomly generated installation identifier are stored locally on your device. The identifier persists until the app is deleted and a new one is created if the app is reinstalled. Anchrd does not provide an account or cloud sync, so this information is not connected across devices.</p>

      <h3>Requests to the Anchrd service</h3>
      <p>The app contacts Anchrd's service to fetch the daily puzzle, dictionary data, definitions, and data version information. A random installation identifier is included with these requests for rate limiting. Anchrd's application does not intentionally retain this identifier after processing the request.</p>
      <p>As with ordinary internet services, infrastructure providers may temporarily process technical connection information, such as an IP address, to deliver and secure a request.</p>

      <h3>Crash reports</h3>
      <p>Anchrd uses Sentry to receive limited technical crash reports. These reports help diagnose stability problems and may contain device model, operating system version, app version, timestamps, stack traces, application state, diagnostic breadcrumbs, and related technical context. Anchrd disables screenshots, view hierarchy capture, performance tracing, profiling, and Sentry's default collection of personally identifiable information. Crash reports are not intended to identify you, but they should not be treated as fully anonymous.</p>

      <h3>Support messages and website visits</h3>
      <p>If you email support, Anchrd receives your email address and the information you choose to include so that your enquiry can be answered. The website is hosted by GitHub Pages, which may process technical request information such as IP addresses to deliver and secure the site. Anchrd does not add analytics or tracking technologies to this website.</p>

      <h2>Why this information is used</h2>
      <p>Anchrd relies on legitimate interests to operate and protect the puzzle service, apply rate limits, diagnose crashes, maintain app reliability, secure and deliver the website, and respond to support enquiries. These uses are limited to what is reasonably necessary to provide and maintain Anchrd. Local notifications are enabled only at your request and remain under your control through Anchrd and iOS settings.</p>

      <h2>Notifications</h2>
      <p>If you enable daily reminders, notifications are scheduled and managed locally by iOS. You can change notification permission at any time in iOS Settings. Anchrd does not use a remote notification service to send daily reminders.</p>

      <h2>What Anchrd does not do</h2>
      <ul>
        <li>No user accounts or advertising</li>
        <li>No sale or rental of personal information</li>
        <li>No cross-app tracking or marketing analytics</li>
        <li>No access to contacts, photos, location, or microphone</li>
      </ul>

      <h2>Service providers</h2>
      <p>Anchrd uses <a href="https://cloud.google.com/privacy" rel="noreferrer">Google Cloud</a> to host the puzzle service, <a href="https://sentry.io/privacy/" rel="noreferrer">Sentry</a> for crash reporting, and <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" rel="noreferrer">GitHub Pages</a> to host this website. They process limited information on Anchrd's behalf under contractual and security obligations. Information may be processed outside the United Kingdom; where required, the provider or Anchrd uses an approved transfer mechanism intended to provide an equivalent level of protection.</p>

      <h2>How long information is kept</h2>
      <p>Game information stored on your device remains there until you delete the app or iOS removes its data. Diagnostic events, infrastructure records, and support correspondence are kept only for as long as reasonably needed to investigate issues, secure and operate the service, respond to your message, and meet legal obligations. Retention periods are reviewed and information is deleted or anonymised when it is no longer needed. Deleting the app does not automatically delete crash reports or support correspondence already received.</p>

      <h2>Your choices</h2>
      <p>You can disable reminders in Anchrd or in iOS Settings. Deleting Anchrd removes its locally stored game information from that device. You may contact us with a privacy question using the address below.</p>

      <h2>Your privacy rights</h2>
      <p>Depending on the circumstances, UK data protection law may give you rights to access, correct, erase, restrict, or object to the use of your personal information. You can make a request by emailing <a href="mailto:support@anchrdgame.com">support@anchrdgame.com</a>. You also have the right to complain to the <a href="https://ico.org.uk/make-a-complaint/" rel="noreferrer">Information Commissioner's Office</a>.</p>

      <h2>Changes to this policy</h2>
      <p>This policy may be updated if Anchrd's features or data practices change. The effective date at the top of this page will be updated when that happens.</p>

      <h2>Contact</h2>
      <p>Email <a href="mailto:support@anchrdgame.com">support@anchrdgame.com</a> with questions about this policy.</p>
    </LegalLayout>
  )
}

function SupportPage() {
  return (
    <LegalLayout title="Support" eyebrow="ANCHRD">
      <p className="lede">For gameplay questions, technical trouble, or anything that does not feel quite right, get in touch and include as much useful detail as you can.</p>
      <div className="support-actions">
        <a href="mailto:support@anchrdgame.com"><Mail /><span><strong>Email support</strong><small>support@anchrdgame.com</small></span></a>
        <a href="/privacy/"><ShieldCheck /><span><strong>Privacy policy</strong><small>How Anchrd handles data</small></span></a>
      </div>
      <h2>Helpful details to include</h2>
      <p>Your device model, iOS or iPadOS version, Anchrd version, and a short description of what happened will make investigating much easier. A screenshot is useful when the problem is visual, but please avoid including anything personal.</p>
      <h2>Before you write</h2>
      <h3>I did not receive a daily reminder</h3>
      <p>Open iOS Settings, find Anchrd under Notifications, and check that notifications are allowed. Reminders are not sent after the day's puzzle has already ended.</p>
      <h3>My streak did not carry to another device</h3>
      <p>Streaks and game history are stored locally. Anchrd currently has no accounts or cross-device sync.</p>
      <h3>I found a questionable word or definition</h3>
      <p>Please send the word and the puzzle date to support. Dictionary feedback is particularly welcome.</p>
      <div className="response-note"><LifeBuoy /><p><strong>Independent support</strong><br />Anchrd is a small independent game. Replies may not be instant, but every message will be read.</p></div>
    </LegalLayout>
  )
}

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  const page = path === '/privacy' ? <PrivacyPage /> : path === '/support' ? <SupportPage /> : <HomePage />
  return <div className="app"><Header />{page}</div>
}

export default App
