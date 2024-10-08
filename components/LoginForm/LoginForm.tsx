import Link from "next/link";

function LoginForm() {
  return ( 
    <form>
      <button type="submit">Entrar</button>

      <Link href=''>Esqueceu sua senha?</Link>
    </form>
  );
}

export default LoginForm;