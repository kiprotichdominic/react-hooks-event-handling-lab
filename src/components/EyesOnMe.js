
function EyesOnMe() {
    function buttonFocus(event) {
        console.log("Good!");
    }
    function buttonBlur(event) {
        console.log("Hey! Eyes on me!");
    }
    return (
        <div>
            <button onFocus={buttonFocus} onBlur={buttonBlur}>
                Eyes on me
            </button>
        </div>
    )
}

export default EyesOnMe