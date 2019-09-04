// import countries from 'svg-country-flags/countries.json';
import countries from './utils/cidades.json';

import ISO6391 from 'iso-639-1';

export const prefix = 'Coding Coach';

export function set({ tag, country, name, language }) {
  document.title = generate({ tag, country, name, language });
}

export function generate({ tag, country, name, language }) {
  let title = prefix;
  if (name || country || tag || language) {
    title += ' | ';

    if (name) {
      title += name;
    } else {
      if (language) {
        title += ` ${ISO6391.getName(language)} speaking `;
      }
      if (tag) {
        title += `${tag} `;
      }
      title += 'professores';
      if (country) {
        title += ` de ${countries[country]}`;
      }
    }
  }
  return title;
}
