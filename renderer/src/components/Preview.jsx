import { useState, useEffect } from "react"
import {motion} from 'framer-motion'
const { Showdown } = global

export default function Preview(props) {
    var [html, setHtml] = useState()

    useEffect(() => {
        var converter = new Showdown.Converter()
        html = converter.makeHtml(props.text)
        setHtml(html)
    }, [props.text])

    return <>
        <motion.div
            className="preview"
            animate={{ y: ['100%', '0%'], opacity: [0, 1] }}
            exit={{ y: ['0%', '100%'], opacity: [1, 0] }}
            transition={{duration: 0.3}}
        >
            <div className="close" onClick={()=> props.setHidePreview(true)}>X</div>
        
            <div className="container padded" dangerouslySetInnerHTML={{__html: html}} />
        </motion.div>
    </>
}