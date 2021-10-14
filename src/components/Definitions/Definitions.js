import React from 'react'
import './Definitions.css'


const Definitions = ({word, category, meanings, LightMode}) => {
    return (
        <div className="meanings">
            {meanings[0] && word && category === 'en' && (
                <audio src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio} controls style={{backgroundColor: "#fff", borderRadius: 10}} >
                    Your browser doesn't support audio.
                </audio>
            )
             }
            {word === '' ? <span className="subTitle"> Start by searching for a word...</span> : (
                meanings.map((mean)=> {
                   return mean.meanings.map((item) => {
                        return item.definitions.map((def) => {
                         
                         return <div className="singleMean" style = {{backgroundColor: LightMode ? '#3b5360':'white', 
                         color: LightMode ? 'white': 'black'}}>
                             <b>{def.definition}</b>
                             <hr style={{backgroundColor: 'black', width: '100%'}} />
                             {def.example && (
                                 <span>
                                     <b>Example: </b>
                                     {def.example}
                                 </span>
                             )}
                            {def.synonyms && (
                               <span>
                               <b>Synonyms: </b>
                               {def.synonyms.map((s)=> `${s}, `)}
                           </span> 
                            )}
                             </div>

                        })
                        
                    })
                    
                })
            )  }
        </div>
    )
}

export default Definitions
