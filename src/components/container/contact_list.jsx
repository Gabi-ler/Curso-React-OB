import React from 'react';
import { Contacto } from '../../models/contact.class';
import ContactComponent from '../pure/contact'


const ContactListComponent = () => {

    const defaultContact = new Contacto('Gabriel', 'Lerda', 'lerda.gabriel@gmail.com', true);

    return (
        <div>
            <div>
                <h1>
                    Contactos:
                </h1>
            </div>
            <ContactComponent Contacto = {defaultContact}></ContactComponent>
        </div>
    );
}

export default ContactListComponent;
