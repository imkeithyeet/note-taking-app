import { NoteData, Tag } from "./App";
import { NoteForm } from "./NoteForm";
type EditNoteProps ={
    onSubmit: (data: NoteData)=> void
    onAddTag:( tag: Tag)=> void
    availableTags: Tag[]
}

export function EditNote({ onSubmit, onAddTag, availableTags}: EditNoteProps){
    return (
        <>
    <h1 className="mb-4">Edit Note</h1>
    <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags}/>
    </>
    )
}