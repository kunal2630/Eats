import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const ResMenuDescription= (props) =>{
    
    // console.log(props);
    const {isVeg,price,defaultPrice,name,imageId,description}=props.data?.card?.info;

    return (

        <>

        <div className="flex justify-between">


            <div className='pt-2 w-5/6'>
                
                { {isVeg} ? (

                    <div className='border-2 border-solid border-green-600 w-4 flex items-center justify-center p-0.5'>
                        <div className='h-2 w-2 bg-green-600 rounded-full'></div>
                    </div>
                    ) : (

                    <div className='border-2 border-solid border-red-600 w-4 flex items-center justify-center p-0.5'>
                    <div className='h-2 w-2 bg-red-600 rounded-full'></div>
                    </div>
                     )
                }


                <div className='pt-2 text-l text-[#3e4152] font-bold'>{name.toUpperCase()}</div>
                <div className='pt-2 text-l text-[#3e4152] font-semibold'>
                    
                  {  price ?  `₹ ${price/100}`:`₹ ${defaultPrice/100}`}
                    
                </div>
                <div className='flex mt-4 '><div className=' text-[#7e808c] font-normal'>{description}</div></div>

            </div>
            <div className='flex '>

                
                
                {imageId?( <> 
                
                    <div className='m-auto relative'>

                        <img className='w-28 h-24 rounded-lg object-cover' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+imageId} alt="" />

                        <button className=' border-2 border-solid absolute top-3/4 left-3 bg-white font-bold text-[#F28C28] rounded-md w-3/4 h-10 pt-1.5 pb-1' >ADD+</button>

                    </div>
                   
                    </>
                    ) :
                    
                    ( <div className='m-auto'></div>)}

                

               
                
                
            </div>

           

           
        </div>

       
        

        
        
        </>
    );
}

export default ResMenuDescription;