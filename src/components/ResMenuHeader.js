import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ResMenuDescription from './ResMenuDescription';



const ResMenuHeader = ({data,resName,city,imageId,resId}) =>{

   // console.log(data);
    const len=data?.itemCards?.length;
    const [showaccordian,setShowaccordian]=useState(true);
    

    const accordian= () =>{

        setShowaccordian(!showaccordian);

    }

      

    return (

        

    <>

    
        <div>

            <div className='flex pb-5 justify-between cursor-pointer'  onClick={accordian}>
                <div className='text-xl md:text-2xl text-[#3e4152] font-bold'>{data.title} ({data?.itemCards?.length})</div>
                <div><ExpandMoreIcon/></div>
            </div>

           

            {
                data?.itemCards?.map((it,index) => {
                    
                   //console.log(data);
                

                    return (

                        <>
                           {showaccordian &&
                           
                           <> 
                           
                           <ResMenuDescription key={it?.card?.info?.id} data={it} resName={resName} locality={city} resimageId={imageId} resId={resId} /> 
                           
                           {index<len-1 &&  <div className="border-solid border-b-[1.5px] mt-10 mb-4 h-2 border-[#d3d3d3] "></div>}
                           
                            </>
                            

                        }
                        </>
                    );
                })
            }

          
            
           

        </div>
        <div>

        </div>

    </>
       
    )


};

export default ResMenuHeader;