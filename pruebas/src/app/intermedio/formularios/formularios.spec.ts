import { FormBuilder } from '@angular/forms';
import { FormularioRegister } from './formularios'


describe( 'Formularios', () => {

    let componente: FormularioRegister;

    beforeEach( () => {
        componente = new FormularioRegister( new FormBuilder());
    });

    it( 'Debe de crear un formulario con dos camposn email y password', () => {
        expect( componente.form.contains('email')).toBeTruthy();
        expect( componente.form.contains('password')).toBeTruthy();



    });
});