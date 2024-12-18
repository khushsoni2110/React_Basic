function Eventde() {
    const demo = (e) => {
        var no = e.target.txt1.value;
        if (no % 2 == 0) {
            alert("Even")
        } else {
            alert("Odd")
        }
        e.preventDefault();
    }
    return (
        <>
            <form onSubmit={demo} name="frm">
                No 1: <input type="text" name="txt1" />
                <input type="submit" />
            </form>
        </>
    )
}
export default Eventde