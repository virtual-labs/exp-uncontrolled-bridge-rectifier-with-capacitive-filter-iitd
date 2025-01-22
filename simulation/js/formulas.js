const pie = 3.1428
const Formulas = {  
    
    one_minus_D(D){
        return 1 - D
    },
    r_load : {
        vm(values){
            let ans  = values.vIn * Math.sqrt(2)
            return Number(ans).toFixed(4)
        },
        v0(values){
            let ans = 0.6366 * this.vm(values)
            return Number(ans).toFixed(4)
        },
        i0(values){
            let ans = (0.6366 * this.vm(values))/ values.R
            return Number(ans).toFixed(4)
        },
        idc(values){
            let ans = (0.6366 * this.vm(values))/ values.R
            return Number(ans).toFixed(4)
        },
        vrms(values){
            // let ans = 0.707 * this.vm(values)

            let ans = values.vIn
            return Number(ans).toFixed(4)
        },
        vs(values){
            let ans = 0.707 * this.vm(values)
            return Number(ans).toFixed(4)
        },
        vdc(values){
            let ans = 0.6366 * this.vm(values)
            return Number(ans).toFixed(4)
        },
        vac(values){
            let root = (Math.pow(this.vrms(values), 2) - Math.pow(this.vdc(values), 2)) 
            let ans = Math.sqrt(root)
            return Number(ans).toFixed(4)
        },
        rf(values){
            let ans = (this.vac(values) / this.vdc(values))
            console.log("rf:",ans)
            return Number(ans).toFixed(4)
        },
        is(values){
            let ans = (0.5 * this.vm(values))/ values.R
            return Number(ans).toFixed(4)
        },
        pdc(values){
            let ans = this.vdc(values) * this.idc(values)
            console.log("vdc:",this.vdc(values))
            console.log("idc:",this.idc(values))
            return Number(ans).toFixed(4)
        },
        irms(values){
            let ans = this.vrms(values)/values.R
            return Number(ans).toFixed(4)
        },
        pac(values){
            let ans = this.vrms(values) * this.irms(values)
            return Number(ans).toFixed(4)
        },
        eff(values){
            let ans = this.pdc(values) / this.pac(values)
            return Number(ans).toFixed(4)
        },
        tuf(values){
            let lower = (Math.sqrt(2) * this.vs(values) * this.is(values))
            let ans = this.pdc(values) / lower
            return Number(ans).toFixed(4)
        },
        pf(values){
            let lower = (Math.sqrt(2) * this.vs(values) * this.is(values))
            let ans = this.pac(values) / lower
            return Number(ans).toFixed(4)
        },
        p0(values){
            let ans = this.pdc(values) 
            return Number(ans).toFixed(4)
        },    

    },
    r_l_load : {
        vm(values){
            let ans  = values.vIn * Math.sqrt(2)
            return Number(ans).toFixed(4)
        },
        cf(values){
            let micro = Math.pow(10,-6)
            let ans = micro * values.L
            console.log("L:",values.L)
            return Number(ans).toFixed(4)
        },
        vof(values){
            const f=50
            let ans  = (this.vm(values)/2) * (2 - (1/(2*f*values.R*this.cf(values))))

            return Number(ans).toFixed(4)
        },
        iof(values){
            let ans = this.vof(values) / values.R
            return Number(ans).toFixed(4)
        },
        vrpp(values){
            let ans = values.vIn * Math.sqrt(2)
            return Number(ans).toFixed(4)
        },
        vrppf(values){
            let f = 50
            let ans = this.vm(values) / (2 * f * values.R * this.cf(values) )
            return Number(ans).toFixed(4)
        },
        pof(values){
            let ans = this.vof(values) * this.iof(values)
            return Number(ans).toFixed(4)
        },
        

    },

}
//* D is firing angle , vIn is vs, R is r
// L is the inductance
let values = {
    vIn:0,
    D:0,
    R:0,
    L:0,
}


//L  is 
function updateValues(vIn=0,D=0,R=0,L=0){
    values = {
        vIn:vIn,
        // convert alpha to radion
        D:D,
        R:R,
        L:L,
    }
}