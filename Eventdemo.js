function Eventdemo() {
    const demo = (e) => {
        console.log(e.type) 
        console.warn(e.target.name)
         console.error(e.target.value)
    }
    return(<>
    <h1>Event Demo</h1> 
    <input type="text" name="txt2" onChange={demo}/>
     <input type="text" name="txt1" Change={demo}/> 
     <input type="button" name="btn1" onClick={demo} value="ClickMe" />
      <input type="button" name="btn2" onClick={demo} value="ClickMe2" /> 
      </>)
}
export default Eventdemo;