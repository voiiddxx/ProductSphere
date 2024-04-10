"use server"


import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function  createSupebaseServerClient() {
  const cookieStore = cookies()
  return createServerClient(
    "https://edkwaonwmsyfqktjient.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVka3dhb253bXN5ZnFrdGppZW50Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI0MjE2MDAsImV4cCI6MjAyNzk5NzYwMH0.6kRnpPluiK9_KxB7aA7iPI6LKmOHYd1-1GDjyxedB7U",
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options })
          } catch (error) {
            // The `set` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: '', ...options })
          } catch (error) {
            // The `delete` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  )
}