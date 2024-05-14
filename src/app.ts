class Gyepes {
    diameterInput: HTMLInputElement | null;
    areaInput: HTMLInputElement | null;
    costInput: HTMLInputElement | null;
    calcButton: HTMLElement | null;
    area: number;
    cost: number;
    constructor() {
        this.startBind();
        this.startEventHander();
    }
    startBind() {
        this.diameterInput = document.querySelector('#diameter');
        this.areaInput = document.querySelector('#area');
        this.costInput = document.querySelector('#cost');
        this.calcButton = document.querySelector('#calcButton');
    }
    startEventHander() {
        this.calcButton?.addEventListener('click', () => {
            this.startCalculation();
        });
    }
    startCalculation() {
        if(this.diameterInput) {
            const diameter = Number(this.diameterInput.value);
            const radius = diameter / 2;
            this.area = this.calcArea(radius) / 2;
            this.cost = this.calcHalfCost(this.area);
            this.rederResult();            
        }
    }
    calcArea(radius: number):number {
        return Math.pow(radius, 2) * Math.PI;
    }
    calcHalfCost(fullArea:number):number {
        return 2500 * (fullArea/2)
    }
    rederResult() {
        if(this.areaInput) {
            this.areaInput.value = String(this.area);
        }
        if(this.costInput) {
            this.costInput.value = String(this.cost);
        }
    }
}

new Gyepes();