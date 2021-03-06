import React, { useContext, useState } from 'react'
import { SingleNote } from './SingleNote';
import { NoteForm } from '../components/NoteForm';
import { NotesContext } from "../context/notes";
import { editNoteApi } from '../API/fetchAPI';

export function SingleNoteView({
    history: { push },
    match: {
        params: { id }
    }
}) {
    const [isEdit, setIsEdit] = useState(false)
    const { notes, editNote, archiveNote } = useContext(NotesContext);
    const note = !!notes ? notes.find(item => item.id === id) : null;
    const onEdit = () => {
        setIsEdit(isEdit => !isEdit)
    }

    const onSubmit = (fields) => {
        
        const newNote = {
            id: note.id,
            date: note.date,
            isCompleted: note.isCompleted,
            ...fields
        };

        (async () => {
            const response = await editNoteApi({
                ...newNote
            })
            if (response) {
                push('/');
            }
        })();

        editNote(newNote);


    }

    const onArchive = () => {
        (async () => {
            const response = await editNoteApi({
                ...note,
                id,
                isCompleted: !note.isCompleted
            })
            if (response) {
                push('/');
            }
        })()
        archiveNote(note);

    }
    return (
        <>
            {isEdit
                ? <NoteForm
                    isEdit={true}
                    onSubmit={onSubmit}
                    initial={{
                        title: note.title,
                        text: note.text,
                        color: note.color
                    }}
                />

                : <SingleNote
                    push={push}
                    id={id}
                    onEdit={onEdit}
                    onArchive={onArchive} />
            }
        </>
    )
}