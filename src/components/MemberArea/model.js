import ISO6391 from 'iso-639-1';
// import countries from 'svg-country-flags/countries.json';
import countries from '../../utils/cidades.json';

import tags from './tags';

const languages = ISO6391.getLanguages(ISO6391.getAllCodes());
const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const urlPattern = /^https:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/;
// const linkedinPattern = /^[A-Za-z0-9-]{3,100}$/;

const emailValidation = value => !value || emailPattern.test(value);
const urlValidation = value => !value || urlPattern.test(value);
// const linkedinValidation = value => !value || linkedinPattern.test(value);

export default {
  email: {
    label: 'E-mail',
    type: 'text',
    defaultValue: '',
    disabled: true,
    validate: value => !!value && emailValidation(value),
  },
  name: {
    label: 'Name',
    type: 'text',
    defaultValue: '',
    maxLength: 50,
    helpText: 'Seu nome',
    validate: value => !!value && (value.length > 3 && value.length <= 50),
  },
  avatar: {
    label: 'Foto',
    type: 'text',
    defaultValue: '',
    validate: value => !!value && urlValidation(value),
    helpText: 'Link de uma imagem',
    previewImage: true,
  },
  title: {
    label: 'Title',
    type: 'text',
    maxLength: 50,
    defaultValue: '',
    validate: value => !!value && (value.length > 3 && value.length <= 50),
  },
  description: {
    label: 'Descrição',
    type: 'longtext',
    defaultValue: '',
    maxLength: 140,
    validate: value => !value || (value.length > 3 && value.length <= 140),
    helpText: 'Vazio ou entre 3 e 140 caracteres',
    style: {
      width: '100%',
    },
  },
  country: {
    label: 'Cidade',
    type: 'select',
    defaultValue: '',
    options: Object.entries(countries).map(([code, name]) => ({
      label: name,
      value: code,
    })),
    validate: option => !!option.value,
  },
  spokenLanguages: {
    label: 'Idiomas',
    type: 'tags',
    defaultValue: [],
    options: languages.map(lang => ({
      value: lang.code,
      label: lang.name,
    })),
    validate: options => !!options.length,
  },
  tags: {
    label: 'Tags',
    type: 'tags',
    defaultValue: [],
    maxItems: 5,
    style: {
      width: '100%',
    },
    options: tags.map(tag => ({ value: tag, label: tag })),
    validate: options => !!options.length,
    helpText: 'Até 5',
  },
  channels: {
    label: 'Contatos',
    type: 'keyvalue',
    defaultValue: [],
    options: [
      {
        value: 'email',
        label: 'Email Address',
        prefix: 'mailto:',
        validate: emailValidation,
      },
      { value: 'facebook', label: 'Facebook', prefix: 'https://facebook.com/' },
      { value: 'twitter', label: 'Twitter', prefix: 'https://twitter.com/@' },
      { value: 'github', label: 'Github', prefix: 'https://github.com/' },
    ],
    style: {
      width: '100%',
    },
    helpText: 'Até 3',
    validate: options => options.length > 0,
  },
};
