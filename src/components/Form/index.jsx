import React from "react";
import { useForm } from "react-hook-form";
import { edadValidator } from "../validators";

const Formulario = () => {

    const { register, formState: {errors}, watch, handleSubmit } = useForm({
        defaultValues: {
            nombre: 'Catalina',
            direccion: 'Calle Oslo',
            email: 'hola@correo.cl',
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    const incluirComentario = watch('incluirComentario');

    return <div>
            <h2>Formulario</h2>
            <p>Nombre: {watch('nombre')}</p>
            <p>Dirección: {watch ('direccion')}</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nombre</label>
                    <input type="text" {...register('nombre')}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" {...register('email', {
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                    })} />
                    {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
                    </div>
                <div>
                    <label>Dirección</label>
                    <input type="text" {...register('direccion', {
                        required: true
                    })} />
                    {errors.direccion?.type === 'required' && <p>El campo dirección es requerido</p>}
                </div>
                <div>
                    <label>Edad</label>
                    <input type="text" {...register('edad', {
                        validate: edadValidator
                    })} />
                    {errors.edad && <p>La edad debe estar entre 18 y 65</p>}
                </div>
                <div>
                    <label>País</label>
                    <select {...register('pais')}>
                        <option value="ar">Argentina</option>
                        <option value="cl">Chile</option>
                        <option value="br">Brasil</option>
                    </select>
                </div>
                <div>
                    <label>¿Incluir comentario?</label>
                    <input type="checkbox" {...register('incluirComentario')} />
                </div>
                {incluirComentario && (
                      <div>                
                <label>Comentario</label>
                <input type="text" {...register('comentario')}/>
                </div>
                )}
                <input type="submit" value="Enviar" />
            </form>
        </div>
}

export default Formulario;