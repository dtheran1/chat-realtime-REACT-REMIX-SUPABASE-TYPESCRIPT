import { useSupabase } from "~/hooks/useSupabase"

export function Login () {
  const supabase = useSupabase()
  const handleLogut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.log(error, 'Error al cerrar sesion')
    }
  }

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    })
    if (error) {
      console.log(error, 'Error al inicar sesion')
    }
  }

  return (
    <div style={{ display: 'flex', gap: '12px'}}>
      <button onClick={handleLogut}>Cerrar sesion</button>
      <button onClick={handleLogin}>Iniciar sesion</button>
    </div>
  )
}