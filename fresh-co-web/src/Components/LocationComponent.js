import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Estados = {
    Monterrey : "Monterrey",
    Guadalajara: "Guadalajara",
    Sinaloa: "Sinaloa",
}

function LocationComponent({value, setValue}) {
    let [latitude, setLatitude] = useState(null);
    let [longitude, setLongitude] = useState(null);

    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function(position) {
            if(longitude !== position.coords.latitude && position.coords.longitude) {
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
            }
        });
    }

    return (
        <>
            {latitude != null && longitude != null ? <div>https://www.google.com/maps/place/{latitude},{longitude}</div> : null}
            <DropdownButton
                as={ButtonGroup}
                key={'primary'}
                id={`dropdown-variants-primary`}
                variant={'default'}
                title={value != null ? value : 'Selecciona un estado'}
                onSelect={(e) => setValue(e)}
            >
                <Dropdown.Item eventKey={Estados.Monterrey}>Monterrey</Dropdown.Item>
                <Dropdown.Item eventKey={Estados.Guadalajara}>Guadalajara</Dropdown.Item>
                <Dropdown.Item eventKey={Estados.Sinaloa}>Sinaloa</Dropdown.Item>
            </DropdownButton>
        </>
    );
}


export default LocationComponent;