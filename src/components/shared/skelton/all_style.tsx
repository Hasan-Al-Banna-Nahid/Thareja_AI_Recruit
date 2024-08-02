/* =============
            ================== FONT SIZING  ===========
                                                  ==================
 ========= 12px letter spacing 0.24px 
              className="text-[12px] tracking-[0.24px] leading_normal"
                         text-[12px] tracking-[0.24px] leading_normal

 ========= 16px line height: normal 
              className="text-[14px] md:text-[16px]  leading_normal"
                         text-[14px] md:text-[16px]  leading_normal

 ========= 14px line height: normal 
              className="text-[12px] md:text-[14px]  leading_normal"
                         text-[12px] md:text-[14px]  leading_normal

=======  18PX; line-height 25px ==============
              className="text-base md:text-[18px] leading-[25px]"
                         text-base md:text-[18px] leading-[25px]
                      

========= 20px line-height 0.4px =============
              className="text-[18px] md:text-[20px] leading-normal tracking-[0.4px]"
                        text-[18px] md:text-[20px] leading-normal tracking-[0.4px]


========= 22PX  line-heigh : 40px
               className="text-[18px] md:text-[20px] lg:text-[22px] leading-[30px] md:leading-[35px] lg:leading-[40px]"
               text-[18px] md:text-[20px] lg:text-[22px] leading-[30px] md:leading-[35px] lg:leading-[40px]

========= 22PX  line-heigh : 25px
                className="text-[18px] md:text-[20px] lg:text-[22px] leading-[25px] "
                          text-[18px] md:text-[20px] lg:text-[22px] leading-[25px]


=======  27px  line-heigh : normal h3 HEADING    
                className="text-[22px] md:text-[25px] lg:text-[27px] leading_normal"
                           text-[22px] md:text-[25px] lg:text-[27px] leading_normal


=======  27px  line-heigh : 40px h3 HEADING    
                className="text-[22px] md:text-[25px] lg:text-[27px] leading-[35px] md:leading-[40px]"
                           text-[22px] md:text-[25px] lg:text-[27px] leading-[35px] md:leading-[40px]


=======  34px  line-heigh : normal h2 HEADING    
                className="text-[28px] md:text-[30px] lg:text-[34px] leading_normal tracking-[-1.02px]"
                           text-[28px] md:text-[30px] lg:text-[34px] leading_normal tracking-[-1.02px]

                           
=======  40px  line-heigh : -1.2PX  h2 HEADING    
                className="text-[32px] md:text-[text-36px] lg:text-[40px] leading_normal tracking-[-1.2px] "
                           text-[32px] md:text-[text-36px] lg:text-[40px] leading_normal tracking-[-1.2px] 


=======  60px  line-heigh:normal letter speaching : -1.8PX  h1 HEADING    
                className="text-[30px] lg:text-[60px] tracking-[-1.8px] text-[#30353E]"
                           text-[30px] lg:text-[60px] tracking-[-1.8px] text-[#30353E]


=======  72px  line-heigh : -2.16PX  h1 HEADING    
                className="text-[40px] md:text-[50px] lg:text-[60px] xl:text-[65px] 2xl:text-[72px] tracking-[-2.16px] text-[#30353E]"
                           text-[40px] md:text-[50px] lg:text-[60px] xl:text-[65px] 2xl:text-[72px] tracking-[-2.16px] text-[#30353E]





=============
        ================== FLEX BOX STYLES  ===========
                                                    ==================

          className="flex items-center gap-[]"
          className="flex items-center justify-between gap-[]"




=============
        ================== REDUCERS TO GET REDUX  ===========
                                                      ==================

 import { useDispatch, useSelector } from "react-redux";
 import { RootState } from "@/redux/store";

 const active = useSelector((state:RootState)=>state.inviteFreelancersActiveStages.activeTabBtn)

  const active = useSelector((state:RootState)=>state.modyfier.EXPAND)
  const key = "OPEN_FREELANCER_PROFILE_MODAL";


  const dispatch = useDispatch();


 =============
        ================== SEPARATOR  ===========
                                                      ==================

<span className="w-full h-[1px] block my-6 md:my-7 lg:my-[30px] bg-[#0059ff33]"></span>




 =============
        ================== BUTTONS  ===========
                                          ==================

SKILL BUTTON
className="text-[18px] md:text-[20px] leading-[25px] py-1.5 px-5 rounded-[100px] border border-[#005AFF] text-[#005AFF]"
   
GRADIENT BUTTON
<button className="p-2.5 rounded-full bg-gradient-to-r to-[#FAFCFF] from-[#E1E5FF] "></button> 

py-12px and px-28px button
 className="py-2.5 md:py-3 px:5 md:px-7 rounded-[100px] border border-[#005AFF] bg-[#005aff05]"


py-16px and px-40px button
 className="py-2.5 md:py-3 px-5 md:px-8 lg:py-[16px] lg:px-[40px] rounded-[100px] border bg-[#005AFF]"



  =============
        ================== PADDING ===========
                                          ==================

50PX
className='py-6 md:py-[35px] lg:py-[50px]'

30PX
className="p-5 md:p-6 lg:p-[30px]"




 =============
          ================== Icon component ===========
                                                    ==================

export const      =({className}:{className?:string})=>{
    return
}

=============
        ================== COMPONENT PROPS TYPE  ===========
                                                       ==================
                                                                                                                     
            type PropsType = {
                className?: string;
              };                                            
                                                                  

===============
      ======================= COLORS ================
                                               ======================

background: #005aff0a ;   rgba(0, 90, 255, 0.04) 
background: #005aff1a; /* rgba(0, 90, 255, 0.10)





================
            ===========   New component ============
                                               =============
// ========== root component =========

type PropsType = {
    className?: string;
  };  
const  = () => {
  return <div className="flex">

  </div>;
};



//  ========   icon componennt ==============
export  const PayPalSVG = ({className}:{className?:string}) => {
className={className}
    return (
        <div>
            
        </div>
    );
};

================
            ===========  MARGIN MARGIN MARGIN  ============
                                               =============

=======  48PX
className="m-6 md:m-8 lg:m-10 xl:m-11 2xl:m-12"
=======  60PX
className="m-6 md:m-8 lg:m-10 xl:m-11 2xl:m-15"

*/

/* ============== Flex style =========

                  .w-full.flex.items-center.justify-between

*/
