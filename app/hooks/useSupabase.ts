import { useOutletContext } from "@remix-run/react";

export const useSupabase = () => {
  const { supabase } = useOutletContext()
  return supabase
}