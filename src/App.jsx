import React from 'react';

export default function HotelRoyalAstrid() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  const navLinks = [
    { label: 'Restaurant', href: '#diensten' },
    { label: 'Accommodatie', href: '#diensten' },
    { label: 'Evenementen', href: '#diensten' },
    { label: 'Over Ons', href: '#over' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div style={{ fontFamily: "'Playfair Display', serif" }} className="bg-gray-950 text-cream min-h-screen">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-amber-700/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="flex flex-col leading-tight">
            <span className="text-amber-500 text-xl font-bold tracking-widest uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
              Hotel Royal
            </span>
            <span className="text-amber-300 text-xs tracking-[0.4em] uppercase font-light">Astrid · Oostende</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-gray-300 hover:text-amber-400 text-sm tracking-widest uppercase transition-all duration-300 font-light"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="tel:059339696"
                className="ml-4 px-5 py-2 border border-amber-600 text-amber-400 text-sm tracking-widest uppercase hover:bg-amber-600 hover:text-gray-950 transition-all duration-300"
              >
                Reserveer
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-px w-7 bg-amber-400 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
            <span className={`block h-px w-7 bg-amber-400 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-7 bg-amber-400 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="flex flex-col px-6 pb-6 gap-4 border-t border-amber-700/20 pt-4">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-amber-400 text-sm tracking-widest uppercase transition-all duration-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="tel:059339696"
                className="inline-block mt-2 px-5 py-2 border border-amber-600 text-amber-400 text-sm tracking-widest uppercase hover:bg-amber-600 hover:text-gray-950 transition-all duration-300"
              >
                Reserveer
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="hero" className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80"
            className="w-full h-full object-cover"
            alt="Hotel Royal Astrid restaurant en interieur"
          />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/30" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-amber-500 text-xs tracking-[0.5em] uppercase mb-6 font-light">
            Wellingtonstraat · Oostende · Aan de Kust
          </p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif", textShadow: '0 4px 40px rgba(0,0,0,0.6)' }}
          >
            Verfijnd verblijven
            <span className="block text-amber-400 italic mt-2">aan de Noordzee</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed tracking-wide">
            Hotel Royal Astrid verwelkomt u in het hart van Oostende — waar culinaire excellentie, stijlvol comfort en de magie van de kust samenkomen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-amber-600 text-gray-950 font-bold tracking-widest uppercase text-sm hover:bg-amber-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-900/40"
            >
              Tafel Reserveren
            </a>
            <a
              href="#diensten"
              className="px-8 py-4 border border-white/40 text-white font-light tracking-widest uppercase text-sm hover:border-amber-500 hover:text-amber-400 transition-all duration-300"
            >
              Ontdek Meer
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-amber-400 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-amber-400 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="diensten" className="bg-gray-950 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-500 text-xs tracking-[0.5em] uppercase mb-4">Onze Diensten</p>
            <h2
              className="text-4xl sm:text-5xl text-white mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Alles wat u nodig heeft,
              <span className="text-amber-400 italic block">onder één dak</span>
            </h2>
            <div className="w-16 h-px bg-amber-600 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🍽️',
                title: 'Restaurant',
                subtitle: 'Culinaire Beleving',
                desc: 'Geniet van verfijnde gerechten bereid met de verse vangst van de dag en seizoensgebonden streekproducten. Onze chef combineert klassieke Belgische keuken met moderne elegantie — een smaakervaring die u bij blijft.',
                tag: 'À la carte & buffet',
              },
              {
                icon: '🛏️',
                title: 'Hotelaccommodatie',
                subtitle: 'Uw Thuis aan Zee',
                desc: 'Onze kamers en suites zijn stijlvol ingericht met oog voor detail. Gelegen in het hart van Oostende, op wandelafstand van het strand en de Wellingtonrenbaan. Superieure rust, superieur comfort.',
                tag: 'Zee- & stadszicht beschikbaar',
              },
              {
                icon: '☕',
                title: 'Ontbijt & Diner',
                subtitle: 'Van Ochtend tot Avond',
                desc: 'Start uw dag met een uitgebreid ontbijtbuffet met verse croissants, lokale kazen en vers geperste sappen. Sluit de avond af met een verfijnd diner bij kaarslicht in onze sfeervolle eetzaal.',
                tag: 'Dagelijks beschikbaar',
              },
              {
                icon: '💼',
                title: 'Vergaderfaciliteiten',
                subtitle: 'Professionele Ruimtes',
                desc: 'Houd uw zakelijke bijeenkomsten in onze moderne vergaderzalen met volledig AV-apparatuur, stabiel wifi en catering op maat. Centraal gelegen in Oostende voor uw team en gasten van buiten.',
                tag: 'Capaciteit tot 80 personen',
              },
              {
                icon: '🥂',
                title: 'Banqueting & Events',
                subtitle: 'Uw Moment, Onze Passie',
                desc: 'Van bruiloften en jubilea tot bedrijfsgala\'s — ons evenemententeam begeleidt u van concept tot perfecte uitvoering. Elegante zalen, flawless service en culinaire hoogstandjes voor elke gelegenheid.',
                tag: 'Maatwerk mogelijk',
              },
            ].map((s, i) => (
              <div
                key={i}
                className={`group relative bg-gray-900 border border-gray-800 hover:border-amber-700/60 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-900/20 hover:-translate-y-1 ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="absolute top-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-amber-600 to-transparent transition-all duration-500" />
                <div className="text-4xl mb-5">{s.icon}</div>
                <p className="text-amber-500 text-xs tracking-widest uppercase mb-1 font-light">{s.subtitle}</p>
                <h3
                  className="text-white text-2xl font-bold mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">{s.desc}</p>
                <span className="inline-block text-xs tracking-widest uppercase text-amber-600 border border-amber-700/40 px-3 py-1 font-light">
                  {s.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RATING STRIP ── */}
      <div className="bg-amber-700/10 border-y border-amber-700/20 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16 text-center">
          <div>
            <span className="text-amber-400 text-3xl font-bold">3.5</span>
            <span className="text-amber-400 text-xl"> / 5</span>
            <p className="text-gray-500 text-xs tracking-widest uppercase mt-1">Google Reviews</p>
            <div className="flex gap-1 justify-center mt-1">
              {[1,2,3].map(i => <span key={i} className="text-amber-400 text-sm">★</span>)}
              <span className="text-amber-400/50 text-sm">★★</span>
            </div>
          </div>
          <div className="w-px h-12 bg-gray-700 hidden sm:block" />
          <div>
            <span className="text-white text-3xl font-bold">3.013</span>
            <p className="text-gray-500 text-xs tracking-widest uppercase mt-1">Beoordelingen</p>
          </div>
          <div className="w-px h-12 bg-gray-700 hidden sm:block" />
          <div>
            <span className="text-white text-3xl font-bold">Oostende</span>
            <p className="text-gray-500 text-xs tracking-widest uppercase mt-1">Wellingtonstraat · Kustlocatie</p>
          </div>
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section id="over" className="bg-gray-950 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
            {/* Image */}
            <div className="relative h-80 sm:h-96 lg:h-auto min-h-[500px] overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                alt="Restaurant Hotel Royal Astrid Oostende"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-950/60" />
              <div className="absolute bottom-8 left-8">
                <div className="bg-amber-600 text-gray-950 px-4 py-2 text-xs tracking-widest uppercase font-bold">
                  Sinds 1932
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="bg-gray-900 border border-gray-800 border-l-0 lg:border-l-0 p-10 sm:p-14 flex flex-col justify-center">
              <p className="text-amber-500 text-xs tracking-[0.5em] uppercase mb-4">Ons Verhaal</p>
              <h2
                className="text-4xl sm:text-5xl text-white mb-8 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Een icoon van
                <span className="text-amber-400 italic block">Oostende</span>
              </h2>
              <div className="w-12 h-px bg-amber-600 mb-8" />
              <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                Hotel Royal Astrid staat al decennialang als een begrip in het bruisende Oostende. Gelegen aan de prestigieuze Wellingtonstraat — op een steenworp van het strand en de iconische Wellingtonrenbaan — biedt ons hotel een unieke combinatie van kustcharm en stedelijke verfijning.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                Onze passie voor gastvrijheid weerspiegelt zich in elk detail: van de zorgvuldig bereide gerechten in ons restaurant tot de attente service in onze kamers. Wij verwelkomen toeristen die de Belgische kust verkennen, zakenreizigers die zoeken naar een professionele thuisbasis, en families die herinneringen willen maken aan zee.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-10 font-light">
                Oostende is meer dan een bestemming — het is een gevoel. En dat gevoel begint bij Hotel Royal Astrid.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="text-center">
                  <div className="text-amber-400 text-3xl font-bold">90+</div>
                  <div className="text-gray-500 text-xs tracking-widest uppercase mt-1">Jaar Traditie</div>
                </div>
                <div className="w-px bg-gray-700 hidden sm:block" />
                <div className="text-center">
                  <div className="text-amber-400 text-3xl font-bold">5</div>
                  <div className="text-gray-500 text-xs tracking-widest uppercase mt-1">Diensten</div>
                </div>
                <div className="w-px bg-gray-700 hidden sm:block" />
                <div className="text-center">
                  <div className="text-amber-400 text-3xl font-bold">❤️</div>
                  <div className="text-gray-500 text-xs tracking-widest uppercase mt-1">Hart van Oostende</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHT STRIP ── */}
      <div className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-amber-700/8" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-gray-950 to-gray-950" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-amber-500 text-xs tracking-[0.5em] uppercase mb-4">Klaar voor een onvergetelijke ervaring?</p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-white mb-8 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Reserveer uw tafel of kamer
            <span className="text-amber-400 italic block">en laat u verwennen</span>
          </h2>
          <a
            href="tel:059339696"
            className="inline-flex items-center gap-3 px-10 py-5 bg-amber-600 text-gray-950 font-bold tracking-widest uppercase text-sm hover:bg-amber-500 transition-all duration-300 hover:scale-105 shadow-2xl shadow-amber-900/50"
          >
            <span>📞</span>
            <span>059 33 96 96</span>
          </a>
        </div>
      </div>

      {/* ── CONTACT ── */}
      <section id="contact" className="bg-gray-950 py-24 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-500 text-xs tracking-[0.5em] uppercase mb-4">Contact & Reservaties</p>
            <h2
              className="text-4xl sm:text-5xl text-white mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Neem contact met ons op
            </h2>
            <div className="w-16 h-px bg-amber-600 mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="flex flex-col gap-8">
              <div>
                <h3
                  className="text-white text-2xl mb-6"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Wij zijn er voor u
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light mb-8">
                  Heeft u een vraag over een reservatie, een speciaal evenement of onze faciliteiten? Ons team staat klaar om u persoonlijk te begeleiden. Neem vandaag nog contact op — wij zorgen voor de rest.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                {[
                  {
                    icon: '📍',
                    label: 'Adres',
                    value: 'Wellingtonstraat 15',
                    sub: '8400 Oostende, België',
                  },
                  {
                    icon: '📞',
                    label: 'Telefoon',
                    value: '059 33 96 96',
                    sub: 'Bereikbaar tijdens openingsuren',
                    href: 'tel:059339696',
                  },
                  {
                    icon: '🕐',
                    label: 'Openingsuren',
                    value: 'Dagelijks open',
                    sub: 'Restaurant: 7:00 – 22:00 | Receptie: 24/7',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-900 border border-gray-800 group-hover:border-amber-700/60 transition-all duration-300 flex-shrink-0 text-xl">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-amber-500 text-xs tracking-widest uppercase mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-white font-bold hover:text-amber-400 transition-colors duration-300">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-bold">{item.value}</p>
                      )}
                      <p className="text-gray-500 text-xs mt-0.5 font-light">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-gray-900 border border-gray-800 p-8 sm:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12 gap-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-amber-600/20 border border-amber-600 text-3xl">
                    ✓
                  </div>
                  <h3
                    className="text-white text-2xl"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Bericht ontvangen!
                  </h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    Bedankt voor uw bericht. Ons team neemt zo spoedig mogelijk contact met u op.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 border border-amber-600 text-amber-400 text-sm tracking-widest uppercase hover:bg-amber-600 hover:text-gray-950 transition-all duration-300"
                  >
                    Nieuw Bericht
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div>
                    <label className="block text-amber-500 text-xs tracking-widest uppercase mb-2">
                      Uw Naam *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jan Janssen"
                      className="w-full bg-gray-950 border border-gray-700 text-white placeholder-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600/30 transition-all duration-300 font-light"
                    />
                  </div>
                  <div>
                    <label className="block text-amber-500 text-xs tracking-widest uppercase mb-2">
                      E-mailadres *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="uw@email.be"
                      className="w-full bg-gray-950 border border-gray-700 text-white placeholder-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600/30 transition-all duration-300 font-light"
                    />
                  </div>
                  <div>
                    <label className="block text-amber-500 text-xs tracking-widest uppercase mb-2">
                      Uw Bericht *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Ik wil graag een tafel reserveren voor 2 personen op..."
                      className="w-full bg-gray-950 border border-gray-700 text-white placeholder-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600/30 transition-all duration-300 resize-none font-light"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-amber-600 text-gray-950 font-bold tracking-widest uppercase text-sm hover:bg-amber-500 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-900/40"
                  >
                    Verstuur Bericht
                  </button>
                  <p className="text-gray-600 text-xs text-center font-light">
                    Of bel ons direct op{' '}
                    <a href="tel:059339696" className="text-amber-600 hover:text-amber-400 transition-colors duration-300">
                      059 33 96 96
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-950 border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="text-amber-500 text-xl font-bold tracking-widest uppercase mb-1">
                Hotel Royal Astrid
              </div>
              <div className="text-gray-500 text-xs tracking-widest">
                Wellingtonstraat 15 · 8400 Oostende · België
              </div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-px bg-amber-600/40" />
              <p className="text-gray-600 text-xs tracking-widest text-center">
                © 2026 Hotel Royal Astrid. Alle rechten voorbehouden.
              </p>
              <div className="w-12 h-px bg-amber-600/40" />
            </div>

            <div className="flex flex-col items-center md:items-end gap-2">
              <a
                href="tel:059339696"
                className="text-amber-500 text-sm tracking-widest hover:text-amber-300 transition-colors duration-300"
              >
                059 33 96 96
              </a>
              <div className="flex gap-4 mt-1">
                {['Restaurant', 'Hotel', 'Events'].map((l) => (
                  <a
                    key={l}
                    href="#diensten"
                    className="text-gray-600 text-xs tracking-widest uppercase hover:text-amber-500 transition-colors duration-300 font-light"
                  >
                    {l}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}