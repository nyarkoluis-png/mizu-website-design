import { useState } from 'react';
import { ArrowUpRight, ArrowRight, Phone, MapPin, Utensils, Menu, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { RestaurantMenu } from '@/components/restaurant-menu';

const img = (n) => `${process.env.PUBLIC_URL || ''}/assets/${n}.jpg`;
const sushi = img('sushi');
const boat = img('sushi-boat');
const dinner = img('dinner');
const blossoms = img('blossoms');
const interior = img('interior');
const dining = img('dining');
const roomWide = img('room');
const tables = img('tables');
const platter = img('sushi-platter');

const TEL = 'tel:+4960742116266';
const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Mizu+Restaurant+Ober-Rodener+Str.+42+63322+R%C3%B6dermark';
const photos = [
  { src: interior, title: 'Ein Platz zum Wohlfühlen', category: 'Ambiente' },
  { src: boat, title: 'Sushi zum Teilen', category: 'Essen & Getränke' },
  { src: blossoms, title: 'Unter Kirschblüten', category: 'Ambiente' },
  { src: sushi, title: 'Sushi & Sashimi', category: 'Essen & Getränke' },
  { src: tables, title: 'Gedeckte Tische', category: 'Ambiente' },
  { src: dinner, title: 'Sushi, Bowls & Getränke', category: 'Essen & Getränke' },
  { src: platter, title: 'Knusprige Sushi-Rollen', category: 'Essen & Getränke' },
  { src: dining, title: 'Unser Gastraum', category: 'Ambiente' },
  { src: roomWide, title: 'Gemütlich zusammensitzen', category: 'Ambiente' },
];
const navItems = [['Unsere Küche', '#kueche'], ['Speisekarte', '#speisekarte'], ['Einblicke', '#einblicke'], ['Dein Besuch', '#besuch']];
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');

export default function Home() {
  const [category, setCategory] = useState('Alle');
  const [selected, setSelected] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <a href="#" className="brand" aria-label="Mizu Restaurant – Startseite" data-testid="header-brand">
          <span className="brand-word">mizu<span className="text-gold">.</span></span>
          <span className="brand-caption">Asian kitchen<br />& Sushi</span>
        </a>
        <nav className="nav-links" aria-label="Hauptnavigation">
          {navItems.map(([label, href]) => (
            <a key={href} className="desktop-link" href={href} data-testid={`nav-${href.slice(1)}`}>{label}</a>
          ))}
          <Button variant="restaurant" asChild><a href={TEL} data-testid="header-reserve-button"><Phone /> Tisch reservieren</a></Button>
          <Button className="mobile-menu" variant="ghost" size="icon" aria-label="Menü öffnen" data-testid="mobile-menu-button" onClick={() => setMobileOpen(true)}><Menu /></Button>
        </nav>
      </header>
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <img className="hero-photo" src={roomWide} alt="Gastraum mit gedeckten Tischen, Sesseln und beleuchteten Holzregalen" fetchpriority="high" />
          <div className="hero-content">
            <div className="eyebrow">Ein Stück Asien in Rödermark</div>
            <h1 id="hero-title">Mizu<span>Restaurant</span></h1>
            <p className="hero-description">Gutes Essen. Besondere Momente.<br />Entdecke Sushi und asiatische Küche<br />in einem Ambiente zum Wohlfühlen.</p>
            <Button variant="hero" asChild><a href="#kueche" data-testid="hero-cta-button">Unsere Küche entdecken <ArrowRight /></a></Button>
          </div>
          <div className="hero-bottom">
            <div className="rating"><span className="stars" aria-label="5 Sterne">★★★★★</span><strong>4,8</strong><span>194 Google-Bewertungen</span></div>
            <div className="hero-note"><span>Mit Liebe zum Detail.</span><a href="#einblicke" aria-label="Zu den Einblicken"><ArrowRight size={18} /></a></div>
          </div>
        </section>
        <div className="quick-info">
          <span><MapPin />Rödermark · Ober-Rodener Str. 42</span>
          <span><Utensils />Vor Ort & zum Mitnehmen</span>
          <span><Leaf />Auch vegetarisch & vegan</span>
        </div>
        <section id="kueche" className="section">
          <div className="section-heading">
            <div><div className="eyebrow">Unsere Küche</div><h2>Asien auf deinem Teller.</h2></div>
            <p className="section-intro">Von feinem Sushi bis zu warmen Lieblingsgerichten.<br />Zum Entdecken, Teilen und immer wieder Genießen.</p>
          </div>
          <div className="food-grid">
            <article className="food-item"><div className="food-media"><img src={sushi} alt="Sushi-Auswahl mit Lachs-Sashimi, Nigiri und knusprigen Rollen" loading="lazy" /></div><p className="food-tag">Sushi & Sashimi</p><h3>Kleine Kunstwerke. Großer Genuss.</h3><p>California Rolls, Lachs- und Thunfisch-Sashimi oder knusprige Sushi-Rollen – entdecke deine Favoriten.</p></article>
            <article className="food-item"><div className="food-media"><img src={dinner} alt="Asiatische Bowl mit Gemüse neben einer angerichteten Sushi-Platte" loading="lazy" /></div><p className="food-tag">Asiatische Lieblingsgerichte</p><h3>Wärmend. Würzig. Wunderbar.</h3><p>Chicken Katsu, knusprige Ente und Curry mit Kokosmilch. Dazu kleine Gerichte, die sich gut teilen lassen.</p></article>
            <article className="food-item"><div className="food-media"><img src={boat} alt="Sushi auf einem Holzboot mit einem Getränk im Hintergrund" loading="lazy" /></div><p className="food-tag">Gemeinsam genießen</p><h3>Der schönste Grund zu bleiben.</h3><p>Ein Sushi-Boot für den Tisch, Mizu Eistee oder ein Cocktail. Und zum Abschluss etwas Süßes, zum Beispiel Mochi.</p></article>
          </div>
          <div className="kitchen-bottom"><span>20–30 € pro Person · Vegetarische & vegane Gerichte</span><Button variant="link" asChild><a href="#speisekarte" data-testid="kitchen-menu-link">Zur Speisekarte <ArrowRight /></a></Button></div>
        </section>
        <RestaurantMenu />
        <section id="einblicke" className="gallery-band">
          <div className="section">
            <div className="section-heading">
              <div><div className="eyebrow">Einblicke ins Mizu</div><h2>Ein Gefühl für deinen Besuch.</h2></div>
              <p className="section-intro">Ein Blick in unsere Küche und auf die Plätze,<br />an denen aus Essen eine schöne Zeit wird.</p>
            </div>
            <div className="gallery-controls" role="group" aria-label="Bilder nach Kategorie filtern">
              {['Alle', 'Essen & Getränke', 'Ambiente'].map((c) => (
                <Button key={c} variant="ghost" className="gallery-tab" aria-pressed={category === c} data-testid={`gallery-tab-${slug(c)}`} onClick={() => setCategory(c)}>
                  {c} ({photos.filter((p) => c === 'Alle' || p.category === c).length})
                </Button>
              ))}
            </div>
            <div className="gallery-grid" aria-live="polite">
              {photos.filter((p) => category === 'Alle' || p.category === category).map((p) => (
                <Button key={p.title} variant="ghost" className="gallery-tile" aria-label={`${p.title} – Foto vergrößern`} data-testid={`gallery-tile-${slug(p.title)}`} onClick={() => setSelected(p)}>
                  <img src={p.src} alt={p.title} loading="lazy" />
                  <span className="gallery-label">{p.title}</span>
                </Button>
              ))}
            </div>
            <p className="photo-credit">Echte Einblicke aus dem Mizu in Rödermark.</p>
          </div>
        </section>
        <section className="review-section" aria-label="Gästestimmen">
          <div className="eyebrow">Was unsere Gäste sagen</div>
          <blockquote>„Das Essen ist super lecker, die hausgemachten Frühlingsrollen sind der Wahnsinn.“</blockquote>
          <span className="stars" aria-label="5 Sterne">★★★★★</span>
          <p>Gästestimme auf Google · 4,8 von 5 bei 194 Bewertungen</p>
        </section>
        <section id="besuch" className="visit-band">
          <div className="section visit">
            <div>
              <div className="eyebrow">Wir freuen uns auf dich</div>
              <h2>Dein Platz im Mizu.</h2>
              <p>Für ein entspanntes Abendessen empfehlen wir,<br />vorab einen Tisch zu reservieren.</p>
              <Button variant="hero" asChild><a href={TEL} data-testid="visit-phone-button"><Phone />06074 2116266 <ArrowUpRight /></a></Button>
            </div>
            <div>
              <h3>Hier findest du uns</h3>
              <address>Mizu Restaurant<br />Ober-Rodener Str. 42<br />63322 Rödermark</address>
              <a className="visit-link" href={mapUrl} target="_blank" rel="noreferrer" data-testid="visit-map-link">Anfahrt mit Google Maps <ArrowUpRight size={15} /></a>
              <p className="visit-small">Kostenlose Parkplätze · Rollstuhlgerechter Eingang<br />Sitzplätze im Freien · Kinder willkommen</p>
            </div>
            <div>
              <h3>Öffnungszeiten</h3>
              <div className="hours"><span>Dienstag – Sonntag</span><span>11:00 – 14:30<br />17:00 – 21:30</span><span>Montag</span><span>Ruhetag</span></div>
              <p className="visit-small">Speisen vor Ort & zum Mitnehmen<br />Kein Lieferdienst<br />Karten- und kontaktlose Zahlung möglich</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <a href="#" className="brand" aria-label="Zum Seitenanfang"><span className="brand-word">mizu<span className="text-gold">.</span></span></a>
        <p>Mizu Restaurant · Asiatische Küche & Sushi · Rödermark</p>
        <a className="text-xs" href={TEL}>06074 2116266</a>
      </footer>
      <Dialog open={Boolean(selected)} onOpenChange={(open) => { if (!open) setSelected(null); }}>
        <DialogContent className="lightbox-content" data-testid="lightbox-dialog">
          <DialogTitle>{selected?.title}</DialogTitle>
          <DialogDescription>{selected?.category}</DialogDescription>
          {selected && <img className="lightbox-image" src={selected.src} alt={selected.title} />}
        </DialogContent>
      </Dialog>
      <Dialog open={mobileOpen} onOpenChange={setMobileOpen}>
        <DialogContent data-testid="mobile-menu-dialog">
          <DialogTitle>Mizu Restaurant</DialogTitle>
          <DialogDescription>Asiatische Küche & Sushi in Rödermark</DialogDescription>
          <nav className="flex flex-col gap-4 py-5" aria-label="Mobile Navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} data-testid={`mobile-nav-${href.slice(1)}`} onClick={() => setMobileOpen(false)}>{label}</a>
            ))}
            <Button variant="restaurant" asChild><a href={TEL}><Phone />Tisch reservieren</a></Button>
          </nav>
        </DialogContent>
      </Dialog>
    </>
  );
}
