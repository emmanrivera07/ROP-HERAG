import React from 'react';
import Sidebar from './../components/Sidebar/Sidebar';
import AuthNavbar from './../components/Navbars/AuthNavbar';
import File from 'views/auth/File';
import  './../../src/index.css';
function Doctor() {
    return (
        <div className="contenedor-app">
        <Sidebar/>
       
        <div className="seccion-principal">
            <AuthNavbar/>
            <div className="campo-form">
            
            
    
                </div>
         
            <main className="maindoctor">
                

                <div className="contenedor-tareas">
                
                
                <File></File>
                </div>
            </main>



        </div>


    </div>


    )
}

export default Doctor
