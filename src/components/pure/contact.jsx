import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/contact.class'

const ContactComponent = ({Contacto}) => {
  return (
    <div>
        <h2>
            Nombre: { Contacto.nombre }
        </h2>
        <h3>
            Apellido: { Contacto.apellido }
        </h3>
        <h4>
            mail: { Contacto.mail }
        </h4>
        <h5>
            Estado: { Contacto.estado ? 'Contacto en linea' : 'Contacto no disponible' }
        </h5>
    </div>
  )
}

ContactComponent.propTypes = {
    task: PropTypes.instanceOf(Contacto)
}

export default ContactComponent;