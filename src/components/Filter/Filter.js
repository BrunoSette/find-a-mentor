import './Filter.css';

import React, { Component } from 'react';
import classNames from 'classnames';
import AutoComplete from '../AutoComplete/AutoComplete';
import Input from '../Input/Input';
import Switch from '../Switch/Switch';

import { generateLists } from '../../listsGenerator';

export default class Filter extends Component {
  state = {
    tag: '',
    country: '',
    name: '',
    language: '',
    showFilters: false,
  };

  onTagSelect = tag => {
    this.setState({ tag });
    this.props.onTagSelected(tag);
  };

  onCountrySelect = country => {
    this.setState({ country });
    this.props.onCountrySelected(country);
  };

  onNameSelect = name => {
    this.setState({ name });
    this.props.onNameSelected(name);
  };

  onLanguageSelect = language => {
    this.setState({ language });
    this.props.onLanguageSelected(language);
  };

  onToggleFilter = () => {
    this.setState({
      showFilters: !this.state.showFilters,
    });
    this.props.onToggleFilter();
  };

  render() {
    const {
      onToggleSwitch,
      clickedTag,
      clickedCountry,
      clickedUser,
      mentors,
    } = this.props;
    const { showFilters } = this.state;
    const { tags, countries, names, languages } = generateLists(mentors);

    return (
      <section aria-labelledby="filter" className="filter-wrapper">
        <h3 id="filter">
          Filtro{' '}
          <span id="mentorCount">
            {this.props.mentorCount}
            {this.props.mentorCount > 1 ? ' Professores' : ' Professor'}
          </span>
          <button
            className="toggle-filter"
            onClick={this.onToggleFilter}
            aria-label="Toggle filter"
          >
            <i
              className={classNames([
                'fa fa-angle-down',
                { 'show-filters': showFilters },
              ])}
            />
          </button>
        </h3>
        <div className="inputs" aria-expanded={showFilters}>
          <Input id="technology" label="Aulas de" key="technology">
            <AutoComplete
              id="technology"
              source={tags}
              onSelect={this.onTagSelect}
              clickedTag={clickedTag}
              showClear
              data-testid="technology-filter-autocomplete"
            />
          </Input>
          <Input id="country" label="Cidade" key="country">
            <AutoComplete
              id="country"
              source={countries}
              onSelect={this.onCountrySelect}
              clickedCountry={clickedCountry}
              showClear
              data-testid="country-filter-autocomplete"
            />
          </Input>
          <Input id="name" label="Professor" key="name">
            <AutoComplete
              id="name"
              source={names}
              onSelect={this.onNameSelect}
              clickedUser={clickedUser}
              showClear
              data-testid="name-filter-autocomplete"
            />
          </Input>
          <Input id="language" label="Idioma" key="language">
            <AutoComplete
              id="language"
              source={languages}
              onSelect={this.onLanguageSelect}
              showClear
              data-testid="language-filter-autocomplete"
            />
          </Input>
          <Switch id="fav" label="Meus Favoritos" onToggle={onToggleSwitch} />
        </div>
      </section>
    );
  }
}
