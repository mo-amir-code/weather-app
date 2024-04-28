

const Empty = ({msg}:{msg:string}) => {
  return (
    <div className="w-full h-full flex items-center justify-center" >
        <p className='text-2xl text-white font-semibold' >{msg}</p>
    </div>
  )
}

export default Empty
