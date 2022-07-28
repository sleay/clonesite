
const elCount = document.querySelector('.count > p');
const elChange = document.querySelector('.change >div');
const elLi = document.querySelectorAll('.test > li');
const elSec = document.querySelector('section div')

history.scrollRestoration = "manual"

let num = 0;
let introscl = 0;
let sclnum = 0;

let scl = 0;
let scl1=0;
let scl2={a1:0,a2:0}; //about 변수


let scl3=0;
let scl4={a1:0,a2:0}; //about 변수

let scl5 = 0;           //mission 변수
let scl6 = {a1:0,a2:0};

let scl7 = 0;
let scl8 = {a1:0,a2:0}; //work 변수

let scl9 = 0;
let scl10 = {a1:0,a2:0} //shop 변수



setTimeout(function(){
    if($(window).scrollTop()==0){
        intro();
    }
    else{
        intro_none();
    }
},100);

function intro(){
    setTimeout(function(){
        $('body').css({overflow:"auto"})
        $('.loading').css({display:"none"});
        $('.scrolldownani').css({display:"block"});
    },4400);
    
    setInterval(function(){
        if(num<100){
            if(num<10){
                num++;
                if(num<=9){
                    elCount.textContent="00"+num;
                }
                else{
                    elCount.textContent="0"+num;
                }
                
            }
            else if(num>=10){
                num++;
                if(num<=99){
                    elCount.textContent="0"+num;
                }
                else{
                    elCount.textContent=num;
                    elCount.style='display:none;'
                    elChange.style='display:flex;'
                }
            }
        }
    },20,clearInterval());
};

function intro_none(){
    $('body').css({overflow:"auto"})
    elCount.style='display:none;';
    elChange.style='display:flex;';
    $('.num0').css({transform:"translateY(-100%)", animation:"none"});
    $('.num1').css({transform:"translateY(-100%)", animation:"none"});
    $('.num2').css({transform:"translateY(-100%)", animation:"none"});
    $('.loading').css({display:"none"});
    $('.scrolldownani').css({display:"block"});
};

function headerevent(){
    let Move= {
        y1:0,y2:0
    }
    function Move1(){
    
    Move.y1 = $(window).scrollTop();
    
    if(Move.y1 > Move.y2){
        // $('header').addClass('active')
        // setTimeout(function(){
        //     $('header').removeClass('active')
        // },3000)
         $('header').removeClass('active')
         if(Move.y1 >= 400){
            $('header').addClass('active')
            if(Move.y1 >= 1300){
                $('header').removeClass('active')
            }
        }
    }
    
    else{
        // $('header').removeClass('active')
         $('header').addClass('active')
         if(Move.y2<1400){
            $('header').removeClass('active')
         }
        setTimeout(function(){
            $('header').removeClass('active')
        },3000)
    }
    Move.y2 = Move.y1;
    }
    
    $(window).on('scroll',function(){
    Move1();
    
    })

    $('.menu').on('click',function(){
        $('body').css({overflow:"hidden"});
        $('header > nav').css({display:"block"});
        event.preventDefault();
    });
    $('.navclose').on('click',function(){
        $('body').css({overflow:"auto"})
        $('header > nav').css({display:"none"})
        event.preventDefault();
    });


    
    
};
function topnav(){
    $(window).on('scroll',function(){
            if( sclnum+$(window).height() > $('footer').offset().top){
                $('.topnav > span').css({display:"inline"})
            }
            else{
                $('.topnav > span').hide()
            }
        
    });
    
    $('.topnav').on('click',function(){
        $('html, body').animate({scrollTop:0},1000);
    
    });
    }


function aboutclick(){
    $('.circlebtn').on('click',function(){

    
        $('.warp').css({transform:"rotateY(180deg)"});
        $('.front').css({transform:"translateX(-100%) scale(1)"});
        $('.circlebtn').css({display:"none"});
        // $('.ba').css({transform:"translateX(0%)"});

});

$('.closebtn').on('click',function(){
        event.preventDefault();
        $('.warp').css({transform:"rotateY(0deg)"});
        $('.front').css({transform:"translateX(0%) scale(0.5) rotate(-15deg)"});
        $('.circlebtn').css({display:"flex"});
});
};

function introscroll(){
    $(window).on('scroll',function(){

        introscl = $(window).scrollTop()/2000;
        if(introscl>0){
            $('.dec').css({display:"none"})
            $('.introtext > p:nth-of-type(2)').css({display:"none"})
        }
        else{
            $('.dec').css({display:"block"})
            $('.introtext > p:nth-of-type(2)').css({display:"block"})

        }


        if(introscl <= 0.2){
            $('.frame > img').css({transform:`scale(${1+introscl}) translateY(${introscl*450}%)`});
            $('.count-warp').css({transform:`scale(${1+(introscl*5)})`});

            $('.door > img').css({transform:`scale(${1+(introscl*2)})`});


            // $('.count-warp').css({transform:`scale(${1+(introscl*5)}) translateY(${introscl*1000}%)`});
            // if(introscl == 0.2){
            //     $('.frame').css({position:"none"});
            // }
            // else{ 
            //     $('.frame').css({position:"relative"});
            // }
            
        }
        
        if(introscl >= 0.2){
            $('.box').css({display:'none'});
        }
        else{
            $('.box').css({display:'block'});
        }
       
        
        if(introscl <= 0.3){
            $('.introtext > p:nth-of-type(1)').css({transform:`translateY(${introscl*2500}%)`});
        }
        if(introscl >= 0.43){
            $('.count-warp').addClass('style')
        }
        else{
            $('.count-warp').removeClass('style')
        }
        if(introscl >= 0.55){
            $('.count-warp').css({color:'#fff',opacity:'0.3'})
            $('.count-warp > span').css({backgroundColor:'#fff'})
            
        }
        else if(introscl < 0.55&&introscl > 0.4){
            $('.count-warp').css({color:'#000',opacity:'0.07'})
            $('.count-warp > span').css({backgroundColor:'#000'})
        }
        else{
            $('.count-warp').css({color:'#000',opacity:'1'})
        }
        
        if(introscl > 0.6){
            $('.frame > img').css({transform:`scale(${1.2}) translateY(${90}%)`,transition:'none'});
            $('.count-warp').css({transform:`scale(${2})`,transition:'none'});
        }

        // console.log(
        //    introscl
        // )
        // console.log(sclnum)
        

    });
};


function aboutscroll(){
    $(window).on('scroll',function(){
        sclnum = $(window).scrollTop();

        
        let sc = 0.5, ro = -15, tl=0;

        let tl1=100;

        if( $('.about').offset().top - sclnum <=$(window).height()&&$(window).height()+$('.about').height()>=sclnum){
    
        // scl4.a1 = sclnum;
        // if(scl4.a1 > scl4.a2){
        //     if(scl3 <100){
        //         ++scl3;
        //     }
        // }
        // else{
        //     if(scl3>0){
        //         --scl3;
        //     }
            
        // }
        // scl4.a2=scl4.a1;

        

        let trns1= sclnum/100;
        // console.log(
        //     sclnum,
        //     )
        // $('.text > .sub').css({transform:`translateY(${tl1-(scl3/2)}%)`,transition:'0.2s'})
        // $('.text > h2').css({transform:`translateY(${tl1-(scl3/2)}%)`,transition:'0.2s'})
        // $('.text > h3').css({transform:`translateY(${tl1-(scl3/2)}%)`,transition:'0.2s'})
        // $('.text > p:nth-of-type(2)').css({transform:`translateY(${tl1-(scl3/2)}%)`,transition:'0.2s'})
        // $('.card').css({transform:`translateY(${tl1-(scl3/2)}%)`,transition:'0.2s'})

         $('.text > .sub').css({transform:`translateY(${tl1-(trns1*7)}%)`,transition:'0.2s'})
        $('.text > h2').css({transform:`translateY(${tl1-(trns1*7)}%)`,transition:'0.2s'})
        $('.text > h3').css({transform:`translateY(${tl1-(trns1*6)}%)`,transition:'0.2s'})
        $('.text > p:nth-of-type(2)').css({transform:`translateY(${tl1-(trns1*6)}%)`,transition:'0.2s'})
        $('.card').css({transform:`translateY(${tl1-(trns1*5.56)}%)`,transition:'0.2s'})

            if(sclnum >1200){
               

                scl2.a1 =$(window).scrollTop();

                if(scl2.a1 > scl2.a2){
                    ++scl1;
                }
                else{
                    --scl1;
                }
                scl2.a2 = scl2.a1;
                
                let sca = sclnum/20000;
                console.log(sca)

                // $('.front').css({ transform: `scale(${sc+(scl1/800)}) rotate(${ro+(scl1/8)}deg)`});
                $('.front').css({ transform: `scale(${sc+(sca)}) rotate(${ro+(scl1/8)}deg)`})
            
        }

        }
        

    });
   
   
}// 새로고침 시 값 못가져옴

function missionscroll(){
    $(window).on('scroll',function(){
        if( $('.mission').offset().top - sclnum <=$(window).height()&&$(window).height()+$('.mission').height()+$('.about').height()>=sclnum){
            
            let list1 = {tl:40,ro:-15},
                list2 = {tl:50,ro:17},
                list3 = {tl:130,ro:0};

            scl6.a1 = sclnum;
            
            if(scl6.a1 > scl6.a2){
                if(scl5<100){
                    ++scl5;
                };
            }
            else{
                if(scl5 > 0){
                    --scl5;
                };
            };
            scl6.a2=scl6.a1;

          
            
            //1900~2700

            let aa =(sclnum/1000)-0.9;
            console.log(aa);
            // $('.mission > h2').css({transform: `translateY(${50-(scl5/1.5)}%)`,transition:'0.3s'});
            // $('.mission > div').css({transform: `translateY(${50-(scl5/1.5)}%)`,transition:'0.3s'});

            $('.mission > h2').css({transform: `translateY(${100-(aa*58.9)}%)`,transition:'0.3s'});
            $('.mission > div').css({transform: `translateY(${100-(aa*58.9)}%)`,transition:'0.3s'})



            // $('.mission > ul').css({transform: `translateY(${0+(scl5/8)}%)`})

            // $('.list01').css({transform: `translateY(${list1.tl-(scl5/2)}%) rotate(${list1.ro+(scl5/8)}deg)`,transition:'0.3s'})
            // $('.list02').css({transform: `translateY(${list2.tl-(scl5/1.1)}%) rotate(${list2.ro+(scl5/5)}deg)`,transition:'0.3s'})
            // $('.list03').css({transform: `translateY(${list3.tl-(scl5*2.5)}%) rotate(${list3.ro+(scl5/5)}deg)`,transition:'0.3s'})

            if(sclnum > 2200){
                $('.list01').css({transform: `translateY(${list1.tl-((aa*23.53))}%) rotate(${list1.ro+(scl5/8)}deg)`,transition:'0.3s'})
                $('.list02').css({transform: `translateY(${list2.tl-((aa*29.5)*1.5)}%) rotate(${list2.ro+(scl5/5)}deg)`,transition:'0.3s'})
                $('.list03').css({transform: `translateY(${list3.tl-((aa*76.48)*1.7)}%) rotate(${list3.ro+(scl5/5)}deg)`,transition:'0.3s'})
            }
            else{
                $('.list01').css({transform: `translateY(${list1.tl}%) rotate(${list1.ro+(scl5/8)}deg)`,transition:'0.3s'})
                $('.list02').css({transform: `translateY(${list2.tl}%) rotate(${list2.ro+(scl5/5)}deg)`,transition:'0.3s'})
                $('.list03').css({transform: `translateY(${list3.tl}%) rotate(${list3.ro+(scl5/5)}deg)`,transition:'0.3s'})  
            }

            // transform: translateY(40%) rotate(-15deg);
            // transform: translateY(50%) rotate(17deg);
            // transform: translateY(130%) rotate(0deg);

        } 
        
        
        
            // $('.mission > ul').css({transform: `translateY(${0+(scl5/8)}%)`})
            // $('.list01').css({transform: `translateY(${list1.tl-(scl5/1.5)}%) rotate(${list1.ro+(scl5/8)}deg)`})
            // $('.list02').css({transform: `translateY(${list2.tl-(scl5/1)}%) rotate(${list2.ro+(scl5/5)}deg)`})
            // $('.list03').css({transform: `translateY(${list3.tl-(scl5*2.5)}%) rotate(${list3.ro+(scl5/5)}deg)`})
        
    });

      
}// 새로고침 시 값 못가져옴

function workscroll(){
    $(window).on('scroll',function(){

        if( $('.work').offset().top - sclnum <=$(window).height()&&$(window).height()+$('.mission').height()+$('.about').height()+$('.work').height()>=sclnum){
            
            let ro=50;
            scl8.a1 = $(window).scrollTop();
            if(scl8.a1 > scl8.a2){
                if(scl7 <100){
                    ++scl7;
                }
            }
            else{
                if(scl7 > 0){
                    --scl7;
                }
            }
            scl8.a2=scl8.a1;
            let aa= sclnum-3200;
            //0~1200
            let bb=aa/10

            console.log(sclnum,aa)

            
            // if(sclnum > $('.work').offset().top-$(window).height()&&sclnum<$('.spoonz').offset().top-$(window).height()){
            // $('.doguri > h2').css({transform:`translateY(${ro-(scl7)}%)`,transition:'0.3s'});
            // $('.doguri > div').css({transform:`translateY(${ro-(scl7)}%)`,transition:'0.3s'});
            // $('.doguri > p').css({transform:`translateY(${ro-(scl7)}%)`,transition:'0.3s'});
            // $('.doguri > img').css({transform:`translateY(${ro-(scl7)}%)`,transition:'0.3s'});
            // }

            if(sclnum > $('.work').offset().top-$(window).height()&&sclnum<$('.spoonz').offset().top-$(window).height()){
                $('.doguri > h2').css({transform:`translateY(${ro-(bb)}%)`,transition:'0.3s'});
                $('.doguri > div').css({transform:`translateY(${ro-(bb)}%)`,transition:'0.3s'});
                $('.doguri > p').css({transform:`translateY(${ro-(bb)}%)`,transition:'0.3s'});
                $('.doguri > img').css({transform:`translateY(${ro-(bb)}%)`,transition:'0.3s'});
                }
            

            // if(sclnum > $('.doguri').offset().top-$(window).height()&&sclnum<$('.amenity').offset().top-$(window).height()){
            // $('.spoonz > div').css({transform:`translateY(${ro-(scl7/2)}%)`,transition:'0.3s'});
            // $('.spoonz > p').css({transform:`translateY(${ro-(scl7/2)}%)`,transition:'0.3s'});
            // $('.spoonz > img').css({transform:`translateY(${ro-(scl7/2)}%)`,transition:'0.3s'});
            // }
            if(sclnum > $('.doguri').offset().top-$(window).height()&&sclnum<$('.amenity').offset().top-$(window).height()){
                $('.spoonz > div').css({transform:`translateY(${ro-(bb/2.4)}%)`,transition:'0.3s'});
                $('.spoonz > p').css({transform:`translateY(${ro-(bb/2.4)}%)`,transition:'0.3s'});
                $('.spoonz > img').css({transform:`translateY(${ro-(bb/2.4)}%)`,transition:'0.3s'});
                }
            
            console.log(sclnum)

            
        
        }
    });
}

function shopscroll(){
    $(window).on('scroll',function(){

        if(sclnum+$(window).height() > $('.shop').offset().top){


            let ro=100;
            scl10.a1 = $(window).scrollTop();
            if(scl10.a1 > scl10.a2){
                if(scl9 <100){
                    ++scl9;
                    ch = scl9*2
                }
            }
            else{
                if(scl9 > 0){
                    --scl9*2;
                }
            }
            scl10.a2=scl10.a1;

            

            let aa=(sclnum+$(window).height())-5600;
            //5600~6350
            

            let bb= aa/7.59;

            console.log(bb)



        
            // $('.shop > div').css({transform:`translateY(${ro-(ch/1.5)}%)`,transition:'0.3s'});
            // $('.shop > p').css({transform:`translateY(${ro-(ch/1.5)}%)`,transition:'0.3s'});
            // $('.shop > img').css({transform:`translateY(${ro-(ch/1.5)}%)`,transition:'0.3s'});

            $('.shop > div').css({transform:`translateY(${ro-(bb)}%)`,transition:'0.3s'});
            $('.shop > p').css({transform:`translateY(${ro-(bb)}%)`,transition:'0.3s'});
            $('.shop > img').css({transform:`translateY(${ro-(bb)}%)`,transition:'0.3s'});

        }
        

        

    });
}



introscroll();
headerevent();
aboutclick();
aboutscroll();
missionscroll()
workscroll();
topnav();
shopscroll();


