import { useState, useEffect } from 'react'
import { ControlledEditor } from '@monaco-editor/react';

import Controls from '../components/Controls'
import Preview from '../components/Preview'
import { AnimatePresence } from 'framer-motion';

export default function Home() {
    var [text, setText] = useState('')
    var [hidePreview, setHidePreview] = useState(true)

    return <>
        <div className="app">
            <Controls hidePreview={hidePreview} setHidePreview={setHidePreview} />

            <div className="body">
                <AnimatePresence>
                    {!hidePreview && <Preview text={text} hidePreview={hidePreview} setHidePreview={setHidePreview}  />}
                </AnimatePresence>
                <ControlledEditor
                    className="pad"
                    height="100%"
                    width="100%"
                    language="markdown"
                    onChange={(e, value) => {
                        setText(value)
                    }}
                />
            </div>
        </div>
    </>
}