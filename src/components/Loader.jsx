import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css'
import { useOutletContext } from "react-router-dom";




export default function showSkeleton (){ 

const [theme] = useOutletContext();
console.log(theme)

    return (
      <>
        {Array(16)
          .fill()
          .map((item, index) => {
            return (

                <div 
                key={index} 
                className="col-md-6 col-lg-4 col-xl-3 mb-4 ">

                <SkeletonTheme
                baseColor={theme === "Light" ? "#2B3945" : "#C4CBE2" } 
                highlightColor={theme === "Light" ? "#3E5064 " : "#E8EAF1"} >
                
                <Skeleton width="100" height={220}  />
                <Skeleton width={120} count={1} />
                  
                  

                </SkeletonTheme>
                  
                        
                </div>
                
            )
          })}
      </>
    )
  }