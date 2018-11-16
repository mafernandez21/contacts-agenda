import React from 'react';
import PropTypes from 'prop-types';
import SearchContact from './comp/searchContact/SearchContact';
import ContactList from './comp/contactList/ContactList';

class SearchableContactList extends React.Component {
  constructor(props) {
    super(props);
    props.contactsActions.fetchContacts();
  }

  handleOnSearch = searchValue => {
    this.props.contactsActions.fetchContacts(searchValue);
  };

  handleContactListItemClick = contactId => this.props.contactsActions.fetchContact(contactId);

  render() {
    return (
      <div className={ 'searchable-contact-list' }>
        <SearchContact  onSearch={ this.handleOnSearch } />
        <ContactList contacts={ this.props.contacts } onContactClick={ this.handleContactListItemClick } />
      </div>
    )
  }
}

SearchableContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  contactsActions: PropTypes.shape({
    fetchContacts: PropTypes.func
  }).isRequired
};

export default SearchableContactList;
