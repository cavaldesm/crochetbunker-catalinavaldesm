import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import './Form.css';

import { edadValidator } from "../validators";

const Formulario = () => {

    const { register, formState: {errors}, watch, handleSubmit } = useForm({
        defaultValues: {
            nombre: 'Catalina Noruega',
            direccion: 'Calle Oslo #12',
            email: 'hola@correo.cl',
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    const incluirComentario = watch('incluirComentario');

    return <div>
        <div className="cartContainer">
            <h2>Estás a sólo un paso de terminar tu compra...</h2>
            <p>Nombre: {watch('nombre')}</p>
            <p>Dirección: {watch ('direccion')}</p>
            <p>Email: {watch ('email')}</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="cartContainer">
                    <label className="textCart">Nombre</label>
                    <input type="text" {...register('nombre')}/>
                </div>
                <div className="cartContainer">
                    <label className="textCart">Email</label>
                    <input type="text" {...register('email', {
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                    })} />
                    {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
                    </div>
                <div className="cartContainer">
                    <label className="textCart">Dirección</label>
                    <input type="text" {...register('direccion', {
                        required: true
                    })} />
                    {errors.direccion?.type === 'required' && <p>El campo dirección es requerido</p>}
                </div>
                <div className="cartContainer">
                    <label className="textCart">Edad</label>
                    <input type="text" {...register('edad', {
                        validate: edadValidator
                    })} />
                    {errors.edad && <p>La edad debe estar entre 18 y 65</p>}
                </div>
                <div className="cartContainer">
                    <label className="textCart">País</label>
                    <select {...register('pais')}>
                        <option value="ar">Argentina</option>
                        <option value="cl">Chile</option>
                        <option value="br">Brasil</option>
                    </select>
                </div>
                <div className="cartContainer">
                    <label className="textCart">¿Incluir comentario?</label>
                    <input type="checkbox" {...register('incluirComentario')} />
                </div>
                {incluirComentario && (
                      <div className="cartContainer">                
                <label className="textCart">Comentario</label>
                <input type="text" {...register('comentario')}/>
                </div>
                )}
                <Link className="cartLink" to='/exit'>
                <input type="submit" value="Enviar" />
                </Link>
            </form>
        </div>
        </div>
}

export default Formulario;