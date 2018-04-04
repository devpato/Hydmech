import { Injectable } from '@angular/core';

@Injectable()
export class VariablesService {
    
    //Variables
    toothNumber: number;
    pitch: number;
    gulletCapacity: number;
    chipLoad: number;
    chipDensity: number;
    cutTime: number;
    bladeSpeed: number;
    rpm: number;
    brt: number;
    piecesPerbar: number;
    totalBarsNeed: number;
    fillRatio: number;
    timeToLoadBar: number;
    toothLoad: number;
    netCycleTime: number;
    partOver1000mm: boolean;
    cutTimePerBar:number;
    totalTime: number;
    cycleTime: number;
    uptimeEfficiency: number;
    pcsHour: number;
    machine: any;

    //Variables from input Fields
    materialDiameter: number;
    diameter: number;
    cutLength: number;
    masterBarLength:number;
    materialGrade: string;
    uptime:number;
    toolsValue: number;

    //Standard to metric
    mm: number;

    //Constants
    trim: number;
    remnantLength: number;
    totalPieces: number;

    //Getters and Setter for CALCULATIONS

    //Tooth Number
    setToothNumber() {
        console.log("ToothNumber");
    }

    getToothNumber() {
        return this.toothNumber;
    }
    //Pitch
    setPitch(toothNumber,maxMaterialValue) {
        this.pitch = (this.getBlade(maxMaterialValue)*3.14)/toothNumber;
    }

    getPitch() {
        return Number(this.pitch.toFixed(8));
    }

    //Gullet Capacity
    setGulletCapacity() {
        this.gulletCapacity = 0.25*3.14*(this.pitch)/2*(this.pitch/2);
    }

    getGulletCapacity() {
        return Number(this.gulletCapacity.toFixed(8));
    }

    //ChipLoad
    setChipLoad() {

    }

    getChipLoad() {
        return this.chipLoad;
    }

    //ChipDensity
    setChipDensity(toothLoad) {
        this.chipDensity = toothLoad* this.getMaterialDiameter();
    }

    getChipDensity() {
        return this.chipDensity;
    }

    //CutTime
    setCutTime(toothNumber, toothLoad) {
        console.log("cut time");
        console.log(this.getDiameter());
        console.log(toothNumber);
        console.log(toothLoad);
        console.log(Math.ceil(this.getRPM()));
        console.log("Mat dia");
        console.log(this.getMaterialDiameter());
        this.cutTime = Number((Number((this.getDiameter())*60)/(toothNumber*toothLoad*Math.ceil(this.getRPM()))).toFixed(2));
    }

    getCutTime() {
        return Number(this.cutTime.toFixed(2));
    }

    //BladeSpeed
    setBladeSpeed(bladeSpeed){
        this.bladeSpeed = bladeSpeed;
    }

    getBladeSpeed() {
        return this.bladeSpeed;
    }

    //RPM
    setRPM(maxMaterialValue) {
        this.rpm = this.getBladeSpeed()*1000/(Number(this.getBlade(Number(this.getMaterialDiameter())))*3.14);
    }

    getRPM () {
        return Math.ceil(this.rpm);
    }

    //BRT
    setBRT() {
        this.brt = this.masterBarLength-(80+this.getTrim()); //50.00
    }

    getBRT() {
        return this.brt;
    }

    //PiecesPerBar
    setPiecesPerBar(cutLength,bladeKerf) {
        var addition = cutLength+bladeKerf;
        this.piecesPerbar = Math.floor(this.getBRT()/(addition));
    }

    getPiecesPerBar() {
        return this.piecesPerbar;
    }

    //Total Bars Needed
    setTotalBarsNeeded () {
        this.totalBarsNeed = 1000000/ Math.floor(Number(this.getPiecesPerBar()));
    }

    getTotalBarsNeeded () {
        return Number(this.totalBarsNeed).toFixed(2);
    }

    //Fill Ratio
    setFillRatio() {
        this.fillRatio = this.chipDensity/this.gulletCapacity;
    }

    getFillRatio() {
        return Number(this.fillRatio).toFixed(7);
    }

    //Time to Load Bar
    setTimeToLoadBar() {

    }

    getTimeToLoadBar() {
        return this.timeToLoadBar;
    }

    //Part Over 1000mm
    setPartOver1000mm(cutLength) {
        if(cutLength > 1000) {
            this.partOver1000mm = true;
        } else {
             this.partOver1000mm = false;
        }
    }

    getPartOver1000mm() {
        return this.partOver1000mm;
    }

    //Cut Time Per Bar
    setCutTimePerBar() {
        this.cutTimePerBar = (((Math.ceil(this.getCutTime())+4) + (this.partOver1000mm ? 120: 0))*this.getPiecesPerBar()+8)/60;
    }

    getCutTimePerBar() {
        return Number(this.cutTimePerBar).toFixed(2);
    }

    //Total Time
    setTotalTime() {
        
    }

    getTotalTime() {
        return this.totalTime;
    }

    //Uptime Efficiency
    setUptimeEfficiency() {

    }

    getUptimeEfficiency() {
        return this.uptimeEfficiency;
    }

    setCycleTime() {
        this.cycleTime = Number(this.getCutTimePerBar())*60/ this.getPiecesPerBar();
    }

    getCycleTime() {
        return this.cycleTime.toFixed(2);
    }

    //PCS Hour
    setPCSHour(uptimeEfficiency) {
        this.pcsHour = Math.ceil(((60*60)/Number(this.getCycleTime()))*uptimeEfficiency);
    }

    getPCSHour() {
        return this.pcsHour;
    }

    //Machine
    setMachine(maxdiameter) {
        var tempMachineTable = this.machineTable.slice().reverse();
        for(var i = 0; i<tempMachineTable.length ; i++) {
           if(maxdiameter <= tempMachineTable[i].maxBarDiameter) {
               this.machine = tempMachineTable[i].id;
           }
        }
    }

    getMachine() {
       return this.machine; 
    }

    getBlade(maxdiameter) {
       var tempMachineTable = this.machineTable;
        for(var i = 0; i<tempMachineTable.length ; i++) {
           if(maxdiameter <= tempMachineTable[i].maxBarDiameter) {
               return Number(tempMachineTable[i].bladeDiameter);
           }
        }
    }


     carbonTable = [
        {
           id: "c1",
           toothNumber : 60,
           toothLoad: 0.0606,
           pitch: 0,
           gullet:0,
           chipDensity: 0,
           fillRatio: 0
        },
         {
           id: "c2",
           toothNumber : 60,
           toothLoad: 0.0706,
           pitch: 0,
           gullet:0,
           chipDensity: 0,
           fillRatio: 0
        },
        {
           id: "c3",
           toothNumber : 60,
           toothLoad: 0.0806,
           pitch: 0,
           gullet:0,
           chipDensity: 0,
           fillRatio: 0
        },
        {
           id: "c4",
           toothNumber : 60,
           toothLoad: 0.0906,
           pitch: 0,
           gullet:0,
           chipDensity: 0,
           fillRatio: 0
        },
        {
           id: "c5",
           toothNumber : 80,
           toothLoad: 0.0708,
           pitch: 0,
           gullet:0,
           chipDensity: 0,
           fillRatio: 0
        },
        {
           id: "c6",
           toothNumber : 80,
           toothLoad: 0.0808,
           pitch: 0,
           gullet:0,
           chipDensity: 0,
           fillRatio: 0
        },
        {
           id: "c7",
           toothNumber : 80,
           toothLoad: 0.0908,
           pitch: 0,
           gullet:0,
           chipDensity: 0,
           fillRatio: 0
        },
        {
           id: "c8",
           toothNumber : 100,
           toothLoad: 0.0701,
           pitch: 0,
           gullet:0,
           chipDensity: 0,
           fillRatio: 0
        },
        {
           id: "c9",
           toothNumber : 100,
           toothLoad: 0.0801,
           pitch: 0,
           gullet:0,
           chipDensity: 0,
           fillRatio: 0
        },
        {
           id: "c10",
           toothNumber : 100,
           toothLoad: 0.0901,
           pitch: 0,
           gullet:0,
           chipDensity: 0,
           fillRatio: 0
        }
    ]

     machineTable = [
        {
           id: "CSNC-50",
           bladeDiameter : 250,
           maxBarDiameter: 50
        },
        {
           id: "CSNC-80",
           bladeDiameter : 285,
           maxBarDiameter: 80
        },
        {
           id: "CSNC-100",
           bladeDiameter : 360,
           maxBarDiameter: 101.6
        },
        {
           id: "CSNC-125",
           bladeDiameter : 420,
           maxBarDiameter: 127
        },
        {
           id: "CSNC-150",
           bladeDiameter : 460,
           maxBarDiameter: 152
        },
        {
           id: "CSNC-175",
           bladeDiameter : 560,
           maxBarDiameter: 175
        }
     ]
   

    populateTable(maxMaterialValue) {
        var i = 0;
        while ( i < this.carbonTable.length ) {
            var tempToothNumber = this.carbonTable[i].toothNumber;
            var tempToothLoad = this.carbonTable[i].toothLoad;
            this.setPitch(tempToothNumber,maxMaterialValue);
            this.setGulletCapacity();
            this.setChipDensity(tempToothLoad);
            this.setFillRatio()
            this.carbonTable[i].pitch = this.getPitch();
            this.carbonTable[i].gullet = this.getGulletCapacity();
            this.carbonTable[i].chipDensity = this.getChipDensity();
            this.carbonTable[i].fillRatio = Number(this.getFillRatio());
            i++;
        }
    }

    populateGeneralObject(selectedOption) {
        selectedOption = Number(selectedOption);
        var tempCalc = {            
           id: "generic",
           toothNumber : 0,
           toothLoad: 0.0,
           pitch: 0,
           gullet:0,
           chipDensity: 0,
           fillRatio: 0
        }
        
        var tempToothLoad;

        if(selectedOption == 2) {
            tempToothLoad = .0901//.07000;
        } else if(selectedOption == 3 || selectedOption == 4 || selectedOption == 6) {
            tempToothLoad = .0901//.05;
        } else if(selectedOption === 5) {
            tempToothLoad = .0901//.06
        } 
        
        this.setPitch(60,this.getMaterialDiameter());
        this.setGulletCapacity();
        this.setChipDensity(tempToothLoad);
        this.setFillRatio();
        tempCalc.pitch = this.getPitch();
        tempCalc.gullet = this.getGulletCapacity();
        tempCalc.chipDensity = this.getChipDensity();
        tempCalc.fillRatio = Number(this.getFillRatio());
        tempCalc.toothLoad = tempToothLoad;
        tempCalc.toothNumber = 100;
        return tempCalc;
    }
    getCarbonRow() {
       var reverseCarbonTable = this.carbonTable;
       return reverseCarbonTable.slice().reverse().find(item => item.fillRatio < .101);
    }

    //Variables from input Fields
    setDiameter(diameter) {
        this.diameter = diameter;
    }

    getDiameter() {
        return this.diameter;
    }

    setMaterialDiameter(materialDiameter) {
        this.materialDiameter = materialDiameter;
    }

    getMaterialDiameter() {
        return this.materialDiameter;
    }

    setTrim(trim) {
        this.trim = trim;
    }

    getTrim() {
        return this.trim;
    }

    setMasterBarLength(masterBarLength) {
        this.masterBarLength = masterBarLength;
    }

    getMasterBarLength() {
        return this.masterBarLength;
    }

    setRatePerHour(rph) {
        this.uptime = Number(rph)/100;
    }

    getRatePerHour() {
        return this.uptime;
    }

    getToolsValue () {
        return this.toolsValue;
    }

    setToolsValue(toolsValue) {
        this.toolsValue = toolsValue;
    }
}

//Variables done
//Test2