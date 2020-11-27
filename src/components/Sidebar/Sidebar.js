import React from 'react'
import styled from '@emotion/styled';

function Sidebar() {
  const Div=styled.div`
    margin-top:20px;

`;
  return (
    <aside>
      
      
      <div class="sidenav">
  <a href="/nuevo-usuario">Registrar paciente</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>
            </aside>    
  )
}

export default Sidebar
