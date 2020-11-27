import React from 'react'

function NewUser() {
    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crear cuenta</h1>
                <form
                   
                > 
                
                <div className="campo-form">
                <label htmlFor="juridiccion">Juridiccion</label>
                    <select name="select">
                        <option value="Silais chontales">Silais Chontales</option> 
                        <option value="Silais managua" selected>Silais Managua</option>
                    </select>
                    </div>
                    <div className="campo-form">
                <label htmlFor="hospital">Hospital</label>
                    <select name="select">
                        <option value="asuncion juigalpa">Escuela Regional Asunción Juigalpa</option> 
                       
                    </select>
                    </div>
                    <div className="campo-form">
                   
                        <label htmlFor="nombre">Nombre</label>
                        <input
                       
                            type="text"
                            id="nombre"
                            name="nombre"
                            
                            placeholder="Ingresar nombre"
                            
                        
                        />

                    </div>
                    <div className="campo-form">
                   
                        <label htmlFor="apllido">Apellido</label>
                        <input
                       
                            type="text"
                            id="nombre"
                            name="nombre"
                            
                            placeholder="Ingresar apellido"
                            
                        
                        />

                    </div>
                    <div className="campo-form">
                   
                        <label htmlFor="telefono">Teléfono</label>
                        <input
                       
                            type="text"
                            id="nombre"
                            name="nombre"
                            
                            placeholder="Ingresar telefóno"
                            
                        
                        />

                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                        
                            type="email"
                            id="email"
                            name="email"
                            
                            placeholder="Ingresar email"
                            
                        
                        />

                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                        
                            type="password"
                            id="password"
                            name="password"
                            
                            placeholder="Ingresar password"
                            
                        
                        />

                    </div>

                    <div className="campo-form">
                        <label htmlFor="confrimar-password">Repite tu password</label>
                        <input
                       
                            type="password"
                            id="confirmar"
                            name="confirmar"
                           
                            placeholder="Confirmar password"
                           
                        
                        />

                    </div>

                    
                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrarme"
                        />
                    </div>

                </form>
                <div>

               
                </div>
            </div>
        </div>
    )
}

export default NewUser
