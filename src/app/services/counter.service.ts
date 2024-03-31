export class CounterService {
    inactiveToActiveCount = 0;
    activeToInactiveCount = 0;

    increaseI2A() {
        this.inactiveToActiveCount++;
        console.log(`Inactive to Active: ${this.inactiveToActiveCount}`)
    }

    increaseA2I() {
        this.activeToInactiveCount++;
        console.log(`Active to Inactive: ${this.activeToInactiveCount}`)
    }
}

