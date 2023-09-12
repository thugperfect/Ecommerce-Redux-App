import React from 'react'
import { AiFillStar,AiOutlineStar } from "react-icons/ai";
import { BiSolidStarHalf } from "react-icons/bi";
const ReviewStar = ({star}) => {
    const star_1 = <>
    <AiFillStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/>
    </>
    const star_15 = <>
    <AiFillStar/><BiSolidStarHalf/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/>
    </>
    const star_2 = <>
    <AiFillStar/><AiFillStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/>
    </> 
    const star_25 = <>
        <AiFillStar/><AiFillStar/><BiSolidStarHalf/><AiOutlineStar/><AiOutlineStar/>
    </>
    const star_3 = <>
    <AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/><AiOutlineStar/>
    </> 
     const star_35 = <>
      <AiFillStar/><AiFillStar/><AiFillStar/><BiSolidStarHalf/><AiOutlineStar/>
     </> 
    const star_4 = <>
        <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/>
    </>
     const star_45 = <>
     <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><BiSolidStarHalf/>
 </>
    const star_5 =<>
        <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
    </>
   

   const setStar =(star) =>{
    if(star===5 || star>4.7){
        return star_5
    }
    else if(star >4.2 && star<=4.7){
        return star_45
    }
    else if(star >3.7 && star<=4.2){
        return star_4
    }
    else if(star >3.2 && star<=3.7){
        return star_35
    }
    else if(star>2.7 && star<=3.2){
        return star_3
    }
     else if(star>2.2 && star<=2.7){
        return star_25
    }
    else if(star>1.7 && star<=2.2){
        return star_2
    }
    else if(star>1.2 && star<=1.7){
        return star_15
    }
    else if(star>0.7 && star<=1.2){
        return star_1
    }

   }
  return (
    <div className='flex'>
        {setStar(star)}
    </div>
  )
}

export default ReviewStar
