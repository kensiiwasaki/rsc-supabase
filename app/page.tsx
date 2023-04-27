import NotesList from './components/notes-list'
import TimeCounter from './components/timer-counter'

export default function Page() {
  return (
    <main>
      <div className="m-10 text-center">
        <p> Hello World</p>
        {/* @ts-ignore */}
        <NotesList />
        <TimeCounter />
      </div>
    </main>
  )
}
