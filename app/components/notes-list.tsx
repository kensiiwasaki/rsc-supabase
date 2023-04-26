import type { Database } from '../../database.types'
import { format } from 'date-fns'

type Note = Database['public']['Tables']['notes']['Row']

async function fetchNotes() {
  // 挙動がわかりやすいように意図的に２秒間遅延
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const res = await fetch(`${process.env.url}/reset/v1/notes?select=*`, {
    headers: new Headers({
      apiKey: process.env.apiKey as string,
    }),
  })
}

export default async function NotesList() {
  return <div></div>
}
