import Link from "next/link";

function Navbar() {
  return ( 
    <nav>
      <h1>BancoTop</h1>
      <ul>
        <li>Início</li>
        <li>Suporte</li>
        <li>FAQ</li>
      </ul>
      { /* adicionar componente de entrar/botãozinho de conta e colocar links com href 'nulo' nos outros  */ }
    </nav>
   );
}

export default Navbar;