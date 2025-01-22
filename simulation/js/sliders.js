const sliders = {
    // slider_R_value: Number(document.querySelector(".slider_R").value),
    // slider_D_value: Number(document.querySelector(".slider_D").value),
    slider_V_value: 0,
    // d: document.querySelector(".d .slider_D"),
    v: document.querySelector(".v .value-box input"),
    r: document.querySelector(".r .slider_R"),
    v_knob: document.querySelector(".slider-V-arrow"),
    // sliderR(){
    //     let slider_R = document.querySelector(".slider_R")
    //     let sliderImg = document.querySelector(".slider-R-arrow")
    //     let sliderValueInput = document.querySelector(".r .value-box input")
    //     // ratio to move 450/50 = 1:10
    //     // max img 71px -> min 120 px
    //     let val = 0
        
    //     // slider function  
    //     function slide(e){
    //         e = e instanceof Event
    //         if(e){
    //             sliderValueInput.value = slider_R.value 
    //         }
    //         else{
    //             slider_R.value = sliderValueInput.value
    //         }
    //         val = (slider_R.value / 9.334)
    //         sliderImg.style.top = `${90 - val}px`
    //     }
    
    //     const slideInput = ()=>{
    //         let val = sliderValueInput.value
    //         if(val > 500){
    //             val = 500
    //         }
    //         sliderValueInput.value = val
    //         slide(false)
    //     }
    
    //     slider_R.oninput = slide
    //     sliderValueInput.onkeyup = slideInput
    //     sliderValueInput.addEventListener("focusout",()=>{
    //         if(sliderValueInput.value < 50){
    //             sliderValueInput.value = 50
    //         }
    //         slide(false)
    //     })
    // },
    // sliderD(){
    //     let slider_D = document.querySelector(".slider_D")
    //     let sliderImg = document.querySelector(".slider-D-arrow")
    //     let sliderValueInput = document.querySelector(".d .value-box input")
    //     let val = 0
        
    //     // slider function  
    //     function slide(e){
    //         e = e instanceof Event
    //         if(e){
    //             sliderValueInput.value = slider_D.value 
    //         }
    //         else{
    //             slider_D.value = sliderValueInput.value
    //         }
    //         val = ((slider_D.value * 95) / 109) - 7
    //         sliderImg.style.left = `${114 + val}px`

    //         // ! update the text accroding to value
    //         if(Scenes.currentStep == 5 || Scenes.currentStep == 7){
    //             let betaTempText = Scenes.items.tempTitle41
    //             let first = 183.6
    //             let second = 194.1
    //             let load_1 = 100
    //             let betaDeg = (values.R == load_1 ? first : second)
    //             if(slider_D.value <= 15){
    //                 betaDeg = 180
    //             }
    //             betaTempText.setContent(betaDeg)
    //         }
    //         // ! update slider details according to wave form
    //         if(Scenes.currentStep == 4){
    //             if(slider_D.value==30){
    //                 sliderImg.style.left = "114px"
    //             }
    //             if(slider_D.value==90){
    //                 sliderImg.style.left = "185.44px"
    //             }
    //             if(slider_D.value==150){
    //                 sliderImg.style.left = "258px"
    //             }
    //         }
    //     }
    
    //     const slideInput = ()=>{
    //         let val = sliderValueInput.value
    //         if(val > 180){
    //             val = 180
    //         }
    //         sliderValueInput.value = val
    //         slide(false)
    //     }
    
    //     slider_D.oninput = slide
    //     sliderValueInput.onkeyup = slideInput
    //     sliderValueInput.addEventListener("focusout",()=>{
    //         if(sliderValueInput.value < 0 || sliderValueInput.value.length == 0){
    //             sliderValueInput.value = 0
    //         }
    //         slide(false)
    //     })
    // },
    sliderV(afterClickCallback=null){
        let sliderArrow = document.querySelector(".slider-V-arrow")
        let sliderValueInput = document.querySelector(".v .value-box input")
        let minAngle = 75
        let maxAngle = 332
        let angleDifference = 7.5
        let angles = minAngle
        let minValue = 50
        let maxValue = 220
        let valueDifference = 1
        let value = minValue
        let singleClickDiff = 5
        let doubleClickDiff = 20

        function incrementAngleAndValue(isDoubleClick = false){
            if(isDoubleClick){
                angles = angles + angleDifference + (20 * 1.5)
                if(angles > maxAngle){
                    angles = minAngle
                }

                value = value + doubleClickDiff
                if(value > maxValue){
                    value = minValue
                }
            }else{
                angles = angles + angleDifference 
                if(angles > maxAngle){
                    angles = minAngle
                }

                value = value + singleClickDiff
                if(value > maxValue){
                    value = minValue
                }
            }

        }
        
        // slider function on single click 
        let rotateArrowSingleClick = (rot=0)=>{
            incrementAngleAndValue()
            sliderArrow.style.transform=`rotate(${angles}deg)`
            console.log(value)
            sliderValueInput.value = value
        }


        // * for input value
        const slideInput = ()=>{
            let val = Number(sliderValueInput.value)
            if(val > maxValue){
                val = maxValue
            }
            if(val >= 50){
                angles = val * 1.5
                sliderArrow.style.transform=`rotate(${angles}deg)`
                sliderValueInput.value = val
                value = val
                console.log("val:",val)
            }
        }

        sliderValueInput.onkeyup = slideInput
        sliderValueInput.addEventListener("focusout",()=>{
            if(sliderValueInput.value < minValue){
                sliderValueInput.value = minValue
            }
            slideInput()
        })
        
        sliderArrow.onclick = ()=>{
            rotateArrowSingleClick()
            // ! call back for arrow etc
            if(afterClickCallback)
                afterClickCallback()
        }
        // // $(sliderArrow).dblclick(rotateArrowDoubleClick)
        // let mouseDownInterval = null
        // $(sliderArrow).on({
        //     mouseenter: function () {
        //         mouseDownInterval = setInterval(() => {
        //             rotateArrowSingleClick()
        //         }, 30);
        //     },
        //     mouseout: function () {
        //         if(afterClickCallback)
        //             afterClickCallback()
        //         clearInterval(mouseDownInterval)
        //     },
        //     // mouseout: function(){
        //     //     clearInterval(mouseDownInterval)
        //     // }
        // });
    },
    init(){
        this.sliderV()
        // this.sliderR()
        // this.sliderD()
    },
    resetSlidersValue(){
        // document.querySelector(".slider-D-arrow").style.left = "114px"
        // sliders.d.min = "0"
        // sliders.d.max = "180"
        // sliders.d.step = "1"
        // sliders.d.value = 1 
        // document.querySelector(".d .value-box input").value = sliders.d.value
        // document.querySelector(".d .value-box input").readOnly = false

        // sliders.r.value = sliders.r.min
        // document.querySelector(".r .value-box input").value = sliders.r.value

        document.querySelector(".slider-V-arrow").style.transform=`rotate(${75}deg)`
        document.querySelector(".v .value-box input").value = 50
    },
    showAllSliders(){
        let sliders = document.querySelectorAll(".slider .slider-box")
        sliders.forEach((ele)=>{
            ele.style.display = "block"
        })
        document.querySelector(".slider-circuit").style.display = "block"
    },
    showAll(){
        let sliderBox = document.querySelector(".universal-slider")
        sliderBox.style.display = "block"
    },
    showSlider(sliderName=""){
        if(sliderName != 'v'){
            return
        }
        this.showAll()
        document.querySelector(".slider-circuit").style.display = "none"
        let sliders = document.querySelectorAll(".slider .slider-box")
        sliders.forEach((ele)=>{
            ele.style.display = "none"
        })
        document.querySelector(`.slider .${sliderName}`).style.display = "block"
    },
    hideSlider(sliderName=""){
        if(sliderName != 'v'){
            return
        }
        this.showAll()
        // document.querySelector(".slider-circuit").style.display = "none"
        let sliders = document.querySelectorAll(".slider .slider-box")
        sliders.forEach((ele)=>{
            ele.style.display = "block"
        })
        document.querySelector(`.slider .${sliderName}`).style.display = "none"
    },
    showSliderFor(tableNumber){
        let imgSrc_1 = "./src/images/sliders/slider_circuit.png"
        let imgSrc_2 = "./src/images/sliders/slider_circuit_2.png"
        if(tableNumber == 1){
            $(".slider-circuit").attr('src',imgSrc_1)
        }else{
            $(".slider-circuit").attr('src',imgSrc_2)
        }
    }
}

sliders.init()



/*
use it like showSlider(sliderName)
like: d, v, r -> only those sliders are visible

and for all visible call
sliders.showAll()
*/