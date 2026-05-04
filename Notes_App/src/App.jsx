import React, { useState } from 'react'

const App = () => {

  const [notes, setNotes] = useState("")
  const [detailsNotes, detailsetNotes] = useState("")
  const [notesList, setNotesList] = useState([])
  
  const submitHandler = (e) => {
    e.preventDefault()
    const copy = [...notesList]
    copy.push({note:notes, details:detailsNotes})
    setNotesList(copy)
    
    console.log(notes,detailsNotes,notesList)
    
    setNotes("")
    detailsetNotes("")
  }
  return (
    <div className="bg-black h-screen lg:flex  text-white">
      
     
       <form onSubmit={submitHandler} className='px-10 py-10 lg:w-1/2 gap-5 flex flex-col w-1/2  p-15 items-start'>
       <h1 className='text-4xl font-bold'>Add Note</h1>
          <input 
          className='w-full px-5 py-2 h-15 font-medium border-2 outline-none rounded-2xl'
           type="text" 
           placeholder='Enter title'
           value={notes}
           onChange={(e)=>setNotes(e.target.value)} />
        <textarea
        
        className=' resize-none w-full flex h-32 items-start px-5 py-5 font-medium border-2 outline-none rounded-2xl'
        
        placeholder='Write details'
        value={detailsNotes}
        onChange={(e)=>detailsetNotes(e.target.value)}/>
        <button
        
        className='bg-white text-black px-5  font-medium py-2 rounded-2xl' 
        type='submit'>Add Note</button>
       
        
      </form>

      <div className=' lg:w-1/2 lg:border-l-2 h-full  '>
      <div className=' p-6  text-4xl font-bold'>your notes</div>
        <div className=' h-full flex flex-wrap gap-5  px-10 py-10  overflow-auto'>
          {notesList.map((item,id)=><div key={id} className='h-50 wrap-break-word flex flex-col items-start-start bg-amber-100 w-40 rounded-2xl text-black'>
            <h3 className='py-2 px-2 font-bold w-full'>{item.note}</h3>
            <p className='py-2 px-2 w-full'>{item.details}</p>
          </div>)}
       
        
        
        </div>

      </div>
     
     
    </div>
  )
}

export default App