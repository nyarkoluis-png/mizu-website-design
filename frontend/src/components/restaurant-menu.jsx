import { useState } from 'react';
import { Search, X, Flower2, Fish, Soup, Salad, CookingPot, Coffee, IceCreamBowl, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { menuCategories, menuGroups } from '@/lib/menu-data';

const icons = [Flower2, Sun, Salad, Soup, CookingPot, Soup, Fish, IceCreamBowl, Coffee];
const euro = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');

export function RestaurantMenu() {
  const [category, setCategory] = useState('Sushi');
  const [search, setSearch] = useState('');
  const term = search.trim().toLocaleLowerCase('de');
  const groups = menuGroups
    .filter((g) => category === 'Alle' || g.category === category)
    .map((g) => ({
      ...g,
      items: g.items.filter((item) =>
        `${g.title} ${g.description ?? ''} ${item.name} ${item.description ?? ''}`.toLocaleLowerCase('de').includes(term)
      ),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <section id="speisekarte" className="menu-band" aria-labelledby="menu-title">
      <div className="section">
        <div className="section-heading menu-heading">
          <div>
            <div className="eyebrow">Die Mizu Speisekarte</div>
            <h2 id="menu-title">Speisekarte</h2>
          </div>
          <div className="menu-seal" aria-hidden="true"><Flower2 size={25} /><span>MIZU</span></div>
        </div>
        <div className="menu-toolbar">
          <div className="menu-categories" role="group" aria-label="Speisekarten-Kategorien">
            {menuCategories.map((label, i) => {
              const Icon = icons[i] ?? Flower2;
              return (
                <Button key={label} variant="ghost" className="menu-category" aria-pressed={category === label}
                  data-testid={`menu-category-${slug(label)}`} onClick={() => setCategory(label)}>
                  <Icon size={16} />{label}
                </Button>
              );
            })}
          </div>
          <label className="menu-search">
            <Search size={17} />
            <input aria-label="Gericht suchen" placeholder="Gericht suchen …" value={search}
              data-testid="menu-search-input" onChange={(e) => setSearch(e.target.value)} />
            {search && (
              <Button variant="ghost" size="icon" aria-label="Suche löschen" data-testid="menu-search-clear" onClick={() => setSearch('')}>
                <X size={16} />
              </Button>
            )}
          </label>
        </div>
        <div className="menu-results" aria-live="polite" data-testid="menu-results">
          {groups.length === 0 ? (
            <p className="menu-empty" data-testid="menu-empty">Keine passenden Gerichte gefunden.</p>
          ) : (
            groups.map((group) => (
              <div className="menu-group" key={group.title}>
                <div className="menu-group-heading">
                  <span className="menu-mark" aria-hidden="true" />
                  <h3>{group.title}</h3>
                  <span className="menu-count">{group.items.length}</span>
                </div>
                {group.description && <p className="menu-group-description">{group.description}</p>}
                <dl className="menu-items">
                  {group.items.map((item) => (
                    <div className="menu-item" key={item.name}>
                      <dt>
                        <span className="menu-dish-name">{item.name}</span>
                        {item.description && <span className="menu-dish-description">{item.description}</span>}
                      </dt>
                      <dd>{item.price === undefined ? <span className="menu-price-missing">Auf Anfrage</span> : euro.format(item.price)}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))
          )}
        </div>
        <p className="menu-source">Aus der bereitgestellten Speisekarte · Preise und Verfügbarkeit bitte vor Ort bestätigen. Mittagsangebote gelten separat. Allergene bitte beim Team erfragen.</p>
      </div>
    </section>
  );
}
