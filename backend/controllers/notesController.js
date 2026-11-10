import { json } from 'express'
import Note from '../models/Note.js'

export async function getAllnotes(req,res){
    try {
        const notes=await Note.find({})
        res.json(notes)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export async function getNoteById(req,res){
    try {
         const note=await Note.findById(req.params.id)
         if(!note){
            res.status(404).json({message:"Note not found"})
         }
            res.json(note)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export async function createNote(req,res){
    try {
        const { title, content } = req.body
        const note = new Note({
            title,
            content,    
        })
        await note.save()
        res.status(201).json(note)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
export async function updateNote(req,res){
   try {
    const id=req.params.id
    const { title, content } = req.body
    const note = await Note.findByIdAndUpdate(id, { title, content }, { new: true })
    res.json(note)
    
   } catch (error) {
        res.status(400).json({ message: error.message })
   }
}
export async function deleteNote(req,res){
    try {
        const note=await Note.findByIdAndDelete(req.params.id)
        if(!note){
            return res.status(404).json({ message: 'Note not found' })
        }
        res.json(note)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }   
}