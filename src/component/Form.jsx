function Form ({close}){
    return <div className=" bg-black bg-opacity-55 h-screen w-full absolute top-0">

   
    <div className=" flex justify-center pt-2 px-7">
    
        <form className=" bg-white w-[400px] h-[400px] p-3 "> 
        <i onClick={close} class="fa-solid fa-x text-2xl"></i>
        <br />
        <input className=" w-[330px] h-[40px] my-4 border-black border-2 " type="text" placeholder=" Enter title" />
        <br/>
        <textarea className="  border-black border-2"  rows={8} cols={42} name="" id=""></textarea>
        <br/>
        <button className=" hover:bg-slate-400 bg-black text-white border-black border-2 w-[335px] px-6 my-5 py-2 text-xl rounded"> Save </button>
        </form>
    
    </div>
    </div>
}
export default Form