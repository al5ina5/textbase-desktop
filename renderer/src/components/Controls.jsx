export default function Controls(props) {
    return <>
        <div className="controls">
            <button onClick={() => props.setHidePreview(false)}>Preview</button>
        </div>
    </>
}