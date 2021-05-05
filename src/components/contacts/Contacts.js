import React, { Component } from "react";
import Contact from "./Contact";

//using redux

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getContacts } from "../../actions/contactActions";

//////
class Contacts extends Component {
  //CALL GET CONTACTS
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}
Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired,
};
//esme state dar redux contact ast
//for map redux to local property
const mapStateToProps = (state) => ({
  contacts: state.contact.contacts, /// samte rast contact az index reducer miaayad
});

export default connect(mapStateToProps, { getContacts })(Contacts);// da ta mored inja mizarrim. yeki map kardane state redux be props component va digari dispatch baraye farakhni action ha
