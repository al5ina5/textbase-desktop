import { useState, useEffect } from 'react'
import {ControlledEditor} from '@monaco-editor/react';

import Controls from '../components/Controls'

export default function Home() {
    return <>
        <div className="app">
            <Controls />
            <ControlledEditor
                className="pad"
                height="100%"
                width="100%"
                language="markdown"
                onChange={(e, value) => {
                    console.log(value)
                }}
            />
        </div>
    </>
}