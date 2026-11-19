/* skupstina hub: identity, tokens, labels and file lists. No corpus data here or anywhere in the hub: search, documents,
 * graph and chat come from the API after sign-in (api/main.py), with the signed-in account's ID token. */
window.HUB_CONFIG = {
  id: 'skupstina', title: 'Arhiva Narodne skupštine', lang: 'sr-Latn', locale: 'sr-Latn-RS', currency: 'RSD',
  home: '/pretraga', theme: 'auto',
  brand: { name: 'Arhiva Skupštine', sub: 'pretraga · graf · pitanja' },
  tokens: { accent: '#7a1f2b', accentSoft: '#f4e6e8' }, tokensDark: { accent: '#e6a3ad', accentSoft: '#3a2226' },
  skin: 'skin.css?v=086a844959',
  storage: { prefix: 'skupstina-hub' },
  modules: ['tables'],
  data: ['data/core.js'],
  views: ['views.js'],
  gate: {
    store: 'HubAuth', scripts: ['firebase-config.js?v=d0b19f6993', 'chassis/gate-store.js'],
    keyDoc: 'hubs/skupstina/meta/gate', roles: ['admin', 'team']
  },
  labels: {
    filter: 'Filtriraj meni', staleItem: 'Ta stavka više nije u hubu.',
    gateTitle: 'Arhiva Narodne skupštine', gatePrompt: 'Prijavite se svojom email adresom. Poslaćemo vam link koji otvara arhivu.',
    gateEmail: 'Email', gateSend: 'Pošalji mi link za prijavu', gateSending: 'Šaljem…',
    gateSent: 'Proverite poštu i otvorite link u ovom browseru. Ako ga nema, pogledajte spam.',
    gateNotListed: 'Ta adresa nije na listi naloga.', gateSendFailed: 'Link nije poslat. Pokušajte ponovo.',
    gateLinkFailed: 'Link za prijavu nije uspeo. Možda je istekao ili je već iskorišćen. Zatražite novi.',
    gateNoAccess: '{email} je prijavljen, ali ovaj nalog nema pristup arhivi.', gateSignOut: 'Odjavi se', gateSignedIn: 'Prijavljen: {email}',
    gateOpenFailed: 'Arhiva nije mogla da se otvori. Osvežite stranicu ili se odjavite i prijavite ponovo.', gateUnavailable: 'Arhiva trenutno nije dostupna.',
    gateConfirmEmail: 'Potvrdite email adresu da završite prijavu'
  }
};
