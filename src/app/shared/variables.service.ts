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
    partOver1000mm: number;
    cutTimePerBar:number;
    totalTime: number;
    cycleTime: number;
    uptimeEfficiency: number;
    pcsHour: number;
    machine: number;

    //Variables from input Fields
    materialDiameter: number;
    diameter: number;
    cutLength: number;
    masterBarLength:number;
    materialGrade: string;

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
    setPitch(toothNumber:number) {
        this.pitch = (this.getDiameter()*3.14)/toothNumber;
    }

    getPitch() {
        return this.pitch;
    }

    //Gullet Capacity
    setGulletCapacity() {
        this.gulletCapacity = 0.25*3.14*(this.pitch)/2*(this.pitch/2);
    }

    getGulletCapacity() {
        return this.gulletCapacity;
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
    setCutTime() {
        this.cutTime = (this.materialDiameter*60)/(this.toothNumber*this.chipLoad)*(this.mm/this.toothNumber)*(this.rpm);
    }

    getCutTime() {
        return this.cutTime;
    }

    //BladeSpeed
    setBladeSpeed(){
        //This reference Material Grade table
    }

    getBladeSpeed() {
        return this.bladeSpeed;
    }

    //RPM
    setRPM() {
        this.rpm = this.bladeSpeed*1000/(this.diameter*3.14);
    }

    getRPM () {
        return this.rpm;
    }

    //BRT
    setBRT() {
        this.brt = this.masterBarLength-(this.remnantLength+this.trim);
    }

    getBRT() {
        return this.brt;
    }

    //PiecesPerBar
    setPiecesPerBar() {
        this.piecesPerbar = this.masterBarLength-(this.remnantLength+this.remnantLength)/(this.cutLength+this.bladeSpeed*(this.mm/25.4));
    }

    getPiecesPerBar() {
        return this.piecesPerbar;
    }

    //Total Bars Needed
    setTotalBarsNeeded () {
        this.totalBarsNeed = this.totalPieces/this.piecesPerbar;
    }

    getTotalBarsNeeded () {
        return this.totalBarsNeed;
    }

    //Fill Ratio
    setFillRatio() {
        this.fillRatio = this.chipDensity/this.gulletCapacity;
    }

    getFillRatio() {
        return this.fillRatio;
    }

    //Tooth Load

    setToothLoad() {
        
    }

    getToothLoad() {
        return this.toothLoad;
    }

    //Time to Load Bar
    setTimeToLoadBar() {

    }

    getTimeToLoadBar() {
        return this.timeToLoadBar;
    }

    //Net Cycle Time
    setNetCycleTime() {
        
    }

    getNetCycleTime() {
        return this.netCycleTime;
    }

    //Part Over 1000mm
    setPartOver1000mm() {
        
    }

    getPartOver1000mm() {
        return this.partOver1000mm;
    }

    //Cut Time Per Bar
    setCutTimePerBar() {
        this.cutTimePerBar = ((this.cutTime+this.netCycleTime+this.partOver1000mm)*this.piecesPerbar);
    }

    getCutTimePerBar() {
        return this.cutTimePerBar;
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

    //PCS Hour
    setPCSHour() {
        this.pcsHour = ((3600)/this.cycleTime)*this.uptimeEfficiency //CONVERT TO DECIMAL
    }

    getPCSHour() {
        return this.pcsHour;
    }

    //Machine

    setMachine() {
        
    }

    getMachine() {
        return this.machine;
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

    populateTable() {
        for(var i = 0; i<this.carbonTable.length;i++) {
            var tempToothNumber = this.carbonTable[i].toothNumber;
            var tempToothLoad = this.carbonTable[i].toothLoad;
            this.setPitch(tempToothNumber);
            this.setGulletCapacity();
            this.setChipDensity(tempToothLoad);
            this.setFillRatio()
            this.carbonTable[i].pitch = this.getPitch();
            this.carbonTable[i].gullet = this.getGulletCapacity();
            this.carbonTable[i].chipDensity = this.getChipDensity();
            this.carbonTable[i].fillRatio = this.getFillRatio();
        }
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







}