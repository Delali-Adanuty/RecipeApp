import ReactMarkdown from 'react-markdown'

export default function ClaudeRecipe(props){
    return(
                <section className="suggested-recipe-container" aria-live='polite' ref={props.ref}>
                    <ReactMarkdown>{props.recipe}</ReactMarkdown>
                </section>        
    )
}