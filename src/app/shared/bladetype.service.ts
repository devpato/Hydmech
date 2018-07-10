import { Injectable } from '@angular/core';

@Injectable()
export class BladeTypeService {
    bladeType: string;
    bladeTypeSelected : any
    stockLengthValue : number
    cutLengthValue : number
    totalCutsValue: number 
    widthValue: number
    selectedItem: any
    
    setBladeType(bladeType) {
        this.bladeType = bladeType;
    }
    
    getBladeType() {
       return this.bladeType;
    }

    setBladeTypeSelected(bladeTypeSelected : any) {
        this.bladeTypeSelected = bladeTypeSelected;
    }

    getBladeTypeSelected() {
        return this.bladeTypeSelected;
    }

    setStockLengthValue(stockLengthValue) {
        this.stockLengthValue = stockLengthValue;
    }

    getStockLengthValue() {
        return this.stockLengthValue;
    }

    setCutLengthValue(cutLengthValue) {
        this.cutLengthValue = cutLengthValue;
    }

    getCutLengthValue() {
        return this.cutLengthValue;
    }

    setTotalCutsValue(totalCutsValue) {
        this.totalCutsValue = totalCutsValue;
    }

    getTotalCutsValue() {
        return this.totalCutsValue;
    }

    setWidthValue(widthValue) {
        this.widthValue = widthValue;
    }

    getWidthValue() {
        return this.widthValue;
    }

     setSelectedItem(selectedItem) {
        this.selectedItem = selectedItem;
    }

    getSelectedItem() {
        return this.selectedItem;
    }

}